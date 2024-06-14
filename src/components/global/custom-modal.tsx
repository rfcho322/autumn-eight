import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useModal } from "@/providers/modal-provider"


import React from 'react'
import { Button } from "../ui/button"

type Props = {
    title: string
    subheading: string
    children: React.ReactNode
    defaultOpen?: boolean
}

const CustomModal = ({ children, title, subheading, defaultOpen }: Props) => {
    const { isOpen, setClose } = useModal()
    const handleClose = () => setClose()

    return (
        <Drawer
            open={isOpen}
            onClose={handleClose}
        >
            <DrawerContent className="space-y-4">
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle className="text-center">{title}</DrawerTitle>
                        <div className="text-sm text-muted-foreground text-center flex flex-col items-center gap-4 h-96 overflow-scroll">
                            {subheading}
                            {children}
                        </div>
                    </DrawerHeader>
                    <DrawerFooter className="flex flex-col gap-4 bg-background">
                        <DrawerClose asChild>
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default CustomModal