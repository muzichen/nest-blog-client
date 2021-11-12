import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import * as postsHttp from "../../../http/posts";
import { Post } from "../../../models";
import AsyncBaseState from "../../asyncBaseState";
import ListFilterType from "../../listFilterType";

interface PostsState extends AsyncBaseState {
    posts: Post[];
    post?: Post;
}

const initialState: PostsState = {
    posts: [],
    post: undefined,
    status: "idle",
    error: null,
};

// createAsyncThunk 第一个参数是作为action type前缀使用的，当调用dispatch(fetchPosts())的时候，thunk会首先发送一个type为'posts/fetchPosts/pending'的action
export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (filter: ListFilterType) => {
        const { data } = await postsHttp.fetchPosts({ ...filter });
        return data;
    }
);

export const fetchPost = createAsyncThunk(
    "posts/fetchPost",
    async (id: string) => {
        const { data } = await postsHttp.fetchPost(id);
        return data;
    }
);

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
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succssed";
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchPost.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.status = "succssed";
                state.post = action.payload;
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

// export const { postsLoading, postsReceived } = postsSlice.actions;

export default postsSlice;

export const selectAllPosts = (state: RootState) => state.posts.posts;
export const selectCurrentPost = (state: RootState) => state.posts.post;
export const selectPostsError = (state: RootState) => state.posts.error;
