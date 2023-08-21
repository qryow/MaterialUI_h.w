import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //console.log(data);
    return data;
});

export const getAuthors = createAsyncThunk(
  'users/getAuthors',
  async () => {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    //console.log(data);
    return data;
});


const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    authors: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getAuthors.fulfilled, (state, action) => {
        state.authors = action.payload;
      });
  }
});

export default postSlice.reducer;