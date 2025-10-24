export const dynamic = 'force-dynamic'

import { Header } from '@/components/freedomainhub/Header'
import { HeroSection } from '@/components/freedomainhub/HeroSection'
import { FeaturesSection } from '@/components/freedomainhub/FeaturesSection'
import { HowItWorksSection } from '@/components/freedomainhub/HowItWorksSection'
import { Footer } from '@/components/freedomainhub/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  )
}