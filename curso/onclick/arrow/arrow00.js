// JavaScript program to show Arrow operator used in structure
let emp = null;
 
// Creating the structure
class Student {
    constructor(name, age, percentage) {
        this.name = name;
        this.age = age;
        this.percentage = percentage;
    }
}
 
// Assigning memory to struct variable emp
emp = new Student('', 0, 0);
 
// Assigning value to age variable
// of emp using arrow operator
emp.age = 18;
 
// Printing the assigned value to the variable
console.log(' ' + emp.age);