import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import metamaskReducer from "../features/metamask/metamaskSlice"

export default configureStore({
	reducer: {
		counter: counterReducer,
		metamask: metamaskReducer,
	},
})
