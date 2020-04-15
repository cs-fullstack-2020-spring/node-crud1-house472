let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let StudentSchema = new Schema(
    {
    studentName: String,
    studentEmail: String,
    TeacherName: String,
    TeacherEmail: String,
    TeacherSubject: String

}
);



module.exports = mongoose.model('crudproject', StudentSchema)