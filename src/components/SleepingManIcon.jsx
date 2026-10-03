// SleepingManIcon: Exact mascot SVG per MamayanaList Brand Guide Section 6.3
export default function SleepingManIcon({ className = "h-12 w-12" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="MamayanaList sleeping man logo"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* badge */}
      <circle cx="32" cy="32" r="30" fill="#4f46e5" stroke="#312e81" strokeWidth="2" />
      {/* pillow */}
      <rect x="14" y="46" width="34" height="8" rx="4" fill="#e0e7ff" stroke="#312e81" strokeWidth="2" />
      {/* bald head */}
      <circle cx="30" cy="38" r="9" fill="#e0e7ff" stroke="#312e81" strokeWidth="2" />
      {/* shine */}
      <path d="M24 33 Q26.5 30.5 30 30.5" fill="none" stroke="#ffffff" strokeWidth="2.5" />
      {/* closed eye */}
      <path d="M31 37.5 q2 2 4 0" fill="none" stroke="#312e81" strokeWidth="2" />
      {/* nose */}
      <path d="M39 37 q2.5 1.5 0 3.5" fill="none" stroke="#6366f1" strokeWidth="2" />
      {/* smile */}
      <path d="M33.5 42 q2 1.5 4 0" fill="none" stroke="#312e81" strokeWidth="2" />
      {/* blanket */}
      <path d="M32 48 Q42 44 52 49 L50 55 H32 Z" fill="#6366f1" stroke="#312e81" strokeWidth="2" />
      <path d="M38 51 Q44 49 49 52" fill="none" stroke="#a5b4fc" strokeWidth="2" />
      {/* z z z (ascending) */}
      <path d="M36 23 h3 l-3 3 h3" fill="none" stroke="#c7d2fe" strokeWidth="2" />
      <path d="M40 17 h4 l-4 4 h4" fill="none" stroke="#c7d2fe" strokeWidth="2" />
      <path d="M45 10 h5 l-5 5 h5" fill="none" stroke="#c7d2fe" strokeWidth="2.5" />
    </svg>
  );
}
