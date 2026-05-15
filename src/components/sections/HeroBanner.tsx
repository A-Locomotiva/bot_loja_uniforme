import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function HeroBanner() {
  return (
    <section className="bg-gray-900 text-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Moda com qualidade e{' '}
          <span className="text-red-500">estilo</span>
        </h1>
        <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
          Confecções para toda a família. Qualidade, conforto e moda acessível para você.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#produtos">
            <Button size="lg">Ver Produtos</Button>
          </a>
          <Link href="/chat">
            <Button size="lg" variant="secondary">
              Falar com Assistente
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
