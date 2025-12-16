import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

// ============================================================
// Rate Limiting (in-memory, resets on cold start)
// ============================================================
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  // Reset if window expired
  if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  // Increment and check
  record.count++;
  if (record.count > RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  return false;
}

// ============================================================
// Email Validation
// ============================================================
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ============================================================
// Main Handler
// ============================================================
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Get client IP
  const forwarded = req.headers["x-forwarded-for"];
  const ip = typeof forwarded === "string"
    ? forwarded.split(",")[0].trim()
    : req.socket?.remoteAddress || "unknown";

  // Check rate limit
  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: "Trop de requêtes. Veuillez réessayer dans quelques minutes."
    });
  }

  try {
    const body = req.body;

    // --------------------------------------------------------
    // Honeypot check (if "website" field is filled, it's a bot)
    // --------------------------------------------------------
    if (body.website && body.website.trim() !== "") {
      // Silently reject but return success to not alert bots
      return res.status(200).json({ success: true });
    }

    // --------------------------------------------------------
    // Validate required fields
    // --------------------------------------------------------
    const { name, email, company, phone, message, plan, teamSize } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return res.status(400).json({ error: "Le nom est requis (min. 2 caractères)." });
    }

    if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
      return res.status(400).json({ error: "Une adresse email valide est requise." });
    }

    // --------------------------------------------------------
    // Prepare email content
    // --------------------------------------------------------
    const timestamp = new Date().toLocaleString("fr-FR", {
      timeZone: "Europe/Paris",
      dateStyle: "full",
      timeStyle: "medium",
    });
    const userAgent = req.headers["user-agent"] || "Non spécifié";

    const subject = `[DEMO] Nouvelle demande - ${company?.trim() || name.trim()}`;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #f97316, #0d9488); padding: 20px; border-radius: 8px 8px 0 0; }
    .header h1 { color: white; margin: 0; font-size: 24px; }
    .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 16px; }
    .field-label { font-weight: bold; color: #374151; font-size: 14px; }
    .field-value { color: #111827; margin-top: 4px; }
    .meta { margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nouvelle demande de démo</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Nom complet</div>
        <div class="field-value">${escapeHtml(name.trim())}</div>
      </div>

      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></div>
      </div>

      ${company ? `
      <div class="field">
        <div class="field-label">Entreprise</div>
        <div class="field-value">${escapeHtml(company.trim())}</div>
      </div>
      ` : ""}

      ${phone ? `
      <div class="field">
        <div class="field-label">Téléphone</div>
        <div class="field-value"><a href="tel:${escapeHtml(phone.trim())}">${escapeHtml(phone.trim())}</a></div>
      </div>
      ` : ""}

      ${teamSize ? `
      <div class="field">
        <div class="field-label">Taille de l'équipe</div>
        <div class="field-value">${escapeHtml(teamSize)}</div>
      </div>
      ` : ""}

      ${plan ? `
      <div class="field">
        <div class="field-label">Plan sélectionné</div>
        <div class="field-value">${escapeHtml(plan)}</div>
      </div>
      ` : ""}

      ${message ? `
      <div class="field">
        <div class="field-label">Message</div>
        <div class="field-value">${escapeHtml(message.trim()).replace(/\n/g, "<br>")}</div>
      </div>
      ` : ""}

      <div class="meta">
        <p><strong>Date:</strong> ${timestamp}</p>
        <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
        <p><strong>User-Agent:</strong> ${escapeHtml(userAgent)}</p>
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();

    const textBody = `
NOUVELLE DEMANDE DE DEMO
========================

Nom: ${name.trim()}
Email: ${email.trim()}
${company ? `Entreprise: ${company.trim()}` : ""}
${phone ? `Téléphone: ${phone.trim()}` : ""}
${teamSize ? `Taille équipe: ${teamSize}` : ""}
${plan ? `Plan: ${plan}` : ""}
${message ? `Message: ${message.trim()}` : ""}

---
Date: ${timestamp}
IP: ${ip}
User-Agent: ${userAgent}
    `.trim();

    // --------------------------------------------------------
    // Send email via SMTP IONOS
    // --------------------------------------------------------
    const transporter = nodemailer.createTransport({
      host: process.env.IONOS_SMTP_HOST || "smtp.ionos.fr",
      port: parseInt(process.env.IONOS_SMTP_PORT || "587", 10),
      secure: false, // STARTTLS
      auth: {
        user: process.env.IONOS_SMTP_USER,
        pass: process.env.IONOS_SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Provia BASE" <${process.env.IONOS_SMTP_USER}>`,
      to: process.env.DEMO_TO_EMAIL || process.env.IONOS_SMTP_USER,
      replyTo: email.trim(),
      subject,
      text: textBody,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending demo request email:", error);
    return res.status(500).json({
      error: "Une erreur est survenue. Veuillez réessayer ou nous contacter directement."
    });
  }
}

// ============================================================
// Utilities
// ============================================================
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
