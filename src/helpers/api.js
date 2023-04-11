import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/rayanmarcus/fakeapi/pacientes'
})

export default api
