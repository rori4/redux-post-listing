import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchPosts, setPosts } from "features/posts/postsSlice"
import { fetchUsers } from "features/usersPage/usersSlice"

export const loadAccount = createAsyncThunk(
	"metamask/loadAccount",
	async (_, { dispatch, getState }) => {
		if (window.ethereum) {
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			})
			dispatch(fetchPosts())
			dispatch(fetchUsers())
			return accounts[0]
		}
		//TODO: if metamask not present alert
	}
)

export const setChangeAccountListener = createAsyncThunk(
	"metamask/setChangeAccountListener",
	async (_, { dispatch, getState }) => {
		const state = getState()
		const alreadyLoaded =
			state.metamask.listeners[setChangeAccountListener.typePrefix]
		// call this once and set the event listener
		if (window.ethereum && !alreadyLoaded) {
			window.ethereum.on("accountsChanged", function (acc) {
				if (acc.length === 0) {
					dispatch(setAccount(null))
					dispatch(setPosts([]))
				}
				dispatch(loadAccount())
			})
			dispatch(setListenerLoaded(setChangeAccountListener.typePrefix))
		}
	}
)

export const metamaskSlice = createSlice({
	name: "metamask",
	initialState: {
		account: null,
		loading: null,
		listeners: {},
	},
	reducers: {
		// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// doesn't actually mutate the state because it uses the Immer library,
		// which detects changes to a "draft state" and produces a brand new
		// immutable state based off those changes
		setAccount: (state, action) => {
			state.account = action.payload
		},
		setLoading: (state, action) => {
			state.loading = action.payload
		},
		setListenerLoaded: (state, { payload }) => {
			state.listeners[payload] = true
		},
	},
	extraReducers: {
		[loadAccount.pending]: (state, action) => {
			metamaskSlice.caseReducers.setLoading(state, { payload: true })
		},
		[loadAccount.fulfilled]: (state, action) => {
			metamaskSlice.caseReducers.setAccount(state, action)
			metamaskSlice.caseReducers.setLoading(state, { payload: false })
		},
		[loadAccount.rejected]: (state, action) => {
			metamaskSlice.caseReducers.setLoading(state, { payload: false })
		},
	},
})

export const {
	setAccount,
	setLoading,
	setListenerLoaded,
} = metamaskSlice.actions

export const selectAccount = (state) => state.metamask.account
export const selectMetamaskLoadingStatus = (state) => state.metamask.loading

export default metamaskSlice.reducer
