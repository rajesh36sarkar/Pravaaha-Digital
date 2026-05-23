'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-width">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#748DA6] to-[#9CB4CC] p-10 md:p-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready To Build Your
              <span className="block mt-2">
                Digital Presence?
              </span>
            </h2>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Let’s create a premium digital experience for your business and
              help your brand grow online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/contact">
                <button className="rounded-2xl bg-white px-7 py-4 text-[#748DA6] font-semibold shadow-soft transition-all duration-300 hover:-translate-y-1">
                  Start Your Project
                </button>
              </Link>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-white font-semibold backdrop-blur-xl transition-all duration-300 hover:bg-white/20">
                  Chat On WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}