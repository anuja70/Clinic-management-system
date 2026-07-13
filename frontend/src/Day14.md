// props  are used ot  pass data from parent components to child components
// in props only parent to child send the data

// props are read only


//App.jsx
// students.jsx
// users.jsx
// teacher .jsx

//state is a built-in react object used to store data that can chnage over time . when the state changes , react automatically updates the user interface(ui)
// hooks is a special react function that lets function components use react features sucha as : useState, useEffect  , useContext, useMemo etc
// const [value,setVlaue]=usestate(0)
///
///class App extends React.Component{
    
////}/////

// props vs state 
//props            vs state
//props are data passed from a parent to child component    |     state is data that is managed within a component when state changes, the component re-renders
// props are immutable -- it can not be changed by the child   ||  state are mutable - it can change over time
//  does not trigger re-render by itslef      ||    state updates may trigger re-render of the component
// used for passing data from paretn to child components   ||     used of local data that change in the component



/// why do we use hooks 
// 1 useState  and othes many  React features able to used in functional components
// 2 simpler code 
// 3 re-useful logic
// 4 easier testing 


/// 1 useState in React 


   //const[count,setCount]=useState(0)
// it is a React Hook that lets us to add state state to functional component it returns a state variable and a function to update that state

// how its works 
// initailize the state    useState() 0
//update the state using the setState/setCount() 1
// components re-renders with new state 1


/// useEffect 

 it is a react hook that let us perform side effects in functional components
 types of the useeffect     
    1//not dependencies array    runs after every render (mounted and updated)
 useEffect(()={

 });
 2// empty dependencies array []   runs only once after the component is mounted 
 // useEffect()=>{

 },[];

 3 with dependencies array[deps]  runs when the specified dependencies changes


 // usecases of the useEffect

 1 fetching data from apis 
 2 updating the document title or meta data
 3 controllig timers (settimeout/setinterval())
