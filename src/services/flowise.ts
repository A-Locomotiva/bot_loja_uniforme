import { FlowiseResponse } from '@/types/chat'

export type BotType = 'insecure' | 'secure'

export async function sendMessage(question: string, bot: BotType = 'insecure'): Promise<string> {
  const response = await fetch(`/api/chat?bot=${bot}`, {
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
