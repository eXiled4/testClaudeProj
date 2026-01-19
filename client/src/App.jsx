import React, { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { taskService } from './services/taskService'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await taskService.getAllTasks()
      setTasks(data)
    } catch (err) {
      setError('Failed to load tasks: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleTaskCreated = async (taskData) => {
    await taskService.createTask(taskData)
    await loadTasks()
  }

  const handleTaskComplete = async (id) => {
    const task = tasks.find(t => t.id === id)
    if (task) {
      await taskService.updateTask(id, { ...task, status: 'completed' })
      await loadTasks()
    }
  }

  const handleTaskDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await taskService.deleteTask(id)
      await loadTasks()
    }
  }

  return (
    <div className="app">
      <h1>Test Task Manager</h1>
      
      {error && <div className="error">{error}</div>}
      
      <TaskForm onTaskCreated={handleTaskCreated} />
      
      {loading ? (
        <div className="loading">Loading tasks...</div>
      ) : (
        <TaskList
          tasks={tasks}
          onTaskComplete={handleTaskComplete}
          onTaskDelete={handleTaskDelete}
        />
      )}
    </div>
  )
}

export default App
