 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header({ searchTerm, setSearchTerm }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Tenta obter o utilizador logado
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'Utilizador' };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <header className="flex items-center justify-between p-4 bg-[#121212] sticky top-0 z-20 gap-4">
      {/* Botões de Navegação (< >) */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => navigate(-1)}
          className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-zinc-400 hover:text-white transition hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => navigate(1)}
          className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-zinc-400 hover:text-white transition hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Barra de Pesquisa */}
      <div className="flex-1 max-w-md relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="O que você quer ouvir?"
          className="w-full bg-[#242424] text-white text-sm rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/20 transition placeholder-zinc-400 hover:bg-[#2a2a2a]"
        />
      </div>

      {/* Perfil do Utilizador + Menu de Logout */}
      <div className="relative shrink-0">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 bg-black/70 hover:scale-105 p-1 pr-3 rounded-full transition cursor-pointer"
        >
          {/* Avatar com a inicial do utilizador */}
          <div className="w-7 h-7 rounded-full bg-[#535353] text-white flex items-center justify-center font-bold text-xs">
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <span className="text-sm font-bold text-white truncate max-w-[100px]">
            {user.name}
          </span>
          <svg className={`w-4 h-4 text-white transition-transform ${menuOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>

        {/* Menu Suspenso (Dropdown) do Spotify */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[#282828] rounded-md shadow-2xl p-1 z-30 border border-zinc-700/50">
            <div className="px-3 py-2 text-xs text-zinc-400 border-b border-zinc-700/50">
              Conta de <strong className="text-white">{user.name}</strong>
            </div>
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 text-sm text-zinc-200 hover:bg-[#3e3e3e] hover:text-white rounded transition flex items-center justify-between mt-1"
            >
              <span>Sair</span>
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}