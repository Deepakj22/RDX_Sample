import React from 'react'

interface ErrorDetailProps {
    error: any;
}
const ErrorDetail:React.FC<ErrorDetailProps> = ({error}) => {
    const errorMessage = typeof error === 'string' ? error : error?.message || "Something went wrong";
  return (
   <div className="error-card">
      <span className="error-icon">⚠️</span>
      <p>{errorMessage}</p>
    </div>
  )
}

export default ErrorDetail
