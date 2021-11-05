import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import * as postsHttp from "../../../http/posts";
import { Post } from "../../../models";

interface PostsState {
  posts: Post[];
  status: "idle" | "loading" | "succssed" | "failed";
  error: unknown;
}

const initialState: PostsState = {
  posts: [],
  status: "idle",
  error: null,
};

// createAsyncThunk 第一个参数是作为action type前缀使用的，当调用dispatch(fetchPosts())的时候，thunk会首先发送一个type为'posts/fetchPosts/pending'的action
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await postsHttp.fetchPosts();
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // postsLoading(state, action) {
    //   if (state.status === "idle") state.status = "loading";
    // },
    // postsReceived(state, action) {
    //   if (state.status === "loading") {
    //     state.posts = action.payload;
    //     state.status = "idle";
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = "loading";
    }).addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succssed'
      state.posts = action.payload
    }).addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    });
  },
});

// export const { postsLoading, postsReceived } = postsSlice.actions;

export default postsSlice;

export const selectAllPosts = (state: RootState) => state.posts.posts;
