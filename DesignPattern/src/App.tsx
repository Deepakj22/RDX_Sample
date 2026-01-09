
import './App.css'
import SplitScreen from './components/split-screen'

interface ComponentProps {
  title: string;
}

const LeftComponent: React.FC<ComponentProps> = ({title}) => {
  return <h2 style={{ backgroundColor: 'lightblue',height: "100vh" , fontFamily: 'Arial' }}>
    {title}
    </h2>;
}
const RightComponent: React.FC<ComponentProps> = ({title}) => {
  return <h2 style={{ backgroundColor: 'lightgreen',height: "100vh" , fontFamily: 'Arial' }}>
   {title}
    </h2>;
}
function App() {
  return (
    <>
     <SplitScreen  LeftWidth={1} RightWidth={8}>
          <LeftComponent title="Left Side Component"/>
          <RightComponent title="Right Side Component"/>
     </SplitScreen>
    </>
  )
}

export default App
