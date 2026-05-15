const products = [
  { id: 1, title: 'Feminino', description: 'Blusas, vestidos, calças e muito mais', emoji: '👗' },
  { id: 2, title: 'Masculino', description: 'Camisas, bermudas, calças e acessórios', emoji: '👔' },
  { id: 3, title: 'Infantil', description: 'Roupas confortáveis para os pequenos', emoji: '🧒' },
  { id: 4, title: 'Promoções', description: 'Ofertas especiais com os melhores preços', emoji: '🏷️' },
]

export function ProductsGrid() {
  return (
    <section id="produtos" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Nossas <span className="text-red-600">Categorias</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-red-100 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-4">{product.emoji}</div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{product.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
