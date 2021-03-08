import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { typiCodeApi } from "common/api"

export const fetchPosts = createAsyncThunk(
	"posts/fetchPosts",
	async (_, { dispatch, getState }) => {
		return typiCodeApi.fetchPosts()
	}
)

export const postsSlice = createSlice({
	name: "posts",
	initialState: {
		all: [],
	},
	// Redux Toolkit allows us to write "mutating" logic in reducers. It
	// doesn't actually mutate the state because it uses the Immer library,
	// which detects changes to a "draft state" and produces a brand new
	// immutable state based off those changes
	reducers: {
		setPosts: (state, action) => {
			state.all = action.payload
		},
	},
	extraReducers: {
		[fetchPosts.pending]: (state, actions) => {},
		[fetchPosts.fulfilled]: (state, actions) => {
			postsSlice.caseReducers.setPosts(state, actions)
		},
		[fetchPosts.rejected]: (state, actions) => {},
	},
})

export const { setPosts, setPostsLoading } = postsSlice.actions

export const selectPosts = (state) => state.posts.all
export const selectPostsLoading = (state) => state.posts.loading

export default postsSlice.reducer
