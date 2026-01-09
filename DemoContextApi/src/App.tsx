
// import './App.css'
// import PropDrilling from './context-demo/PropDrilling'
// import RenderCounter from './RenderCounter'
// import UserContextProvider from './context-demo/UserContextProvider'

import UserContextProvider from "./practice/context/UserContextProvider";
import ChildA from "./practice/practice/ChildA";


// const App = () => {
//   return (
//     <UserContextProvider >
//       <div>
//         <h1>DashBoard</h1>
//         <RenderCounter />
//         <PropDrilling />
//       </div>
//     </UserContextProvider>
//   );
// };

// export default App




const App = () => {
   
  return (
  <UserContextProvider>
      <div style={{fontFamily:"sans-serif"}}>
         <ChildA />
      </div>
  </UserContextProvider>
     

  );
};

export default App
