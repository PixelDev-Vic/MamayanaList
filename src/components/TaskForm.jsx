// TaskForm: Unified, effortless input bar with integrated Add Task button and Enter key submission
import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = inputText.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setInputText('')
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center gap-2 rounded-2xl border border-indigo-200/80 bg-indigo-50/40 p-1.5 shadow-2xs transition-all focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-500/10">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="What needs doing?"
          aria-label="New task"
          className="flex-1 bg-transparent px-3 py-2 text-base text-indigo-950 placeholder:text-indigo-400 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white shadow-xs transition-all hover:bg-indigo-500 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 disabled:opacity-50 cursor-pointer shrink-0"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add Task
        </button>
      </div>
    </form>
  )
}
