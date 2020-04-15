# Node.js - CRUD backend web service

### You should have ten test cases (even if you don't have ten endpoints talking to the database) and you only have four. You should have two schemas. Also your path names won't work when you have all your endpoints stood up. This is why we test ALL endpoints first. Check your api.js file for a couple more comments
### Score : 2/5

Create a backend web service for managing Students and Teachers and maintain them in MongoDB

Each Student should have the following properties:
- Student Name (studentName)
- Student Email (studentEmail)

Each Teacher should have:
- Teacher Name (teacherName)
- Teacher Email (teacherEmail)
- Teacher Course Focus (teacherCourseFocus) Example: Computer Science

Implement a default mount of `/api`

For both models implement full CRUD capability including an endpoint that will return a single student or teacher by their email address as well as an endpoint that will return all students and teachers (Note: use resource names `student` and `teacher` in your routes in your `routes/api.js` file)

### You should have 10 endpoints in total

Create test cases for *all* endpoints in Postman. They can be in the same collection but name accordingly.

### Include an export of your Postman Tests in your final Repo
