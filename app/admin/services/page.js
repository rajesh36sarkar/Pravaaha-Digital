'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useApp } from '@/app/context/AppContext';

export default function AdminServices() {
  const { siteContent, setSiteContent } = useApp();
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await axios.get('/api/admin/content?type=services', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSiteContent(prev => ({ ...prev, services: res.data }));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => { fetchServices(); }, []);

  const updateService = async (id, field, value) => {
    const item = siteContent.services.find(s => s._id === id);
    if (!item) return;
    const updated = { ...item, [field]: value };
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put('/api/admin/content', { type: 'services', id, item: updated }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSiteContent(prev => ({
        ...prev,
        services: prev.services.map(s => s._id === id ? updated : s),
      }));
    } catch (error) {
      alert('Update failed');
    }
  };

  const deleteService = async (id) => {
    if (!confirm('Delete this service?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`/api/admin/content?type=services&id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSiteContent(prev => ({
        ...prev,
        services: prev.services.filter(s => s._id !== id),
      }));
    } catch (error) {
      alert('Delete failed');
    }
  };

  const addService = async () => {
    const newItem = { title: 'New Service', desc: 'Description', price: '₹0+', icon: '✨' };
    try {
      const token = localStorage.getItem('adminToken');
      const res = await axios.post('/api/admin/content', { type: 'services', item: newItem }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSiteContent(prev => ({
        ...prev,
        services: [...prev.services, res.data],
      }));
    } catch (error) {
      alert('Add failed');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Services</h1>
      <button onClick={addService} className="btn-primary px-5 py-2 rounded-xl text-white text-sm font-semibold mb-4">
        + Add Service
      </button>
      <div className="space-y-4">
        {siteContent.services.map((s) => (
          <div key={s._id} className="admin-card flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex-1 space-y-1 w-full">
              <input
                value={s.title}
                onChange={(e) => updateService(s._id, 'title', e.target.value)}
                className="text-sm font-semibold bg-transparent border-0 focus:ring-0 p-0 w-full"
              />
              <input
                value={s.desc}
                onChange={(e) => updateService(s._id, 'desc', e.target.value)}
                className="text-sm text-white/50 bg-transparent border-0 focus:ring-0 p-0 w-full"
              />
              <input
                value={s.price}
                onChange={(e) => updateService(s._id, 'price', e.target.value)}
                className="text-sm text-pink-400 bg-transparent border-0 focus:ring-0 p-0"
              />
            </div>
            <button onClick={() => deleteService(s._id)} className="text-red-400/50 hover:text-red-400 text-sm">🗑</button>
          </div>
        ))}
      </div>
    </div>
  );
}