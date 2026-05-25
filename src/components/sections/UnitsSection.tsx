const UNITS = [
  {
    name: 'Loja - Nath Confecção e Uniformes',
    address: 'Rua Itambé, 134, Jardim Ipiranga, Americana, SP, 13468-560',
    phone: '(19) 3621-7448',
    whatsapp: '(19) 99954-6249',
    email: 'nath_modas@hotmail.com',
    hours: [
      'Segunda a sexta-feira das 9:00 às 18:00',
      'Sábado das 8:30 às 12:30',
    ],
    mapUrl: 'https://maps.google.com/maps?q=-22.75052740143373,-47.36010695098155',
  },
  {
    name: 'Fábrica - Nath Confecção e Uniformes',
    address: 'Rua Imigrantes, 218, Jardim Ipiranga, Americana, SP, 13468-550',
    phone: '(19) 3645-7448',
    whatsapp: '(19) 99793-2120',
    email: 'nath_modas@hotmail.com',
    hours: [
      'Segunda a quinta-feira das 7:00 às 17:00',
      'Sexta-feira das 7:00 às 16:00',
    ],
    mapUrl: 'https://maps.google.com/maps?q=-22.747960406639383,-47.35983498963727',
  },
]

export function UnitsSection() {
  return (
    <section id="contato" className="py-20 px-4" style={{ backgroundColor: '#231E1E' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {UNITS.map(unit => (
          <div key={unit.name}>
            <h3 className="text-lg font-bold text-white mb-4">{unit.name}</h3>
            <ul className="space-y-2 text-sm" style={{ color: '#CCCCCC' }}>
              <li>{unit.address}</li>
              <li>
                Telefone:{' '}
                <a
                  href={`tel:${unit.phone.replace(/\D/g, '')}`}
                  className="transition-opacity hover:opacity-75"
                  style={{ color: '#EA1B22' }}
                >
                  {unit.phone}
                </a>
              </li>
              <li>
                WhatsApp:{' '}
                <a
                  href={`https://wa.me/55${unit.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-75"
                  style={{ color: '#EA1B22' }}
                >
                  {unit.whatsapp}
                </a>
              </li>
              <li>
                E-mail:{' '}
                <a
                  href={`mailto:${unit.email}`}
                  className="transition-opacity hover:opacity-75"
                  style={{ color: '#EA1B22' }}
                >
                  {unit.email}
                </a>
              </li>
              {unit.hours.map(h => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <a
              href={unit.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-2 rounded text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#EA1B22' }}
            >
              Ver no mapa
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
