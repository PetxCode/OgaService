import {  createSlice } from '@reduxjs/toolkit';




export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null
  },
 
  reducers: {
    activerUser: (state, action) => {    
      state.value = action.payload;
    },
    
    logOut: (state) => {
      state.user = null;
    },
  }

})

export const {logOut, activerUser } = counterSlice.actions;

// export const selectCount = (state) => state.counter.user;



export default counterSlice.reducer;
