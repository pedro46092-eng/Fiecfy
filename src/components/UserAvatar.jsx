import React from 'react'

export default function UserAvatar({ imgUrl }) {
  return (
    <img 
      src={imgUrl} 
      alt="Avatar do Usuário" 
      className="w-8 h-8 rounded-full object-cover border border-zinc-700 hover:scale-105 transition-transform cursor-pointer"
    />
  )
}