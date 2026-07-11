// synchronous javascript  it is used to execute our code line by line
// console.log("Start of the program");
// console.log("This is a synchronous code");
// console.log("End of the program");


// // problem statement that we faced in synchronous javascript
// let datas = [
//     {
//         name: "Rahul",
//         role: "software developer",
//         address: "itahari"
//     },
//     {
//         name: "shyam",
//         role: "javascript developer",
//         address: "dharan"
//     }
// ];

// function getDatas(datas) {
   
//         setTimeout(() => {
//             let output = '';
            
//             datas.forEach((data) => {
//                 output += `<li>${data.name} - ${data.role} (${data.address})</li>`;
//             });

//             // If you want to display in HTML
//             const ul = document.getElementById('dataList'); // assuming you have <ul id="dataList"></ul>
//             if (ul) ul.innerHTML = output;

//             console.log('Data processed successfully');
//             resolve(output); // resolve with the generated HTML
//         }, 1000);
//     };



    // asynchronous javascript
    // its alows the javascript to perform long-running tasks like loading data from server  without stopping the rest of the program


// promise it is an object that represents the result result of and asynchronous operation
// a promise may  resolved ,rejected


// syntax  using promise resloved the statement
let promise = new Promise(function(resolve,reject){
    let login =false;
    if(login){
       resolve("login successfull")
    }
    else{
        reject("rejected")
    }

})


promise.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})



// async and wait
//async is a keyword that used to declare a function that return a promise and allows the use of await inside it.
//await pauses the execution if an async function until the promise cant resolve or reject



function getdatas(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("data fetch successfully")
        },6000)
    })
}
async function display(){
    let result =await getdatas();
    console.log(result)
}
display();


// fetch api  is a built in jvascript api used to send http request to a server and receice data from it.
// it