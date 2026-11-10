 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const logoFiecfy = "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' viewBox='0 0 24 24' fill='none' stroke='%2322c55e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 2v20M17 5v14M22 8v8M7 8v8M2 10v4'/></svg>";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      
      const response = await axios.post(`${apiUrl}/login`, {
        email: email,
        password: password
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        toast.success('Login efetuado com sucesso!');
        navigate('/');
      } else {
        toast.error('Erro ao processar autenticação.');
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error('E-mail ou senha incorretos!');
      } else {
        toast.error('Erro ao conectar com o servidor back-end.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center font-sans px-4">
      <div className="flex flex-col items-center gap-2 mb-6">
        <img 
          src={logoFiecfy} 
          alt="Fiecfy Logo" 
          className="w-16 h-16 object-contain"
        />
        <h1 className="text-3xl font-bold tracking-tighter text-green-500">Fiecfy</h1>
      </div>

      <div className="w-full max-w-md bg-zinc-900 rounded-lg p-8 shadow-xl border border-zinc-800">
        <h2 className="text-2xl font-bold mb-6 text-center">Entrar no Fiecfy</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">E-mail</label>
            <input 
              type="email" 
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-zinc-800 text-white p-3 rounded border border-zinc-700 focus:outline-none focus:border-green-500 text-sm transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Senha</label>
            <input 
              type="password" 
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-zinc-800 text-white p-3 rounded border border-zinc-700 focus:outline-none focus:border-green-500 text-sm transition-all"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="bg-green-500 text-black font-bold p-3 rounded-full mt-4 hover:scale-104 transition-all uppercase tracking-wider text-sm disabled:opacity-50"
          >
            {loading ? 'Carregando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
