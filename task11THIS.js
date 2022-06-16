/*1.type of usage of 'this' keyword
this inside global scope
this inside an object
this inside a method
this inside a function
this inside a inner function
this inside a constructor
this inside a class*/

//2.Listing all of them with a small code snippet
//this inside global scope
this.table = 'window table'
console.log(window.table)
//this inside an object
let obj = {table:"John table"}
console.log(obj.table)
//this inside a method
let Obj = {table:"John table", 
        cleanTable(){console.log('cleaning '+ this.table)}
        };
Obj.cleanTable()
//this inside a function
const cleantable = function(){console.log('cleaning '+ this.table)}
cleantable()
//this inside a inner function
const cleanTable = function(soap)
{
    const innerFunction = function(_soap) {console.log('cleaning '+ this.table)}
    innerFunction.call(this,soap)
}
cleanTable()
//this inside a constructor and class
class createRoom
{
    constructor(name)
    {this.table = name +'s table';}
    cleaningTable(soap){console.log('cleaning ' + this.table + ' using '+soap)}
}


/*
3.Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.
4.Write a function to check whether the student is egligible or not for college. If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.
5.Create 5 students with different names and age.
6.Write a function which keep track of the number of students created. Have you heard of static variables. Leverage that now.
*/

class Student
{
    constructor(name,age,pnumber,mark)
    {
        this.name = name
        this.age = age
        this.pnumber = pnumber
        this.mark = mark
        Student.prototype.count = Student.prototype.count+1
    }
    static countStudents()
    {
        console.log(Student.prototype.count)
    }
    eligible(mark) 
    {
        let isEligible=1
        if(this.mark<=40)
        isEligible=0
        return isEligible
    }
}
Student.prototype.count=0;
let s1 = new Student('srm',22,770858,90)
let s2 = new Student('abc',32,778665,100)
let s3 = new Student('xyz',42,858944,60)
let s4 = new Student('jon',52,475528,33)
let s5 = new Student('sms',82,444858,70)

Student.countStudents();