 import React from 'react'

export default function Greeting({ name }) {
  return (
    <h1 className='text-3xl font-bold tracking-tight text-white mb-6'>
      Boa tarde, { name }
    </h1>
  )
}
