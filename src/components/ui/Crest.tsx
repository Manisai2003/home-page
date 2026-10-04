/** Simple placeholder crest. Replace with the official TIS logo asset. */
export default function Crest({ className = "h-11 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 44" aria-hidden="true" className={className}>
      <path d="M20 1 38 7v17c0 9-7 16-18 19C9 40 2 33 2 24V7z" fill="#B90124" />
      <path d="M7 31 15 19l4 6 5-9 9 15z" fill="#fff" />
      <circle cx="27" cy="12" r="3" fill="#F0B323" />
    </svg>
  );
}
