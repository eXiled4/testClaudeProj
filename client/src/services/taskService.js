import axios from 'axios'

const API_URL = '/api'

export const taskService = {
  getAllTasks: async () => {
    const response = await axios.get(`${API_URL}/tasks.php`)
    return response.data
  },

  createTask: async (task) => {
    const response = await axios.post(`${API_URL}/tasks.php`, task)
    return response.data
  },

  updateTask: async (id, task) => {
    const response = await axios.put(`${API_URL}/tasks.php?id=${id}`, task)
    return response.data
  },

  deleteTask: async (id) => {
    const response = await axios.delete(`${API_URL}/tasks.php?id=${id}`)
    return response.data
  }
}
