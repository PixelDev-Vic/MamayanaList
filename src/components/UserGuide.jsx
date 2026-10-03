// UserGuide: Serene instructions guide with clean typographic layout
export default function UserGuide() {
  return (
    <section
      aria-labelledby="guide-heading"
      className="pt-4 border-t border-indigo-100/70 space-y-3"
    >
      <div>
        <h2 id="guide-heading" className="text-base font-bold text-indigo-950">
          How to Use
        </h2>
        <p className="text-xs text-indigo-500 font-medium">
          Tap the buttons or use your keyboard.
        </p>
      </div>

      <div className="space-y-2.5 text-xs text-indigo-800">
        <div className="flex gap-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[11px] font-bold text-indigo-700">
            1
          </span>
          <div className="space-y-0.5">
            <p className="font-semibold text-indigo-950">How to add a task</p>
            <p className="text-indigo-600 leading-relaxed">
              Type what needs doing and click <strong className="text-indigo-950 font-semibold">Add Task</strong> or hit{' '}
              <kbd className="font-mono text-[11px] bg-white border border-indigo-200 px-1 py-0.5 rounded text-indigo-800 shadow-2xs">
                Enter
              </kbd>
              .
            </p>
          </div>
        </div>

        <div className="flex gap-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[11px] font-bold text-indigo-700">
            2
          </span>
          <div className="space-y-0.5">
            <p className="font-semibold text-indigo-950">How to mark a task as Done or Not Done</p>
            <p className="text-indigo-600 leading-relaxed">
              Click <strong className="text-indigo-950 font-semibold">Mark as Done</strong> or tap the circular checkbox to toggle completion.
            </p>
          </div>
        </div>

        <div className="flex gap-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[11px] font-bold text-indigo-700">
            3
          </span>
          <div className="space-y-0.5">
            <p className="font-semibold text-indigo-950">How to delete a task</p>
            <p className="text-indigo-600 leading-relaxed">
              Click <strong className="text-indigo-950 font-semibold">Delete</strong> on any task, or use <strong className="text-indigo-950 font-semibold">Clear All</strong> to wipe every task.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
