'use client'
import React, { useEffect } from 'react'
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
import { useBilling } from '@/providers/billing-provider'
import { onPaymentDetails } from '@/app/(main)/(pages)/billing/_actions/payment-details'

type Props = {}

const InfoBar = (props: Props) => {
    const { credits, tier, setCredits, setTier } = useBilling();
    const onGetPayment = async () => {
        const response = await onPaymentDetails()
        if (response) {
            setTier(response.tier!)
            setCredits(response.credits!)
        }
    }

    useEffect(() => {
        onGetPayment()
    }, [])

    return (
        <div className='flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black'>
            <span className='flex items-center gap-2 font-bold bg-orange-500 rounded-full px-3 py-1'>
                <p className='text-sm font-light text-foreground'>Credits</p>
                {
                    tier == 'Unlimited' ? (
                        <span>Pro</span>
                    ) : (
                        <span className='text-foreground'>
                            {credits}/{tier == 'Hobby' ? '10' : tier == 'Starter' && '100'}
                        </span>
                    )
                }
            </span>
            <span className='flex items-center bg-muted px-4 rounded-full'>
                <Search />
                <Input placeholder='Quick Search' className='border-none focus-visible:ring-offset-0 focus-visible:!ring-0 bg-transparent' />
            </span>
            {/* DARK MODE TOGGLE DROPDOWN */}
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