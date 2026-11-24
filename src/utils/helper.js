export function formatDisplayName(value) {
  return String(value ?? "").replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}
