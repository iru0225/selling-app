import axios from 'axios'
import { CustomerReqBodyType } from '../../types'

export const getCustomers = async () => {
  try {  
    const response = await axios({
      method: 'GET',
      url: `${import.meta.env.VITE_API_BASE_URL}/customer`,
    })

    return {
      customers: JSON.parse(response.data.replace('ls', ''))
    }
  } catch (error) {
    return {
      customers: []
    }
  }
}

export const createCustomerApi = async (reqBody: CustomerReqBodyType) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${import.meta.env.VITE_API_BASE_URL}/customer`,
      data: reqBody
    })

    return {
      customers: JSON.parse(response.data.replace('ls', ''))
    }
  } catch (error) {
    return
  }
}

export const deleteCustomerApi = async (id: string) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `${import.meta.env.VITE_API_BASE_URL}/customer/${id}`,
    })
    return {
      customers: JSON.parse(response.data.replace('ls', ''))
    }
  } catch (error) {
    return
  }
}
export const updateCustomerApi = async (id: string, reqBody: object) => {
  try {
    const response = await axios({
      method: 'PATCH',
      url: `${import.meta.env.VITE_API_BASE_URL}/customer/${id}`,
      data: reqBody
    })
    return {
      customers: JSON.parse(response.data.replace('ls', ''))
    }
  } catch (error) {
    return
  }
}