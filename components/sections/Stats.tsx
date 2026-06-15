'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const brands = [
  { name: 'UPSTOX', logo: '/brands/upstox.png' },
  { name: 'Bajaj Demat', logo: '/brands/bajaj.png' },
  { name: 'HDFC SKY', logo: '/brands/hdfc.sky.png' },
  { name: 'Airtel Payments', logo: '/brands/airtel.png' },
  { name: 'CoinSwitch', logo: '/brands/coinswitch.png' },
  { name: 'Mahindra UDO', logo: '/brands/mahindra-udo.png' },
  { name: 'KUKU TV', logo: '/brands/kuku-tv.png' },
  { name: 'Opinion Bureau', logo: '/brands/opinion-bureau.png' },
  { name: 'Kotak', logo: '/brands/kotak.png' },
  { name: 'Moneyview', logo: '/brands/moneyview.png' },
  { name: 'Nielsen', logo: '/brands/nielsen.jpg' },
  { name: 'ZET', logo: '/brands/zet.png' },
  { name: 'SBM Novio', logo: '/brands/sbm-novio.png' },
  { name: 'Mobile Xpression', logo: '/brands/mobile-xpression.png' },
  { name: 'Axis MF', logo: '/brands/axis-mf.png' },
]

export default function StatsBrandWall() {
  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22c55e15,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#2563eb10,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-400">
            Trusted by India's Leading Brands
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Work With India's Fastest Growing Brands
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Complete paid surveys, app testing, referrals, KYC verification,
            product feedback and promotional campaigns from India's leading
            fintech, entertainment, gaming and lifestyle brands.
          </p>
        </motion.div>

        {/* Brand Slider */}
        <div className="relative mt-20 overflow-hidden">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#050816] to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#050816] to-transparent" />

          <motion.div
            className="flex w-max gap-8"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="group flex h-48 w-52 flex-shrink-0 flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-400/50 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)]"
              >
                <div className="relative h-16 w-36">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    sizes="144px"
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h4 className="mt-6 text-center text-sm font-semibold tracking-wide text-slate-300 transition-colors duration-300 group-hover:text-green-400">
                  {brand.name}
                </h4>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}