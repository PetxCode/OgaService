import { createSlice } from '@reduxjs/toolkit'

const initialState = {
user: null
}

const authSlice = createSlice({
  name: "sliceName",
  initialState,
  reducers: {
  setActiveUserNow: (state, {payload}) => {
    state.value = payload
  },
  setLogOutNow: state => {
    state.user = null
  }
  }
});

export const { setActiveUserNow, setLogOutNow } = authSlice.actions

// export const selectUsetAction = state => state.sliceName.user

export default authSlice.reducer