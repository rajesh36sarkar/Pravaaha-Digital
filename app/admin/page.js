'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ services: 0, works: 0, submissions: 0 });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const fetchStats = async () => {
      try {
        const [services, works, submissions] = await Promise.all([
          axios.get('/api/admin/content?type=services', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('/api/admin/content?type=works', { headers: { Authorization: `Bearer ${token}` } }),
          axios.get('/api/admin/submissions', { headers: { Authorization: `Bearer ${token}` } }),
        ]);
        setStats({
          services: services.data.length,
          works: works.data.length,
          submissions: submissions.data.length,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <div className="text-4xl font-bold gradient-text">{stats.services}</div>
          <div className="text-white/50 text-sm">Services</div>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <div className="text-4xl font-bold gradient-text">{stats.works}</div>
          <div className="text-white/50 text-sm">Works</div>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <div className="text-4xl font-bold gradient-text">{stats.submissions}</div>
          <div className="text-white/50 text-sm">Submissions</div>
        </div>
      </div>
    </div>
  );
}