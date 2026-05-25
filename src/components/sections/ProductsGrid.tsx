import Image from 'next/image'

const PRODUCTS = [
  { name: 'Body para Sublimação', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/d03835f9-6570-4149-8ea7-f078e0cd8b62/86221310-828d-449c-ae26-0a879822e980.jpg' },
  { name: 'Camisetas Promocionais', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/7b932f45-0046-4ca7-8739-3da42a98343f/d1fe0242-568a-4423-960a-7c730030d1d9.jpg' },
  { name: 'Confecção de Pijamas', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/5aab21e4-805f-4cba-b705-062cf3f84cc7/d98e6f4e-0f2e-4e9d-83cb-97f29e5bb424.png' },
  { name: 'Jaqueta Moletom com Capuz', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/9e813f99-1e33-435f-aedc-a104a975fea1/d9015df9-3ca8-416e-b2da-1dde5affbd62.png' },
  { name: 'Jaqueta Tactel sem Capuz', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/9ec7a7ea-b88e-49f6-87b8-71cad37185db/a1091f6e-417e-4d4b-b5fa-3094bd99adf2.png' },
  { name: 'Camiseta personalizada para aniversário', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/9e5d0896-69b1-4fbf-b8dc-fb4c16d3aeed/1ce27f9a-8716-49e0-a472-b168458c2fe5.png' },
  { name: 'Camiseta Polo em Malha Piquet', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/25ad2328-20eb-486e-aabb-8f5bab696e65/2c5972f3-2da1-41f2-8bb0-292b0a38b608.png' },
  { name: 'Camiseta Gola Polo bordada em Malha PV', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/da2bcee8-1b7f-4b7b-abda-04da4ff16cc4/19717035-e95e-45a3-977c-34c1c164c1f4.png' },
  { name: 'Uniforme com Estampa em Sublimação', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/652697af-431c-4ddc-b301-3f3cac1e0fec/652697af-d358-4a1d-97a0-3f3cac1e0fec.png' },
  { name: 'Jalecos Profissionais', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/b62e205f-d8a2-4167-b20d-36cc72cb2ef5/4a6db29c-c655-423a-bf57-601e6f09093c.jpg' },
  { name: 'Uniformes Profissionais', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/b29e632f-6a3b-44f6-ba80-52f39de84adc/b9310c35-dc9c-4e03-b6d2-1698c4d10e83.png' },
  { name: 'Bordados Profissionais', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/d4d80e02-9f38-4b62-a861-7818a2f3b7fa/454ee2d3-c534-4322-b35e-dc3f75a9b55b.png' },
  { name: 'Camisetas com Estampas em Silk Screen', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/65269b29-3414-47b5-8949-2b74ac1e09ff/65269b29-82a4-464a-863e-2b74ac1e09ff.png' },
  { name: 'Uniformes Escolares', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/51017888-12a0-40db-ae57-83cd08316d36/28c5f6fc-a538-4354-ad56-de991c3d055c.png' },
  { name: 'Aventais Profissionais', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/e65e84ea-336a-4b4c-97ed-d6ab65886039/f38c6a5c-7cfe-420c-abe4-9b7815ca7c03.jpg' },
  { name: 'Camisetas Básicas', image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp380fw/48fff214-3ec8-433f-8f80-d226046cdc23/32fde519-5a8d-46e0-a05c-d9bf894a1b06.jpg' },
]

export function ProductsGrid() {
  return (
    <section id="produtos" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#333333' }}>
          Nossos Produtos
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map(product => (
            <div
              key={product.name}
              className="bg-white border border-gray-100 rounded overflow-hidden hover:shadow-md transition-shadow"
              style={{ borderRadius: '3px' }}
            >
              <div className="relative h-[210px] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-3">
                <h5 className="text-sm font-medium mb-1 leading-tight" style={{ color: '#666666' }}>
                  {product.name}
                </h5>
                <p className="text-xs mb-2" style={{ color: '#999999' }}>A consultar</p>
                <a
                  href="#contato"
                  className="text-xs font-semibold transition-opacity hover:opacity-75"
                  style={{ color: '#EA1B22' }}
                >
                  Ver mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
