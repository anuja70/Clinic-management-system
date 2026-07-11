// switch condition statement

//  let day= Number(prompt("enter your day"));
//  switch(day){
//     case 1:
//         console.log("sunday aaja ho");
//         // break;
//         case 2:
//             console.log("monday aaja ho");
//             break;
//             case 3:
//                 console.log("tuesday aaja ho");
//                 break;
//                 case 4:
//                     console.log("wednesday aaja ho");
//                     break;
//                     default:
//                         console.log("invalid day")
//  }



//  let choice = Number(prompt("enter operation\n1, Addition\n2, Subtraction\n3, Multiplication\n4, Division\n5, Modulus"));

//  let num1=Number(prompt("enter your number"));
//  let num2=Number(prompt("enter you another number"))

// switch(choice){
//     case 1:
//     console.log("Addition of two number"+(num1+num2));
//     break;
//     case 2:
//         console.log("subtraction"+(num1-num2))
//         break;
//         case 3:
//             console.log("multiplication"+(num1*num2))
//             break;
//             case 4:
//                 console.log("division"+(num1/num2))
//                 break;
//                 default:
//                     console.log("invalid operation")
// }



/// grade calculation usin switch statement


// let marks = prompt("ener your marks");   98
// switch(Math.floor(marks/10)){   // 9.8
//     case 10:
//         case 9:
//             console.log("A+");
//             break;
//             case 8:
//                 console.log("A");
//                 break;
//                 case 7:
//                     console.log("B+");
//                     break;
//                     default:
//                         console.log("fail")
// }


// loops 
// console.log(" for loop")

for(let i=1; i<=5; i++){
    console.log("for loop")
}




// sum of natural number 
let number =30
let sum = 0;
for (let i=1;i<=number; i++){  /// 31<=30
    sum=sum+i;     //222+30=252
}
console.log("sumof natural number is="+sum)