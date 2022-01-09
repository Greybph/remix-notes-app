import { Link } from 'remix'
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
			{notes.map((note) => {
				return (
					<ul>
						<li>
							<Link to={note._id}>{note.title}</Link>
						</li>
					</ul>
				)
			})}
		</div>
	)
}

export default Browse
