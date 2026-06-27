'use client';

import { useState } from 'react';
import { useApp } from '@/app/context/AppContext';

export default function Contact() {
  const { siteContent, submitContact } = useApp();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await submitContact(form);
    setLoading(false);
    if (result.success) {
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } else {
      alert('Error: ' + result.error);
    }
  };

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <span className="text-sm text-orange-400/70 font-medium uppercase tracking-wider">Get in Touch</span>
        <h2 className="text-3xl sm:text-5xl font-bold mt-2">
          Let's <span className="gradient-text">Build Together</span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto mt-3">Start your digital journey today. We're here to help 24×7.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="glass p-6 rounded-2xl">
            <div className="text-3xl mb-2">📧</div>
            <h4 className="font-semibold">Email</h4>
            <p className="text-white/50 text-sm">{siteContent.settings.email}</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <div className="text-3xl mb-2">📞</div>
            <h4 className="font-semibold">Phone</h4>
            <p className="text-white/50 text-sm">{siteContent.settings.phone}</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <div className="text-3xl mb-2">📍</div>
            <h4 className="font-semibold">Address</h4>
            <p className="text-white/50 text-sm">{siteContent.settings.address}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-4">
          <input
            type="text"
            placeholder="Your Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 focus:border-pink-500/50 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email *"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 focus:border-pink-500/50 outline-none"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 focus:border-pink-500/50 outline-none"
          />
          <textarea
            rows={4}
            placeholder="Tell us about your project *"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 focus:border-pink-500/50 outline-none resize-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3.5 rounded-2xl text-white font-semibold text-sm disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message →'}
          </button>
          {success && <p className="text-emerald-400 text-sm text-center">✅ Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}