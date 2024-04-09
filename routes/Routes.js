const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Task = require('../models/task');
const User = require('../models/user');

// Route to create a new project
router.post('/projects', async (req, res) => {
    try {
        const { name, description, creator, members } = req.body;
        const project = new Project({ name, description, creator, members });
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to create a new task
router.post('/tasks', async (req, res) => {
    try {
        const { project, taskEvent, summary, description, deadline, assignee, reporter, attachment, restrictTo, location } = req.body;
        const task = new Task({ project, taskEvent, summary, description, deadline, assignee, reporter, attachment, restrictTo, location });
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to create a new user
router.post('/users', async (req, res) => {
    try {
        const { name, email, password, location, role } = req.body;
        const user = new User({ name, email, password, location, role });
        const savedUser = await user.save();
        res.status(201).json({ user: savedUser, message: "User created successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to fetch a specific task by its ID
router.get('/task/:taskId', async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);
        if (!task) {
            return res.status(404).json({ status: false, message: "Task not found" });
        }
        res.status(200).json({ task, status: true, message: "Task found successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});



module.exports = router;
