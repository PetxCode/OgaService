import React from 'react'

const Tailor = ({item}) => {
  return (
    <div>
              
    <div
    style={{
      width:"300px",
      height:"400px",
      backgroundColor: "lightblue",
      marginTop:"40px",
      borderRadius:"5px",
      boxShadow: "0 5px 6px 0 rgba(0,0,0, 0.2)",
      justifyContent:"center",
      alignItems:"center",
      display:"flex",
      flexDirection:"column"
    }}
    >
      <div>Tailor Card</div>
      <br/>
      <div>{item.name}</div>
    </div>
    </div>
  )
}

export default Tailor
