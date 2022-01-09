import { Form } from 'remix'

function FullForm({ title }) {
	return (
		<div className='overlay'>
			<Form action='/create' method='POST'>
				<h1>{title}</h1>
				<input hidden='true' name='title' value={title} />
				<label>Body:</label>
				<textarea type='text' name='body' rows='10' cols='50' />
				<button type='submit'>Save</button>
			</Form>
		</div>
	)
}

export default FullForm
