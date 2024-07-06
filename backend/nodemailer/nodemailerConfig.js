const nodemailer = require("nodemailer");
require("dotenv").config();


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const suscribeEmail = async (name, email) => {
  try {
    await transporter.sendMail({
      from: `"News Portal 👻" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Bienvenido a News Portal ✔",
      text: `¡Bienvenido a News Portal!\n\n¡Hola ${name}!\n\n¡Gracias por unirte a nuestra comunidad en News Portal! Estamos emocionados de tenerte con nosotros mientras exploras noticias de calidad, actualizaciones en tiempo real y análisis profundos de los eventos que impactan nuestro mundo.\n\nCon tu suscripción, tendrás acceso ilimitado a nuestro contenido exclusivo y a las historias que importan. Prepárate para descubrir una perspectiva única sobre los acontecimientos más relevantes de hoy.\n\nNo dudes en explorar todas las secciones de nuestro portal y a participar activamente en nuestras discusiones. ¡Tu opinión es importante para nosotros!\n\n¡Bienvenido a bordo y que disfrutes de la experiencia News Portal!\n\n¡Saludos!\n\nEl equipo de News Portal`,
    });
  } catch (error) {
    console.error(error);
  }
};

const sendContactEmail = async (email, message) => {
  try {
    const info = await transporter.sendMail({
      from: `"${email}" <${process.env.EMAIL_USER}>`, // Combine the sender's email with your own
      to: process.env.EMAIL_USER,
      subject: "Nuevo mensaje de contacto",
      text: `Mensaje de: ${email}\n\n${message}`, // Include sender's email in the message body
    });
    console.log("Correo electrónico enviado:", info.messageId);
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    throw error;
  }
};

module.exports = { suscribeEmail, sendContactEmail };
