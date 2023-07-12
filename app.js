const connectDB = require('./db/connect')
require('dotenv').config()
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not_found')
app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/tasks', tasks)
app.use(notFound)
const port = 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => { console.log(`Server is listining on port ${port}`) })
    } catch (error) {
        console.log(error)
    }
}

start()