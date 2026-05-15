export function ContactSection() {
  return (
    <section id="contato" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Entre em <span className="text-red-600">Contato</span>
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Tem dúvidas? Fale com a gente pelo WhatsApp ou pelo nosso assistente virtual.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="/chat"
            className="bg-red-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-red-700 transition-colors"
          >
            Assistente Virtual
          </a>
        </div>
      </div>
    </section>
  )
}
