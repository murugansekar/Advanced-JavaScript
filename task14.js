
 /* Task 14
 1.
 a
 b
 d
 c
 Reason:- when setTimeout() is called its callback function and timer gets registered into the WEB APi and the controls flows to next line. when 1000ms gets expired in timer the callback function is pushed into a callBack queue. when callstack get emplty eventloop puts the callback function into callStack and then it gets executed.

 2.
 a
 b
 d
 c
 Reason:- Even though the setTimer has only 0 ms, when setTimeout() is called its callback function and timer gets registered into the WEB APi and the controls flows to next line. when 0 ms gets expired in timer the callback function is pushed into a callBack queue. when callstack get emplty eventloop puts the callback function into callStack and then it gets executed. 

 3.
 a
 b
 d
 c
 e
 Reason:- when setTimeout() is called its callback function and timer gets registered into the WEB APi and the controls flows to next line. when 0ms and 1000ms gets expired in timer the callback function is pushed into a callBack queue. 0 ms gets expired first in timer than 1000 ms. So it is first pushed into callback queue. And functions in callback queue follows FIFo concept and enters callStack via event loop


 1.Use of Spread Operator
 To copy from existing array or object into another array or object.
 */

 //2.Example for obj
 const student1 = {name:"SRM",age:22}
 const student2 = {...student1,age:24,pnumber:770858} 
 //a new memory location willl be created in ... but obj1=obj2 will use same memory
 console.log(student1.age)
 //3.Example for arr
 const arr1 = [1,2,3]
 const arr2 = [3,4,5]
 const arr3 = [...arr1, ...arr2]
 console.log(arr3)

 