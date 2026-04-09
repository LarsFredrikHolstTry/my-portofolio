import { createFileRoute } from "@tanstack/react-router"
import { inject } from "@vercel/analytics"
import { MyArticles } from "@/components/customComponents/my-articles"
import { MyProjects } from "@/components/customComponents/my-projects"
import { MyUniverse } from "@/components/customComponents/my-universe"
import { MySkills } from "@/components/customComponents/my-skills"
import { Particles } from "@/components/ui/particles"
import { Pointer } from "@/components/ui/pointer"
import { ScrollProgress } from "@/components/ui/scroll-progress"

inject()

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="align-center flex min-h-screen flex-col">
      <ScrollProgress className="top-[0px]" />
      
      <MyUniverse />
      <MySkills />
      <MyArticles />
      <MyProjects />

      <Particles
        className="sticky inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        <Pointer>
          <div className="text-2xl">🚀</div>
        </Pointer>
    </div>
  )
}
