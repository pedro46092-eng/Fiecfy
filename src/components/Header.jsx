 import React from 'react';
import UserAvatar from './UserAvatar';

export default function Header({ searchTerm, setSearchTerm }) {
  const corinthiansLogo = "https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png";

  return (
    <header className="sticky top-0 z-10 bg-zinc-900/90 backdrop-blur-md p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center gap-4 w-full">
        <div className="flex gap-2 shrink-0">
          <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-zinc-400 hover:text-white">
            {'<'}
          </button>
          <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-zinc-400 hover:text-white">
            {'>'}
          </button>
        </div>

        <div className="relative flex items-center w-full max-w-md">
          <svg
            className="w-5 h-5 absolute left-3 text-zinc-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="O que você quer ouvir?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-800 text-white rounded-full pl-10 pr-10 py-2 text-sm outline-none border border-transparent focus:border-zinc-600 focus:bg-zinc-800/80 transition"
          />

          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 w-5 h-5 rounded-full bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-white flex items-center justify-center text-xs font-bold transition"
              title="Limpar busca"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button className="text-zinc-400 font-bold hover:text-white text-sm">
            Inscrever-se
          </button>
          <button className="bg-white text-black font-bold px-6 py-2 rounded-full text-sm hover:scale-105 transition">
            Entrar
          </button>
          <UserAvatar imgUrl={corinthiansLogo} />
        </div>
      </div>

      {searchTerm && (
        <p className="text-xs text-zinc-400 pl-2">
          Buscando por: <span className="text-white font-medium">{searchTerm}</span>
        </p>
      )}
    </header>
  );
}
