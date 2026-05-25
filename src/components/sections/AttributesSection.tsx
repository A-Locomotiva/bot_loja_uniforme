import Image from 'next/image'

const ATTRIBUTES = [
  {
    icon: 'https://solutudo-cdn.s3-sa-east-1.amazonaws.com/prod/adv_ads/58dbb642-9bdc-40ce-b01f-2b1bac1f1da6/5fae79d1-2a28-4c28-8d7d-63daac1e0b25.png',
    title: 'Missão',
    text: 'Usar de nossa capacidade criativa e técnica no segmento de confecção e estamparia para satisfazer e surpreender nossos clientes.',
  },
  {
    icon: 'https://solutudo-cdn.s3-sa-east-1.amazonaws.com/prod/adv_ads/58dbb642-9bdc-40ce-b01f-2b1bac1f1da6/5fae795c-53f8-4539-94b6-52d8ac1e0664.png',
    title: 'Visão',
    text: 'Estruturar e sistematizar a empresa para ser 100% apta a atender todos os nossos clientes.',
  },
  {
    icon: 'https://solutudo-cdn.s3-sa-east-1.amazonaws.com/prod/adv_ads/58dbb642-9bdc-40ce-b01f-2b1bac1f1da6/5fae797c-f9d0-428d-a9aa-62b7ac1e0b25.png',
    title: 'Valores',
    text: 'Comprometimento, criatividade e técnica com o serviço prestado.',
  },
]

export function AttributesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {ATTRIBUTES.map(attr => (
          <div key={attr.title} className="flex flex-col items-center text-center">
            <Image
              src={attr.icon}
              alt={attr.title}
              width={80}
              height={80}
              className="mb-4 object-contain"
              unoptimized
            />
            <h3 className="font-bold text-base mb-2" style={{ color: '#333333' }}>
              {attr.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
              {attr.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
