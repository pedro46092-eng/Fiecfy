 import React, { useState } from 'react';
import SidebarItem from './SidebarItem';

const menuItems = [
  {
    id: 1,
    label: "Início",
    to: "/",
    icon: (
      <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h5v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6h5V7.577l-7.5-4.33z"/>
      </svg>
    ),
  },
  {
    id: 2,
    label: "Buscar",
    to: "/buscar",
    icon: (
      <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
  },
];

export default function Sidebar() {
  const [notificacoes, setNotificacoes] = useState(3);
  const [isExpanded, setIsExpanded] = useState(true);

  const playlists = [
    { id: 1, name: "Gusttavo Lima " },
    { id: 2, name: "Sertanejo 2026" },
    { id: 3, name: "Isadora Pompeo" },
  ];

  return (
    <aside className="hidden md:flex w-72 min-w-[288px] bg-zinc-950 p-4 flex-col gap-6 rounded-lg text-zinc-400 select-none">
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <SidebarItem key={item.id} label={item.label} to={item.to}>
            {item.icon}
          </SidebarItem>
        ))}

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800/40">
          <button
            onClick={() => setNotificacoes(0)}
            className="flex items-center gap-2 text-sm font-semibold hover:text-white transition-colors"
          >
            <span>Notificações</span>
            {notificacoes > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                {notificacoes}
              </span>
            )}
          </button>

          {notificacoes > 0 && (
            <button
              onClick={() => setNotificacoes(0)}
              className="text-xs text-zinc-500 hover:text-zinc-300 underline"
            >
              Limpar
            </button>
          )}
        </div>
      </nav>

      <div className="pt-4 border-t border-zinc-800/60 flex flex-col gap-4">
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm4-1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v18z"/>
            </svg>
            <span className="text-sm font-bold truncate">Sua Biblioteca</span>
          </div>

          <span className="text-xs">{isExpanded ? '▲' : '▼'}</span>
        </div>

        {isExpanded && (
          <ul className="flex flex-col gap-2 pl-2">
            {playlists.map((playlist) => (
              <li
                key={playlist.id}
                className="text-sm text-zinc-400 hover:text-white cursor-pointer transition-colors py-1 px-2 rounded hover:bg-zinc-900"
              >
                {playlist.name}
              </li>
            ))}
          </ul>
        )}

        <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-white">Crie sua primeira playlist</span>
            <span className="text-xs text-zinc-400">É fácil, vamos te ajudar.</span>
          </div>
          <button className="bg-white text-black text-xs font-bold py-2 px-4 rounded-full w-fit hover:scale-105 transition-transform active:scale-95">
            Criar playlist
          </button>
        </div>
      </div>
    </aside>
  );
}
