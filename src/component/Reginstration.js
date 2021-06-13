import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import firebase from 'firebase'
import { app } from '../base'
import { Button } from 'antd'
import { activerUser, selectCount, logOut } from '../features/counterSlice'
import { selectUserEmail, selectUserName, setActiveUser } from '../features/userSlice'
import { selectUsetAction, setActiveUserNow } from '../features/authSlice'

const Reginstration = () => {
  const dispatch = useDispatch()

const name = useSelector(state => state.newUser.value)
// const userEmail = useSelector(selectUserEmail)
// const newUser = useSelector(selectUsetAction)

  // const myUser = useSelector(r => r.auth.user)
  // console.log("Checking", myUser)

  const handleGoogleSignUp = async() => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await app.auth().signInWithPopup(provider).then((res)=>{ 
      console.log("LogIn Data", res)
        dispatch(setActiveUser({
          name: res.user.displayName
          // userName: res.user.displayName
        }))       
    })
  }

const handleLogOut = async() => {
  await app.auth().signOut()

}


  const handleGoogleSignUpWithUID = async() => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await app.auth().signInWithPopup(provider).then((res)=>{
      console.log("LogIn Data", res)
        dispatch(setActiveUserNow({
          name: res.user.displayName
        }))       
    })
  }

// const handleLogOut = async() => {
//   await app.auth().signOut()
// }

useEffect(()=>{
  app.auth().onAuthStateChanged(async(res) => {
   if(res){
    dispatch(setActiveUserNow({
      name: res.displayName
    }))  
   }     

  })
})



// console.log("UserName", name)
  return (
    <div>
      <div>{name && name.name}</div>
      {
        name ? (
          <Button
          type="primary"
          danger
          onClick={handleLogOut}
      >LogOut</Button>
        ) : (
        <Button
          type="primary"
          onClick={handleGoogleSignUp}
          >Sign with Google</Button>)
      }
    </div>
  )
}

export default Reginstration
