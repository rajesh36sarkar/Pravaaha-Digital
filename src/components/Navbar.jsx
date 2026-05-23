'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaRocket } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/75 backdrop-blur-2xl border-b border-[#E5E7EB] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#748DA6] to-[#9CB4CC] shadow-soft">
              <FaRocket className="text-white text-lg" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1F2937] leading-none">
                Pravaaha
              </h2>

              <p className="text-xs text-[#748DA6] mt-1">
                Enterprise
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-[#1F2937] bg-white shadow-soft'
                      : 'text-[#6B7280] hover:text-[#1F2937]'
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-xl border border-[#E5E7EB]"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="rounded-2xl bg-[#748DA6] px-6 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                Start Project
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#1F2937]"
          >
            {isOpen ? (
              <HiX size={28} />
            ) : (
              <HiMenuAlt3 size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-[#E5E7EB] bg-white/95 backdrop-blur-2xl"
          >
            <div className="container-width py-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-5 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-[#748DA6] text-white'
                        : 'text-[#6B7280] hover:bg-[#F5F7FA]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <Link
                href="/contact"
                className="mt-4"
              >
                <button className="w-full rounded-2xl bg-[#748DA6] px-6 py-4 text-white font-medium shadow-soft">
                  Start Project
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar