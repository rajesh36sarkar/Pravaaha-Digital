import Link from 'next/link'
import { FaRocket } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D6DEE7] bg-[#EEF2F6] py-16">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      <div className="container-width relative z-10">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#748DA6] to-[#9CB4CC] shadow-soft">
                <FaRocket className="text-white text-lg" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1F2937]">
                  Pravaaha Enterprise
                </h2>

                <p className="text-sm text-[#748DA6]">
                  Modern Business Ecosystem
                </p>
              </div>
            </div>

            <p className="mt-6 text-[#6B7280] leading-relaxed max-w-md">
              Pravaaha Enterprise is focused on building modern business
              experiences through digital innovation and creative brand
              solutions.
            </p>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-6">
              Our Brands
            </h3>

            <div className="space-y-5">
              <div className="rounded-2xl border border-[#DCE3EA] bg-white/70 p-5 backdrop-blur-xl">
                <h4 className="font-semibold text-[#1F2937]">
                  Pravaaha Digital
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                  Premium digital services, web development, UI/UX design, and
                  modern online business solutions.
                </p>
              </div>

              <div className="rounded-2xl border border-[#DCE3EA] bg-white/70 p-5 backdrop-blur-xl">
                <h4 className="font-semibold text-[#1F2937]">
                  Akalpa
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                  Creative garment and fashion business focused on quality,
                  modern apparel, and lifestyle experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-[#6B7280]">
              <Link
                href="/"
                className="transition-colors hover:text-[#748DA6]"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="transition-colors hover:text-[#748DA6]"
              >
                Services
              </Link>

              <Link
                href="/projects"
                className="transition-colors hover:text-[#748DA6]"
              >
                Projects
              </Link>

              <Link
                href="/about"
                className="transition-colors hover:text-[#748DA6]"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition-colors hover:text-[#748DA6]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#D6DEE7] pt-8 md:flex-row">
          <p className="text-sm text-[#6B7280]">
            © 2026 Pravaaha Enterprise. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#6B7280]">
              Designed & Developed by
            </span>

            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#748DA6] transition-colors hover:text-[#1F2937]"
            >
              Rajesh Sarkar
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}