import React from 'react'
import Workflow from './workflow'

type Props = {}

const Workflows = (props: Props) => {
    return (
        <div className='relative flex flex-col gap-4'>
            <section className='flex flex-col gap-4 px-4'>
                <Workflow
                    id="eqwea1231asdn"
                    description='Creating a test workflow'
                    name="Automation Workflow"
                    publish={false}
                />
            </section>
        </div>
    )
}

export default Workflows