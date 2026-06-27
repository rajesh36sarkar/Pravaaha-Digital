import { connectToDatabase } from '@/app/lib/mongodb';
import ContactSubmission from '@/app/models/ContactSubmission';
import { sendEmail } from '@/app/lib/email';

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();
    if (!name || !email || !message) return Response.json({ error: 'Missing fields' }, { status: 400 });

    await connectToDatabase();
    const submission = new ContactSubmission({ name, email, phone, message });
    await submission.save();

    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `New inquiry from ${name}`,
      html: `<h2>New Contact</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}