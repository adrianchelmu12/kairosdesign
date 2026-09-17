import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validare simplă a câmpurilor
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Toate câmpurile (nume, email, mesaj) sunt obligatorii." },
        { status: 400 }
      );
    }

    // Validare format email de bază
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresa de email introdusă nu este validă." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "office@kairosdesign.ro";
    const senderEmail =
      process.env.CONTACT_FROM_EMAIL || "Kairos Website <onboarding@resend.dev>";

    // Mod demonstrativ când cheia nu este încă configurată în .env.local
    if (!apiKey) {
      console.warn(
        "⚠️ [Kairos Contact API] RESEND_API_KEY nu este setat în .env.local! Trimitere simulată:",
        { name, email, message }
      );
      return NextResponse.json({
        success: true,
        simulated: true,
        message:
          "Mesaj recepționat în mod demonstrativ. Configurează RESEND_API_KEY în .env.local pentru trimitere reală.",
      });
    }

    const resend = new Resend(apiKey);

    // Trimitere efectivă prin Resend
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: receiverEmail,
      replyTo: email,
      subject: `Solicitare nouă de contact: ${name}`,
      text: `Nume / Companie: ${name}\nEmail: ${email}\n\nMesaj:\n${message}\n\n--\nTrimis automat de pe site-ul Kairos.`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #1f2421; color: #f3f7f4; margin: 0; padding: 30px 20px; }
              .container { max-width: 600px; margin: 0 auto; background: #262c28; border: 1px solid rgba(73, 160, 120, 0.3); border-radius: 16px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
              .header { border-bottom: 1px solid rgba(73, 160, 120, 0.2); padding-bottom: 20px; margin-bottom: 24px; }
              .title { font-size: 22px; font-weight: 700; color: #f3f7f4; margin: 0; }
              .badge { display: inline-block; background: rgba(73, 160, 120, 0.15); color: #49a078; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px; margin-top: 8px; }
              .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #9cc5a1; font-weight: 600; margin-bottom: 4px; }
              .field-value { font-size: 15px; color: #f3f7f4; margin-bottom: 20px; }
              .field-value a { color: #49a078; text-decoration: none; }
              .message-box { background: #1f2421; border-left: 3px solid #49a078; padding: 16px; border-radius: 8px; font-size: 15px; line-height: 1.6; color: #f3f7f4; white-space: pre-wrap; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(73, 160, 120, 0.15); font-size: 12px; color: #9cc5a1; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="badge">Kairos // Contact Lead</div>
                <h1 class="title" style="margin-top: 10px;">Mesaj nou primit pe site</h1>
              </div>
              
              <div class="field-label">Nume / Numele Companiei</div>
              <div class="field-value"><strong>${name}</strong></div>

              <div class="field-label">Adresă de Email</div>
              <div class="field-value"><a href="mailto:${email}">${email}</a></div>

              <div class="field-label">Mesaj</div>
              <div class="message-box">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>

              <div class="footer">
                Poți răspunde direct la acest email pentru a-i scrie lui ${name}.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Eroare Resend:", error);
      let friendlyError = error.message || "A apărut o problemă la expedierea emailului.";
      if (error.message && error.message.includes("You can only send testing emails to your own email address")) {
        friendlyError =
          "Contul de Resend este în modul Sandbox: mesajele pot fi trimise doar către adresa contului tău Resend (adrianchelmu12@gmail.com). Pentru livrare la office@kairosdesign.ro, verifică domeniul kairosdesign.ro în panoul resend.com/domains.";
      }
      return NextResponse.json({ error: friendlyError }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: unknown) {
    console.error("Eroare server contact API:", err);
    return NextResponse.json(
      { error: "A intervenit o eroare neașteptată la trimiterea mesajului." },
      { status: 500 }
    );
  }
}

