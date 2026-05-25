import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <Image
            src="https://solutudo-cdn.s3.sa-east-1.amazonaws.com/prod/adv_ads/58dbb642-9bdc-40ce-b01f-2b1bac1f1da6/65245715-fffc-416d-9d5e-42b7ac1e09ff.png"
            alt="Nath Confecções"
            width={560}
            height={400}
            className="rounded-xl w-full object-cover"
            unoptimized
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#333333' }}>
            Nath Confecções
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: '#666666' }}>
            A Nath Confecções é uma confecção especializada na fabricação de uniformes
            escolares e profissionais com personalização em bordados e estampas de última
            geração. São anos de experiência no mercado oferecendo um serviço de alta
            qualidade e com um atendimento personalizado.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: '#666666' }}>
            A empresa também conta com uma equipe de profissionais qualificados para
            realizar a personalização dos uniformes de acordo com as necessidades do cliente.
          </p>
          <p className="leading-relaxed" style={{ color: '#666666' }}>
            Além disso, a empresa também oferece o serviço de silk screen para a
            personalização!
          </p>
        </div>
      </div>
    </section>
  )
}
