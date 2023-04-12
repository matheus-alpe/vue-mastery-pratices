import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents(perPage, page) {
    const params = {}

    if (perPage) {
      params['_limit'] = perPage
    }

    if (page) {
      params['_page'] = page
    }

    const searchParams = new URLSearchParams(params)

    return apiClient.get(`/events?${searchParams}`)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
