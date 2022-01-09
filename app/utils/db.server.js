import mongoose from 'mongoose'

const dbConnect = () => {
	if (!mongoose.connection) {
		return mongoose.connect('mongodb://localhost/remix-notes-app', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
	} else return mongoose.connection
}

export default dbConnect
