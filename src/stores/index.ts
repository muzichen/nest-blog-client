import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './features/posts/postsSlice'
import commentsSlice from './features/comments/commentsSlice'

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    comments: commentsSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store