import axios from 'axios'

export const getOrdersApi = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${import.meta.env.VITE_API_BASE_URL}/order`
    })

    return {
      orders: JSON.parse(response.data.replace('ls', ''))
    }
  } catch (error) {
    return
  }
}