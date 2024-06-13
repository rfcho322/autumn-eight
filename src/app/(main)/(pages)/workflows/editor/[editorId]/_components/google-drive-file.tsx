'use client'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import axios from 'axios'
import { getGoogleListener } from '../../../_actions/workflow-connections'
import { Card, CardDescription } from '@/components/ui/card'
import { CardContainer } from '@/components/global/3d-card'
import { Button } from '@/components/ui/button'
import CanvasLoader from '@/components/icons/canvasLoader'

type Props = {}

const GoogleDriveFiles = (props: Props) => {
    const [loading, setLoading] = useState(false)
    const [isListening, setIsListening] = useState(false)

    const reqGoogle = async () => {
        setLoading(true)
        const response = await axios.get('/api/drive-activity')
        if (response) {
            toast.message(response.data)
            setLoading(false)
            setIsListening(true)
        }
        setIsListening(false)
    }

    const onListener = async () => {
        const listener = await getGoogleListener()
        if (listener?.googleResourceId !== null) {
            setIsListening(true)
        }
    }

    useEffect(() => {
        onListener()
    }, [])

    return (
        <div className="flex flex-col gap-3 pb-6">
            {isListening ? (
                <Card className="py-3">
                    <CardContainer>
                        <CardDescription>Listening...</CardDescription>
                    </CardContainer>
                </Card>
            ) : (
                <Button
                    variant="outline"
                    {...(!loading && {
                        onClick: reqGoogle,
                    })}
                >
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <CanvasLoader />
                        </div>
                    ) : (
                        'Create Listener'
                    )}
                </Button>
            )}
        </div>
    )
}

export default GoogleDriveFiles