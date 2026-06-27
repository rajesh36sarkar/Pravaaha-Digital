import { signToken } from '@/app/lib/auth';

export async function POST(req) {
  const { password } = await req.json();
  if (password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: 'Invalid password' }, { status: 401 });
  }
  const token = signToken({ role: 'admin' });
  return Response.json({ token });
}