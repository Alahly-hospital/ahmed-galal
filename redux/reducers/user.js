import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Api from "../../config/api"

export const fetchUserData= createAsyncThunk(
  'user/fetchUserData',
  async (_, thunkAPI) => {
    try {  
      const response = await Api.get('/user/data')
      return response.data;
    } catch (error) {
  return thunkAPI.rejectWithValue(error.message);
    }
}
);
export const userLogut= createAsyncThunk(
  'user/userLogut',
  async (_, thunkAPI) => {
    try {  
      const response = await Api.post('/auth/logout')
      return response.data;
    } catch (error) {
  return thunkAPI.rejectWithValue(error.message);
    }
}
);

  const user = createSlice({
    name: "user",
    initialState: {
      value: { 
      data: {} ,
      logedin:false,
     },
    },
    reducers: {
      login:(state,action)=>{
        state.value.logedin=true
      },
      logout:(state,action)=>{
        state.value.logedin=false
      }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUserData.fulfilled, (state, action) => {
        state.value.logedin=true
        state.value.data=action.payload
      });
      builder.addCase(fetchUserData.rejected, (state, action) => {
        state.value.logedin=false
      });
      builder.addCase(userLogut.fulfilled, (state, action) => {
        state.value.logedin=false
      });
    },
  });
export const {login,logout} = user.actions

export default user.reducer