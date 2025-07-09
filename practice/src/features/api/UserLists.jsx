import {
  useGetUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "./apiSlice";
import { useState } from "react";

const UserLists = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const [formData, setForm] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateUser({ ...formData, id: editId }).unwrap();
      } else {
        await addUser(formData).unwrap();
      }
      setForm({ name: "", email: "" });
      setEditId(null);
    } catch (err) {
      console.error("Mutation failed:", err);
    }
  };

  if (isError) {
    return <div>Error: {error.toString()}</div>;
  }

  // if (isSuccess && users?.length > 0) {
  //     return (
  //         <section>
  //             <h2>Users</h2>
  //             <ul>
  //                 {users.map((user) => (
  //                     <li key={user.id}>
  //                         {user.name} - {user.email}
  //                     </li>
  //                 ))}
  //             </ul>
  //         </section>
  //     );
  // }

  return (
    <>
      <form onSubmit={submit}>
        <input
          value={formData.name}
          onChange={(e) => setForm({ ...formData, name: e.target.value })}
          placeholder="Name"
          required
        />
        <input
          value={formData.email}
          onChange={(e) => setForm({ ...formData, email: e.target.value })}
          placeholder="Email"
          required
        />
        <button type="submit">{editId ? "Update" : "Add"} User</button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users?.map((u) => (
            <li key={u.id}>
              {u.name} ({u.email})
              <button
                onClick={() => {
                  setForm({ name: u.name, email: u.email });
                  setEditId(u.id);
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteUser(u.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UserLists;
