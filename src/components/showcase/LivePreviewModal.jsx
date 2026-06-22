'use client';

import Modal from '../common/Modal';

export default function LivePreviewModal({ project, onClose }) {
  return (
    <Modal isOpen={!!project} onClose={onClose}>
      <div className="w-full h-full flex flex-col">
        <div className="mb-6 border-b border-pencil-light/20 pb-4">
          <h3 className="text-2xl font-bold text-pencil-darkest">{project?.name}</h3>
          <p className="text-pencil-dark">{project?.type}</p>
        </div>
        
        {/* Mocking the iframe for the preview. In production, ensure X-Frame-Options allow this, or use external links. */}
        <div className="relative w-full aspect-video bg-pencil-lightest/20 rounded-sm overflow-hidden border border-pencil-light/30 flex items-center justify-center">
           <div className="text-center p-6">
              <p className="text-pencil-darkest font-medium mb-4">Previewing: {project?.link}</p>
              <a 
                href={project?.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-accent-teal text-pageBg font-bold rounded-sm hover:bg-pencil-darkest transition-colors"
              >
                Open in New Tab
              </a>
           </div>
        </div>
      </div>
    </Modal>
  );
}