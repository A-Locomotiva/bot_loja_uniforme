import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const flowiseUrl = process.env.FLOWISE_URL
  const bot = req.nextUrl.searchParams.get('bot')
  const chatflowId =
    bot === 'secure'
      ? process.env.FLOWISE_CHATFLOW_ID_SECURE
      : process.env.FLOWISE_CHATFLOW_ID

  if (!flowiseUrl || !chatflowId) {
    return NextResponse.json(
      { error: 'Variáveis de ambiente do Flowise não configuradas.' },
      { status: 500 }
    )
  }

  try {
    const res = await fetch(
      `${flowiseUrl}/api/v1/prediction/${chatflowId}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    )

    if (!res.ok) {
      throw new Error(`Flowise retornou status ${res.status}`)
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Não foi possível conectar ao assistente.' },
      { status: 502 }
    )
  }
}
