 import React from 'react'

export default function PlaylistCard({ title, description, imgUrl }) {
  return (
    <div className="bg-zinc-900/40 hover:bg-zinc-800/80 p-3 rounded-md transition-all duration-200 group cursor-pointer flex flex-col relative">
      <div className="relative mb-3 w-full aspect-square">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover rounded-md shadow-md"
        />
        
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 translate-y-2 group-hover:translate-y-0 shadow-xl">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
      
      <h3 className="font-bold text-white text-sm truncate mb-1">
        {title}
      </h3>
      <p className="text-zinc-400 text-xs truncate">
        {description}
      </p>
    </div>
  );
}
