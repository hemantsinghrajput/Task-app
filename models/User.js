const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    role: {
        type: String,
        default: "employee"
    },
    joiningTime: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Index the location field for efficient geospatial queries
userSchema.index({ location: "2dsphere" });

const User = mongoose.model("User", userSchema);
module.exports = User;