import Card from "./components/card";
import { getCards } from "./services/server";
import {shutdownDesktop, wakeDesktop } from "./services/client";

export default function App() {
  const cards = getCards()

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
  );
}
