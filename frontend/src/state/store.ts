import { configureStore } from '@reduxjs/toolkit'
import { customerSlice } from '../redux/customer.slice'
import { productSlice } from '../redux/products.slice'
import { bagSlice } from '../redux/bag.slice'
import { orderSlice } from '../redux/order.slice'

export const store = configureStore({
  reducer: {
    customers: customerSlice.reducer,
    products: productSlice.reducer,
    bag: bagSlice.reducer,
    orders: orderSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch