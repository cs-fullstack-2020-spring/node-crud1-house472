let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TeacherSchema = new Schema(
    {
    TeacherName: String,
    TeacherEmail: String,
    TeacherSubject: String

}
);

module.exports = mongoose.model('teacherproject', TeacherSchema)