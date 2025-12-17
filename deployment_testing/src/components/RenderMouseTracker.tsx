import React from 'react'
interface RenderMouseTrackerProps {
  handleMouseMove: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  render: (position: { x: number; y: number }) => React.ReactNode;
  position: { x: number; y: number };
  style?: React.CSSProperties;
}

const RenderMouseTracker: React.FC<RenderMouseTrackerProps> = ({handleMouseMove ,render,style,position}) => {
  return (
       <div onMouseMove={handleMouseMove}
       style={style}>
      {render ? render(position) : (<p>Move the mouse inside the box</p>)}
    </div>
  )
}

export default RenderMouseTracker
