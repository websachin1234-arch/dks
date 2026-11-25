export default function Icon({ name, className = "size-6" }) {
  const icons = {
    menu: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        className={className}
      >
        <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
      </svg>
    ),
    close: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        className={className}
      >
        <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
      </svg>
    ),
    arrow: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    chevron: (
      <svg
        viewBox="0 0 60 60"
        fill="currentColor"
        aria-hidden="true"
        className={className}
      >
        <path d="M35.6533 31.3191L28.2195 38.753L26.3613 36.8949L32.8661 30.39L26.3613 23.8852L28.2195 22.0271L35.6533 29.461C35.8997 29.7074 36.0381 30.0416 36.0381 30.39C36.0381 30.7385 35.8997 31.0727 35.6533 31.3191Z" />
      </svg>
    ),
    quote: (
      <svg
        viewBox="0 0 25.216 17.056"
        fill="currentColor"
        aria-hidden="true"
        className={className}
      >
        <path d="M23.68 0c.533 0 .8.267.8.8v4.32c0 .533-.267.8-.8.8h-2.272c-.619 0-.928.267-.928.8v.928h3.936c.533 0 .8.267.8.8l-.064 7.808c0 .533-.267.8-.8.8h-9.696c-.533 0-.8-.267-.8-.8V6.848c0-2.304.544-4.021 1.632-5.152C16.576.565 18.027 0 19.84 0h3.84zM9.824 0c.533 0 .8.267.8.8v4.32c0 .533-.267.8-.8.8H7.552c-.619 0-.928.267-.928.8v.928h3.936c.533 0 .8.267.8.8l-.064 7.808c0 .533-.267.8-.8.8H.8c-.533 0-.8-.267-.8-.8V6.848c0-2.304.544-4.021 1.632-5.152C2.72.565 4.171 0 5.984 0h3.84z" />
      </svg>
    ),
  };

  const icon = icons[name];

  if (!icon) {
    throw new Error(`Unknown icon: ${name}`);
  }

  return icon;
}
