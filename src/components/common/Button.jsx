export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-lg bg-green-600 px-5 py-3 text-white transition hover:bg-green-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
