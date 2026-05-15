import Link from 'next/link'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-red-600">Nath Confecções</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/#sobre" className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium">
              Sobre
            </a>
            <a href="/#produtos" className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium">
              Produtos
            </a>
            <a href="/#contato" className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium">
              Contato
            </a>
            <Link
              href="/chat"
              className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Fale com o Assistente
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
