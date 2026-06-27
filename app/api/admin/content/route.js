import { connectToDatabase } from '@/app/lib/mongodb';
import { verifyToken, getTokenFromRequest } from '@/app/lib/auth';
import Service from '@/app/models/Service';
import Work from '@/app/models/Work';
import FAQ from '@/app/models/FAQ';

const modelMap = { services: Service, works: Work, faqs: FAQ };

export async function GET(req) {
  const token = getTokenFromRequest(req);
  if (!verifyToken(token)) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const url = new URL(req.url);
  const type = url.searchParams.get('type') || 'services';
  const Model = modelMap[type];
  if (!Model) return Response.json({ error: 'Invalid type' }, { status: 400 });

  await connectToDatabase();
  const items = await Model.find().sort({ order: 1 });
  return Response.json(items);
}

export async function POST(req) {
  const token = getTokenFromRequest(req);
  if (!verifyToken(token)) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const { type, item } = await req.json();
  const Model = modelMap[type];
  if (!Model) return Response.json({ error: 'Invalid type' }, { status: 400 });

  await connectToDatabase();
  const newItem = new Model(item);
  await newItem.save();
  return Response.json(newItem);
}

export async function PUT(req) {
  const token = getTokenFromRequest(req);
  if (!verifyToken(token)) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const { type, id, item } = await req.json();
  const Model = modelMap[type];
  if (!Model) return Response.json({ error: 'Invalid type' }, { status: 400 });

  await connectToDatabase();
  const updated = await Model.findByIdAndUpdate(id, item, { new: true });
  return Response.json(updated);
}

export async function DELETE(req) {
  const token = getTokenFromRequest(req);
  if (!verifyToken(token)) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const url = new URL(req.url);
  const type = url.searchParams.get('type');
  const id = url.searchParams.get('id');
  const Model = modelMap[type];
  if (!Model) return Response.json({ error: 'Invalid type' }, { status: 400 });

  await connectToDatabase();
  await Model.findByIdAndDelete(id);
  return Response.json({ success: true });
}