import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Api from "../../config/api"

export const fetchUserData= createAsyncThunk(
  'user/fetchUserData',
  async (_, thunkAPI) => {
    try {  
      const response = await Api.get('/users/data')
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
    },
  });
export const {login,logout} = user.actions

export default user.reducer