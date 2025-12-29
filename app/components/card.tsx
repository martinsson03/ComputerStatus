// Component for each card
"use client";
export default function Card({ id, name, onClickWake, onClickShutdown }) {
  return (
    <div className="border p-4 rounded-lg shadow-md m-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <button
        className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => onClickWake(id)}>
        Wake
        </button>
        <button
            className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => onClickShutdown(id)}>
            Turn off
      </button>
    </div>
  );
}
