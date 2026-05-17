import { ChatTabs } from '@/components/chat/ChatTabs'

export const metadata = {
  title: 'Assistente Virtual — Nath Confecções',
  description: 'Tire suas dúvidas com nosso assistente virtual',
}

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Assistente Virtual</h1>
          <p className="text-gray-500 mt-2">Tire suas dúvidas sobre produtos, tamanhos e pedidos</p>
        </div>
        <ChatTabs />
      </div>
    </main>
  )
}
