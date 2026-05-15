'use client'

import { useChat } from '@/hooks/useChat'
import { MessageList } from './MessageList'
import { ChatInput } from './ChatInput'

export function ChatWindow() {
  const { messages, isLoading, error, send } = useChat()

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto border border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-white">
      <div className="bg-red-600 text-white px-6 py-4">
        <h2 className="font-semibold text-lg">Assistente Nath Confecções</h2>
        <p className="text-red-100 text-sm">Tire suas dúvidas sobre nossos produtos</p>
      </div>

      <MessageList messages={messages} isLoading={isLoading} />

      {error && (
        <div className="px-4 py-2 bg-red-50 border-t border-red-100 text-red-600 text-sm text-center">
          {error}
        </div>
      )}

      <ChatInput onSend={send} disabled={isLoading} />
    </div>
  )
}
