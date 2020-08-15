import axios from 'axios' /* yarn add axios para gerenciar a api */

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api