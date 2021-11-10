import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Comment } from "../../../models";
import AsyncBaseState from '../../asyncBaseState';
import * as commentsHttp from '../../../http/comments';
import { RootState } from "../..";

interface CommentsState extends AsyncBaseState {
  comments: Comment[],
}

const initialState: CommentsState = {
  comments: [],
  status: 'idle',
  error: null
}

export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId?: string) => {
  const { data } = await commentsHttp.fetchComments({
    postId,
  });
  return data;
})

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state, action) => {
      state.status = 'loading';
    }).addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
      state.status = 'succssed';
    }).addCase(fetchComments.rejected, (state, action) => {
      state.error = action.error.message;
    })
  }
})

export default commentsSlice

export const selectAllComments = (state: RootState) => state.comments.comments

