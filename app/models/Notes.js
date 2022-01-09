import mongoose from 'mongoose'

const NotesSchema = new mongoose.Schema({
	title: String,
	body: String,
	createdAt: String,
})

let Notes
try {
	Notes = mongoose.model('Notes')
} catch (err) {
	Notes = mongoose.model('Notes', NotesSchema)
}

export default Notes
