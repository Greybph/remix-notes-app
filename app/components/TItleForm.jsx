import { Form } from 'remix'

function TitleForm() {
	return (
		<Form method='POST'>
			<input type='text' name='title' placeholder='Note Title' />
			<button type='submit'>Create</button>
		</Form>
	)
}

export default TitleForm
