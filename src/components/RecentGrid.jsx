 import React from 'react'

const recentItems = [
  { id: 1, title: 'Gusttavo Lima', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8D9mF6vnsxDydyKsSxB3P-4r5r3HJSsuItPCEX_xOg&s' },
  { id: 2, title: 'Top Brasil', image: 'https://i.scdn.co/image/ab67706f00000002b58be9f503ac8aab0466f13f' },
  { id: 3, title: 'Sertanejo 2026', image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c9eaf4b208effbf9c35a02c34' },
  { id: 4, title: 'Ana Castela', image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c70089e8090d11dab7033d8fb' },
  { id: 5, title: 'Funk Hits', image: 'https://i.scdn.co/image/ab67706f0000000263fa2a70bd2e522e00edfbce' },
  { id: 6, title: 'Músicas Curtidas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0OWl5ZzytOGBldxIALzH4WdhIy2PnI6LUceXlO1Fqg&s=10' },
]

export default function RecentGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
      {recentItems.map((item) => (
        <div 
          key={item.id}
          className="bg-white/10 hover:bg-white/20 transition-colors rounded-md flex items-center gap-4 overflow-hidden group cursor-pointer h-16"
        >
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-16 h-16 object-cover shrink-0" 
          />

          <span className="font-bold text-sm text-white truncate flex-1">
            {item.title}
          </span>

          <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity mr-4 shrink-0 hover:scale-105 active:scale-95">
            <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}
