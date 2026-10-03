// TaskItem: Card layout inspired by modern mobile task apps with zero overlapping, subtask counter, description, and subtasks
import { useState } from 'react'

export default function TaskItem({
  task,
  onToggle,
  onDelete,
  onUpdateTask,
  onAddSubtask,
  onToggleSubtask,
  onDeleteSubtask,
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [subtaskInput, setSubtaskInput] = useState('')

  const subtasks = task.subtasks || []
  const completedSubtasks = subtasks.filter((s) => s.done).length

  const handleSubtaskSubmit = (e) => {
    e.preventDefault()
    const trimmed = subtaskInput.trim()
    if (!trimmed || !onAddSubtask) return
    onAddSubtask(task.id, trimmed)
    setSubtaskInput('')
  }

  return (
    <li
      className={`rounded-2xl border transition-all duration-200 p-4 space-y-3 ${
        task.done
          ? 'bg-indigo-50/30 border-indigo-100 text-indigo-400'
          : 'bg-white border-indigo-100 shadow-xs hover:border-indigo-200 hover:shadow-sm'
      }`}
    >
      {/* Row 1: Checkbox + Title (Full width) + Subtask Counter + Expand Chevron */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Rounded square / circle checkbox */}
          <button
            type="button"
            role="checkbox"
            aria-checked={task.done}
            aria-label={`Mark "${task.text}" as ${task.done ? 'Not Done' : 'Done'}`}
            onClick={() => onToggle(task.id)}
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border-2 transition-all duration-150 active:scale-90 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
              task.done
                ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
                : 'border-indigo-300 bg-white hover:border-indigo-600'
            }`}
          >
            {task.done && (
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          {/* Title with full width — never overlaps buttons */}
          <span
            onClick={() => setIsExpanded(!isExpanded)}
            className={`break-words text-base font-semibold transition cursor-pointer select-none flex-1 min-w-0 ${
              task.done ? 'line-through text-indigo-400' : 'text-indigo-950'
            }`}
          >
            {task.text}
          </span>
        </div>

        {/* Subtask count & soft circular chevron button (matches reference image) */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono font-medium text-indigo-400">
            {completedSubtasks} / {subtasks.length}
          </span>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="Toggle task description and subtasks"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 hover:bg-indigo-100 hover:text-indigo-800 transition active:scale-90 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Row 2: Status Badge + Actions (Separated row so nothing overlaps) */}
      <div className="flex items-center justify-between pt-2 border-t border-indigo-50 gap-2">
        {/* Status Badge */}
        {task.done ? (
          <span className="inline-flex min-h-8 items-center gap-1 rounded-xl bg-indigo-700 text-white px-2.5 py-1 text-xs font-semibold shadow-xs">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            Done
          </span>
        ) : (
          <span className="inline-flex min-h-8 items-center gap-1 rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-600 px-2.5 py-1 text-xs font-semibold">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
            Not Done
          </span>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          {/* Toggle Button */}
          <button
            type="button"
            onClick={() => onToggle(task.id)}
            aria-label={task.done ? `Mark "${task.text}" as Not Done` : `Mark "${task.text}" as Done`}
            className="inline-flex min-h-8 items-center justify-center rounded-xl border border-indigo-200 bg-white px-3 py-1 text-xs font-semibold text-indigo-700 shadow-2xs hover:bg-indigo-50 transition active:scale-95 cursor-pointer whitespace-nowrap"
          >
            {task.done ? 'Mark as Not Done' : 'Mark as Done'}
          </button>

          {/* Delete Button */}
          <button
            type="button"
            onClick={() => onDelete(task.id)}
            aria-label={`Delete "${task.text}"`}
            className="inline-flex min-h-8 items-center justify-center gap-1 rounded-xl border border-transparent px-2.5 py-1 text-xs font-semibold text-indigo-400 hover:text-indigo-800 hover:bg-indigo-50 transition active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" />
            </svg>
            Delete
          </button>
        </div>
      </div>

      {/* Row 3 (Expandable): Description & Subtasks section */}
      {isExpanded && (
        <div className="pt-3 border-t border-indigo-100 space-y-3.5 animate-in fade-in duration-150">
          {/* Description Section */}
          <div className="space-y-1">
            <label
              htmlFor={`notes-${task.id}`}
              className="block text-[11px] font-bold uppercase tracking-wider text-indigo-600"
            >
              Description &amp; Notes
            </label>
            <textarea
              id={`notes-${task.id}`}
              value={task.notes || ''}
              onChange={(e) => onUpdateTask && onUpdateTask(task.id, { notes: e.target.value })}
              placeholder="Add task description or details..."
              rows={2}
              className="w-full rounded-xl border border-indigo-200 bg-indigo-50/30 p-2.5 text-xs text-indigo-950 placeholder:text-indigo-400 focus:bg-white focus:border-indigo-400 focus:outline-none transition resize-none"
            />
          </div>

          {/* Subtasks Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                Subtasks ({completedSubtasks} / {subtasks.length})
              </span>
            </div>

            {/* Quick Add Subtask Input Form */}
            <form onSubmit={handleSubtaskSubmit} className="flex gap-2">
              <input
                type="text"
                value={subtaskInput}
                onChange={(e) => setSubtaskInput(e.target.value)}
                placeholder="Add a subtask..."
                aria-label="Add subtask"
                className="flex-1 rounded-xl border border-indigo-200 bg-white px-3 py-1.5 text-xs text-indigo-950 placeholder:text-indigo-400 focus:border-indigo-500 focus:outline-none transition"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 active:scale-95 transition cursor-pointer"
              >
                + Add
              </button>
            </form>

            {/* Subtasks List */}
            {subtasks.length > 0 && (
              <ul className="space-y-1 pt-1">
                {subtasks.map((subtask) => (
                  <li
                    key={subtask.id}
                    className="flex items-center justify-between gap-2.5 rounded-lg bg-indigo-50/40 border border-indigo-100/70 p-2 hover:bg-indigo-50 transition"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={subtask.done}
                        aria-label={`Mark subtask "${subtask.text}" as ${subtask.done ? 'Not Done' : 'Done'}`}
                        onClick={() => onToggleSubtask && onToggleSubtask(task.id, subtask.id)}
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-md border transition active:scale-90 cursor-pointer ${
                          subtask.done
                            ? 'bg-indigo-600 border-indigo-600 text-white'
                            : 'border-indigo-300 bg-white hover:border-indigo-600'
                        }`}
                      >
                        {subtask.done && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-2.5 w-2.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                      <span
                        onClick={() => onToggleSubtask && onToggleSubtask(task.id, subtask.id)}
                        className={`text-xs break-words flex-1 cursor-pointer select-none ${
                          subtask.done ? 'line-through text-indigo-400' : 'text-indigo-900'
                        }`}
                      >
                        {subtask.text}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onDeleteSubtask && onDeleteSubtask(task.id, subtask.id)}
                      aria-label={`Delete subtask "${subtask.text}"`}
                      className="text-indigo-300 hover:text-indigo-700 p-1 transition cursor-pointer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </li>
  )
}
