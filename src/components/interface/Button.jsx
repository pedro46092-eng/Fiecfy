 import React from 'react'

export default function Button({ children }) {
  return (
    <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer">
      {children}
    </button>
  )
}
