'use client'

import { motion } from 'framer-motion'
import { Quote, Star, MapPin, TrendingUp } from 'lucide-react'
import { SectionHeader, StaggerContainer, StaggerItem, FadeUp } from '@/components/ui/animations'

const stories = [
  {
    name: 'Sarthak',
    city: 'Delhi',
    age: '16',
    earnings: '₹3,90,000+ total',
    avatar: 'PS',
    color: '#55FF73',
    quote: "100 rejection emails. Never quit. Now I work with the founders on Funngro's product",

  },
  {
    name: 'Anshika',
    city: 'Haryana',
    age: '19',
    earnings: '₹2,25,000+ total',
    avatar: 'RV',
    color: '#2FD95C',
    quote: "Thought earning apps were fake. First instant withdrawal changed everything.",

  },
  {
    name: 'Ashwani',
    city: 'Delhi',
    age: '23',
    earnings: '₹66,000+ total',
    avatar: 'AN',
    color: '#1FC84A',
    quote: "Thought-it was fake-turned out the mistake was mine. Now I've earned 99k+.",
  },
]

export default function SuccessStories() {
  return (
    <section id="stories" className="section-pad relative overflow-hidden" aria-label="Success stories section">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(85,255,115,0.08) 0%, transparent 70%)', transform: 'translate(40%, -40%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Success Stories from Real Funngro Earners"
          headline={<>People who chose to <span className="text-[#55FF73]">start.</span></>}
          sub="These aren't curated success stories — they're the median Funngro earner at different stages of the ladder."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.13}>
          {stories.map((s, i) => (
            <StaggerItem key={s.name}>
              <motion.article
                className="glass-card p-7 h-full flex flex-col border border-white/6 hover:border-[#55FF73]/15 transition-colors duration-300 group"
                whileHover={{ y: -6, boxShadow: '0 25px 70px rgba(85,255,115,0.1)' }}
                transition={{ duration: 0.28 }}
                aria-label={`Success story from ${s.name}`}
              >
                {/* Quote icon */}
                <Quote
                  size={28}
                  className="mb-5 opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ color: s.color }}
                  aria-hidden="true"
                />

                {/* Quote text */}
                <blockquote className="text-white/70 text-sm leading-relaxed italic mb-7 flex-1">
                  "{s.quote}"
                </blockquote>

                {/* Stats strip */}
                <div>
                  <div className="w-px h-8 bg-white/8" />
                  <div className="text-center flex-1">
                    <div className="text-xs text-white/35 mb-1">Earnings</div>
                    <div className="font-bold text-base" style={{ color: s.color }}>{s.earnings}</div>
                  </div>
                </div><br/><br/>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 text-[#0A0F14]"
                    style={{ background: s.color }}
                    aria-hidden="true"
                  >
                    {s.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm truncate">{s.name}</span>
                      
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-white/30 flex-shrink-0" aria-hidden="true" />
                      <span className="text-white/35 text-xs truncate">{s.city}</span>
                    </div>
                    <span className="text-white/25 text-xs">{s.age}</span>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-[#55FF73] text-[#55FF73]" aria-hidden="true" />
                  ))}
                  <span className="text-white/30 text-xs ml-1">Verified earner</span>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

    
      </div>
    </section>
  )
}
