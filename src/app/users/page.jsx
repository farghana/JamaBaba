import User from "@/models/User";

export const dynamic = "force-dynamic";

async function getData() {
  const users = await User.findAll();
  console.log(users)
  return { users };
}

export default async function Page() {
  const { users } = await getData();

  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <div>
        {users.map((user) => (
          <div key={user.id}>Name: {user.username}</div>
        ))}
      </div>
    </main>
  );
}
