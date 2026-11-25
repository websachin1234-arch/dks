export default function SectionHeading({ title, accent, description }) {
  return (
    <div>
      <h2 className="text-4xl font-semibold leading-tight">
        {title} {accent && <span className="block text-green-600">{accent}</span>}
      </h2>
      {description && <p className="mt-4 max-w-xl text-gray-600">{description}</p>}
    </div>
  );
}
