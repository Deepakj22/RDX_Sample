import React from 'react'
import RenderMouseTracker from './RenderMouseTracker';

interface MouseTrackerProps {
  render: (position: { x: number; y: number }) => React.ReactNode;
}

const MouseTracker:React.FC<MouseTrackerProps> = ({render}) => {
    const [position, setPosition] = React.useState({x:0,y:0});

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setPosition({x: event.clientX, y: event.clientY});
    }
  return (
   <RenderMouseTracker 
   handleMouseMove={handleMouseMove} 
   render={render} 
   position={position} 
   style={{height:"360px", border: "1px solid black"}}/>
  )
}

export default MouseTracker
