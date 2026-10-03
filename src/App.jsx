// App: Root component with calm, disciplined composition and anti-inspect protection
import { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import UserGuide from './components/UserGuide'

export default function App() {
  const [tasks, setTasks] = useState([])

  // Prevent inspect shortcuts and right-click context menu
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault()
    }

    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) ||
        (e.ctrlKey && ['u', 'U'].includes(e.key))
      ) {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Immutable add task handler
  const handleAdd = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      done: false,
      notes: '',
      subtasks: [],
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  // Immutable toggle task status handler
  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  // Immutable delete task handler
  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  // Clear all tasks handler
  const handleClearAll = () => {
    setTasks([])
  }

  // Update task notes or details
  const handleUpdateTask = (id, fields) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...fields } : task
      )
    )
  }

  // Add subtask
  const handleAddSubtask = (taskId, subtaskText) => {
    const newSubtask = {
      id: crypto.randomUUID(),
      text: subtaskText,
      done: false,
    }
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, subtasks: [...(task.subtasks || []), newSubtask] }
          : task
      )
    )
  }

  // Toggle subtask
  const handleToggleSubtask = (taskId, subtaskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: (task.subtasks || []).map((sub) =>
                sub.id === subtaskId ? { ...sub, done: !sub.done } : sub
              ),
            }
          : task
      )
    )
  }

  // Delete subtask
  const handleDeleteSubtask = (taskId, subtaskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: (task.subtasks || []).filter((sub) => sub.id !== subtaskId),
            }
          : task
      )
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f9fd] font-sans text-indigo-950 flex items-center justify-center py-8 sm:py-14 px-4 select-none">
      <div className="w-full max-w-lg mx-auto">
        <div className="rounded-3xl border border-indigo-100/80 bg-white p-6 sm:p-8 shadow-[0_12px_40px_-10px_rgba(79,70,229,0.08)] space-y-5 transition-all">
          <Header />
          <main className="space-y-5">
            <TaskForm onAdd={handleAdd} />
            <TaskList
              tasks={tasks}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onClearAll={handleClearAll}
              onUpdateTask={handleUpdateTask}
              onAddSubtask={handleAddSubtask}
              onToggleSubtask={handleToggleSubtask}
              onDeleteSubtask={handleDeleteSubtask}
            />
            <UserGuide />
          </main>
        </div>
      </div>
    </div>
  )
}
