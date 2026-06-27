import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET;
export function signToken(payload) { return jwt.sign(payload, SECRET, { expiresIn: '7d' }); }
export function verifyToken(token) { try { return jwt.verify(token, SECRET); } catch { return null; } }
export function getTokenFromRequest(req) {
  const header = req.headers.authorization;
  if (header && header.startsWith('Bearer ')) return header.split(' ')[1];
  return null;
}