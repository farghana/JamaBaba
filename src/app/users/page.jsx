import prisma from '@/db'

export const dynamic = "force-dynamic";
async function getData(){
  const users =  await prisma.user.findMany();
  console.log(users)
  return {users}
}

const UserPage = async () => {
  const {users} = await getData();
  return (
    <div>
      {users.map(user => (
        <p>user.name</p>
      ))}
    </div>
  )
}

export default UserPage
