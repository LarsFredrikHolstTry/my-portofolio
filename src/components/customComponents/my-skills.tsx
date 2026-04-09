import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiFigma,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiBitbucket,
  SiGithub,
  SiGit,
  SiApple,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { OrbitingCircles } from "../ui/orbiting-circles"
import { Particles } from "../ui/particles"

export function MySkills() {
  return (
    <div className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden">
      <div>Dette kan jeg!</div>
      <OrbitingCircles radius={250}>
        <SiJavascript className="h-20 w-20" />
        <SiHtml5 className="h-20 w-20" />
        <SiCss className="h-20 w-20" />
        <SiReact className="h-20 w-20" />
        <SiTypescript className="h-20 w-20" />
        <SiNextdotjs className="h-20 w-20" />
        <SiPhp className="h-20 w-20" />
      </OrbitingCircles>
      <OrbitingCircles radius={150} reverse speed={1.2}>
        <SiLaravel className="h-10 w-10" />
        <SiMysql className="h-25 w-25" />
        <SiBitbucket className="h-20 w-20" />
        <SiGithub className="h-20 w-20" />
        <SiGit className="h-20 w-20" />
        <VscVscode className="h-20 w-20" />
      </OrbitingCircles>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </div>
  )
}
