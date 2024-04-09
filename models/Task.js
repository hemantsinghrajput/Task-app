const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    taskEvent: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Todo"
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    deadline: {
        type: Date,
        required: true
    },
    assignee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    reporter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    attachment: {
        type: String
    },
    restrictTo: {
        type: String
    },
    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number]
        },
    }
}, {
    timestamps: true
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
