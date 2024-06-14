'use client'
import CanvasLoader from '@/components/icons/canvasLoader';
import { useBilling } from '@/providers/billing-provider';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SubscriptionCard } from './subscription-card';
import CreditTracker from './credits-tracker';
import { Skeleton } from "@/components/ui/skeleton"
import { Card } from '@/components/ui/card';


type Props = {}

const BillingDashboard = (props: Props) => {
    const { credits, tier } = useBilling();
    const [stripeProducts, setStripeProducts] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false);

    const onStripeProducts = async () => {
        setLoading(true)
        const { data } = await axios.get('/api/payment')
        if (data) {
            setStripeProducts(data)
            setLoading(false)
        }
    }

    useEffect(() => {
        onStripeProducts()
    }, [])

    const onPayment = async (id: string) => {
        const { data } = await axios.post('/api/payment',
            {
                priceId: id,
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        window.location.assign(data)
    }

    return (
        <>
            {loading ? (
                <div className="flex flex-col justify-between gap-9 p-6">
                    {/* <CanvasLoader /> */}
                    <div className='flex w-full justify-between md:flex-row flex-col gap-6'>
                        <Skeleton className='bg-card border-none p-6 space-y-6 w-[450px]'>
                            <div>
                                <Skeleton className='h-4 w-[75px]' />
                            </div>
                            <div className="space-y-6">
                                <div className='space-y-2'>
                                    <Skeleton className="h-4" />
                                    <Skeleton className="h-4" />
                                    <Skeleton className="h-4 w-[100px]" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <Skeleton className="h-4 w-[100px]" />
                                    <Skeleton className="h-4 w-[75px]" />
                                </div>
                                <Skeleton className="h-8" />
                            </div>
                        </Skeleton>
                        <Skeleton className='bg-card border-none p-6 space-y-6 w-[450px]'>
                            <div>
                                <Skeleton className='h-4 w-[75px]' />
                            </div>
                            <div className="space-y-6">
                                <div className='space-y-2'>
                                    <Skeleton className="h-4" />
                                    <Skeleton className="h-4" />
                                    <Skeleton className="h-4 w-[100px]" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <Skeleton className="h-4 w-[100px]" />
                                    <Skeleton className="h-4 w-[75px]" />
                                </div>
                                <Skeleton className="h-8" />
                            </div>
                        </Skeleton>
                        <Skeleton className='bg-card border-none p-6 space-y-6 w-[450px]'>
                            <div>
                                <Skeleton className='h-4 w-[75px]' />
                            </div>
                            <div className="space-y-6">
                                <div className='space-y-2'>
                                    <Skeleton className="h-4" />
                                    <Skeleton className="h-4" />
                                    <Skeleton className="h-4 w-[100px]" />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <Skeleton className="h-4 w-[100px]" />
                                    <Skeleton className="h-4 w-[75px]" />
                                </div>
                                <Skeleton className="h-8" />
                            </div>
                        </Skeleton>
                    </div>
                    <Skeleton className='bg-card border-none p-6 space-y-6 w-full'>
                        <div>
                            <Skeleton className='h-4 w-[100px]' />
                        </div>
                        <div className="space-y-6">
                            <Skeleton className="h-6 rounded-full" />
                            <Skeleton className="h-4 w-[100px] float-right" />
                        </div>
                    </Skeleton>
                </div>
            ) : (
                <>
                    <div className='flex gap-5 p-6'>
                        <SubscriptionCard
                            onPayment={onPayment}
                            tier={tier}
                            products={stripeProducts}
                        />
                    </div>
                    <CreditTracker
                        tier={tier}
                        credits={parseInt(credits)}
                    />
                </>
            )
            }
        </>
    )
}

export default BillingDashboard