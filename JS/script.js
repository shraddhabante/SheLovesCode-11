// 1.	find the duplicate in a string() (use array) -optional
var strDuplicate = ['apple', 'mango', 'apple', 'orange', 'grapes', 'bananas', 'orange'];
for (var i = 0; i < strDuplicate.length; i++) {
    for (var j = i + 1; j < strDuplicate.length; j++) {
        if (strDuplicate[i] == strDuplicate[j]) {
            console.log(strDuplicate[j]);
        }
    }
}

// 2.	reverse a string (use array method)
var strVal = ['orane', 'mango', 'apple', 'bananas', 'strawbweey'];
console.log(strVal);
strVal.reverse();
console.log(strVal);

// 3.	find the highest and lowest value in array
console.log(Math.max(10, 40, 78, 90, 56, 34));
console.log(Math.min(10, 40, 78, 90, 56, 34));

// 4.	sorting of an array - optional
var strSort = ['h', 'e', 'l', 'l', 'o'];
strSort.sort();
console.log(strSort);

// 5.	(employee data structure): practice array of objects
var employee = [
    {
        emp_id: 101,
        emp_name: 'alex',
        designation: 'developer',
        gender: 'M',
    },
    {
        emp_id: 102,
        emp_name: 'John',
        designation: 'senior HR',
        gender: 'M',
    },
    {
        emp_id: 103,
        emp_name: 'smith',
        designation: 'CEO',
        gender: 'M',
    },
    {
        emp_id: 104,
        emp_name: 'linda',
        designation: 'Data Scientist',
        gender: 'F',
    }
];
console.log(employee[0]);
console.log(employee[1].emp_name);
console.log(employee[2].emp_id);

// 6.	display first 3 elements in an array
var numTwo = [10, 60, 59, 84, 33, 45];
var arr = numTwo.slice(1, 4);
console.log(arr);

// 7.	remove 4th (index) element and add 2 element there
var states = ['maharashtra', 'MP', 'Up', 'punjab', 'tripura'];
states.splice(4, 1, 'goa', 'gujrat');
console.log(states);

// 9.	task on function and math object
// create parametrized method/function to multiply 3 numbers
(function (a, b, c) {
    console.log(a * b * c);
})(2, 4, 5);

// create parametrized method to divide 2 numbers
(function (p, q) {
    console.log(p / q);
})(30, 10);

// create a method to add background color to div element
function getColor() {
    document.getElementById("backColor").style.backgroundColor = "pink";
}

// write a js method, when user click on button, display random integer below it.
function randomNum() {
    console.log(Math.random());
}

// write js function to format number up to specified decimal places.
var numOne = 12;
(function () {
    console.log(numOne.toFixed(3));
})();

// write function to convert negative number to positive number
(function () {
    console.log(Math.abs(-8.9));
})();

// write function to generate random background color of body
var colorBack = ['red', 'orange', 'yellow', 'green', 'blue', 'pink'];
var ran = (Math.floor(Math.random()*colorBack.length));
document.body.style.backgroundColor=colorBack[ran];

// onload of your webpage, display modal (bootstrap 4/5)
