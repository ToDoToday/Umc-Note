import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 증가
    increase: (state, { payload }) => {
      const itemId = payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      if (item) {
        item.amount += 1; // item.id가 아니라 item.amount를 증가시켜야 합니다.
      }
    },

    // 감소
    decrease: (state, { payload }) => {
      const itemId = payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      if (item) {
        item.amount -= 1;
        // 만약 개수가 1보다 작아지면 해당 아이템을 삭제
        if (item.amount < 1) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== itemId
          );
        }
      }
    },

    // 아이템 제거
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemId
      );
    },

    // 모든 아이템 제거(clear)
    clearCart: (state) => {
      state.cartItems = [];
    },

    // total을 계산. 각각의 아이템 * 수량
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * parseInt(item.price); // price를 숫자로 변환하여 계산
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  increase,
  decrease,
  removeItem,
  clearCart,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
