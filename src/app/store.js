import { configureStore } from "@reduxjs/toolkit"
import metamaskReducer from "features/metamask/metamaskSlice"
import postsReducer from "features/posts/postsSlice"
import usersReducer from "features/usersPage/usersSlice"

export default configureStore({
	reducer: {
		metamask: metamaskReducer,
		posts: postsReducer,
		users: usersReducer,
	},
})
