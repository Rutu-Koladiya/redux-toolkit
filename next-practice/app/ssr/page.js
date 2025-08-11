// app/ssr/page.js
export const dynamic = "force-dynamic"; // forces SSR

export default async function SSRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store", // always fetch fresh data
  });
  const data = await res.json();

  return (
    <div>
      <h1>SSR Example</h1>
      <p><b>Title:</b> {data.title}</p>
      <p>Fetched at: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
