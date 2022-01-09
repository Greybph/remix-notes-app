import { Form } from 'remix'

function FullForm({ title }) {
	return (
		<Form action='/create' method='POST'>
			<h1>{title}</h1>
			Body:
			<input hidden='true' name='title' value={title} />
			<input type='text' name='body' />
			<button type='submit'>Save</button>
		</Form>
	)
}

export default FullForm
