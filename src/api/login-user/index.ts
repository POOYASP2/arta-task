import api from '../../services/api'
import type { loginPayloadType } from './types'
export const loginUser = async (payload: loginPayloadType) => {
  try {
    const response = await api.post('login', JSON.stringify(payload))
    return response.data
  } catch (error) {
    throw error
  }
}
