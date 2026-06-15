'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Who can join Funngro?',
    answer:
      'Students and young individuals across India can join Funngro and start completing paid brand projects.',
  },
  {
    question: 'Is Funngro free to use?',
    answer:
      'Yes. Creating an account and participating in campaigns is completely free.',
  },
  {
    question: 'How do I get paid?',
    answer:
      'Once your completed task is verified, payments are transferred directly to your UPI or bank account.',
  },
  {
    question: 'What kind of tasks are available?',
    answer:
      'You can complete paid surveys, app testing, referrals, product reviews, social media campaigns, and promotional activities.',
  },
  {
    question: 'How much can I earn?',
    answer:
      'Your earnings depend on the number of campaigns you complete. Active users can earn from a few hundred to several thousand rupees every month.',
  },
  {
    question: 'How long does payment take?',
    answer:
      'Most verified tasks are paid within 24–72 hours depending on the campaign.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="relative py-24 bg-[#050816]"
    >

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-flex px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold text-sm">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            Everything you need to know before you start earning.
          </p>

        </div>

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >

                <span className="text-white font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`text-green-400 transition-transform ${
                    open === index ? 'rotate-180' : ''
                  }`}
                />

              </button>

              <AnimatePresence>

                {open === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >

                    <p className="px-6 pb-6 text-slate-400 leading-8">
                      {faq.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}