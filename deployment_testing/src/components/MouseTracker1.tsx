import React from 'react'
interface MouseTracker1Props {
    children?:(position:{x:number,y:number})=>React.ReactNode;
}
const MouseTracker1: React.FC<MouseTracker1Props> = ({children}) => {
    const [position, setPosition] = React.useState({x:0,y:0});

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setPosition({x: event.clientX, y: event.clientY});
    }
    return (
    <div onMouseMove={handleMouseMove} 
       style={{
                height: "360px", 
                border: "1px solid black",
                fontFamily: "Arial, sans-serif",
                textAlign: "left",
                padding: "4px",
                position: "relative" // Behtar positioning ke liye
            }}>{children ? children(position) : (<p>Move the mouse inside the box</p>)}
      {/* {render && render(position)} */}
    </div>
  )
}

export default MouseTracker1
