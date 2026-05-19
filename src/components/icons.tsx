export type IconName =
  | 'activityChart'
  | 'bolt'
  | 'chatBubble'
  | 'code'
  | 'download'
  | 'envelope'
  | 'github'
  | 'linkedin'
  | 'locationPin'
  | 'mail'
  | 'monitor'
  | 'office'
  | 'shoppingCart'

export function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 3v4a2 2 0 0 0 2 2h4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18 21H8a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h6l6 6v8a4 4 0 0 1-2 3.46"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 11v7m0 0 3-3m-3 3-3-3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.9 8.8H3.7V20h3.2V8.8ZM5.3 3.4a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.3 13.6c0-3-1.6-5-4.2-5-1.9 0-2.8 1-3.3 1.8V8.8H9.6V20h3.2v-5.8c0-1.6.8-2.7 2.2-2.7 1.3 0 2 1 2 2.7V20h3.3v-6.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.2 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 1.1a10.2 10.2 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.4.2 2.5.1 2.8.7.7 1.1 1.7 1.1 2.8 0 4-2.4 4.9-4.7 5.2.4.3.8 1 .8 2v2.9c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6Zm1.8 1.8L12 13l6.2-5.2M5 17l4.6-4m9.4 4-4.6-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export function LocationPinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6.5h16v11H4v-11Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m5 8 7 5.2L19 8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function ChatBubbleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 18.5 5.8 15A7.3 7.3 0 1 1 9 18.2l-4 .3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function LeafPlant() {
  return (
    <svg className="plant-illustration" viewBox="0 0 170 250" aria-hidden="true">
      <path
        d="M64 230c22-55 33-108 35-190"
        fill="none"
        stroke="#78915b"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path d="M96 72c33-19 36-47 32-66-27 13-39 37-32 66Z" fill="#8fa76f" />
      <path d="M83 100c-38-13-55-42-58-66 33 5 56 31 58 66Z" fill="#8fa76f" />
      <path d="M93 122c40-9 60-35 66-59-35 1-62 24-66 59Z" fill="#8fa76f" />
      <path d="M80 151c-38-6-61-30-70-54 34-2 62 19 70 54Z" fill="#8fa76f" />
      <path d="M83 174c44-4 70-27 82-51-38-5-69 14-82 51Z" fill="#8fa76f" />
      <path d="M69 207c-35-4-58-25-69-47 31-6 59 12 69 47Z" fill="#8fa76f" />
      <path
        d="M104 12c-2 19-5 37-8 56M29 41c20 15 35 33 50 56M151 70c-22 13-39 29-56 49M15 105c21 13 40 29 62 44M159 129c-25 11-48 25-73 43M6 169c23 8 42 20 60 36"
        fill="none"
        stroke="#6f8753"
        strokeLinecap="round"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  )
}

export function ShoppingCartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 5h2.2l2 10.2h8.7l2-7.1H7.1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="9.6" cy="19" r="1.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="19" r="1.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function OfficeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 20h16M6 20V8l6-4 6 4v12M9 10h.1M12 10h.1M15 10h.1M9 14h.1M12 14h.1M15 14h.1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 5.5h14v10H5v-10ZM9 19h6M12 15.5V19"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function ActivityChartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 18h14M6 16V6h12v10H6Zm2-3 3-3 2.2 2.2L16.8 8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m13 2-8 11h6l-1 9 9-13h-6l0-7Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m8 8-4 4 4 4m8-8 4 4-4 4m-2-10-4 12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}
