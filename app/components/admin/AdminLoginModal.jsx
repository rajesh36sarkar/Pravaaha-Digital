'use client';

import { useState } from 'react';
import { useApp } from '@/app/context/AppContext';

export default function AdminLoginModal({ onClose }) {
  const { loginAdmin } = useApp();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginAdmin(password);
    if (result.success) {
      onClose();
      setPassword('');
      setError('');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1a2e] p-8 rounded-3xl w-full max-w-sm border border-white/5"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center mb-2">Admin Login</h2>
        <p className="text-center text-white/40 text-sm mb-6">Enter your password</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-pink-500/50 outline-none"
        />
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        <button type="submit" className="btn-primary w-full py-3 rounded-2xl text-white font-semibold text-sm">
          Login →
        </button>
        <button type="button" onClick={onClose} className="w-full mt-3 text-white/30 text-sm hover:text-white/60 transition-colors">
          Cancel
        </button>
      </form>
    </div>
  );
}