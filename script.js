let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(arr => {
        if (arr.marks > 50) {
            console.log(arr);
        }
    });
}

function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(arr => {
        if (arr.marks > 50) {
            console.log(arr);
        }
    });
}

function addData() {
    //Write your code here, just console.log
    let newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
    arr.push(newStudent);
    console.log(newStudent);
}

function removeFailedStudent() {
    //Write your code here, just console.log
    arr.forEach(arr => {
        if (arr.marks <= 50) {
            console.log(arr);
        }
    });
}

function concatenateArray() {
    //Write your code here, just console.log
    let otherArr = [
        { id: 5, name: "kohli", age: "28", marks: 60 },
        { id: 6, name: "gill", age: "30", marks: 65 },
        { id: 7, name: "sara", age: "29", marks: 45 },
    ];
    let concatArr = arr.concat(otherArr);
    console.log(concatArr);
}