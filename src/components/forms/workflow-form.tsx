import { WorkflowFormSchema } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { onCreateWorkflow } from '@/app/(main)/(pages)/workflows/_actions/workflow-connections'
import { useModal } from '@/providers/modal-provider'

type Props = {
    title?: string
    subTitle?: string
}

const WorkflowForm = ({ subTitle, title }: Props) => {
    const { setClose } = useModal();
    const form = useForm<z.infer<typeof WorkflowFormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(WorkflowFormSchema),
        defaultValues: {
            name: '',
            description: '',
        },
    });

    const isLoading = form.formState.isLoading
    const router = useRouter()

    const handleSubmit = async (values: z.infer<typeof WorkflowFormSchema>) => {
        const workflow = await onCreateWorkflow(values.name, values.description)
        if (workflow) {
            toast.message(workflow.message)
            router.refresh()
        }
        setClose()
    }

    return (
        <Card className='w-full max-w-[650px] border-none'>
            {title && subTitle && (
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{subTitle}</CardDescription>
                </CardHeader>
            )}
            <CardContent className='pt-3'>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="flex flex-col gap-4 text-left"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Description"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type='submit'
                            className='mt-4 bg-orange-500 hover:bg-orange-600 text-white transition-colors ease-in duration-200'
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                    <span>Saving...</span>
                                </>
                            ) : (
                                'Save Settings'
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default WorkflowForm