'use client'

import { motion } from 'framer-motion'

const features = [
  'Modern UI/UX Design',
  'Responsive Development',
  'Premium Brand Identity',
  'Performance Optimization',
]

export default function About() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D3CEDF]/20 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-sm text-[#748DA6] shadow-soft mb-6">
              About Us
            </span>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#1F2937]">
              We Create Digital
              <span className="gradient-text block mt-2">
                Experiences That Matter
              </span>
            </h2>

            <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
              Pravaaha Digital is focused on building elegant and modern digital
              solutions that help businesses establish a strong online presence.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl bg-white border border-[#E5E7EB] p-4 shadow-soft"
                >
                  <div className="w-3 h-3 rounded-full bg-[#748DA6]" />

                  <span className="text-[#1F2937] font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[40px] bg-white border border-[#E5E7EB] p-8 shadow-2xl">
              <div className="rounded-[32px] bg-gradient-to-br from-[#748DA6]/10 to-[#F2D7D9]/20 p-10 min-h-[420px] flex flex-col justify-between">
                <div>
                  <div className="w-28 h-3 rounded-full bg-[#748DA6]/20 mb-5" />

                  <div className="w-52 h-8 rounded-full bg-[#748DA6]/30 mb-8" />

                  <div className="space-y-4">
                    <div className="w-full h-3 rounded-full bg-[#9CB4CC]/20" />
                    <div className="w-[85%] h-3 rounded-full bg-[#9CB4CC]/20" />
                    <div className="w-[70%] h-3 rounded-full bg-[#9CB4CC]/20" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-10">
                  <div className="rounded-2xl bg-white p-5 shadow-soft">
                    <h3 className="text-3xl font-bold text-[#748DA6]">
                      20+
                    </h3>

                    <p className="text-sm text-[#6B7280] mt-2">
                      Projects Completed
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-soft">
                    <h3 className="text-3xl font-bold text-[#748DA6]">
                      99%
                    </h3>

                    <p className="text-sm text-[#6B7280] mt-2">
                      Client Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}