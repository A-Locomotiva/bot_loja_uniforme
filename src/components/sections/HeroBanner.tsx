'use client'

import { useState, useEffect } from 'react'

const SLIDES = [
  {
    image: 'https://solutudo-cdn.s3-sa-east-1.amazonaws.com/prod/adv_ads/58dbb642-9bdc-40ce-b01f-2b1bac1f1da6/65243930-c458-426b-98ae-17acac1e09ff.png',
    title: 'NATH CONFECÇÕES E UNIFORMES',
    subtitle: 'Processo de impressão Silk-Screen',
  },
  {
    image: 'https://solutudo-cdn.s3-sa-east-1.amazonaws.com/prod/adv_ads/58dbb642-9bdc-40ce-b01f-2b1bac1f1da6/1de8444d-a189-4222-8328-812191ae78d0.png',
    title: 'NATH CONFECÇÕES E UNIFORMES',
    subtitle: 'Sua melhor opção em uniformes profissionais e escolares',
  },
]

export function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const slide = SLIDES[current]

  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1
          className="font-display text-white mb-4 leading-tight"
          style={{ fontSize: 'clamp(27.2px, 5vw, 40px)', letterSpacing: '0.02em' }}
        >
          {slide.title}
        </h1>
        <p className="text-white text-lg mb-10 max-w-xl">
          {slide.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/5519999546249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded text-white font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#EA1B22' }}
          >
            Solicitar Orçamento
          </a>
          <a
            href="/chat"
            className="inline-block px-8 py-3 rounded text-white font-semibold text-sm border border-white transition-colors hover:bg-white hover:text-gray-900"
          >
            Falar com Assistente
          </a>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="w-3 h-3 rounded-full transition-all"
            style={{ backgroundColor: i === current ? '#EA1B22' : 'rgba(255,255,255,0.5)' }}
          />
        ))}
      </div>
    </section>
  )
}
