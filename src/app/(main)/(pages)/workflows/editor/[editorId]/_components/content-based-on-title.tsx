import { AccordionContent } from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { onContentChange } from '@/lib/editor-utils'
import { NodeMapper } from '@/lib/types'
import { ConnectionProviderProps } from '@/providers/connections-provider'
import { EditorState } from '@/providers/editor-provider'
import React, { useEffect } from 'react'
import GoogleFileDetails from './google-file-details'
import GoogleDriveFiles from './google-drive-file'
import ActionButton from './action-button'
import { getFileMetaData } from '@/app/(main)/(pages)/connections/_actions/google-connections'
import { toast } from 'sonner'
import axios from 'axios'

export interface Option {
    value: string
    label: string
    disable?: boolean
    fixed?: boolean // fixed option that can't be removed
    [key: string]: string | boolean | undefined // Group the options by provided key
}
interface GroupOption {
    [key: string]: Option[]
}

type Props = {
    nodeConnection: ConnectionProviderProps
    newState: EditorState
    file: any
    setFile: (file: any) => void
    selectedSlackChannels: Option[]
    setSelectedSlackChannels: (value: Option[]) => void
}

const ContentBasedOnTitle = ({
    nodeConnection,
    newState,
    file,
    setFile,
    selectedSlackChannels,
    setSelectedSlackChannels,
}: Props) => {

    const { selectedNode } = newState.editor
    const title = selectedNode.data.title

    useEffect(() => {
        const reqGoogle = async () => {
            const response: { data: { message: { files: any } } } = await axios.get(
                '/api/drive'
            )
            if (response) {
                console.log(response.data.message.files[0])
                toast.message("File is fetched")
                setFile(response.data.message.files[0])
            } else {
                toast.error('Something went wrong')
            }
        }
        reqGoogle()
    }, [])

    // @ts-ignore
    const nodeConnectionType: any = nodeConnection[NodeMapper[title]]
    if (!nodeConnectionType) return <p>Not connected</p>

    const isConnected =
        title === 'Google Drive'
            ? !nodeConnection.isLoading
            : !!nodeConnectionType[
            `${title === 'Slack'
                ? 'slackAccessToken'
                : title === 'Discord'
                    ? 'webhookURL'
                    : title === 'Notion'
                        ? 'accessToken'
                        : ''
            }`
            ]

    if (!isConnected) return <p>Not connected</p>

    return (
        <AccordionContent>
            <Card>
                {title === 'Discord' && (
                    <CardHeader>
                        <CardTitle>{nodeConnectionType.webhookName}</CardTitle>
                        <CardDescription>{nodeConnectionType.guildName}</CardDescription>
                    </CardHeader>
                )}
                <div className='flex flex-col gap-3 px-6 py-3 pb-20'>
                    {/* NEEDS CHANGE GO TO NOTEPAD */}
                    <p>{title === 'Notion' ? 'Values to be stored' : 'Message'}</p>
                    {title === 'Discord' || title === 'Slack' ? (
                        <Input
                            type='text'
                            value={nodeConnectionType.content}
                            onChange={(event) => onContentChange(nodeConnection, title, event)}
                        />
                    ) : null}
                    {JSON.stringify(file) !== '{}' && title !== 'Google Drive' && (
                        <Card className="w-full">
                            <CardContent className="px-2 py-3">
                                <div className="flex flex-col gap-4">
                                    <CardDescription>Drive File</CardDescription>
                                    <div className="flex flex-wrap gap-2">
                                        <GoogleFileDetails
                                            nodeConnection={nodeConnection}
                                            title={title}
                                            gFile={file}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                    {title === 'Google Drive' && (
                        <GoogleDriveFiles />
                    )}
                    <ActionButton
                        currentService={title}
                        nodeConnection={nodeConnection}
                        channels={selectedSlackChannels}
                        setChannels={setSelectedSlackChannels}
                    />
                </div>
            </Card>
        </AccordionContent>
    )
}

export default ContentBasedOnTitle