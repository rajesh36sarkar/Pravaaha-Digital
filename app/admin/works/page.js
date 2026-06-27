'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useApp } from '@/app/context/AppContext';

export default function AdminWorks() {
  const { siteContent, setSiteContent } = useApp();
  const [loading, setLoading] = useState(true);

  const fetchWorks = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await axios.get('/api/admin/content?type=works', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSiteContent(prev => ({ ...prev, works: res.data }));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => { fetchWorks(); }, []);

  const updateWork = async (id, field, value) => {
    const item = siteContent.works.find(w => w._id === id);
    if (!item) return;
    const updated = { ...item, [field]: value };
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put('/api/admin/content', { type: 'works', id, item: updated }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSiteContent(prev => ({
        ...prev,
        works: prev.works.map(w => w._id === id ? updated : w),
      }));
    } catch (error) {
      alert('Update failed');
    }
  };

  const deleteWork = async (id) => {
    if (!confirm('Delete this work?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`/api/admin/content?type=works&id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSiteContent(prev => ({
        ...prev,
        works: prev.works.filter(w => w._id !== id),
      }));
    } catch (error) {
      alert('Delete failed');
    }
  };

  const addWork = async () => {
    const newItem = { title: 'New Project', category: 'General', status: 'progress', rating: 0, image: '' };
    try {
      const token = localStorage.getItem('adminToken');
      const res = await axios.post('/api/admin/content', { type: 'works', item: newItem }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSiteContent(prev => ({
        ...prev,
        works: [...prev.works, res.data],
      }));
    } catch (error) {
      alert('Add failed');
    }
  };

  if (loading) return <div>Loading...</div>;

  const statusOptions = ['completed', 'progress', 'coming'];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Works</h1>
      <button onClick={addWork} className="btn-primary px-5 py-2 rounded-xl text-white text-sm font-semibold mb-4">
        + Add Work
      </button>
      <div className="space-y-4">
        {siteContent.works.map((w) => (
          <div key={w._id} className="admin-card flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex-1 space-y-1 w-full">
              <input
                value={w.title}
                onChange={(e) => updateWork(w._id, 'title', e.target.value)}
                className="text-sm font-semibold bg-transparent border-0 focus:ring-0 p-0 w-full"
              />
              <input
                value={w.category}
                onChange={(e) => updateWork(w._id, 'category', e.target.value)}
                className="text-sm text-white/50 bg-transparent border-0 focus:ring-0 p-0 w-full"
              />
              <select
                value={w.status}
                onChange={(e) => updateWork(w._id, 'status', e.target.value)}
                className="text-sm bg-transparent border-0 focus:ring-0 p-0"
              >
                {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={w.rating}
                onChange={(e) => updateWork(w._id, 'rating', parseFloat(e.target.value) || 0)}
                className="text-sm bg-transparent border-0 focus:ring-0 p-0 w-20"
              />
            </div>
            <button onClick={() => deleteWork(w._id)} className="text-red-400/50 hover:text-red-400 text-sm">🗑</button>
          </div>
        ))}
      </div>
    </div>
  );
}