'use client'

import { useState } from 'react'
import { ChatWindow } from './ChatWindow'
import { BotType } from '@/services/flowise'

const TABS: { id: BotType; label: string; title: string; subtitle: string }[] = [
  {
    id: 'insecure',
    label: 'Sem Segurança',
    title: 'Assistente — Sem Segurança',
    subtitle: 'Fluxo padrão, sem restrições adicionais',
  },
  {
    id: 'secure',
    label: 'Com Segurança',
    title: 'Assistente — Com Segurança',
    subtitle: 'Fluxo com camadas de segurança ativadas',
  },
]

export function ChatTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-4">
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(i)}
            className={[
              'px-6 py-3 text-sm font-medium transition-colors focus:outline-none',
              activeTab === i
                ? 'border-b-2 border-red-600 text-red-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300',
            ].join(' ')}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {TABS.map((tab, i) => (
        <div key={tab.id} className={activeTab === i ? '' : 'hidden'}>
          <ChatWindow bot={tab.id} title={tab.title} subtitle={tab.subtitle} />
        </div>
      ))}
    </div>
  )
}
