import { useState, useCallback } from 'react'
import { Message } from '@/types/chat'
import { sendMessage, BotType } from '@/services/flowise'

export function useChat(bot: BotType = 'insecure') {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const addMessage = useCallback((role: Message['role'], content: string): Message => {
    const message: Message = {
      id: crypto.randomUUID(),
      role,
      content,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, message])
    return message
  }, [])

  const send = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return

    setError(null)
    addMessage('user', text)
    setIsLoading(true)

    try {
      const reply = await sendMessage(text, bot)
      addMessage('assistant', reply)
    } catch {
      setError('Não foi possível conectar ao assistente. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }, [isLoading, addMessage, bot])

  const clearMessages = useCallback(() => {
    setMessages([])
    setError(null)
  }, [])

  return { messages, isLoading, error, send, clearMessages }
}
