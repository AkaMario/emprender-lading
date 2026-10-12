const paths = {
  store: (
    <>
      <path d="M3 10v10h18V10M2 7l2-4h16l2 4v3a3 3 0 0 1-5 2 3 3 0 0 1-5 0 3 3 0 0 1-5 0 3 3 0 0 1-5-2V7Z" />
      <path d="M9 20v-6h6v6M2 7h20" />
    </>
  ),
  download: <path d="M12 3v12m-5-5 5 5 5-5M4 15v5h16v-5" />,
  android: (
    <>
      <path d="m7 3 1.5 2.5M17 3l-1.5 2.5M4 12a8 8 0 0 1 16 0v5H4v-5Zm3 5v4m10-4v4M2 12v5m20-5v5" />
      <path d="M8.5 10h.01M15.5 10h.01" />
    </>
  ),
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  arrowDown: <path d="M12 4v16m-6-6 6 6 6-6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  check: <path d="m5 12 4 4L19 6" />,
  bolt: <path d="m13 2-9 12h7l-1 8 10-12h-7l1-8Z" />,
  box: <path d="M4 8h16v13H4zM3 3h18v5H3zM9 12h6" />,
  chart: <path d="M4 4v16h16M8 15l4-5 4 3 5-8M17 5h4v4" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4m10-4v4M3 11h18M7 15h2m4 0h2m-8 3h2" />
    </>
  ),
  ruler: (
    <path d="m3 16 13-13 5 5L8 21l-5-5Zm10-10 2 2m-5 1 2 2m-5 1 2 2m-5 1 2 2" />
  ),
  offline: (
    <path d="m3 3 18 18M7 7a5 5 0 0 0-1 3 5 5 0 0 0 0 10h12M12 5a5 5 0 0 1 5 5h1a5 5 0 0 1 4 8" />
  ),
  receipt: (
    <path d="M7 3h13v18l-3-2-3 2-3-2-3 2-3-2H3v-5h4V3ZM10 7h7m-7 4h7m-7 4h4" />
  ),
  devices: <path d="M14 3H3v15h8M6 21h5M8 18v3M15 9h7v12h-7zM18 18h1" />,
  noFees: (
    <path d="m3 3 18 18M16 6c-1-2-7-2-8 1m0 5c1 2 8 0 8 4s-7 4-9 1M12 2v3m0 14v3" />
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V6a4 4 0 0 1 8 0v4m-4 4v3" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M10 5h4m-3 14h2M9 11l2 2 4-4" />
    </>
  ),
  coffee: (
    <path d="M3 8h13v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Zm13 1h2a3 3 0 0 1 0 6h-2M2 23h16M7 2v3m5-3v3" />
  ),
  shirt: <path d="m8 3-6 4 3 5 3-2v11h8V10l3 2 3-5-6-4a4 4 0 0 1-8 0Z" />,
  scissors: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="m8 8 12 13M8 16 20 3M14 12l-2 2" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  play: <path d="m9 5 11 7-11 7V5Z" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
  ),
} as const;

export type IconName = keyof typeof paths;

type IconProps = { name: IconName; size?: number; className?: string };

export function Icon({ name, size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className ?? ""}`}
    >
      {paths[name]}
    </svg>
  );
}
