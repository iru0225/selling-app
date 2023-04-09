import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrdersApi, deleteOrderApi } from "../api/order";
import { RootState } from "../state/store";

const getOrders = createAsyncThunk<any, void, {state: RootState}>(
  'order/',
  async () => {
    const response = await getOrdersApi()
    return response
  }
)

const deleteOrder = createAsyncThunk<any, { id: string }, {state: RootState}>(
  'order/delete',
  async ({ id }) => {
    const response = await deleteOrderApi(id)
    return response
  }
)

interface OrdersState {
  orders: []
}

const initialState = {
  orders: []
} as OrdersState

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
    builder.addCase(deleteOrder.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
  }
})

const { actions } = orderSlice
export const orderAction = {
  ...actions,
  getOrders,
  deleteOrder
}
export const orderSelector = ({ orders }: RootState): OrdersState => orders