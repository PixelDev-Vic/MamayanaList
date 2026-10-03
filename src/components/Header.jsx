// Header: Serene, uncluttered brand header with bespoke mascot and calming identity
import SleepingManIcon from './SleepingManIcon'

export default function Header() {
  return (
    <header className="flex items-center gap-3.5 pb-2">
      <SleepingManIcon className="h-12 w-12 shrink-0 transition-transform duration-200 hover:scale-105" />
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-950 tracking-tight">
          MamayanaList
        </h1>
        <p className="text-sm font-medium text-indigo-500">
          Rest easy. Mamaya na yan!
        </p>
      </div>
    </header>
  )
}
