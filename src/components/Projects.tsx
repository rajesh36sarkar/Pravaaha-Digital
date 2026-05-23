'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Business Portfolio Website',
    category: 'Web Design',
    description:
      'Modern responsive website built for a growing digital business.',
  },
  {
    title: 'Creative Agency Platform',
    category: 'UI/UX Design',
    description:
      'Elegant and immersive user experience for a creative agency.',
  },
  {
    title: 'E-Commerce Experience',
    category: 'Development',
    description:
      'Premium online shopping platform with optimized conversion flow.',
  },
]

export default function Projects() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#F2D7D9]/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#9CB4CC]/20 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-sm text-[#748DA6] shadow-soft mb-6">
            Featured Projects
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#1F2937]">
            Crafted Digital Experiences
            <span className="gradient-text block mt-2">
              That Deliver Results
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#6B7280] leading-relaxed max-w-2xl">
            Explore some of our premium digital projects designed to elevate
            brands and create impactful online experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[36px] overflow-hidden border border-[#E5E7EB] bg-white shadow-soft hover:shadow-2xl transition-all duration-500"
            >
              {/* Mockup Preview */}
              <div className="relative h-[260px] overflow-hidden bg-gradient-to-br from-[#748DA6]/15 via-[#9CB4CC]/10 to-[#F2D7D9]/20">
                {/* Browser Top */}
                <div className="flex items-center gap-2 px-6 py-5">
                  <div className="w-3 h-3 rounded-full bg-[#F2D7D9]" />
                  <div className="w-3 h-3 rounded-full bg-[#D3CEDF]" />
                  <div className="w-3 h-3 rounded-full bg-[#9CB4CC]" />
                </div>

                {/* Fake Content */}
                <div className="px-6">
                  <div className="w-28 h-3 rounded-full bg-[#748DA6]/20 mb-4" />

                  <div className="w-48 h-7 rounded-full bg-[#748DA6]/30 mb-6" />

                  <div className="space-y-3">
                    <div className="w-full h-3 rounded-full bg-[#9CB4CC]/20" />

                    <div className="w-[80%] h-3 rounded-full bg-[#9CB4CC]/20" />

                    <div className="w-[60%] h-3 rounded-full bg-[#9CB4CC]/20" />
                  </div>

                  {/* Mini Cards */}
                  <div className="grid grid-cols-2 gap-4 mt-10">
                    <div className="rounded-2xl bg-white p-4 shadow-soft">
                      <div className="w-10 h-10 rounded-xl bg-[#748DA6]/20 mb-4" />

                      <div className="w-20 h-3 rounded-full bg-[#748DA6]/20 mb-2" />

                      <div className="w-14 h-3 rounded-full bg-[#9CB4CC]/20" />
                    </div>

                    <div className="rounded-2xl bg-white p-4 shadow-soft">
                      <div className="w-10 h-10 rounded-xl bg-[#F2D7D9]/50 mb-4" />

                      <div className="w-20 h-3 rounded-full bg-[#748DA6]/20 mb-2" />

                      <div className="w-14 h-3 rounded-full bg-[#9CB4CC]/20" />
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#748DA6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="inline-block text-sm text-[#748DA6] font-medium mb-4">
                  {project.category}
                </span>

                <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">
                  {project.title}
                </h3>

                <p className="text-[#6B7280] leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Button */}
                <button className="group/button inline-flex items-center gap-2 text-[#748DA6] font-medium transition-all duration-300 hover:gap-3">
                  View Case Study

                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/button:rotate-45" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}