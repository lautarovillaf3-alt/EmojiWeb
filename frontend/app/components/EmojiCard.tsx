"use client";   // 🔥 Hace que este componente sea interactivo

import { Emoji } from "../types/emoji";

export default function EmojiCard({ emoji }: { emoji: Emoji }) {
  const copiar = () => {
    navigator.clipboard.writeText(emoji.char);
  };

  return (
    <div className="border p-4 rounded-xl shadow text-center">
      <div className="text-4xl">{emoji.char}</div>
      <div className="mt-2 text-sm">{emoji.name}</div>

      <button
        className="mt-3 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={copiar}
      >
        Copiar
      </button>
    </div>
  );
}
