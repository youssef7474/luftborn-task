import React from 'react'

const ErrorCompo = ({error}) => {
  return (
     <div style={{color:"red",display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
      {error}
    </div>
  )
}

export default ErrorCompo
