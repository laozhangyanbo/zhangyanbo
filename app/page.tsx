import UserCard from "./components/UserCard"
type User = {
  name: string
  bio: string
  followers: number
}

const mockUser: User = {
  name: "Zhang Yanbo",
  bio: "AI Builder | Zhihu Hackathon 2026",
  followers: 1234
}

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Agent Homepage</h1>
      <p>My AI Agent for Zhihu Hackathon 2026</p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#000",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Login (Coming Soon)
      </button>
<UserCard user={mockUser} />

      
    </main>
  )
}