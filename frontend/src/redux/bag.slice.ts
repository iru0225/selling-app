import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrUpdateBagApi, getBagByIdApi } from '../api/bag';
import { RootState } from '../state/store';

const createOrUpdateBag = createAsyncThunk<
  any,
  { 
    customer_id: string,
    product?: {
      id: string,
      qty: number
    },
    order_id?: string
  },
  {state: RootState}
>(
  'bag/',
  async (data) => {
    const response = await createOrUpdateBagApi(data)
    return response
  }
)

const getBagById = createAsyncThunk<
  any,
  { 
    id: string,
  },
  {state: RootState}
>(
  'bag/id',
  async ({ id }) => {
    const response = await getBagByIdApi(id)
    return response
  }
)

interface BagState {
  bag: {}
}

const initialState = {
  bag: {}
} as BagState

export const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrUpdateBag.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
    builder.addCase(getBagById.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
  }
})

const { actions } = bagSlice
export const bagAction = {
  ...actions,
  createOrUpdateBag,
  getBagById
}

export const bagSelector = ({ bag }: RootState): BagState => bag