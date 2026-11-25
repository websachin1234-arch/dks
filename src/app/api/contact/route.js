export async function POST(request) {
  const data = await request.json();
  if (!data.name || !data.email || !data.message) {
    return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
  }
  return Response.json({ success: true });
}
