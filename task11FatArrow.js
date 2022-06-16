//FAT ARROW FUNCTIONS
//1.
"use strict";
let square = a => a*a
console.log(square(5))
var z=3
let multiply = (x,y) => {return x*y*z}
console.log(multiply(4,5))

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
    //2
    eligibleForPlacements(miniMark)
    {
        return (miniAge) => { 
            if(miniAge<=this.age && miniMark<=this.mark)
            console.log(this.name + " is ready for placements")
            else
            console.log(this.name + " is not ready for placements")
                            }
    }
}
Student.prototype.count=0;
let s1 = new Student('srm',22,770858,90)
let s2 = new Student('abc',32,778665,100)
let s3 = new Student('xyz',16,858944,60)
let s4 = new Student('jon',52,475528,33)
let s5 = new Student('sms',82,444858,70)
Student.countStudents();

//3
s1.eligibleForPlacements(70)(18)
s2.eligibleForPlacements(70)(18)
s3.eligibleForPlacements(70)(18)
s4.eligibleForPlacements(70)(18)
s5.eligibleForPlacements(70)(18)




