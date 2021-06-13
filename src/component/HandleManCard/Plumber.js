import React from 'react'

const Plumber = ({item}) => {
  return (
    <div>
              
    <div
    style={{
      width:"300px",
      height:"400px",
      backgroundColor: "tomato",
      marginTop:"40px",
      borderRadius:"5px",
      boxShadow: "0 5px 6px 0 rgba(0,0,0, 0.2)",
      justifyContent:"center",
      alignItems:"center",
      display:"flex",
      flexDirection:"column"
    }}
    >
      <div> Plumber Card</div>
      <br/>
      <div>{item.name}</div>
    </div>
    </div>
  )
}

export default Plumber
