import { HeroBanner } from '@/components/sections/HeroBanner'
import { AboutSection } from '@/components/sections/AboutSection'
import { AttributesSection } from '@/components/sections/AttributesSection'
import { ProductsGrid } from '@/components/sections/ProductsGrid'
import { WhatsAppContact } from '@/components/sections/WhatsAppContact'
import { UnitsSection } from '@/components/sections/UnitsSection'

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <AboutSection />
      <AttributesSection />
      <ProductsGrid />
      <WhatsAppContact />
      <UnitsSection />
    </main>
  )
}
