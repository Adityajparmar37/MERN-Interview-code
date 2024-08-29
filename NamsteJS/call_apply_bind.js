// Simple Example

// const student_1 = {
//   firstName: "Aditya",
//   lastName: "Parmar",
//   printFullName: function () {
//     console.log(
//       this.firstName + " " + this.lastName
//     );
//   },
// };

// student_1.printFullName();

// const student_2 = {
//   firstName: "Archita",
//   lastName: "Parmar",
// };

// student_1.printFullName.call(student_2);




// all three method

// arrow functin hence print undefine
// const printFullName = (city, state) => {
//     console.log(this.firstName + " " + this.lastName + " " + city + " " + state);
// }


function printFullName(city, state) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + state);
}


const student1 = {
    firstName: "Aditya",
    lastName: "Parmar",
}

printFullName.call(student1, "Surat", "Gujarat");


const student2 = {
    firstName: "Archita",
    lastName: "Parmar",
}

printFullName.apply(student2, ["Surat", "Gujarat"]);


const student3 = {
    firstName: "Nidhi",
    lastName: "Topiwala",
}

const funCall = printFullName.bind(student3, "Mumbai", "Maharastra");

funCall();