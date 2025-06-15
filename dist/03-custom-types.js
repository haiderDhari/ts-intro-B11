"use strict";
const s1 = {
    fname: 'John',
    lname: 'Doe',
    program: 'SEDT',
    registered: true
};
const s2 = {
    fname: 'Jain',
    lname: 'Doe',
    program: 'SEDT',
    registered: false
};
const s3 = {
    fname: 'Alex',
    lname: 'Smith',
    program: 'SEDT',
    registered: true
};
const students = [s1, s2, s3];
const numberofregisteredstudents = students.reduce((acc, curr) => {
    if (curr.registered)
        acc += 1;
    return acc;
}, 0);
console.log(numberofregisteredstudents);
