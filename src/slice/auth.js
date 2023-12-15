import { createSlice } from '@reduxjs/toolkit';
 const initialState ={
    isLoading: false,
    loggeding:false,
    user:null,
 }
  const  authSilce = createSlice({
    name: 'auth',
    initialState,
    reducers:{
            //login
        loginUserStart: state => {
            state.isLoading = true
        },
        loginUserSuccess: state => {},
        loginUserFailure: state => {},
        //register
        registerUserStart: state => {
            state.isLoading = true
        },
        registerUserSuccess: state => {},
        registerUserFailure: state => {},
    }

 })
 export const {loginUserStart, registerUserStart} = authSilce.actions
 export default  authSilce.reducer




