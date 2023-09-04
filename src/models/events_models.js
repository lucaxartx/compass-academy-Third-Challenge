
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        require: true,
    },
    description: {
        type: String,
        require: true,

    },
    dayOfWeek: {
        type: String,
        required: true,
        enum: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
    }
});

const EventModel = mongoose.model('events', eventSchema);

module.exports = EventModel;