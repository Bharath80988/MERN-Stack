/*
// console.log("Hello World")
object2={}
object2["training"]=["Git","Github","HTML","CSS","JS","MERN","React","Express","MangoDB","Hosting"]
// console.log(object2);
object3=new Object()
// console.log(object3);
object3.training="MERN"
object3.DEPT=["CSE","IT","ADS","ECE"]
// console.log(object3.DEPT)

set =new Set(["Hello"])
// console.log(set);
set.add("Hi")
// console.log(set);

// Logical AND Operator
// console.log(5 && 10)
// console.log(true && 10)
// console.log(false && 10)
// console.log(false && true)
// console.log(true&&false)

// Logical OR Operator
// console.log(5 || 10)
// console.log(true || 10)
// console.log(false || 10)
// console.log(false || true)
// console.log(true || false)

Array = [10,20,30,"abc",true,"hello",[10,20,30]]
for(i in Array){
    console.log(Array[i]);
}

var testArrowFunction = () => {
    console.log("This is the test arrow Function")
}

testArrowFunction();

var a=10;
console.log(a);
{
    let a=20;
    console.log(a)
    let b=30
    console.log(b)
    let c=40;
    console.log(c)
    var e=50;
    console.log(a)
    f=10;
}

console.log(a)
console.log(f)

a=11
console.log((a%2) ? "Odd":"Even")
*/

// var arr=[10,20,30,40,50]
// var [a,b,c,d,e,f]=arr
// console.log(a,b,c,d,e,f)

// Hoisting (Variable and Functional)
// console.log(a);
// let a=10;

//

class ClassEG{
    classfun=()=> {
        console.log("Hello")
        return 1.56
    }
}

obj = new ClassEG()
console.log(obj.classfun())