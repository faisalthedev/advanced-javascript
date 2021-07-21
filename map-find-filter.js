let numbers = [45, 22, 949, 283, 88, 11, 29, 99, 262];

// const sum = numbers.map((ele) => ele * 2);
// console.log(sum);

// Filter
const evenNum = numbers.filter((x) => x > 100);
// console.log(evenNum);

const students = [
	{ age: 27, name: "Faisal" },
	{ age: 11, name: "Tayeba" },
	{ age: 33, name: "Akashnill" },
];

let studentName = [];

for (let i = 0; i < students.length; i++) {
	studentName.push(students[i].name);
}
// console.log(studentName);

const names = students.map((student) => student.name);

const ageFilter = students.filter((student) => student.age < 30);
const older = students.find((student) => student.age < 30);
// console.log(older);
