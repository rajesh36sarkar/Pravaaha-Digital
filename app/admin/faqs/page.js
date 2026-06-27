'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useApp } from '@/app/context/AppContext';

export default function AdminFaqs() {
  const { siteContent, setSiteContent } = useApp();
  const [loading, setLoading] = useState(true);

  const fetchFaqs = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await axios.get('/api/admin/content?type=faqs', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSiteContent(prev => ({ ...prev, faqs: res.data }));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => { fetchFaqs(); }, []);

  const updateFaq = async (id, field, value) => {
    const item = siteContent.faqs.find(f => f._id === id);
    if (!item) return;
    const updated = { ...item, [field]: value };
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put('/api/admin/content', { type: 'faqs', id, item: updated }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSiteContent(prev => ({
        ...prev,
        faqs: prev.faqs.map(f => f._id === id ? updated : f),
      }));
    } catch (error) {
      alert('Update failed');
    }
  };

  const deleteFaq = async (id) => {
    if (!confirm('Delete this FAQ?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`/api/admin/content?type=faqs&id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSiteContent(prev => ({
        ...prev,
        faqs: prev.faqs.filter(f => f._id !== id),
      }));
    } catch (error) {
      alert('Delete failed');
    }
  };

  const addFaq = async () => {
    const newItem = { q: 'New Question?', a: 'Answer here.' };
    try {
      const token = localStorage.getItem('adminToken');
      const res = await axios.post('/api/admin/content', { type: 'faqs', item: newItem }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSiteContent(prev => ({
        ...prev,
        faqs: [...prev.faqs, res.data],
      }));
    } catch (error) {
      alert('Add failed');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage FAQs</h1>
      <button onClick={addFaq} className="btn-primary px-5 py-2 rounded-xl text-white text-sm font-semibold mb-4">
        + Add FAQ
      </button>
      <div className="space-y-4">
        {siteContent.faqs.map((f) => (
          <div key={f._id} className="admin-card flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex-1 space-y-1 w-full">
              <input
                value={f.q}
                onChange={(e) => updateFaq(f._id, 'q', e.target.value)}
                className="text-sm font-semibold bg-transparent border-0 focus:ring-0 p-0 w-full"
              />
              <input
                value={f.a}
                onChange={(e) => updateFaq(f._id, 'a', e.target.value)}
                className="text-sm text-white/50 bg-transparent border-0 focus:ring-0 p-0 w-full"
              />
            </div>
            <button onClick={() => deleteFaq(f._id)} className="text-red-400/50 hover:text-red-400 text-sm">🗑</button>
          </div>
        ))}
      </div>
    </div>
  );
}