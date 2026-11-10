
import React, { useState } from 'react';

export default function Player() {
  const [curtido, setCurtido] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <footer className="h-20 bg-black border-t border-zinc-800 px-4 flex items-center justify-between text-white select-none shrink-0">

      <div className="flex items-center gap-3 w-1/3">
        <img
          src="https://i.ytimg.com/vi/rTJSWmgbVwA/maxresdefault.jpg"
          alt="Capa do álbum"
          className="w-14 h-14 rounded object-cover"
        />

        <div className="flex flex-col truncate">
          <span className="text-sm font-semibold truncate">
            Termina Comigo Antes
          </span>

          <span className="text-xs text-zinc-400 truncate">
            Gusttavo Lima
          </span>
        </div>

        <button
          onClick={() => setCurtido(!curtido)}
          className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold ${
            curtido
              ? 'bg-green-500 text-black'
              : 'text-zinc-400 border border-zinc-700'
          }`}
        >
          {curtido ? 'Curtiu' : 'Curtir'}
        </button>
      </div>

      <div className="flex flex-col items-center gap-1.5 w-1/3 max-w-[600px]">

        <div className="flex items-center gap-4">
          <button className="text-zinc-400">⏮</button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center"
            title={isPlaying ? "Pausar" : "Reproduzir"}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>

          <button className="text-zinc-400">⏭</button>
        </div>

        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-zinc-400 min-w-[30px] text-right">
            0:00
          </span>

          <div className="h-1 flex-1 bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full bg-white w-1/3 rounded-full"></div>
          </div>

          <span className="text-xs text-zinc-400 min-w-[30px]">
            3:07
          </span>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 w-1/3 text-zinc-400">
        <span className="text-xs">🔊</span>

        <div className="h-1 w-24 bg-zinc-700 rounded-full overflow-hidden">
          <div className="h-full bg-white w-2/3"></div>
        </div>
      </div>

    </footer>
  );
}
