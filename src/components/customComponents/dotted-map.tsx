import { DottedMap, type Marker } from "../ui/dotted-map"

const markers: Marker[] = [
  {
    lat: 58.17406727850732,
    lng: 7.831200603939354,
    size: 0.3,
  },
]

export function NorwayDottedMap() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-radial from-transparent to-background to-200%" />
      <DottedMap markers={markers} pulse />
    </div>
  )
}
