type User = {
  name: string
  bio: string
  followers: number
}

export default function UserCard({ user }: { user: User }) {
  return (
    <div
      style={{
        marginTop: "40px",
        padding: "20px",
        border: "1px solid #eee",
        borderRadius: "12px",
        maxWidth: "400px",
      }}
    >
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Followers: {user.followers}</p>
    </div>
  )
}