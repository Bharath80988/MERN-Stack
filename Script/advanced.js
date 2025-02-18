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
        console.log("Hello")
    },5000)
}
console.log(asAW())