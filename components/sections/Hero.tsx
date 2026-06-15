'use client'

import { motion } from 'framer-motion'
import { Download, Play, Star } from 'lucide-react'
import Image from 'next/image'

const payments = [
  { name: 'R•• Delhi', amount: '+₹1,240' },
  { name: 'S•• Mumbai', amount: '+₹850' },
  { name: 'A•• Chennai', amount: '+₹450' },
  { name: 'P•• Bengaluru', amount: '+₹760' },
  { name: 'N•• Hyderabad', amount: '+₹180' },
]

const tasks = [
  { name: 'Google Reviews', amount: '₹250' },
  { name: 'Amazon Survey', amount: '₹180' },
  { name: 'Spotify Feedback', amount: '₹120' },
  { name: 'Swiggy Review', amount: '₹220' },
  { name: 'Flipkart Testing', amount: '₹350' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 bg-[#050816]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#22c55e20,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#2563eb15,transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            >
              India's Youth • India's Brands • 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Get paid by brands <br />
              <span className="text-green-400">you already love.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-lg text-slate-300 leading-8 max-w-xl"
            >
              Seventy lakh young Indians work with India's biggest brands through Funngro.
              Complete surveys, referrals, promotions, sampling and influencer campaigns.
              Get paid directly to UPI.
              <br/><br/>
              Trusted by 500+ Brands • 50k+ Users • 4.3★ Rating
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-5 mt-10 flex-wrap"
            >
            </motion.div>

            {/* STATS */}
            <div className="flex items-center gap-10 mt-10">

              <div>
                <p className="text-4xl font-bold text-white">498</p>
                <span className="text-slate-400 text-sm">Earning Today</span>
              </div>

              <div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-white font-semibold mt-2">
                  4.3 • Play Store
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-green-400">50k+</p>
                <span className="text-slate-400 text-sm">Young Indians Earning</span>
              </div>

            </div>
          </div>

         {/* RIGHT */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center items-center w-full"
>
  {/* Phone */}
  <div className="relative w-[320px] h-[640px] rounded-[42px] bg-slate-900 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] overflow-hidden">

    {/* iPhone Notch */}
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-50"></div>

    {/* Header */}
    <div className="p-5 pt-12 border-b border-white/10 flex items-center gap-3">
      <Image
        src="/kp.png"
        alt="Profile"
        width={48}
        height={48}
        className="rounded-full border border-green-400"
      />

      <div>
        <h2 className="text-white font-bold text-lg">
          Kavyanjali
        </h2>
        <p className="text-sm text-slate-400">
          B Patil
        </p>
      </div>

      <span className="ml-auto bg-orange-500/20 text-orange-300 text-xs px-3 py-1 rounded-full">
        Gold Tier
      </span>
    </div>

    {/* Tasks */}
    <div className="space-y-4 p-5">
      {tasks.map((task) => (
        <div
          key={task.name}
          className="bg-slate-800 rounded-xl p-4 flex justify-between items-center hover:bg-slate-700 duration-300"
        >
          <div>
            <p className="text-white font-semibold">
              {task.name}
            </p>
            <p className="text-green-400 text-sm">
              Earn {task.amount}
            </p>
          </div>

          <button className="text-green-400 text-xl">
            →
          </button>
        </div>
      ))}
    </div>
  </div>

  {/* Floating Payment Card */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ repeat: Infinity, duration: 3 }}
    className="absolute right-0 top-20 w-64 bg-slate-900/95 backdrop-blur-xl border border-green-400/20 rounded-3xl p-6 shadow-2xl"
  >
    <div className="flex justify-between">
      <span className="text-green-400 font-bold">LIVE</span>
      <span className="text-slate-400">IST</span>
    </div>

    <h2 className="text-white text-3xl font-bold mt-4">
      ₹26,34,570
    </h2>

    <p className="text-slate-400 mb-5">
      Paid This Week
    </p>

    <div className="space-y-3">
      {payments.map((pay) => (
        <div
          key={pay.name}
          className="flex justify-between text-sm"
        >
          <span className="text-white">{pay.name}</span>
          <span className="text-green-400">{pay.amount}</span>
        </div>
      ))}
    </div>

    <div className="mt-6 border-t border-white/10 pt-4 text-xs text-slate-400">
      Payout Window
      <br />
      <span className="text-green-400">
        &lt; 24h • UPI / Bank
      </span>
    </div>
  </motion.div>
</motion.div>
        </div>
      </div>
    </section>
  )
}