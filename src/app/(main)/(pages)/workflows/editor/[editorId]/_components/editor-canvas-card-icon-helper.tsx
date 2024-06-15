import React from 'react'
import {
    Calendar,
    CircuitBoard,
    GitBranch,
    HardDrive,
    Mail,
    MousePointerClickIcon,
    Timer,
    Webhook,
    Zap,
} from 'lucide-react'
import { EditorCanvasTypes } from '@/lib/types'
import SlackIcon from '@/components/icons/slack'
import NotionIcon from '@/components/icons/notion'
import DiscordIcon from '@/components/icons/discord'

type Props = { type: EditorCanvasTypes }

const EditorCanvasIconHelper = ({ type }: Props) => {
    switch (type) {
        case 'Email':
            return (
                <Mail
                    className="flex-shrink-0"
                    size={30}
                />
            )
        case 'Condition':
            return (
                <GitBranch
                    className="flex-shrink-0"
                    size={30}
                />
            )
        case 'AI':
            return (
                <CircuitBoard
                    className="flex-shrink-0"
                    size={30}
                />
            )
        case 'Slack':
            return (
                <SlackIcon
                    fillColor='fill-white'
                    size='30'
                />
            )
        case 'Google Drive':
            return (
                <HardDrive
                    className="flex-shrink-0"
                    size={30}
                />
            )
        case 'Notion':
            return (
                <NotionIcon
                    fillColor='fill-white'
                    size='30'
                />
            )
        case 'Discord':
            return (
                <DiscordIcon
                    fillColor='fill-white'
                    size='30'
                />
            )
        case 'Custom Webhook':
            return (
                <Webhook
                    className="flex-shrink-0"
                    size={30}
                />
            )
        case 'Google Calendar':
            return (
                <Calendar
                    className="flex-shrink-0"
                    size={30}
                />
            )
        case 'Trigger':
            return (
                <MousePointerClickIcon
                    className="flex-shrink-0"
                    size={30}
                />
            )
        case 'Action':
            return (
                <Zap
                    className="flex-shrink-0"
                    size={30}
                />
            )
        case 'Wait':
            return (
                <Timer
                    className="flex-shrink-0"
                    size={30}
                />
            )
        default:
            return (
                <Zap
                    className="flex-shrink-0"
                    size={30}
                />
            )
    }
}

export default EditorCanvasIconHelper