import { useLoaderData } from 'remix'
import Notes from '../../models/Notes'

export async function loader({ params }) {
	const id = params.id
	const note = await Notes.findOne({ id })
	return note
}

function Note() {
	const note = useLoaderData()
	return (
		<div>
			<h1>{note.title}</h1>
			<p>{note.body}</p>
		</div>
	)
}

export default Note
