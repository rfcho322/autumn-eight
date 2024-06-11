import InfoBar from '@/components/infobar'
import SidebarItems from '@/components/sidebar'
import React from 'react'

type Props = { children: React.ReactNode}

const layout = ({ children }: Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
        {/* Sidebar */}
        <SidebarItems />
        <div className='w-full'>
            <InfoBar />
            {children}
        </div>
    </div>
  )
}

export default layout