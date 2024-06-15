import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import Discord from '@/components/icons/discord'
import { Check } from 'lucide-react'

type Props = {}

const DashboardWidget = async (props: Props) => {

    const user = await currentUser();
    const progressPercentage = (7 / 10) * 100;

    const cards = [1, 2, 3, 4]

    return (
        <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-3 lg:col-span-2 grid grid-cols-2 gap-6 self-start'>
                <Card className='col-span-2 lg:col-span-1'>
                    <div className='flex justify-between gap-5 p-5'>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <CardTitle>Welcome, {user?.firstName}</CardTitle>
                                <CardDescription>Automate your message in one-click.</CardDescription>
                            </div>
                            <Button className='w-fit'>Go to workflows</Button>
                        </div>
                        <Image
                            src="/dashboard-image.svg"
                            alt="dashboard image"
                            width={200}
                            height={200}
                        />
                    </div>
                </Card>
                <Card className='col-span-2 lg:col-span-1'>
                    <div className='flex flex-col justify-between gap-6 p-5 h-full'>
                        <div className='flex items-center justify-between'>
                            <CardTitle className='text-card-foreground/80'>Current Plan</CardTitle>
                            <p className='text-card-foreground text-3xl font-bold'>Hobby</p>
                        </div>
                        <div className=''>
                            <p className='text-foreground text-2xl'>7/10</p>
                            <div className='h-4 bg-white rounded-full mt-2'>
                                <div
                                    className='h-full bg-orange-500 rounded-full'
                                    style={{ width: `${progressPercentage}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <Card className='col-span-3 lg:col-span-1'>
                <div className='flex flex-col justify-between gap-6 p-5 h-full'>
                    <div className=''>
                        <CardTitle className='text-card-foreground/80'>Connections</CardTitle>
                    </div>
                    <div className='flex flex-col gap-6'>
                        {/* TODO CHANGE LOGOS FOR SLACK, NOTION, GOOGLE */}
                        {cards.map((card, index) => (
                            <div key={index} className='flex justify-between items-center'>
                                <div className='flex items-center gap-4'>
                                    <span className='h-5 w-5 flex items-center justify-center scale-[1.5] rounded p-[3px] bg-orange-300'>
                                        <Discord />
                                    </span>
                                    <div className='flex flex-col'>
                                        <p className='text-foreground font-bold'>Discord</p>
                                        <small className='text-foreground/80'>Automate messaging on Discord.</small>
                                    </div>
                                </div>
                                <span className='h-4 w-4 flex items-center justify-center scale-[1.5] rounded p-[3px] bg-gray-800'>
                                    <Check className='stroke-green-500' />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default DashboardWidget