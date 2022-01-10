import { useActionData, useLoaderData, useTransition } from 'remix'
import TitleForm from '~/components/TItleForm'
import FullForm from '~/components/FullForm'
import dbConnect from '~/utils/db.server'
import RecentNotes from '~/components/RecentNotes'
import Notes from '~/models/Notes'

export async function action({ request }) {
	const body = await request.formData()
	const title = body.get('title')
	return title
}

export async function loader() {
	dbConnect()
	const notes = await Notes.find({}).limit(3)
	return notes
}

export default function Index() {
	const title = useActionData()
	const notes = useLoaderData()
	const transition = useTransition()
	return (
		<main>
			{transition.submission ? <em>Creating...</em> : null}
			<TitleForm transition={transition} />
			{title && <FullForm title={title} />}
			<RecentNotes notes={notes} />
		</main>
	)
}
