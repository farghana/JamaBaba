const users = [
  {
    email: "farghana@email.com",
    password: "password123"
  },
  {
    email: "alex@email.com",
    password: "password"
  },
  {
    email: "bob@email.com",
    password: "password"
  }
]

export const getUserByEmail =  (email) => {
  return users.find(user => user.email === email)
}