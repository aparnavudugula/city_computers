export function ArrowIcon({ className = "" }) {
  return <span className={className} aria-hidden="true">→</span>;
}

export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16l5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {[4, 12].flatMap(x => [4, 12].map(y => <rect key={`${x}-${y}`} x={x} y={y} width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />))}
    </svg>
  );
}
