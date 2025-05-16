'use client'

import { useState } from 'react'
import TaskList from '../components/TaskList'

export default function TodosPage() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask
      }
      setTasks([...tasks, task])
      setNewTask('')
    }
  }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todos List</h1>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow p-2 border rounded-l"
        />
        <button 
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Add
        </button>
      </div>
      
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  )
}
