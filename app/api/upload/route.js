import { v2 as cloudinary } from 'cloudinary';
import { verifyToken, getTokenFromRequest } from '@/app/lib/auth';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const token = getTokenFromRequest(req);
    if (!verifyToken(token)) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('image');
    if (!file) {
      return Response.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString('base64');
    const dataURI = `data:${file.type};base64,${base64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'pravaaha/works',
    });

    return Response.json({ secure_url: result.secure_url, public_id: result.public_id });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Upload failed' }, { status: 500 });
  }
}