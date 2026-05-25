import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#231E1E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="https://solutudo-cdn.s3-sa-east-1.amazonaws.com/prod/adv_ads/58dbb642-9bdc-40ce-b01f-2b1bac1f1da6/5faed016-4018-48fd-9da3-1719ac1e0b25.png"
              alt="Nath Confecções"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#sobre"
              className="text-white text-sm font-medium transition-opacity hover:opacity-55"
            >
              Nath Confecções
            </a>
            <a
              href="/#produtos"
              className="text-white text-sm font-medium transition-opacity hover:opacity-55"
            >
              Produtos
            </a>
            <a
              href="/#contato"
              className="text-white text-sm font-medium transition-opacity hover:opacity-55"
            >
              Contato
            </a>
            <Link
              href="/chat"
              className="text-white text-sm font-medium transition-opacity hover:opacity-55"
            >
              Assistente
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
