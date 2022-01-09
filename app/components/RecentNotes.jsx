function RecentNotes({ notes }) {
	return (
		<div>
			<h1>Recent Notes</h1>
			{notes.map((n) => (
				<div>
					<h1>{n.title}</h1>
					<h3>{n.body}</h3>
					<p>{n.createdAt}</p>
				</div>
			))}
		</div>
	)
}

export default RecentNotes
