export default function Blog({ posts = [] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map((post) => (
        <article key={post.title} className="rounded-xl border border-gray-200 p-6">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          {post.description && <p className="mt-3 text-gray-600">{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
