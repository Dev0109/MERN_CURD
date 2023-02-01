const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true);

let studentSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    rollon: {
        type: String
    }
}, {
    collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)