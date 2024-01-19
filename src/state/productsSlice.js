import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    data:[],
    IsLoading:false,
    error:null
}

export const GetProducts = createAsyncThunk(
    "Products/GetProducts",
    async (_, thunkApi) => {
      const { rejectWithValue } = thunkApi;
      try {
        const res = await axios.get("https://fakestoreapi.com/products?limit=10");
        const data = res.data;
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


const productsSlice=createSlice({
    name:"Products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(GetProducts.pending, (state) => {
            state.IsLoading = true;
            state.error = null;
          })
          builder.addCase(GetProducts.fulfilled, (state, { payload }) => {
            state.IsLoading = false;
            state.data = payload || [];
            state.error = null;
          })
          builder.addCase(GetProducts.rejected, (state,{payload}) => {
            state.IsLoading = false;
            state.error = payload;
          })
      
    }
})

export default productsSlice.reducer;