import axios from 'axios'
import { ProductReqBodyType } from '../../types'

interface ProductType {
  name?: string
  price?: number
  description?: string
  image_link?: string
}

export const getAllItemsApi = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${import.meta.env.VITE_API_BASE_URL}/item`,
    })

    return {
      products: JSON.parse(response.data.replace('ls', ''))
    }
  } catch (error) {
    return {
      products: []
    }
  }
}

export const createProductApi = async (reqBody: ProductReqBodyType) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${import.meta.env.VITE_API_BASE_URL}/item`,
      data: reqBody
    })

    return {
      products: JSON.parse(response.data.replace('ls', ''))
    }
  } catch (error) {
    return
  }
}

export const deleteProductApi = async (id: string) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `${import.meta.env.VITE_API_BASE_URL}/item/${id}`,
    })
    return {
      products: JSON.parse(response.data.replace('ls', ''))
    }
  } catch (error) {
    return
  }
}

export const updateProductApi = async (id: string, reqBody: ProductType) => {
  try {
    const response = await axios({
      method: 'PATCH',
      url: `${import.meta.env.VITE_API_BASE_URL}/item/${id}`,
      data: reqBody
    })
    return {
      products: JSON.parse(response.data.replace('ls', ''))
    }
  } catch (error) {
    return
  }
}