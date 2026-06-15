'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight, Smartphone } from 'lucide-react'

export default function EarnCTA() {
  return (
    <section
      id="download"
      className="relative py-24 overflow-hidden bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22c55e20,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#2563eb10,transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 lg:p-16 text-center"
        >

          {/* Badge */}

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold text-sm">
            India's #1 Teen Earning Platform
          </span>

          {/* Heading */}

          <h2 className="mt-8 text-4xl lg:text-6xl font-bold text-white leading-tight">
            Download Funngro.
            <br />
            <span className="text-green-400">
              Start Your First Earning Today. 
            </span>
          </h2>

          {/* Description */}

          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-300 leading-8">
            Join <span className="text-green-400 font-semibold">70+ lakh young Indians</span>
            {' '}who earn money by completing paid surveys, app testing,
            product reviews, referrals, influencer campaigns and
            brand promotions on Funngro.
          </p>

          {/* Features */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

            {[
              '100% Free',
              'Instant UPI Payouts',
              'Trusted by 5000+ Brands',
              '4.8★ Play Store Rating',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 py-5"
              >
                <p className="text-white font-medium">
                  {item}
                </p>
              </div>
            ))}

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-5 mt-14">

            <a
              href="https://play.google.com/store/apps/details?id=com.funngro.funngro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-400 text-black px-8 py-5 rounded-2xl font-bold hover:scale-105 duration-300"
            >
              <Download size={22} />

              Download on Play Store
            </a>

            <button
              className="flex items-center gap-3 border border-white/20 text-white px-8 py-5 rounded-2xl hover:bg-white/10 duration-300"
            >
              <Smartphone size={20} />

              iOS App Coming Soon

              <ArrowRight size={18} />
            </button>

          </div>

          {/* Bottom */}

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-400">

            <span>✓ Safe & Secure</span>

            <span>✓ No Registration Fee</span>

            <span>✓ Verified Payments</span>

            <span>✓ Available Across India</span>

          </div>

        </motion.div>
      </div>
    </section>
  )
}