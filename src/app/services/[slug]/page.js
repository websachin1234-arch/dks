export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  return (
    <main className="px-6 py-20 text-center">
      <h1 className="text-5xl font-semibold">{slug.replaceAll("-", " ")}</h1>
    </main>
  );
}
