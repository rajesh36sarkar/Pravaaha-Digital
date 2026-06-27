'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await axios.get('/api/admin/submissions', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSubmissions(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchSubmissions();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Contact Submissions</h1>
      <div className="space-y-3">
        {submissions.length === 0 ? (
          <p className="text-white/40 text-sm">No submissions yet.</p>
        ) : (
          submissions.map((sub) => (
            <div key={sub._id} className="admin-card">
              <div className="flex justify-between text-sm">
                <span className="font-semibold">{sub.name}</span>
                <span className="text-white/30 text-xs">{new Date(sub.createdAt).toLocaleString()}</span>
              </div>
              <div className="text-white/40 text-xs">{sub.email}</div>
              <p className="mt-2 text-sm">{sub.message}</p>
              {sub.phone && <div className="text-white/30 text-xs mt-1">📞 {sub.phone}</div>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}