export default function Input({ label, className = "", ...props }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      {label && <span className="text-sm font-medium">{label}</span>}
      <input className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600" {...props} />
    </label>
  );
}
