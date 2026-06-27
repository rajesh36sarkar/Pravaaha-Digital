import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

export async function sendEmail({ to, subject, html }) {
  try {
    await transporter.sendMail({ from: `"Pravaaha" <${process.env.EMAIL_USER}>`, to, subject, html });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}