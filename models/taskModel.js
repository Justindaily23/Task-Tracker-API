import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true,
        trim: true
    },

    dueDate: {
        type: Date,
        default: null 
    },

    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },

    description: {
        type: String,
        trim: true,
        default: '' // Empty string if not provided
    },
    
    completed: {
        type: Boolean,
        default: false
    },

    inProgress: {
        type: Boolean,
        default: false
      },

}, {
    timestamps: true
});



export default mongoose.model('Task', TaskSchema);