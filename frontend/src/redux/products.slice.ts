import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createProductApi, getAllItemsApi, deleteProductApi, updateProductApi } from '../api/product'
import { RootState } from '../state/store'
import { ProductType } from '../types'

const getAllItems = createAsyncThunk<any, void, {state: RootState}>(
  'items/',
  async() => {
    const response = await getAllItemsApi()
    return response
  }
)

const createProduct = createAsyncThunk<any, { name: string, price: number, description: string, image_link: string }, { state: RootState}>(
  'items/store',
  async({ name, price, description, image_link}) => {
    const reqBody = {
      name,
      price,
      description,
      image_link
    }
    const response = await createProductApi(reqBody)
    return response
  }
)

const deleteProduct = createAsyncThunk<any, { id: string }, { state: RootState }>(
  'item/delete',
  async({ id }) => {
    const response = await deleteProductApi(id)
    return response
  }
)

const updateProduct = createAsyncThunk<any, { id: string, name?: string, price?: number, description?: string, image_link?: string }, { state: RootState }>(
  'item/patch',
  async(params) => {
    const { id } = params
    const reqBody = { ...params }
    delete reqBody.id
    const response = await updateProductApi(id, reqBody)
    return response
  }
)

interface ProductsState {
  products: ProductType[]
}

const initialState = {
  products: []
} as ProductsState

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllItems.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
    builder.addCase(createProduct.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
    builder.addCase(deleteProduct.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
    builder.addCase(updateProduct.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
  }
})

const { actions } = productSlice
export const productAction = {
  ...actions,
  getAllItems,
  createProduct,
  deleteProduct,
  updateProduct
}
export const productSelector = ({products}: RootState): ProductsState => products