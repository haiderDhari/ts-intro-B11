

type student = {
    fname: string,
    // mname?: string,
    lname: string,
    program: string,
    registered: boolean,
    // SSN?: string    // ? علامة السؤال يعني اوبشنل مو مهم نستعملهى بكلهن
};

const s1: student = {
    fname: 'John',
    lname: 'Doe',
    program: 'SEDT',
    registered: true
};

const s2: student = {
    fname: 'Jain',
    lname: 'Doe',
    program: 'SEDT',
    registered: false
};

const s3: student = {
    fname: 'Alex',
    lname: 'Smith',
    program: 'SEDT',
    registered: true
};

const students: student[] = [s1, s2, s3];

 const numberofregisteredstudents: number = students.reduce((acc: number, curr: student) => {
 if(curr.registered) acc +=1;
 return acc;
}, 0);
console.log(numberofregisteredstudents);
