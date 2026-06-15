'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Globe, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#brands', label: 'Brands' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#income-ladder', label: 'Income Ladder' },
  { href: '#stories', label: 'Stories' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = navLinks.map((item) =>
      document.getElementById(item.href.replace('#', ''))
    )

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      let current = ''

      sections.forEach((section) => {
        if (!section) return

        const top = section.offsetTop - 120
        const height = section.offsetHeight

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0F14]/85 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55FF73] rounded-lg"
            aria-label="Funngro home"
          >
            <Image
              src="/fungro.jpg"
              alt="Funngro Logo"
              width={100}
              height={75}
              priority
            />

            <span className="text-white font-bold text-xl tracking-tight group-hover:text-[#55FF73] transition-colors duration-200">
              Funngro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? 'text-[#55FF73] bg-[#55FF73]/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                aria-expanded={langOpen}
              >
                <Globe size={15} />
                <span>EN</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform ${
                    langOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-[#0F1620] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                  >
                    {['English', 'हिन्दी', 'தமிழ்', 'తెలుగు'].map(
                      (lang) => (
                        <button
                          key={lang}
                          onClick={() => setLangOpen(false)}
                          className="w-full px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 text-left transition-colors"
                        >
                          {lang}
                        </button>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Download Button */}
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.funngro.tapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#55FF73] text-[#0A0F14] text-sm font-semibold rounded-xl hover:bg-[#2FD95C] transition-all duration-200"
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 20px rgba(85,255,115,0.4)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={15} />
              Download
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#0F1620] z-50 lg:hidden border-l border-white/8 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="flex items-center justify-between p-5 border-b border-white/8">
                <span className="text-white font-bold text-lg">
                  Menu
                </span>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/5"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 rounded-xl transition-colors font-medium ${
                          activeSection === link.href.substring(1)
                            ? 'text-[#55FF73] bg-[#55FF73]/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="p-4 border-t border-white/8">
                <a
                  href="https://play.google.com/store/apps/details?id=com.funngro.tapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#55FF73] text-[#0A0F14] font-bold rounded-xl"
                >
                  <Download size={17} />
                  Download Funngro
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}