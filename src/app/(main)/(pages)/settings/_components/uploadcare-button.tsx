'use client'
import React, { useEffect, useState } from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {
    onUpload: (e: string) => any
}

const UploadCareButton = ({ onUpload }: Props) => {
    const [files, setFiles] = useState<any[]>([]);
    const router = useRouter();

    const handleChangeEvent = async (items: { allEntries: any[]; }) => {

        const uploadedFile = items.allEntries.find((file) => file.status === 'success');

        if (uploadedFile) {
            const fileurl = uploadedFile.cdnUrl;
            const result = await onUpload(fileurl);
            if (result) {
                router.refresh();
            }
            setFiles([uploadedFile]);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <FileUploaderRegular
                onChange={handleChangeEvent}
                pubkey="1126f091dfd3f9668720"
                maxLocalFileSizeBytes={10000000}
                multiple={false}
                imgOnly={true}
                sourceList="local, url, camera, dropbox"
            />

            <div>
                {files.map((file) => (
                    <div key={file.uuid}>
                        <Image
                            width="200"
                            height="200"
                            src={file.cdnUrl}
                            alt={file.fileInfo.originalFilename}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UploadCareButton