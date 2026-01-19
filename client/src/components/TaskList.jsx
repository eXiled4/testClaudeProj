import React from 'react'

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="no-tasks">
        No tasks yet. Add your first task above!
      </div>
    )
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <div className="task-content">
            <h3 className="task-title">{task.title}</h3>
            {task.description && (
              <p className="task-description">{task.description}</p>
            )}
            <span className={`task-status ${task.status}`}>
              {task.status === 'completed' ? 'Completed' : 'Pending'}
            </span>
          </div>
          <div className="task-actions">
            {task.status !== 'completed' && (
              <button
                className="complete-btn"
                onClick={() => onTaskComplete(task.id)}
              >
                Complete
              </button>
            )}
            <button
              className="delete-btn"
              onClick={() => onTaskDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
