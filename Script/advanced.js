/*
//callback 

function sjitcollege(message,abc){
    // console.log(message);
    abc()
}

function callbacksjit(){
    // console.log("Welcome back to sjit");
}

sjitcollege("Welcome to SJIT",callbacksjit)

function formsubmission(message,cbfun){
    if(cbfun()){
        // console.log(message)
    }else{
        // console.log("Form submitted unsuccessful")
    }
}

function formvalidation(){
    // console.log("form Validation SUccessful")
    return true
}

formsubmission("Form submitted Successfully",formvalidation)

//Async and Await Functions 
async function asAW() {
    setTimeout(function(){
        // console.log("Hello")
    },5000)
}
// console.log(asAW())

function promiseeg(value){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(value){
                resolve("The Promise is resolved");
            }else{
                reject("The promise is rejected due to value is unmet");
            }
        },5000)
    })
}

promiseeg(false).then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res);
})
*/

//Location Finder
//1. Promise(LocFound,LocNotFound)
//2. Chennai,2000

function locationFinder(loc, time) {
  var location = new Promise((LocFound, LocNotFound) => {
    setTimeout(() => {
      if (isLocationFound(loc, time)) {
        LocFound(loc);
      } else {
        LocNotFound(loc + "NotFound");
      }
    }, time);
  });
  location.then((res) => {
    console.log(res);
  }).catch((res)=>{
    console.log(res)
  });
}
isLocationFound = (loc, time) => {
  location = "Chennai";
  t = 1000;
  if (loc === location && t <= time) {
    return true;
  } else {
    return false;
  }
};
locationFinder("Chennai", 300);
