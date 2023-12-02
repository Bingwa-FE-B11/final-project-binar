import React from 'react'

export const TestingPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='flex flex-col gap-4'>
            <button className='px-3 py-2 text-white bg-green rounded-xl'>Success Button</button>
            <button className='px-3 py-2 text-white bg-red-500 rounded-xl'>Error Button</button>
        </div>
    </div>
  )
}
