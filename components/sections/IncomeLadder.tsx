'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Zap, Building2, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SectionHeader, StaggerContainer, StaggerItem, FadeUp } from '@/components/ui/animations'

const stages = [
  {
    stage: 'Stage 1',
    title: 'Beginner',
    range: '₹500',
    period: '/month',
    icon: Zap,
    color: '#55FF73',
    description: 'Start with simple tasks — surveys, brand sampling, app testing. No experience needed.',
    perks: ['Daily payouts', 'Zero investment', 'Beginner campaigns', 'Instant onboarding'],
    gradient: 'from-[#55FF73]/12 to-transparent',
    border: 'border-[#55FF73]/20',
    glow: 'rgba(85,255,115,0.15)',
  },
  {
    stage: 'Stage 2',
    title: 'Regular',
    range: '₹1K–₹3K',
    period: '/month',
    icon: TrendingUp,
    color: '#2FD95C',
    description: 'Unlock influencer briefs and referral programs. Build your reputation while growing income.',
    perks: ['Content campaigns', 'Referral bonuses', 'Priority access', 'Profile badges'],
    gradient: 'from-[#2FD95C]/12 to-transparent',
    border: 'border-[#2FD95C]/25',
    glow: 'rgba(47,217,92,0.2)',
    featured: true,
  },
  {
    stage: 'Stage 3',
    title: 'Power User',
    range: '₹3K–₹15K+',
    period: '/month',
    icon: Building2,
    color: '#1FC84A',
    description: 'Company Projects, campus ambassador roles, and business-building opportunities.',
    perks: ['Premium brands', 'Ambassador programs', 'Business tools', 'Mentorship access'],
    gradient: 'from-[#1FC84A]/12 to-transparent',
    border: 'border-[#1FC84A]/20',
    glow: 'rgba(31,200,74,0.15)',
  },
]

export default function IncomeLadder() {
  return (
  <section
  id="income-ladder"
  className="section-pad scroll-mt-24 relative overflow-hidden"
  aria-label="Income ladder section"
>
      
      {/* Background accent */}
      <div className="absolute inset-0 radial-glow-bottom pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Income Ladder"
          headline={<>Three stages. One clear path.</>}
          sub="Every Funngro earner moves through the same ladder. Your only job is to keep climbing."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {stages.map((s) => {
            const Icon = s.icon
            return (
              <StaggerItem key={s.stage}>
                <motion.div
                  className={`relative glass-card p-8 h-full flex flex-col border ${s.border} ${s.featured ? 'ring-1 ring-[#2FD95C]/30' : ''}`}
                  whileHover={{ y: -8, boxShadow: `0 30px 80px ${s.glow}, 0 0 0 1px ${s.glow}` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {s.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-block px-4 py-1 bg-[#2FD95C] text-[#0A0F14] text-xs font-bold rounded-full tracking-wide">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  {/* Top accent gradient */}
                  <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${s.gradient} rounded-t-2xl pointer-events-none`} />

                  <div className="relative">
                    {/* Icon + stage */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${s.color}18` }}
                      >
                        <Icon size={22} style={{ color: s.color }} aria-hidden="true" />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-white/30">{s.stage}</span>
                    </div>

                    {/* Earnings */}
                    <div className="mb-3">
                      <span className="text-4xl font-bold text-white tracking-tight" style={{ color: s.color }}>
                        {s.range}
                      </span>
                      <span className="text-white/40 text-sm ml-1">{s.period}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white mb-3">{s.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-7">{s.description}</p>

                    {/* Perks */}
                    <ul className="space-y-2.5 mb-8 flex-1" role="list">
                      {s.perks.map((perk) => (
                        <li key={perk} className="flex items-center gap-2.5">
                          <CheckCircle2 size={15} style={{ color: s.color }} aria-hidden="true" />
                          <span className="text-white/65 text-sm">{perk}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.a
                      href="#download"
                      className="inline-flex items-center gap-2 text-sm font-semibold mt-auto"
                      style={{ color: s.color }}
                      whileHover={{ gap: '12px' }}
                      transition={{ duration: 0.2 }}
                    >
                      Start at this stage
                      <ArrowRight size={15} />
                    </motion.a>
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Bottom note */}
        <FadeUp delay={0.3}>
          <p className="text-center text-white/30 text-sm mt-10">
            Earnings vary by effort and campaign availability. These are typical ranges, not guarantees.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
