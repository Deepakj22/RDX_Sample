
import MouseTracker1 from "./components/MouseTracker1"
import UserPostList from "./services/UserPostList"
import Wrapper from "./Wrapper"

const App = () => {
  return (
    <div>
      {/* <List render={(data,index)=>{
        return <RowWithDeleteButton key={index} data={data}/>
      }} data={[1,2,3,4]}/>
     <ToggleButton 
  render={(isVisible, toggle) => (
    <div>
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>This is some toggled content!</p>}
    </div>
  )}
/> */}
<UserPostList/>
<h3 style ={{fontFamily:"Arial, sans-serif", 
  textAlign:"left"}}>Mouse Position Trackers</h3>

{/* <MouseTracker1 
render={({x,y})=>
  <p>Mouse Position → X: {x}, Y: {y}</p>}/> */}
<MouseTracker1 >{
  (position)=>(<h3>Mouse possition : X : {position.x}, Y : {position.y}</h3>)}</MouseTracker1>
<Wrapper 
render={(name :any)=><h1>Hello, {name}
</h1>}></Wrapper>
       {/* <MouseTracker
        render={({ x, y }) => (
          <p>
            Mouse Position → X: {x}, Y: {y}
          </p>
        )}
      /> */}
    </div>
  )
}

export default App
