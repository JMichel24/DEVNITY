export default async function handler(req, res) {
  // Solo permitir peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, email, projectType, description } = req.body;

  // Validación básica
  if (!name || !email || !description) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'devnity.4@gmail.com',
        subject: `NUEVO PROYECTO DEVNITY: ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #050110; background-color: #f4f4f4;">
            <div style="background-color: #050110; padding: 20px; border-radius: 10px; border: 1px solid #00D4FF;">
              <h1 style="color: #00D4FF; margin-top: 0;">NUEVO PROYECTO DEVNITY</h1>
              <p style="color: #ffffff;"><strong>Cliente:</strong> ${name}</p>
              <p style="color: #ffffff;"><strong>Email:</strong> ${email}</p>
              <p style="color: #ffffff;"><strong>Proyecto:</strong> ${projectType}</p>
              <div style="background-color: rgba(255,255,255,0.1); padding: 15px; border-radius: 5px; color: #ffffff;">
                <strong>Descripción:</strong><br/>
                ${description}
              </div>
              <p style="color: #A0AEC0; font-size: 12px; margin-top: 20px;">
                Este correo fue enviado desde el formulario de contacto de DEVNITY.
              </p>
            </div>
          </div>
        `
      })
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Correo enviado' });
    } else {
      console.error('Error de Resend:', data);
      return res.status(500).json({ success: false, error: data });
    }
  } catch (error) {
    console.error('Error en el servidor:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
