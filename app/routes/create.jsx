import Notes from '~/models/Notes'
import { redirect } from 'remix'

export async function action({ request }) {
	const form = await request.formData()
	const { title, body } = Object.fromEntries(form)

	let date = new Date()

	if ((title, body)) {
		await Notes.create({
			title,
			body,
			createdAt: date.toLocaleDateString().replace('20', ''),
		})
	}
	return redirect('/')
}
