'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

const stats = [
  {
    number: '20+',
    label: 'Projects Delivered',
  },
  {
    number: '10+',
    label: 'Happy Clients',
  },
  {
    number: '3+',
    label: 'Years Experience',
  },
  {
    number: '100%',
    label: 'Responsive Support',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFC] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#9CB4CC]/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F2D7D9]/40 rounded-full blur-3xl" />
      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft border border-[#E5E7EB] mb-8">
              <div className="w-2 h-2 rounded-full bg-[#748DA6]" />

              <span className="text-sm font-medium text-[#748DA6]">
                Premium Digital Solutions Agency
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] text-[#1F2937]">
              We Build Modern
              <span className="gradient-text block mt-2">
                Digital Experiences
              </span>
              For Growing Businesses
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl max-w-2xl text-[#6B7280] leading-relaxed">
              Helping businesses establish a powerful online presence through
              premium websites, branding, and digital solutions designed to
              drive real growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/contact">
                <button className="group flex items-center justify-center gap-2 rounded-2xl bg-[#748DA6] px-7 py-4 text-white font-medium shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                  Start Your Project

                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>

              <Link href="/projects">
                <button className="glass flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-[#1F2937] font-medium transition-all duration-300 hover:bg-white/80">
                  <Play className="w-4 h-4 fill-[#748DA6] text-[#748DA6]" />

                  View Our Work
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl bg-white border border-[#E5E7EB] p-5 shadow-soft"
                >
                  <h3 className="text-3xl font-bold text-[#748DA6]">
                    {stat.number}
                  </h3>

                  <p className="mt-2 text-sm text-[#6B7280]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Mockup */}
            <div className="relative rounded-[32px] bg-white p-4 shadow-2xl border border-[#E5E7EB]">
              {/* Browser Top */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#F2D7D9]" />
                <div className="w-3 h-3 rounded-full bg-[#D3CEDF]" />
                <div className="w-3 h-3 rounded-full bg-[#9CB4CC]" />
              </div>

              {/* Mockup Content */}
              <div className="rounded-3xl bg-gradient-to-br from-[#748DA6]/10 to-[#9CB4CC]/20 p-8 min-h-[420px] flex flex-col justify-between">
                <div>
                  <div className="w-32 h-4 rounded-full bg-[#748DA6]/20 mb-4" />

                  <div className="w-52 h-8 rounded-full bg-[#748DA6]/30 mb-6" />

                  <div className="space-y-3">
                    <div className="w-full h-3 rounded-full bg-[#9CB4CC]/30" />

                    <div className="w-[80%] h-3 rounded-full bg-[#9CB4CC]/30" />

                    <div className="w-[60%] h-3 rounded-full bg-[#9CB4CC]/30" />
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 gap-4 mt-10">
                  <div className="rounded-2xl bg-white p-5 shadow-soft">
                    <div className="w-10 h-10 rounded-xl bg-[#748DA6]/20 mb-4" />

                    <div className="w-20 h-3 rounded-full bg-[#748DA6]/20 mb-2" />

                    <div className="w-14 h-3 rounded-full bg-[#9CB4CC]/20" />
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-soft">
                    <div className="w-10 h-10 rounded-xl bg-[#F2D7D9]/50 mb-4" />

                    <div className="w-20 h-3 rounded-full bg-[#748DA6]/20 mb-2" />

                    <div className="w-14 h-3 rounded-full bg-[#9CB4CC]/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-8 -left-8 hidden md:block"
            >
              <div className="glass rounded-3xl p-5 shadow-soft">
                <p className="text-sm text-[#6B7280] mb-2">
                  Client Satisfaction
                </p>

                <h3 className="text-3xl font-bold text-[#748DA6]">
                  99%
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}