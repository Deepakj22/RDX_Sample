import React, { useState } from 'react'

interface ToggleButtonProps {
  render?: (isVisible: boolean,toggle: () => void) => React.ReactNode;
}
const ToggleButton : React.FC<ToggleButtonProps>= ({render}) => {
    const [isVisible,setIsVisible]=useState<boolean>(false);
    const toggle=()=>setIsVisible(!isVisible);
  return (
    <div>
      {render 
        ? render(isVisible, toggle) 
        : (
          <button onClick={toggle}>
            {isVisible ? "Hide" : "Show"}
          </button>
        )
      }
    </div>
  )
}

export default ToggleButton
