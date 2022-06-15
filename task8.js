obj = {num:10}
function addThisElemnts(x,y,z)
{
  return this.num + x + y + z;
}
arr = [1,2,3]
//Write a function and use 'call' to call the function
console.log(addThisElemnts.call(obj,1,2,3)) 
//Write a program using apply
console.log(addThisElemnts.apply(obj,arr)) 
//Write a program using bind
var bound = addThisElemnts.bind(obj,1,2)
console.log(bound(3))
/*Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.*/
Student = { age : 20 }
function getAge()
{
  return this.age;
}
var Age = getAge.bind(Student)
console.log(Age())

//Currying
function multiply(x,y,z)
{
  console.log(x*y*z)
}
let multiplyBy2 = multiply.bind(this,2)
multiplyBy2(3,4);

//closures
function mul(x)
{
  return function(y){console.log(x*y)}
}
let mulby2 = mul(2);
mulby2(3)