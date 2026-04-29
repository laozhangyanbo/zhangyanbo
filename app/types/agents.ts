export type AgentStatus = "active" | "pending" | "offline"

export interface AgentOwner{
  name: string
  homepage?: string
}

export interface Agent{
  id: string
  name: string
  tagline: string
  description: string
  avatar: string
  owner: AgentOwner
  tags: string[]
  status: AgentStatus
  createdAt: string
}