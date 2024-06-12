import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Input } from '../ui/input'
import { Book, Headphones, Search } from 'lucide-react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { ModeToggle } from '../global/mode-toggle'

type Props = {}

const InfoBar = (props: Props) => {
    return (
        <div className='flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black'>
            <span className='flex items-center bg-muted px-4 rounded-full'>
                <Search />
                <Input placeholder='Quick Search' className='border-none focus-visible:ring-offset-0 focus-visible:!ring-0 bg-transparent' />
            </span>
            {/* HELP!! XD */}
            <ModeToggle />
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                        <Headphones />
                    </TooltipTrigger>
                    <TooltipContent side='bottom'>
                        <p>Contact Support</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                        <Book />
                    </TooltipTrigger>
                    <TooltipContent side='bottom'>
                        <p>Guide</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton />
            </SignedIn>
        </div>
    )
}

export default InfoBar