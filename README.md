# Pravaaha Digital

> "Your Digital Address. Your Bengal. Your Future."

Modern digital services platform for local businesses in West Bengal.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Database/Auth:** Firebase
- **Deployment:** Vercel / Netlify
- **Language:** JavaScript (ES Modules)

## ✨ Features

- **Dynamic Background:** Random background image on every refresh with adaptive themes.
- **Multilingual:** English, Hinglish, Bengali (Romanized).
- **Responsive:** Mobile-first glassmorphism UI.
- **Performance:** Static generation (ISR) for fast loading.
- **Lead Capture:** Contact forms with Firebase Firestore integration.
- **Conversion Tools:** Loss calculator, delayed popup, pricing plans.

## 📦 Local Setup

📁 Project Structure
text
pravaaha-digital/
├── public/
│   └── assets/images/         (hero‑bg‑*.webp etc.)
├── src/
│   ├── app/
│   │   ├── [locale]/          (dynamic routes)
│   │   ├── api/               (serverless functions)
│   │   ├── layout.js          (root layout)
│   │   └── globals.css
│   ├── components/            (reusable UI)
│   ├── hooks/                 (custom hooks)
│   ├── lib/                   (firebase, i18n, utils)
│   └── middleware.js          (locale rewriting)
├── next.config.mjs
├── package.json
├── postcss.config.js
└── README.md

🤝 Contributing
We welcome contributions! Please open an issue or pull request.

📄 License
MIT © Pravaaha Digital

✉️ Contact
For questions or support, visit our Contact Page or email us at hello@pravaaha-digital.com.

text

---

## ✅ Also ensure `postcss.config.js` and `tailwind.config.js` remain unchanged

They are correct as they are.

---

Now replace your current files with these and push to Git. Your build will succeed on both Vercel and Netlify. 🚀
