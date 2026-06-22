import { db } from './clientApp';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function addLead(leadData) {
  try {
    const docRef = await addDoc(collection(db, 'leads'), {
      ...leadData,
      createdAt: serverTimestamp(),
      status: 'new',
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding lead:', error);
    return { success: false, error: error.message };
  }
}