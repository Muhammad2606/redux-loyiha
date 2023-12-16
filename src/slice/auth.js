import { createSlice } from '@reduxjs/toolkit';
 const initialState ={
    isLoading: false,
    loggeding:false,
    error: null,
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
        registerUserSuccess: state => {
            state.loggeding = true
            state.isLoading = false
        },
        registerUserFailure: state => {
            state.isLoading = false
            state.error = 'error'
        },
    }

 })
 export const {loginUserStart, registerUserStart,registerUserSuccess,registerUserFailure} = authSilce.actions
 export default  authSilce.reducer




