import { Form } from 'remix'

function TitleForm() {
	return (
		<Form id='title-form' method='POST'>
			<h2>Create Note</h2>
			<label>Title:</label>
			<input type='text' name='title' />
			<button type='submit'>Create</button>
		</Form>
	)
}

export default TitleForm
