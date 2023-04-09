import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createCustomerApi, deleteCustomerApi, getCustomers, updateCustomerApi } from '../api/customer'
import { RootState } from '../state/store'
import { CustomerType } from '../types'

const getAllCustomers = createAsyncThunk<any, void, {state: RootState}>(
  'customer/',
  async () => {
    const response = await getCustomers()
    return response
  }
)

const createCustomer = createAsyncThunk<any, { name: string, address: string, phone: string }, { state: RootState }>(
  'customer/store',
  async({ name, address, phone }) => {
    const reqBody = {
      name,
      address,
      phone
    }
    const response = await createCustomerApi(reqBody)
    return response
  }
)

const deleteCustomer = createAsyncThunk<any, { id: string }, { state: RootState }>(
  'customer/delete',
  async({ id }) => {
    const response = await deleteCustomerApi(id)
    return response
  }
)

const updateCustomer = createAsyncThunk<any, { id: string, name?: string, address?: string, phone?: string }, { state: RootState }>(
  'customer/patch',
  async(params) => {
    const { id } = params
    const reqBody = { ...params }
    delete reqBody.id
    const response = await updateCustomerApi(id, reqBody)
    return response
  }
)

interface CustomersState {
  customers: CustomerType[]
}

const initialState = {
  customers: []
} as CustomersState

export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCustomers.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
    builder.addCase(createCustomer.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
    builder.addCase(deleteCustomer.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
    builder.addCase(updateCustomer.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
  }
})

const { actions } = customerSlice
export const customerAction = {
  ...actions,
  getAllCustomers,
  createCustomer,
  deleteCustomer,
  updateCustomer
}
export const customerSelector = ({customers}: RootState): CustomersState => customers