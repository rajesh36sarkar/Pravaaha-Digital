'use client';

import { useState } from 'react';
import Button from '../common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="p-8 md:p-12 border rounded-sm shadow-lg"
      style={{
        backgroundColor: 'var(--theme-glass)',
        backdropFilter: 'blur(12px)',
        borderColor: 'var(--theme-border)',
        boxShadow: 'var(--theme-shadow)',
      }}>
      <h2 className="text-3xl font-bold mb-6"
        style={{ color: 'var(--theme-text-main)' }}>
        Get in Touch
      </h2>
      
      {status === 'success' ? (
        <div className="p-6 border rounded-sm font-medium"
          style={{
            backgroundColor: 'var(--theme-glass)',
            borderColor: 'var(--theme-accent)',
            color: 'var(--theme-text-main)',
          }}>
          Thank you! Your message has been received. Our team will contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2"
                style={{ color: 'var(--theme-text-main)' }}>Name</label>
              <input required type="text" name="name" value={formData.name} onChange={handleChange} 
                className="w-full p-4 border rounded-sm focus:outline-none focus:ring-1 transition-all"
                style={{
                  backgroundColor: 'var(--theme-glass)',
                  borderColor: 'var(--theme-border)',
                  color: 'var(--theme-text-main)',
                }} />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2"
                style={{ color: 'var(--theme-text-main)' }}>Phone</label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                className="w-full p-4 border rounded-sm focus:outline-none focus:ring-1 transition-all"
                style={{
                  backgroundColor: 'var(--theme-glass)',
                  borderColor: 'var(--theme-border)',
                  color: 'var(--theme-text-main)',
                }} />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-2"
              style={{ color: 'var(--theme-text-main)' }}>Email (Optional)</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full p-4 border rounded-sm focus:outline-none focus:ring-1 transition-all"
              style={{
                backgroundColor: 'var(--theme-glass)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text-main)',
              }} />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2"
              style={{ color: 'var(--theme-text-main)' }}>How can we help?</label>
            <textarea required name="message" rows="4" value={formData.message} onChange={handleChange}
              className="w-full p-4 border rounded-sm focus:outline-none focus:ring-1 transition-all resize-none"
              style={{
                backgroundColor: 'var(--theme-glass)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text-main)',
              }} />
          </div>

          {status === 'error' && <p className="text-sm font-bold"
            style={{ color: 'var(--theme-accent)' }}>Something went wrong. Please try again.</p>}

          <Button type="submit" isLoading={status === 'loading'} className="w-full" variant="primary">
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
}