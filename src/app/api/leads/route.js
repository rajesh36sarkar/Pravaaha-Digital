import { NextResponse } from 'next/server';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/clientApp';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Basic Validation
    if (!name || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Save to Firestore
    const docRef = await addDoc(collection(db, 'leads'), {
      name,
      phone,
      email: email || '',
      message,
      status: 'new',
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true, id: docRef.id }, { status: 201 });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}