'use client'

import { motion } from 'framer-motion'
import {
  MonitorSmartphone,
  Palette,
  Search,
  PenTool,
  Globe,
  ShieldCheck,
} from 'lucide-react'

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Web Development',
    description:
      'Modern responsive websites designed for performance and user experience.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Beautiful and intuitive interfaces that enhance customer engagement.',
  },
  {
    icon: PenTool,
    title: 'Brand Identity',
    description:
      'Creative branding solutions that help businesses stand out digitally.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Improve visibility and grow your online presence through SEO strategies.',
  },
  {
    icon: Globe,
    title: 'Digital Solutions',
    description:
      'Custom digital experiences tailored to your business goals and audience.',
  },
  {
    icon: ShieldCheck,
    title: 'Support & Maintenance',
    description:
      'Reliable maintenance and long-term support for smooth business operations.',
  },
]

export default function Services() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D3CEDF]/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9CB4CC]/20 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-sm text-[#748DA6] shadow-soft mb-6">
            Our Services
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#1F2937]">
            Digital Services Designed For
            <span className="gradient-text block mt-2">
              Modern Businesses
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#6B7280] leading-relaxed max-w-2xl">
            We create premium digital experiences that help brands grow,
            connect, and stand out in the modern digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[32px] border border-[#E5E7EB] bg-white/80 backdrop-blur-xl p-8 shadow-soft transition-all duration-500 hover:border-[#9CB4CC]/40 hover:shadow-xl"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#748DA6]/0 via-[#9CB4CC]/0 to-[#F2D7D9]/0 group-hover:from-[#748DA6]/5 group-hover:via-[#9CB4CC]/5 group-hover:to-[#F2D7D9]/10 transition-all duration-500" />

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#748DA6] to-[#9CB4CC] shadow-soft mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-[#6B7280] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}