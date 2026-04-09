import { createFileRoute } from "@tanstack/react-router"
import { inject } from "@vercel/analytics"
import { MeteorHeader } from "@/components/customComponents/meteor-header"
import { MyUniverse } from "@/components/customComponents/my-universe"
import { MySkills } from "@/components/customComponents/my-skills"

inject()

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="align-center flex h-screen flex-col">
      <MeteorHeader />
      <MyUniverse />
      <MySkills />
    </div>
  )
}
