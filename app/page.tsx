import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import HomeSection from '@/components/sections/HomeSection'
import HowItWorks from '@/components/sections/HowItWorks'
import IncomeLadder from '@/components/sections/IncomeLadder'
import SuccessStories from '@/components/sections/SuccessStories'
import FAQ from '@/components/sections/FAQ'

import ContactSection from '@/components/sections/ContactSection'

import SectionDivider from '@/components/ui/SectionDivider'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* LANDING PAGE */}
        <HomeSection />

        <SectionDivider accent />

        {/* EARN SECTION */}

        <SectionDivider />
        <HowItWorks />
        <IncomeLadder />

        <SectionDivider />


        <SectionDivider />

        <SuccessStories />
        <FAQ />
        <SectionDivider />


        <SectionDivider accent />

        {/* BRANDS SECTION */}

        <SectionDivider />

        <SectionDivider />

        <SectionDivider />

        {/* CONTACT */}
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}