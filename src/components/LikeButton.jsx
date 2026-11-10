 import React, { useState } from 'react';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`px-4 py-2 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${
        liked
          ? 'bg-green-500 text-black hover:bg-green-400'
          : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
      }`}
    >
      <svg
        className={`w-4 h-4 ${liked ? 'fill-black' : 'fill-none stroke-current'}`}
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      {liked ? 'Curtido' : 'Curtir'}
    </button>
  );
}
