import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import React from 'react'

type Props = {
    credits: number
    tier: string
}

const CreditTracker = ({ credits, tier }: Props) => {
    console.log(credits);
    return (
        <div className="p-6">
            <Card className="p-6">
                <CardContent className="flex flex-col gap-6">
                    <CardTitle className="font-light">Credit Tracker</CardTitle>
                    <Progress
                        value={
                            tier == 'Hobby'
                                ? credits * 10
                                : tier == 'Pro'
                                    ? 100
                                    : credits
                        }
                        className="w-full"
                    />
                    <div className="flex justify-end">
                        <p>
                            {credits}/
                            {tier == 'Hobby' ? 10 : tier == 'Starter' ? 100 : 'Pro'}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CreditTracker