'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { sidebarItems } from '@/lib/constants'
import clsx from 'clsx'
import { Separator } from '../ui/separator'
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import { ModeToggle } from '../global/mode-toggle'
  

type Props = {}

const SidebarItems = (props: Props) => {
    const pathName = usePathname();
    return (
        <nav className='dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2'>
            <div className='flex items-center justify-center flex-col gap-8'>
                <Link 
                    className='flex font-bold flex-row text-sm'
                    href="/"
                >
                    Autumn8
                </Link>
                <TooltipProvider>
                    {sidebarItems.map((sidebarItem) => (
                        <ul key={sidebarItem.name}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link href={sidebarItem.href}
                                            className={clsx('group h-6 w-6 flex items-center justify-center scale-[1.5] rounded-md p-[3px] cursor-pointer', {
                                                'dark:bg-[#ea580c] bg-[#fed7aa]' : pathName === sidebarItem.href,
                                            })}
                                        >
                                            <sidebarItem.Component selected={pathName === sidebarItem.href}/>
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                                <TooltipContent side='right'
                                    className='bg-black/10 backdrop-blur-xl'
                                >
                                    <p>{sidebarItem.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </ul>
                    ))}
                    {/* <Tooltip>
                        <TooltipTrigger>
                            <div className='group h-6 w-6 flex items-center justify-center scale-[1.5] rounded-sm p-[3px] cursor-pointer dark:bg-[#c2410c] bg-[#EEE0FF]'>
                                <Home selected={true} />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            <p>Add to library</p>
                        </TooltipContent>
                    </Tooltip> */}
                </TooltipProvider>
                <Separator />
                <div className='flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]'>
                    <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
                        <LucideMousePointerClick className='dark:text-white' size={18} />
                        <div className='border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]'/>
                    </div>
                    <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
                        <GitBranch className='dark:text-white' size={18} />
                        <div className='border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]'/>
                    </div>
                    <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
                        <Database className='dark:text-white' size={18} />
                        <div className='border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]'/>
                    </div>
                    <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
                        <GitBranch className='dark:text-white' size={18} />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center flex-col gap-8'>
                <ModeToggle />
            </div>
        </nav>
    )
}

export default SidebarItems