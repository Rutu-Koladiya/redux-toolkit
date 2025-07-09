import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import postsReducer from "../features/posts/postSlice";
import todoReducer from "../features/todo/todoSlice"
import { userApi } from "../features/api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        // todos: todoReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
})

setupListeners(store.dispatch)

export default store