import { HeroBanner } from '@/components/sections/HeroBanner'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProductsGrid } from '@/components/sections/ProductsGrid'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <AboutSection />
      <ProductsGrid />
      <ContactSection />
    </main>
  )
}
