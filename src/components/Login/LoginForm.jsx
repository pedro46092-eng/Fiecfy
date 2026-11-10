 import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Login:', { email, password });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
      <div className="flex flex-col items-center mb-6">
        <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">Formulário de Login</h3>
        <p className="text-xs text-zinc-400 mt-1">Insira suas credenciais para continuar</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">E-mail</label>
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-zinc-800/80 hover:bg-zinc-800 focus:bg-zinc-800 text-white rounded-lg px-4 py-2.5 text-sm outline-none border border-zinc-700/60 focus:border-green-500 transition-all placeholder:text-zinc-500"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">Senha</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-800/80 hover:bg-zinc-800 focus:bg-zinc-800 text-white rounded-lg px-4 py-2.5 text-sm outline-none border border-zinc-700/60 focus:border-green-500 transition-all placeholder:text-zinc-500"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-full text-sm transition-all transform active:scale-95 shadow-lg shadow-green-500/20"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
