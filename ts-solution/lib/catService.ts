import axios from "axios"

export interface Cat {
  id:    string,
  age:   string,
  name:  string,
  color: string
}

export const getCats = async (): Promise<Cat[]> => {
  const response = await axios.get('http://localhost:4000/cats')
  return response.data ?? []
}

export const getCatById = async (id: string): Promise<Cat> => {
  const response = await axios.get(`http://localhost:4000/cats/${id}`)
  return response.data ?? []
}

const catService = {
  getCats,
  getCatById,
}

export default catService