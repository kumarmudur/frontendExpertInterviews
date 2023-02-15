// const Parent = () => {
//     const [state, dispath] = useReducer(reducer, initialState)
  
//       State = {
//           A: 1,
//           B: 2
//           C, 3
//   }
  
//     return (
//       <>
//         <Navbar />
//         <ChildA state={state} dispath={dispath} />
//         <ChildB state={state} dispath={dispath} />
//         <ChildC state={state} dispath={dispath} />
//         <ChildD />
//         <ChildE />
//         <Footer />
//       </>
//     )
//   }
  
//   Const ChildA = ({state, dispatch}) => jsx
  
//   Export default React.memo(ChildA)
  
//   onClickFun = useCallback(() => {
//      dispath();
//   }, [state.B]);

  
//   import { useState } from "react"

// const Button = ({ onClick }) => {
//   console.log("I am Updated")
//   return <button onClick={useCallback((onClick, [onClick]}>Increment</button>
// }

// export default function Counter() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       {count}
//       <Button onClick={() => setCount((c) => c + 1)} />
//     </div>
//   )
// }


// function WatchCount() {
//   const [count, setCount] = useState(0);

//   useEffect(function() {
// 	setInterval(function log() {
//   	console.log(`Count is: ${count}`); // 1 
// 	}, 2000);
//   }, []);

//   return (
// 	<div>
//   	{count}
//   	<button onClick={() => setCount(count + 1) }>
//     	Increase
//   	</button>
// 	</div>
//   );
// }

// Const useCountRerender = (count) => {
	
// }

// Const countRef = React.createRef();

// useEffect(() => {
//  countRef.current.value =+ 1;

// }



// const [{ lastValidValue, value, valid }, setValue] = useValidatedState(
//   'valid',
//   (value) => value === 'valid'
// );

// useValidatedState(2, v => v > 5)

//  lastValidValue = null
// Value - 2
// valid - false 

// setValue(6)

// lastValidValue = 2
// Value - 6
// valid - true 

// setValue(3)

// lastValidValue = 6
// Value - 3
// valid - false 
