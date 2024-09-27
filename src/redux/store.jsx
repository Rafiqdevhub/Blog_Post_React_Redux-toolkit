import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/PostsSlice";
import userReducer from "../features/users/UserSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});
