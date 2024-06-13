import React from 'react'
import Workflow from './workflow'
import { onGetWorkflows } from '../_actions/workflow-connections'
import UserCredits from './user-credits'

type Props = {}

const Workflows = async (props: Props) => {
    const workflows = await onGetWorkflows()
    return (
        <div className='relative flex flex-col gap-4'>
            <section className='flex flex-col gap-4 px-4'>
                <UserCredits />
                {workflows?.length ? (
                    workflows.map((flow) => (
                        <Workflow
                            key={flow.id}
                            {...flow}
                        />
                    ))
                ) : (
                    // TODO WORK ON CENTERING THIS TEXT
                    <div className='text-muted-foreground flex items-center justify-center'>No Workflows</div>
                )}
            </section>
        </div>
    )
}

export default Workflows