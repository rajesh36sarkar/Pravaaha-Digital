import { connectToDatabase } from '@/app/lib/mongodb';
import Setting from '@/app/models/Setting';
import { verifyToken, getTokenFromRequest } from '@/app/lib/auth';

export async function GET(req) {
  const token = getTokenFromRequest(req);
  if (!verifyToken(token)) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  await connectToDatabase();
  const settings = await Setting.findOne({ key: 'business' });
  return Response.json(settings ? settings.value : {});
}

export async function PUT(req) {
  const token = getTokenFromRequest(req);
  if (!verifyToken(token)) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  await connectToDatabase();
  await Setting.findOneAndUpdate(
    { key: 'business' },
    { key: 'business', value: body },
    { upsert: true, new: true }
  );
  return Response.json({ success: true });
}