'use client';

import { useState } from 'react';
import LivePreviewModal from './LivePreviewModal';

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, name: 'BongBites Sweets', type: 'E-Commerce', image: '/assets/images/proj1.jpg', link: 'https://example.com/1' },
    { id: 2, name: 'Sen Hardware Hub', type: 'Business Site', image: '/assets/images/proj2.jpg', link: 'https://example.com/2' },
    { id: 3, name: 'Vidya Coaching Center', type: 'Student Portal', image: '/assets/images/proj3.jpg', link: 'https://example.com/3' },
    { id: 4, name: 'Ananda Real Estate', type: 'Listing Platform', image: '/assets/images/proj4.jpg', link: 'https://example.com/4' },
    { id: 5, name: 'Pooja Boutique', type: 'E-Commerce', image: '/assets/images/proj5.jpg', link: 'https://example.com/5' },
  ];

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm border transition-all hover:scale-[1.02]"
            style={{
              backgroundColor: 'var(--theme-glass)',
              backdropFilter: 'blur(8px)',
              borderColor: 'var(--theme-border)',
            }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="w-full aspect-[4/3] flex items-center justify-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundColor: 'var(--theme-glass)' }}>
              <span className="font-medium" style={{ color: 'var(--theme-text-muted)' }}>Project Image</span>
            </div>
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(0,0,0,0.6)',
              }}>
              <span className="text-sm font-bold uppercase tracking-wider mb-2"
                style={{ color: 'var(--theme-accent)' }}>{project.type}</span>
              <h3 className="text-2xl font-bold mb-4"
                style={{ color: 'var(--theme-text-main)' }}>{project.name}</h3>
              <span className="px-6 py-2 border rounded-sm transition-colors"
                style={{
                  borderColor: 'var(--theme-border)',
                  color: 'var(--theme-text-main)',
                }}>
                View Live Site
              </span>
            </div>
          </div>
        ))}
      </div>

      <LivePreviewModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}