export function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Sobre a <span className="text-red-600">Nath Confecções</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Somos uma loja comprometida com moda de qualidade e acessível.
            Atendemos famílias há anos, com produtos que unem estilo e conforto.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nosso catálogo é atualizado constantemente com as tendências do mercado,
            sempre pensando no melhor custo-benefício para nossos clientes.
          </p>
        </div>
        <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Imagem da loja</span>
        </div>
      </div>
    </section>
  )
}
