import { AppProvider } from '@/app/context/AppContext';
import './styles/globals.css';

export const metadata = {
  title: 'Pravaaha Enterprise – Digital Services',
  description: 'Professional digital solutions for your business. Starting from ₹10,000+.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}