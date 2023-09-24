import api from '../../services/api'
export const getUsersList = async (payload: number) => {
  try {
    const response = await api.get(`users?page=${payload}`)
    return response.data
  } catch (error) {
    throw error
  }
}
