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
        signUserStart: state =>{

            state.isLoading = true
        },
        signUserSuccess: (state,action) =>{

            state.loggeding = true
            state.isLoading = false
            state.user = action.payload
        },
        signUserFailure: (state, action) =>{

            state.isLoading = false
            state.error = action.payload
        }
        
    }

 })
 export const {signUserStart,signUserSuccess,signUserFailure    } = authSilce.actions
 export default  authSilce.reducer




