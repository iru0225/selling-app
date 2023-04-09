import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrUpdateBagApi } from '../api/bag';
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
  }
})

const { actions } = bagSlice
export const bagAction = {
  ...actions,
  createOrUpdateBag
}

export const bagSelector = ({ bag }: RootState): BagState => bag