import { createSlice } from '@reduxjs/toolkit'

const initialState = {
userName: null,
userEmail: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  setActiveUser: (state, {payload}) => {
    state.userEmail = payload.userEmail
    state.userName = payload.userName
  },
  setLogOut: state => {
    state.userEmail = null
    state.userName = null
  }
  }
});

export const {
  setActiveUser,
  setLogOut
} = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail

export default userSlice.reducer