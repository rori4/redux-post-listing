import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const loadAccount = createAsyncThunk(
	"metamask/loadAccount",
	async (_, { dispatch, getState }) => {
		if (window.ethereum) {
			const accounts = await window.ethereum.enable()
			return accounts[0]
		}
	}
)

export const setChangeAccountListener = createAsyncThunk(
	"metamask/setChangeAccountListener",
	async (_, { dispatch, getState }) => {
		const state = getState()
		const { accountChangeListenerLoaded } = state.metamask
		// call this once and set the event listener
		if (window.ethereum && !accountChangeListenerLoaded) {
			window.ethereum.on("accountsChanged", function () {
				dispatch(loadAccount())
			})
			dispatch(setAccountChangeListenerLoaded(true))
		}
	}
)

export const metamaskSlice = createSlice({
	name: "metamask",
	initialState: {
		account: null,
		loading: null,
		accountChangeListenerLoaded: null,
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
		setAccountChangeListenerLoaded: (state, action) => {
			state.accountChangeListenerLoaded = action.payload
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
	setAccountChangeListenerLoaded,
} = metamaskSlice.actions

export const selectAccount = (state) => state.metamask.account
export const selectMetamaskLoadingStatus = (state) => state.metamask.loading

export default metamaskSlice.reducer
