'use client';
import { useApp } from '@/app/context/AppContext';

const statusMap = {
  completed: { label: '✅ Completed', cls: 'status-completed' },
  progress: { label: '⏳ In Progress', cls: 'status-progress' },
  coming: { label: '🚀 Coming Soon', cls: 'status-coming' },
};

export default function Works() {
  const { siteContent } = useApp();
  return (
    <section id="works" className="section-padding max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <span className="text-sm text-blue-400/70 font-medium uppercase tracking-wider">Portfolio</span>
        <h2 className="text-3xl sm:text-5xl font-bold mt-2">
          Our <span className="gradient-text">Recent Works</span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto mt-3">See what we've built for our clients.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteContent.works.map((work) => {
          const status = statusMap[work.status] || statusMap.progress;
          return (
            <div key={work.id} className="glass rounded-3xl overflow-hidden card-hover border border-white/5">
              <div className="aspect-video bg-white/5 relative overflow-hidden">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                <div className={`absolute top-3 right-3 ${status.cls} status-badge`}>{status.label}</div>
              </div>
              <div className="p-5">
                <h3 className="font-bold">{work.title}</h3>
                <p className="text-white/40 text-sm">{work.category}</p>
                {work.rating > 0 && (
                  <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
                    {'⭐'.repeat(Math.floor(work.rating))}
                    {work.rating % 1 >= 0.5 && '⭐'}
                    <span className="text-white/40 text-xs ml-1">{work.rating}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}