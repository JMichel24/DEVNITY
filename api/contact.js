import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, email, projectType, description } = req.body;

  if (!name || !email || !description) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'devnity.4@gmail.com', // Correo verificado por el usuario
      subject: 'NUEVO CLIENTE DEVNITY',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #050110; background-color: #f4f4f4;">
          <div style="background-color: #050110; padding: 20px; border-radius: 10px; border: 1px solid #00D4FF; color: white;">
            <h1 style="color: #00D4FF; margin-top: 0;">NUEVO CLIENTE DEVNITY</h1>
            <p><strong>Cliente:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Proyecto:</strong> ${projectType}</p>
            <div style="background-color: rgba(255,255,255,0.1); padding: 15px; border-radius: 5px;">
              <strong>Descripción:</strong><br/>
              ${description}
            </div>
            <p style="color: #A0AEC0; font-size: 12px; margin-top: 20px;">
              Este correo fue enviado desde el formulario de contacto de DEVNITY.
            </p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Error de Resend:', error);
      return res.status(500).json({ success: false, error });
    }

    return res.status(200).json({ success: true, message: 'Correo enviado' });

  } catch (error) {
    console.error('Error en el servidor:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
