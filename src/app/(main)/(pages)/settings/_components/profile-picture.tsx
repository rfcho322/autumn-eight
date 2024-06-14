'use client'
import React from 'react'
import UploadCareButton from './uploadcare-button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Props = {
    userImage: string | null,
    onDelete?: any,
    onUpload?: any,
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {

    const router = useRouter();
    const onRemoveProfileImage = async () => {
        const response = await onDelete();
        if (response) {
            router.refresh();
        }
    }

    return (
        <div className='flex flex-col'>
            <p className='text-lg text-foreground dark:text-white'> Profile Picture </p>
            <div className='flex flex-col items-center justify-center'>
                {userImage ? (
                    <>
                        <Avatar className='relative w-40 h-40 overflow-hidden'>
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <AvatarImage
                                    src={userImage}
                                    alt="user profile image"
                                    className='object-cover w-full h-full'
                                />
                            </div>
                        </Avatar>
                        <Button
                            onClick={onRemoveProfileImage}
                            className="bg-transparent text-red-500/70 hover:bg-transparent hover:text-red-600"
                        >
                            <X /> Remove Logo
                        </Button>
                    </>
                ) : <UploadCareButton onUpload={onUpload} />}
            </div>
        </div>
    )
}

export default ProfilePicture