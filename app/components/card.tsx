"use client";

type CardProps = {
  id: string;
  name: string;
  onClickWake: (id: string) => Promise<void>;
  onClickShutdown: (id: string) => Promise<void>;
};

export default function Card({ id, name, onClickWake, onClickShutdown }: CardProps): React.ReactElement {
  return (
    <div className="border p-4 rounded-lg shadow-md m-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <div className="pt-4 flex gap-2 whitespace-nowrap">
        <button
          className="flex-1 border-solid border-black border-2 bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => onClickWake(id)}>
          Wake
        </button>
        <button
          className="flex-1 border-solid border-black border-2 bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => onClickShutdown(id)}>
          Turn off
        </button>
      </div>
    </div>
  );
}
