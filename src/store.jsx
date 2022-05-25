import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(state) {
      return "John " + state;
    },
  },
});

export const { changeName } = user.actions;

const cartData = createSlice({
  name: "data",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 1, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export const { increaseCount } = cartData.actions;
export const { addItem } = cartData.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cartData: cartData.reducer,
  },
});
