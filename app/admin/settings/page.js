'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useApp } from '@/app/context/AppContext';

export default function AdminSettings() {
  const { siteContent, setSiteContent } = useApp();
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await axios.get('/api/admin/settings', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSettings(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const saveSettings = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put('/api/admin/settings', settings, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Settings saved!');
      setSiteContent(prev => ({ ...prev, settings }));
    } catch (error) {
      alert('Save failed');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Business Settings</h1>
      <div className="admin-card">
        <label className="text-sm text-white/50 block mb-1">Business Name</label>
        <input
          value={settings.businessName || ''}
          onChange={(e) => handleChange('businessName', e.target.value)}
          className="text-sm bg-transparent border border-white/10 rounded-xl px-4 py-2 w-full focus:border-pink-500/50"
        />
      </div>
      <div className="admin-card">
        <label className="text-sm text-white/50 block mb-1">Email</label>
        <input
          value={settings.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          className="text-sm bg-transparent border border-white/10 rounded-xl px-4 py-2 w-full focus:border-pink-500/50"
        />
      </div>
      <div className="admin-card">
        <label className="text-sm text-white/50 block mb-1">Phone</label>
        <input
          value={settings.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          className="text-sm bg-transparent border border-white/10 rounded-xl px-4 py-2 w-full focus:border-pink-500/50"
        />
      </div>
      <div className="admin-card">
        <label className="text-sm text-white/50 block mb-1">Address</label>
        <input
          value={settings.address || ''}
          onChange={(e) => handleChange('address', e.target.value)}
          className="text-sm bg-transparent border border-white/10 rounded-xl px-4 py-2 w-full focus:border-pink-500/50"
        />
      </div>
      <button onClick={saveSettings} className="btn-primary px-6 py-2.5 rounded-xl text-white text-sm font-semibold">
        💾 Save Settings
      </button>
    </div>
  );
}