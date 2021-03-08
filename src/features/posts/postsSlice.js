import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const loadAccount = createAsyncThunk(
	"posts/fetchPosts",
	async (_, { dispatch, getState }) => {
		// if (window.ethereum) {
		// 	const accounts = await window.ethereum.enable()
		// 	return accounts[0]
		// }
	}
)

export const postsSlice = createSlice({
	name: "posts",
	initialState: {
		posts: [],
	},
	// Redux Toolkit allows us to write "mutating" logic in reducers. It
	// doesn't actually mutate the state because it uses the Immer library,
	// which detects changes to a "draft state" and produces a brand new
	// immutable state based off those changes
	reducers: {
		setPosts: (state, action) => {
			state.posts = action.payload
		},
	},
})

export const { setPosts } = postsSlice.actions

// export const selectCount = (state) => state.counter.value

export default postsSlice.reducer
