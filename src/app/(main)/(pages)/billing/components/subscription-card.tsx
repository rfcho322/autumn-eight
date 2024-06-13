'use client'
import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Crown } from 'lucide-react'


type Props = {
    onPayment(id: string): void
    products: any[]
    tier: string
}

export const SubscriptionCard = ({ onPayment, products, tier }: Props) => {
    console.log(products)
    return (
        <section className="flex w-full justify-center md:flex-row flex-col gap-6">
            {products &&
                products.map((product: any) => (
                    <Card
                        className="p-3"
                        key={product.id}
                    >
                        <CardHeader>
                            <CardTitle>
                                <span className='flex items-center gap-2'>{product.nickname} {product.nickname == 'Pro' && <Crown className='fill-orange-500 stroke-orange-500' />}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-5">
                            <CardDescription>
                                {product.nickname == 'Pro'
                                    ? 'Take your automation game to the next level with our Pro plan, designed for businesses and power users who demand the best.'
                                    : product.nickname == 'Starter'
                                        ? 'Dive deeper into automation with our Starter plan, perfect for individuals and small teams looking to streamline their workflows.'
                                        : product.nickname == 'Hobby' &&
                                        "Get a glimpse of what our software is capable of. Just a heads up - you'll never want to leave us after this!"}
                            </CardDescription>
                            <div className="flex justify-between">
                                <p>
                                    {product.nickname == 'Hobby'
                                        ? '10'
                                        : product.nickname == 'Starter'
                                            ? '100'
                                            : product.nickname == 'Pro' && 'Unlimited'}{' '}
                                    credits
                                </p>
                                <p className="font-bold">
                                    {product.nickname == 'Hobby'
                                        ? 'Hobby'
                                        : product.nickname == 'Starter'
                                            ? '9.99'
                                            : product.nickname == 'Pro' && '29.99'}
                                    /mo
                                </p>
                            </div>
                            {product.nickname == tier ? (
                                <Button
                                    disabled
                                    variant="outline"
                                >
                                    Active
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => onPayment(product.id)}
                                    variant="outline"
                                >
                                    Purchase
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
        </section>
    )
}