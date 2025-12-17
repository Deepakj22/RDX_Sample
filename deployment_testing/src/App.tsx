
import UserPostList from "./services/UserPostList"

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
