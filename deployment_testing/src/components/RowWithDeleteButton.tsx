import React from 'react'

interface RowWithDeleteButtonProps {
  data: number;
}

const RowWithDeleteButton : React.FC<RowWithDeleteButtonProps> = ({data}) => {
  return (
    <div>
      {data} <button>Delete</button>
    </div>
  )
}

export default RowWithDeleteButton
