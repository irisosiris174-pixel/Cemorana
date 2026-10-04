import { Resend } from 'resend';

// Basic rate-limiting in memory (for serverless instances)
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  // Anti-spam & rate limiting check by client IP
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const now = Date.now();
  const userRate = rateLimitMap.get(clientIp);

  if (userRate) {
    if (now - userRate.firstRequest < LIMIT_WINDOW_MS) {
      if (userRate.count >= MAX_REQUESTS_PER_WINDOW) {
        return res.status(429).json({
          success: false,
          error: 'Too many credit requests. Please wait a minute before trying again.',
        });
      }
      userRate.count += 1;
    } else {
      rateLimitMap.set(clientIp, { count: 1, firstRequest: now });
    }
  } else {
    rateLimitMap.set(clientIp, { count: 1, firstRequest: now });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    country,
    amount,
    duration,
    purpose,
    employmentStatus,
    monthlyIncome,
    monthlyExpenses,
    language,
  } = req.body || {};

  // Server-side validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !amount ||
    !duration ||
    !monthlyIncome
  ) {
    return res.status(400).json({
      success: false,
      error: 'Please fill in all mandatory fields.',
    });
  }

  const parsedAmount = Number(amount);
  if (isNaN(parsedAmount) || parsedAmount < 3000) {
    return res.status(400).json({
      success: false,
      error: 'Minimum loan amount is €3,000.',
    });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn('RESEND_API_KEY missing in environment variables.');
    // Simulated successful transmission when testing environment without key configured
    return res.status(200).json({
      success: true,
      message: 'Request received (simulated - RESEND_API_KEY not configured).',
    });
  }

  try {
    const resend = new Resend(resendApiKey);

    const emailContent = `
<h2>Nouvelle demande de crédit Cemorana (cemorana.com)</h2>
<p><strong>Langue de la demande :</strong> ${language || 'de'}</p>
<hr/>
<h3>1. Informations Personnelles</h3>
<ul>
  <li><strong>Nom complet :</strong> ${firstName} ${lastName}</li>
  <li><strong>E-mail :</strong> ${email}</li>
  <li><strong>Téléphone :</strong> ${phone}</li>
  <li><strong>Pays de résidence :</strong> ${country}</li>
</ul>

<h3>2. Détails du Crédit</h3>
<ul>
  <li><strong>Montant souhaité :</strong> ${amount} €</li>
  <li><strong>Durée :</strong> ${duration} mois</li>
  <li><strong>Objet :</strong> ${purpose}</li>
  <li><strong>Taux proposé :</strong> 3,00% fixe</li>
</ul>

<h3>3. Situation Financière</h3>
<ul>
  <li><strong>Statut professionnel :</strong> ${employmentStatus}</li>
  <li><strong>Revenu mensuel net :</strong> ${monthlyIncome} €</li>
  <li><strong>Charges mensuelles :</strong> ${monthlyExpenses} €</li>
</ul>
<hr/>
<p><em>Cette demande a été transmise directement via le formulaire web cemorana.com sans stockage en base de données.</em></p>
    `;

    const data = await resend.emails.send({
      from: 'contact@cemorana.com',
      to: ['contact@cemorana.com'],
      subject: `[Demande de Crédit ${amount}€] ${firstName} ${lastName}`,
      html: emailContent,
      replyTo: email,
    });

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error('Resend email error:', error);
    return res.status(500).json({
      success: false,
      error: error?.message || 'Failed to send notification email.',
    });
  }
}
