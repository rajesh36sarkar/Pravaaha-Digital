'use client';

import { use } from 'react';
import Link from 'next/link';

export default function ShowcasePage({ params }) {
  const { locale } = use(params);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      category: "Web Development",
      description: "A complete overhaul for a local retail brand, increasing conversions by 45%.",
      tags: ["Next.js", "Tailwind", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Real Estate Portal",
      category: "Platform Design",
      description: "A property listing platform with advanced filtering and map integration.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 3,
      title: "Boutique Hotel Booking",
      category: "UX/UI & Dev",
      description: "Seamless booking experience with a highly visual, luxury aesthetic.",
      tags: ["Vue", "Figma", "Tailwind"],
      link: "#"
    }
  ];

  return (
    <div className="relative z-10 min-h-screen pt-12 pb-24 px-6 max-w-7xl mx-auto">
      
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 drop-shadow-md"
          style={{ color: 'var(--theme-text-main)' }}>
          Our <span style={{ color: 'var(--theme-accent)' }}>Showcase</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-sm"
          style={{ color: 'var(--theme-text-muted)' }}>
          Explore the digital experiences we've crafted for local and global businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="group relative flex flex-col rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 animate-slide-up shadow-2xl"
            style={{
              backgroundColor: 'var(--theme-glass)',
              backdropFilter: 'blur(12px)',
              borderColor: 'var(--theme-border)',
              borderWidth: '1px',
              animationDelay: `${index * 0.15}s`,
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            <div className="aspect-video w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundColor: 'var(--theme-glass)' }}>
              <div className="absolute inset-0 flex items-center justify-center font-bold tracking-widest text-sm uppercase"
                style={{ color: 'var(--theme-text-muted)' }}>
                {project.title}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: 'var(--theme-accent)' }}>
                {project.category}
              </span>
              
              <h3 className="text-2xl font-bold mb-3"
                style={{ color: 'var(--theme-text-main)' }}>
                {project.title}
              </h3>
              
              <p className="text-sm mb-6 flex-grow leading-relaxed"
                style={{ color: 'var(--theme-text-muted)' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs font-bold rounded-sm border"
                    style={{
                      color: 'var(--theme-text-main)',
                      borderColor: 'var(--theme-border)',
                      backgroundColor: 'var(--theme-glass)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link 
                href={project.link}
                className="mt-auto inline-flex items-center text-sm font-bold transition-colors"
                style={{ color: 'var(--theme-text-main)' }}
              >
                View Case Study 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center animate-slide-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
        <div className="inline-block p-10 rounded-2xl w-full max-w-3xl shadow-2xl"
          style={{
            backgroundColor: 'var(--theme-glass)',
            backdropFilter: 'blur(12px)',
            borderColor: 'var(--theme-border)',
            borderWidth: '1px',
          }}>
          <h2 className="text-3xl font-bold mb-4"
            style={{ color: 'var(--theme-text-main)' }}>Ready to start your project?</h2>
          <p className="mb-8" style={{ color: 'var(--theme-text-muted)' }}>Let's build a digital presence that actually drives growth.</p>
          <Link 
            href={`/${locale}/contact`}
            className="inline-block px-8 py-4 font-bold rounded-sm transition-all duration-300 shadow-lg hover:-translate-y-1"
            style={{
              backgroundColor: 'var(--theme-accent)',
              color: '#000000',
            }}
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
}