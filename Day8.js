/// while loop


 //  while  code  lei execute garnu vanda pahila nei yele codition check garxa    or condition true xain vne hmro code lei nei execute gardeina


//  while(condition){
//     // 
//     console.log(" execute garxa run garxa code lei");
    
//  }




 // example of the while loop
  
//  let count1=6;
//  while(count1<=10){
//     console.log(" Number are"+count); 6,7
//     count1++; 7+1=8
//  }


//  // do while loop

//  // first time yelei code lei execute garxa ani matra yele condition check garxa
// //  let  count=12
// //   do{
// //     console.log( "the number are"+count) 12,11,10
// //     count--;10-1=9
// //     //10

// //   }while(count>=10)




//     //function 
//  // function euta resuable code of the block ho jun kunei specific task perofrm gwrna lei use garenxa

// function sum(a,b){
//     return a+b
// }

//  let result=sum(10,15)
//  let reuslt1=sum(20,40)
//  console.log(result);
//  console.log(reuslt1)


//  // grade checking using the  function

//  function gradeCheck(marks){
//     if(marks>=90){
//         console.log(" A+ ho");
//     }
//     else if(marks>=80){
//         console.log("A hoo")
//     }
//      else if(marks>=70){
//         console.log("B+")
//      }
//      else{
//         console.log(" fail vayeu")
//      }

//  }

//  gradeCheck(86)


//   // function with expression
//   const sayhello= function (){
//     console.log("helo function with argument")
//   }



//   /// scope 
//   // varibale lei access garxa ki gardeina
//   // global scope 
   
//   let name="Rahul"
//   function myname(){
//     console.log(name)
//   }
//   myname();
//   console.log(name);
//   //local scope
//   function myname1(){
//     let name1="Rahul"
//     console.log(name1)
//   }

//   myname()
//   console.log(name1)



// object 

 // object vaneko collection of related data stored garne process and  technique ho
//  let student={
//     name:"rahul",
//     age:"21",
//     faculty:"Bit",
//     college:"INC"
//  }
// console.log(student)
// //  console.log(student.age) //object ko value access garna saina

//  student.address="itahari"; // adding new key and value in objects

//  student.age="22" // updating the value of key in student named object
//  delete student.faculty; // key ra value delete garim
//   console.log(student)


  // array
   // array vaneko multiple values single variable ma store garna use garinxa

   let fruits=["Apple","mango","orange","banana"] //[0,1,2,3]
//    console.log(fruits[0])


   //push method
//    fruits.push("grapes")
//    console.log(fruits)

//    //pop  le last element lei remove garxa
//    fruits.pop()


   //shift   able to shift/remove the first elements 
   fruits.shift(fruits)
   console.log(fruits)
    //unshift methods
    fruits.unshift("Apple")
    console.log(fruits)

    // length
    console.log(fruits.length)