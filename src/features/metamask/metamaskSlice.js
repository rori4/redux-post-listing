import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadAccount = createAsyncThunk(
  "metamask/loadAccount",
  async (_, { dispatch, getState }) => {
    if (window.ethereum) {
      try {
        window.ethereum.enable().then(function (account) {
          console.log(account);
          // User has allowed account access to DApp...
        });
      } catch (e) {
        // User has denied account access to DApp...
      }
    }
  }
);

export const metamaskSlice = createSlice({
  name: "metamask",
  initialState: {
    account: null,
    loading: null,
    web3Loaded: null,
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    setWeb3Loaded: (state, action) => {
      // console.log(action.payload.isConnected());
      state.web3Loaded = action.payload;
    },
  },
  extraReducers: {
    // [checkWeb3.pending]: (state, action) => {},
    // [checkWeb3.fulfilled]: (state, action) => {
    //   // metamaskSlice.caseReducers.setWeb3Loaded(state, action);
    // },
    // [checkWeb3.rejected]: (state, action) => {},
  },
});

export const { setAccount, setWeb3Loaded } = metamaskSlice.actions;

export default metamaskSlice.reducer;
