import React from 'react'
import DashboardWidget from './_components/dashboard-widget'

const DashboardPage = () => {
  return (
    <div className='flex flex-col gap-4 relative'>
      <h1 className='text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b'>
        Dashboard
      </h1>
      <div className='flex flex-col justify-between gap-9 p-6'>
        <DashboardWidget />
      </div>
    </div>
  )
}

export default DashboardPage