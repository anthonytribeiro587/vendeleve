import type { SVGProps } from "react";

export type IconName =
  | "arrow" | "bag" | "calendar" | "chart" | "check" | "chevron" | "clock" | "close"
  | "document" | "gift" | "history" | "instagram" | "menu" | "package" | "phone" | "search"
  | "shield" | "spark" | "tag" | "users" | "wallet" | "whatsapp";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  bag: <><path d="M6 8h12l1 12H5L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  chevron: <path d="m9 18 6-6-6-6"/>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  document: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></>,
  gift: <><rect x="3" y="9" width="18" height="12" rx="2"/><path d="M12 9v12M3 13h18M7.5 9C4 9 4 4 7 4c2 0 5 5 5 5M16.5 9C20 9 20 4 17 4c-2 0-5 5-5 5"/></>,
  history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  package: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  shield: <><path d="M12 3 4.5 6v5.5c0 4.8 3.2 8.1 7.5 9.5 4.3-1.4 7.5-4.7 7.5-9.5V6L12 3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  spark: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></>,
  tag: <><path d="M3 11V4h7l11 11-7 7L3 11Z"/><circle cx="7.5" cy="8.5" r="1.5"/></>,
  users: <><circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 2.5-7 6-7s6 3 6 7M16 5a3 3 0 0 1 0 6M17 13c2.5.5 4 3 4 6"/></>,
  wallet: <><path d="M4 6h15a2 2 0 0 1 2 2v10H4a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h12"/><path d="M15 11h6v4h-6a2 2 0 0 1 0-4Z"/></>,
  whatsapp: <><path d="M20 11.5A8 8 0 0 1 8.2 18.6L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z"/><path d="M8.8 8.2c.3-.7.7-.7 1-.7h.3c.2 0 .4.1.5.4l1 2.3c.1.3.1.5-.1.8l-.7.9c-.2.2-.2.4 0 .7.5.9 1.3 1.8 2.3 2.3.3.2.5.2.7 0l1-.8c.2-.2.5-.2.8-.1l2.1 1c.3.2.4.4.4.6 0 .5-.2 1.7-1.2 2.2-.7.4-1.7.5-2.7.2-1.5-.4-3.3-1.4-4.8-3-1.8-1.9-2.8-4-3.1-5.4-.2-.9 0-1.5.5-2.1Z"/></>,
};

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {paths[name]}
    </svg>
  );
}
