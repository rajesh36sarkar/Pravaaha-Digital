'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [siteContent, setSiteContent] = useState({
    services: [],
    works: [],
    faqs: [],
    testimonials: [
      { id: 1, name: 'Rahul Sharma', company: 'EcoStore', text: 'Amazing work!', rating: 5 },
      { id: 2, name: 'Priya Patel', company: 'HealthPlus', text: 'Professional and creative.', rating: 5 },
      { id: 3, name: 'Amit Kumar', company: 'FinWise', text: 'Great results!', rating: 4 },
    ],
    settings: {
      businessName: 'Pravaaha Enterprise',
      email: 'info@pravaaha.com',
      phone: '+91 98765 43210',
      address: 'Mumbai, India',
    },
  });
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: 'Hi there! 👋 How can we help you today?', sender: 'bot' },
  ]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [services, works, faqs] = await Promise.all([
          axios.get('/api/admin/content?type=services'),
          axios.get('/api/admin/content?type=works'),
          axios.get('/api/admin/content?type=faqs'),
        ]);
        setSiteContent(prev => ({
          ...prev,
          services: services.data,
          works: works.data,
          faqs: faqs.data,
        }));
      } catch (error) {
        console.error('Failed to fetch site data', error);
      }
    };
    fetchData();
  }, []);

  const loginAdmin = async (password) => {
    try {
      const res = await axios.post('/api/admin/auth', { password });
      const token = res.data.token;
      localStorage.setItem('adminToken', token);
      setIsAdmin(true);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || 'Login failed' };
    }
  };

  const logoutAdmin = () => {
    localStorage.removeItem('adminToken');
    setIsAdmin(false);
  };

  const submitContact = async (data) => {
    try {
      await axios.post('/api/contact', data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.error };
    }
  };

  const value = {
    darkMode,
    setDarkMode,
    siteContent,
    setSiteContent,
    chatMessages,
    setChatMessages,
    isAdmin,
    setIsAdmin,
    loginAdmin,
    logoutAdmin,
    submitContact,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}