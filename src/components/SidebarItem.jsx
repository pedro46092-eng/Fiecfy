 import React from 'react'
import { Link } from 'react-router-dom'  

export default function SidebarItem({ label, to = "#", children }) {
  return (
    <Link 
      to={to}  
      className="flex items-center gap-4 text-sm font-bold text-zinc-400 hover:text-white transition-colors group whitespace-nowrap overflow-hidden"
    >
      {children}
      <span className="truncate">{label}</span>
    </Link>
  )
}
