export function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12.9717 3.60459C11.517 5.0593 8.81071 5.00467 7.29478 3.48873L6.67322 2.86719 5.47987 4.06055l.62153.62154c1.10262 1.10262 2.6011 1.67265 4.0892 1.70363L2.82812 13.7482l1.24308 1.2431 7.3625-7.36249c.0309 1.48807.601 2.98659 1.7036 4.08921l.6215.6215 1.1934-1.1933-.6216-.6216c-1.5159-1.51595-1.5705-4.22222-.1158-5.67692l.5967-.59669-1.2431-1.24308-.5967.59668Z"
      />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 12 14" fill="currentColor" aria-hidden>
      <path d="M12 7 0 14V0l12 7Z" />
    </svg>
  );
}
