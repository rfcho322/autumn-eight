import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

type Props = {}

const EditorPage = async (props: Props) => {
    // CHALLENGE: 
    // ✔ IF THE USER TRIES TO ACCESS THIS ROUTE YOU SHOULD SEND THEM TO THEIR FIRST WORKFLOW THEY HAVE
    // CREATE ONE OR YOU CAN HAVE YOUR OWN BEHAVIOUR

    // const user = await currentUser();
    const { userId: authUserId } = auth();

    if (!authUserId) return null;

    const workflows = await db.workflows.findMany({
        where: {
            userId: authUserId
        },
        orderBy: {
            id: 'desc'
        }
    })

    if (workflows.length > 0) {
        const firstWorkFlowId = workflows[0].id
        redirect(`/workflows/editor/${firstWorkFlowId}`)
    } else {
        redirect(`/workflows`);
    }

    return (
        <div>Editor Page</div>
    )
}

export default EditorPage