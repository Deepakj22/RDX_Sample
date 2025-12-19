import type React from "react"

interface IsLoadingProps {
    message?: string;
}

const IsLoading : React.FC<IsLoadingProps> = ({message ="Loading..."}) => {
  return (
   <div className="spinner-wrapper">
      <div className="loader"></div> 
      <p>{message}</p>
    </div>
  )
}

export default IsLoading
