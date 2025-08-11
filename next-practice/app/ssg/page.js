// app/ssg/page.js
export const revalidate = false; // build time only (pure SSG)

export default async function SSGPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const data = await res.json();

  return (
    <div>
      <h1>SSG Example</h1>
      <p><b>Title:</b> {data.title}</p>
      <p>Built at: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
