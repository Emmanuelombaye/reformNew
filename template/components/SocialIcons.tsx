export function SocialIcons({ dark = false }: { dark?: boolean }) {
  return (
    <div className={dark ? "social social-dark" : "social"}>
      <a href="#" aria-label="Facebook">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" />
        </svg>
      </a>
      <a href="#" aria-label="Dribbble">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm6.5 6.3a8 8 0 0 1 1.4 4.4 18 18 0 0 0-6.4-.2 29 29 0 0 0-1.8-4.3 8 8 0 0 1 6.8-.9ZM12 4a8 8 0 0 1 4.2 1.2 27 27 0 0 0-5.6 1.1A27 27 0 0 0 8 4.6 8 8 0 0 1 12 4ZM6.2 5.8c.8-.5 1.6-.8 2.5-1.1 1.2.8 2.4 2.1 3.4 3.8A27 27 0 0 0 6.4 10a8 8 0 0 1-.2-4.2Zm-.7 6.3c.1 0 .3 0 .5-.1 4.2-.6 7.7-1 10.3-1.1.2 1.1.3 2.1.3 3.1 0 .7-.1 1.4-.2 2.1A8 8 0 0 1 4 12.8c.4-.3 1-.5 1.5-.7Zm3.3 7.1A8 8 0 0 1 4.6 16c.9.1 1.9.1 3 .1 1.7 0 3.4-.1 5-.4a18 18 0 0 1-3.8 3.5Zm5.2-.6c1.1-.9 2.1-2.1 2.8-3.6 1.4.4 2.7.9 3.8 1.5A8 8 0 0 1 14 18.6Z" />
        </svg>
      </a>
      <a href="#" aria-label="Instagram">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-4 3.2A4.8 4.8 0 1 1 7.2 13 4.8 4.8 0 0 1 12 8.2Zm0 2A2.8 2.8 0 1 0 14.8 13 2.8 2.8 0 0 0 12 10.2ZM17.6 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
        </svg>
      </a>
      <a href="#" aria-label="LinkedIn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 9H4v11h2.5V9ZM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4ZM20 20h-2.5v-5.6c0-1.6-.6-2.7-2-2.7s-1.7.9-2 1.8V20H11V9h2.4v1.5c.5-.9 1.7-2 3.6-2 2.5 0 4 1.6 4 5.1V20Z" />
        </svg>
      </a>
    </div>
  );
}
