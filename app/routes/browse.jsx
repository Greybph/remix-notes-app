import { useLoaderData } from 'remix'
import Notes from '~/models/Notes'

export async function loader() {
	const notes = await Notes.find({})
	return notes
}

function Browse() {
	const notes = useLoaderData()
	return (
		<div>
			<h1>Browse All Notes</h1>
			{notes.map((n) => {
				return <h1>{n.title}</h1>
			})}
		</div>
	)
}

export default Browse
