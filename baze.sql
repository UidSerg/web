SELECT * FROM seminar.students
where name_student='том'; 
SELECT seminar.id_students, seminar.id_courses
 FROM seminar.students 
 JOIN seminar.courses 
 ON seminar.students.id_students = seminar.courses.id_courses;
 
SELECT seminar.id_students, seminar.courses
 FROM seminar.students
 JOIN seminar.courses 
 ON seminar.id_students = seminar.courses.id_courses;
