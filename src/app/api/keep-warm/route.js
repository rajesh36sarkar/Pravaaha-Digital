import { NextResponse } from 'next/server';

export async function GET() {
  // Just return a success response – this will wake up the serverless function
  return NextResponse.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString() 
  });
}