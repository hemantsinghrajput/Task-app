const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    tasks: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task"
        }],
        default: []
    }
}, {
    timestamps: true
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
