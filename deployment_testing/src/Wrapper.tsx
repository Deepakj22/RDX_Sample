import React from 'react'
interface WrapperProps {
  render: (name: string) => React.ReactNode;
}

const Wrapper:React.FC<WrapperProps> = ({render}) => {
  return (
    <div style={{ border: '2px solid blue', padding: '20px',
     fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
       { render("Namaste India!")} 
    </div>
  )
}

export default Wrapper
