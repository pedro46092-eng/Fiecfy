 import React from 'react';

const generos = ["Rock", "Pop", "Samba", "Jazz", "Indie"];

export default function Generos() {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {generos.map((genero) => (
        <span
          key={genero}
          className="px-3 py-1 text-sm font-medium text-white bg-slate-700 rounded-full"
        >
          {genero}
        </span>
      ))}
    </div>
  );
}
