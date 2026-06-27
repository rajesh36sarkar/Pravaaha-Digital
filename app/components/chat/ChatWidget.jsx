'use client';

import { useState, useRef, useEffect } from 'react';
import { useApp } from '@/app/context/AppContext';

export default function ChatWidget() {
  const { chatMessages, setChatMessages, darkMode } = useApp();
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setChatMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const botReplies = [
        "That's a great question! Let me connect you with our team.",
        "We can definitely help you with that. Would you like to schedule a call?",
        "Thanks for reaching out! Our expert will get back to you shortly.",
        "We offer custom solutions tailored to your business needs.",
        "We're here to help! What specific service are you looking for?",
      ];
      const reply = {
        id: Date.now() + 1,
        text: botReplies[Math.floor(Math.random() * botReplies.length)],
        sender: 'bot',
      };
      setChatMessages(prev => [...prev, reply]);
    }, 1200);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full btn-primary shadow-lg shadow-pink-500/30 flex items-center justify-center text-2xl"
      >
        💬
      </button>
    );
  }

  return (
    <div className={`fixed bottom-24 right-6 z-40 w-80 sm:w-96 rounded-3xl shadow-2xl border ${darkMode ? 'bg-[#1a1a2e] border-white/5' : 'bg-white border-black/5'}`}>
      <div className={`px-5 py-3 ${darkMode ? 'bg-white/5' : 'bg-black/5'} flex items-center justify-between rounded-t-3xl`}>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-sm">Live Support</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white/80">✕</button>
      </div>

      <div className="h-72 overflow-y-auto p-4 space-y-3">
        {chatMessages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : darkMode ? 'bg-white/10' : 'bg-gray-100'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t border-white/5 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your question..."
          className="flex-1 text-sm bg-transparent border-0 focus:ring-0 placeholder-white/30 outline-none"
        />
        <button onClick={sendMessage} className="btn-primary px-4 py-2 rounded-xl text-white text-sm font-semibold">
          Send
        </button>
      </div>
    </div>
  );
}