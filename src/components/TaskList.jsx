// TaskList: Floating task cards container matching reference design with clear spacing and clean counter
import SleepingManIcon from './SleepingManIcon'
import TaskItem from './TaskItem'

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
  onClearAll,
  onUpdateTask,
  onAddSubtask,
  onToggleSubtask,
  onDeleteSubtask,
}) {
  const totalCount = tasks.length
  const doneCount = tasks.filter((t) => t.done).length
  const percentDone = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0

  return (
    <div className="space-y-3">
      {/* Counter bar */}
      <div
        className="flex items-center justify-between text-xs font-medium text-indigo-500 px-1"
        aria-live="polite"
      >
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-xs font-bold text-indigo-950">{doneCount}</span>
          <span>of</span>
          <span className="font-mono text-xs font-bold text-indigo-950">{totalCount}</span>
          <span>tasks done</span>
          {totalCount > 0 && (
            <span className="text-indigo-300">•</span>
          )}
          {totalCount > 0 && (
            <span className="text-[11px] text-indigo-400 font-mono">{percentDone}%</span>
          )}
        </div>

        {totalCount > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-xs font-semibold text-indigo-500 hover:text-indigo-800 transition active:scale-95 cursor-pointer underline-offset-2 hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Floating Task Cards List or Empty State */}
      {totalCount === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center rounded-2xl border border-dashed border-indigo-200/70 bg-indigo-50/20 gap-3">
          <SleepingManIcon className="h-16 w-16 opacity-85 transition hover:scale-105" />
          <p className="text-sm font-medium text-indigo-500">
            No tasks yet. Add your first task above.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
              onUpdateTask={onUpdateTask}
              onAddSubtask={onAddSubtask}
              onToggleSubtask={onToggleSubtask}
              onDeleteSubtask={onDeleteSubtask}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
