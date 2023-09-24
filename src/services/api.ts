// axios.js

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://reqres.in/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add request interceptors
api.interceptors.request.use(
  (config) => {
    // Do something before request

    return config
  },
  (error) => {
    // Handle errors

    return Promise.reject(error)
  }
)

// Add response interceptors
api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx

    return response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx

    return Promise.reject(error)
  }
)

export default api
