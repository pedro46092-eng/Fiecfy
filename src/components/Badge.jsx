 import React from 'react'

export default function Badge({ count }) {
  return (
    <span className="w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full items-center justify-center inline-flex">
      {count}
    </span>
  )
}
