// arrow function 
// it  is a shorter method to write a function in jvascript.it is introduced in ES6 module

// const hello=()=>{
//     console.log("hellow world")
//     };
//     hello()


//     // 
//     const sum=(a,b)=>{
//         return a+b ;
//     }
//     console.log(sum(10,12))

//     // template literals
//     // it is string enclosed in backticks(``) that allows  


//     let name="rahul"
//     let surname="Tharu"
//     console.log("Name"+name)
//     console.log(`My name if ${name} ${surname}`)

    // why use multiple template literals 
    //- cleaner code
    //- easier string formatting
    //-multiple string supports

//import and export
//export  allows us to share variable , function or classes from one javascript file to another
//import  allows us to use those exported items in another javascript file
// default and named  export4

// Named export 
export  default function add(a,b){
    return a+b;
}
export function subtract(a,b){
    return a-b;
}

// default export is uesd to exported the single items 







/// what is React.js?

// It is a javascript library developed by Meta(facebook) for building fast,interactive and resubale user interfaces(UI), especailly single page applications(SPA)

// features of React
// - component-Based architecture
// - virtual DOM
// resubale components
// fast performance 

// what is SPA(single page applications) loads one html page and updates only the necessary parts of the page without a full page refresh
//vite is a modern frontend build tool used to create react project quickly 

// advantags
// very fast setup
// hot module replceent
// lightweight


// real dom vs vrtual dom
//Real dom  is the actual dom created and managed by browser .whenever javascript changes something the browser updates the real dom 
// virtual dom is a lightwight javascript representation(copy) of the real DOM maintianed by react.

// component like eample button changes
// virtual dom (copyof real dom)
// compare with previous virtual dom 
// find diffrences
// updae only changes elemnts
// real dom
//jsx(jvascript XML) HTML + javascript    is a sytax extesion for javascript that allows us to write HTML-like code inside javascript

// component  is a reusable piece of ui code 
// why components 
//Advantages:
//-Resuable 
//-cleaner code 
// easy maintenance 
// faster development
//better orgainzation