  import React from 'react';
 
 export default function LogoutButton() {
   const handleLogout = () => {
     // 1. Limpa os dados de sessão do navegador
     localStorage.removeItem('token');
     localStorage.removeItem('user');
 
     // 2. Redireciona para a tela de login
     window.location.href = '/login';
   };
 
   return (
     <button
       onClick={handleLogout}
       className="flex items-center gap-2 bg-zinc-800 hover:bg-red-600 text-white font-semibold text-xs py-2 px-4 rounded-full transition-colors duration-200"
     >
       <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
       </svg>
       <span>Sair</span>
     </button>
   );
 }