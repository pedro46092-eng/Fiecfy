 import React from 'react'

export default function ProfileBadge() {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="https://i.pravatar.cc/100" 
        alt="Avatar" 
        className="w-8 h-8 rounded-full"
      />
      <p className="text-sm font-medium text-white">Meu perfil</p>
    </div>
  );
}
