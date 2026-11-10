 import React from 'react'

export default function CompactCard({ title, imgUrl, customIcon, bgGradient }) {
  return (
    <div className="bg-white/10 hover:bg-white/20 transition-colors rounded-md flex flex-row items-center gap-4 overflow-hidden group cursor-pointer h-16 relative">
      {customIcon ? (
        <div className={`w-16 h-16 shrink-0 flex items-center justify-center ${bgGradient || 'bg-gradient-to-br from-indigo-600 to-purple-800'}`}>
          {customIcon}
        </div>
      ) : (
        <img 
          src={imgUrl} 
          alt={title} 
          className="w-16 h-16 object-cover shrink-0" 
        />
      )}

      <span className="font-bold text-sm text-white truncate pr-4 flex-1">
        {title}
      </span>

      <button className="absolute right-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-xl hover:scale-105">
        <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  )
}
