import Card from "@/app/components/card";
import { getDesktops } from "@/app/services/server/setup"
import { shutdownDesktop, wakeDesktop } from "@/app/services/client/control";

export default function App() {
  const cards = getDesktops()

  return (
<div className="flex flex-wrap">
    {cards.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        name={card.name}
        onClickWake={wakeDesktop}
        onClickShutdown={shutdownDesktop}
      />
    ))}
  </div>
  )
}
