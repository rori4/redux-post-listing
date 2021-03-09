import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit"
import { typiCodeApi } from "common/api"

export const fetchUsers = createAsyncThunk(
	"posts/fetchUsers",
	async (_, { dispatch, getState }) => {
		return typiCodeApi.fetchUsers()
	}
)

export const usersSlice = createSlice({
	name: "users",
	initialState: {
		all: [],
	},
	// Redux Toolkit allows us to write "mutating" logic in reducers. It
	// doesn't actually mutate the state because it uses the Immer library,
	// which detects changes to a "draft state" and produces a brand new
	// immutable state based off those changes
	reducers: {
		setUsers: (state, action) => {
			state.all = action.payload
		},
	},
	extraReducers: {
		[fetchUsers.pending]: (state, actions) => {},
		[fetchUsers.fulfilled]: (state, actions) => {
			usersSlice.caseReducers.setUsers(state, actions)
		},
		[fetchUsers.rejected]: (state, actions) => {},
	},
})

export const { setUsers } = usersSlice.actions

export const selectUsers = (state) => state.users.all

export const selectUserById = createSelector(
	selectUsers,
	(_, props) => props.id,
	(users, id) => users.find((u) => u.id == id)
)
export default usersSlice.reducer
