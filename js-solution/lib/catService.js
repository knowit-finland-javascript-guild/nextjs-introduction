import axios from "axios"

export const getCats = async () => {
  const response = await axios.get('http://localhost:4000/cats')
  return response.data ?? []
}

export const getCatById = async (id) => {
  const response = await axios.get(`http://localhost:4000/cats/${id}`)
  return response.data ?? []
}

export const deleteCatById = async (id) => {
  const response = await axios.delete(`http://localhost:4000/dogs/${id}`)
  return response.data ?? []
}

export const createCat = async (id) => {
  const response = await axios.post(`http://localhost:4000/dogs/${id}`)
  return response.data ?? []
}

const catService = {
  getCats,
  getCatById,
  deleteCatById,
  createCat
}

export default catService