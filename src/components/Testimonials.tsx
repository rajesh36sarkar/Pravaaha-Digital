'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Business Owner',
    text: 'Pravaaha Digital transformed our online presence beautifully.',
  },
  {
    name: 'Rahul Verma',
    role: 'Startup Founder',
    text: 'Professional design, smooth communication, and premium quality work.',
  },
  {
    name: 'Sneha Roy',
    role: 'Creative Director',
    text: 'Their UI/UX approach helped our brand stand out digitally.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-width">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-sm text-[#748DA6] shadow-soft mb-6">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#1F2937]">
            What Our
            <span className="gradient-text block mt-2">
              Clients Say
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="rounded-[32px] bg-white border border-[#E5E7EB] p-8 shadow-soft"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full bg-[#748DA6]/20"
                  />
                ))}
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-8">
                “{testimonial.text}”
              </p>

              <div>
                <h3 className="font-semibold text-[#1F2937]">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-[#748DA6] mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}