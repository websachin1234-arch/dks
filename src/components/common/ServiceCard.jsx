export default function ServiceCard({ title, description, href = "#" }) {
  return (
    <article className="rounded-xl border border-gray-200 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      {description && <p className="mt-3 text-gray-600">{description}</p>}
      <a href={href} className="mt-5 inline-block font-medium text-green-600">Learn more</a>
    </article>
  );
}
