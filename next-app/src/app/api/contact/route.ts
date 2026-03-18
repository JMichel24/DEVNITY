import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, projectType, description } = await req.json();

    if (!name || !email || !projectType || !description) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'DEVNITY Contact <onboarding@resend.dev>',
      to: ['devnity.4@gmail.com'],
      subject: `NUEVO PROYECTO DEVNITY: ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #050110; color: #ffffff; padding: 40px; border-radius: 10px; border: 1px solid #1E40AF;">
          <h2 style="color: #00D4FF; border-bottom: 2px solid #4F1BFF; padding-bottom: 10px;">Nuevo Lead de DEVNITY</h2>
          <p style="font-size: 16px;">Has recibido una nueva solicitud de contacto desde la landing page.</p>
          
          <div style="background-color: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #00D4FF;">${email}</a></p>
            <p><strong>Proyecto/Interés:</strong> <span style="color: #4F1BFF; font-weight: bold;">${projectType}</span></p>
            <p><strong>Descripción:</strong></p>
            <p style="font-style: italic; color: #A0AEC0;">"${description}"</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #4F1BFF; text-align: center;">
            © 2026 DEVNITY | Inteligencia Artificial y Calidad Web
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email enviado con éxito', data });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
