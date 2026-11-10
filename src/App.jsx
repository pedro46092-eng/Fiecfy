 import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Componentes de Layout
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

// Componente do Player
import Player from './components/Player/Player';

// Componentes de Playlists
import RecentGrid from './components/Playlists/RecentGrid';
import ListaGenero from './components/Playlists/ListaGenero';
import PlaylistGrid from './components/Playlists/PlaylistGrid';

// Páginas e Contexto (ajustado para as tuas pastas 'Pages' e 'Context')
import Login from './Pages/Login'; 
import { PlayerProvider } from './Context/PlayerContext.jsx';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function LogoutButtonInline() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <button 
      onClick={handleLogout}
      className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full hover:scale-105 transition cursor-pointer"
    >
      Sair
    </button>
  );
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden font-sans">
      <div className="flex flex-1 overflow-hidden p-2 gap-2">
        <aside className="w-64 bg-black flex flex-col shrink-0">
          <Sidebar />
        </aside>

        <main className="flex-1 bg-zinc-900 rounded-lg overflow-y-auto flex flex-col">
          <Header 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            rightAction={<LogoutButtonInline />} 
          />

          <div className="p-6 flex flex-col gap-8 pb-24">
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Boa tarde</h2>
              <RecentGrid searchTerm={searchTerm} />
            </section>

            <section>
              <ListaGenero />
            </section>

            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold tracking-tight hover:underline cursor-pointer">
                  Focado para você
                </h2>
                <span className="text-xs font-bold text-zinc-400 hover:underline cursor-pointer">
                  Mostrar tudo
                </span>
              </div>
              <PlaylistGrid searchTerm={searchTerm} />
            </section>
          </div>
        </main>
      </div>

      <footer className="h-20 bg-black shrink-0 z-20">
        <Player />
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <PlayerProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <ToastContainer theme="dark" position="top-right" autoClose={3000} />
    </PlayerProvider>
  );
}