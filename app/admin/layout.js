'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/app/components/admin/AdminSidebar';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.replace('/');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return <div className="p-8 text-white">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-[#0a0a0f] text-white">
      <AdminSidebar />
      <div className="flex-1 p-6 overflow-y-auto">{children}</div>
    </div>
  );
}