export async function POST() {
  return new Response("success", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
