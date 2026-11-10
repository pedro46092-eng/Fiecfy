 import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      // URL da API configurada no arquivo .env (VITE_API_URL)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        email,
        password,
      });

      // Salva o token do Sanctum e os dados do usuário no localStorage
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }

      // Redireciona para a Home / Dashboard protegida
      navigate('/');
    } catch (err) {
      console.error('Erro no login:', err);
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMsg(err.response.data.message);
      } else {
        setErrorMsg('Falha ao conectar com o servidor. Verifique se o Back-end está rodando.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between items-center px-4 font-sans selection:bg-[#1DB954] selection:text-black">
      {/* Header com a Logo Fiecfy */}
      <header className="w-full max-w-7xl py-8 flex justify-start items-center border-b border-[#292929]/50">
        <div className="flex items-center gap-2">
          {/* Ícone SVG da marca */}
          <svg className="h-10 w-auto fill-[#1DB954]" viewBox="0 0 167.5 167.5">
            <path d="M83.7 0C37.5 0 0 37.5 0 83.7c0 46.3 37.5 83.7 83.7 83.7 46.3 0 83.7-37.5 83.7-83.7C167.5 37.5 130 0 83.7 0zm38.4 121.6c-1.5 2.5-4.8 3.2-7.3 1.7-20-12.2-45.2-15-74.9-8.2-2.8.6-5.7-1.2-6.3-4-.6-2.8 1.2-5.7 4-6.3 32.6-7.5 60.5-4.2 82.8 9.5 2.5 1.5 3.3 4.8 1.7 7.3zm10.3-22.9c-1.9 3-5.9 4-8.9 2.1-22.9-14.1-57.8-18.2-84.9-10-3.4 1-6.9-1-7.9-4.3-1-3.4 1-6.9 4.3-7.9 30.9-9.4 69.4-4.8 95.3 11.2 3 1.9 4 5.9 2.1 8.9zm.9-23.8C105.8 58.7 60.5 57.2 34.1 65.2c-4.2 1.3-8.6-1.1-9.9-5.3-1.3-4.2 1.1-8.6 5.3-9.9 30.3-9.2 80.5-7.5 110.8 10.5 3.8 2.3 5 7.2 2.7 11-2.3 3.7-7.2 5-11 2.7z"/>
          </svg>
          <span className="text-2xl font-bold tracking-tight text-white">Fiecfy</span>
        </div>
      </header>

      {/* Card do Formulário */}
      <main className="w-full max-w-md bg-[#121212] p-8 md:p-12 rounded-xl my-8 shadow-2xl border border-[#282828]">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 tracking-tight">
          Entrar no Fiecfy
        </h1>

        {/* Mensagem de Erro */}
        {errorMsg && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm flex items-center gap-2">
            <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Campo E-mail */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-zinc-300">
              E-mail ou nome de usuário
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail ou nome de usuário"
              className="w-full bg-[#121212] text-white border border-zinc-600 rounded-md p-3 text-sm focus:outline-none focus:border-white transition hover:border-zinc-400"
            />
          </div>

          {/* Campo Senha */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-zinc-300">
              Senha
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              className="w-full bg-[#121212] text-white border border-zinc-600 rounded-md p-3 text-sm focus:outline-none focus:border-white transition hover:border-zinc-400"
            />
          </div>

          {/* Botão de Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-3.5 px-4 rounded-full transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm uppercase tracking-wider mt-4"
          >
            {loading ? (
              <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent" />
            ) : (
              'Entrar'
            )}
          </button>
        </form>

        <div className="border-t border-zinc-800 my-8"></div>

        {/* Link para Cadastro */}
        <p className="text-center text-zinc-400 text-sm">
          Não tem uma conta?{' '}
          <Link to="/register" className="text-white hover:text-[#1DB954] font-semibold underline underline-offset-2 transition">
            Inscrever-se no Fiecfy
          </Link>
        </p>
      </main>

      {/* Footer simples */}
      <footer className="w-full py-6 text-center text-xs text-zinc-500">
        <p>Projeto FIEC — Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}