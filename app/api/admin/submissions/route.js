import { connectToDatabase } from '@/app/lib/mongodb';
import ContactSubmission from '@/app/models/ContactSubmission';
import { verifyToken, getTokenFromRequest } from '@/app/lib/auth';

export async function GET(req) {
  const token = getTokenFromRequest(req);
  if (!verifyToken(token)) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  await connectToDatabase();
  const submissions = await ContactSubmission.find().sort({ createdAt: -1 });
  return Response.json(submissions);
}