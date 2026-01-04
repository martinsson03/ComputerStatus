import Card from "@/app/components/card";
import { getDesktops } from "@/app/services/server/setup"
import { shutdownDesktop, wakeDesktop } from "@/app/services/client/control";

export default function App() {
  const cards = getDesktops()

  return (
<div className="p-4 flex flex-col justify-contents sm:justify-start sm:flex-row sm:flex-wrap">
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
