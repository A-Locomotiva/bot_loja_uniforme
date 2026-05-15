import { FlowiseResponse } from '@/types/chat'

export async function sendMessage(question: string): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
  })

  if (!response.ok) {
    throw new Error(`Erro ao contatar o assistente: ${response.status}`)
  }

  const data: FlowiseResponse = await response.json()
  return data.text
}
