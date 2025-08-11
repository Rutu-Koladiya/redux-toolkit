// app/isr/page.js
export const revalidate = 5; // seconds

export default async function ISRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  const data = await res.json();

  return (
    <div>
      <h1>ISR Example</h1>
      <p><b>Title:</b> {data.title}</p>
      <p>Last regenerated at: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
