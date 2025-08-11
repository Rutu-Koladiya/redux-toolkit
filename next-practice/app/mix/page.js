import Counter from "../Counter";


export default async function DashboardPage() {
  // Fetch user data (runs on server)
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div>
      <h2>User Stats</h2>
      <p>Data fetched on the server at: {new Date().toLocaleTimeString()}</p>

      <Counter />
    </div>
  );
}
