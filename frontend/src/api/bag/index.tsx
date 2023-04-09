import axios from 'axios'
import { BagReqBodyType } from '../../types'

export const createOrUpdateBagApi = async (reqBody: BagReqBodyType) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${import.meta.env.VITE_API_BASE_URL}/bag`,
      data: reqBody
    })    
    return {
      bag: JSON.parse(response.data.replace('ls', ''))
    }
  } catch (error) {
    return
  }
}

export const getBagByIdApi = async (id:string) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${import.meta.env.VITE_API_BASE_URL}/bag/${id}`,
    })
    return {
      bag: JSON.parse(response.data.replace('ls', ''))
    }
  } catch (error) {
    return
  }
}