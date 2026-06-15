'use client'

import { motion } from 'framer-motion'
import { UserPlus, Briefcase, CheckCircle2, Wallet } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Account',
    desc: 'Sign up in minutes and complete your profile to unlock earning opportunities.',
  },
  {
    icon: Briefcase,
    title: 'Choose Brand Projects',
    desc: 'Browse paid surveys, app testing, referrals, reviews, and promotional campaigns.',
  },
  {
    icon: CheckCircle2,
    title: 'Complete Tasks',
    desc: 'Finish the assigned task, upload proof if required, and get it verified.',
  },
  {
    icon: Wallet,
    title: 'Receive UPI Payments',
    desc: 'Get your earnings directly into your bank account or UPI wallet quickly and securely.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-[#050816] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22c55e15,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold text-sm">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white">
            Start Earning in
            <span className="text-green-400"> 4 Simple Steps</span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-8">
            Download the Funngro app, complete simple brand tasks,
            and receive secure UPI payments from India's leading companies.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-green-400 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">

                  <Icon
                    size={30}
                    className="text-green-400"
                  />

                </div>

                <div className="absolute top-8 right-8 text-5xl font-bold text-white/5">
                  0{index + 1}
                </div>

                <h3 className="mt-8 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-7">
                  {step.desc}
                </p>

              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}