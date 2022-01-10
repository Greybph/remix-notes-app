import { Link } from 'remix'

function RecentNotes({ notes }) {
	return (
		<div className='recent-container'>
			<h2>Recent Notes</h2>
			{notes.map((n) => (
				<div key={n._id} className='recent-note'>
					<Link to={`/browse/${n._id}`}>{n.title}</Link>
					<p>{n.body}</p>
				</div>
			))}
		</div>
	)
}

export default RecentNotes
