import mongoose from 'mongoose'

const dbConnect = () => {
	return mongoose.connect('mongodb://localhost/remix-notes-app', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
}

export default dbConnect
