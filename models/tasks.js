const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim : true,
        maxlength: [50,'Name of task can not exceed 50 characters' ]
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('tasks', TaskSchema)