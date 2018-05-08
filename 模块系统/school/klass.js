var student = require('./student')

var teacher = require('./teacher')

teacher.add('YoliLin')

function add (teacherName, students) {
    teacher

    students.forEach(function(item, index){
        student.add(item)
    })
}

exports.add = add