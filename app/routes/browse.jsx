import { useLoaderData, Link, Outlet } from 'remix'
import Notes from '~/models/Notes'

export async function loader() {
	const notes = await Notes.find({})
	return notes
}

function Browse() {
	const notes = useLoaderData()
	return (
		<div className='browse-container'>
			<h2>Browse All Notes</h2>
			{notes.map((note) => {
				return (
					<ul>
						<li>
							<Link to={note._id}>{note.title}</Link>
							<p>{note.createdAt}</p>
						</li>
					</ul>
				)
			})}
			<Outlet />
		</div>
	)
}

export default Browse
