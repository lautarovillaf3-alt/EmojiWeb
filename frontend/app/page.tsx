"use client";

import { useEffect, useState } from "react";
import { Emoji } from "./types/emoji";
import EmojiCard from "./components/EmojiCard";

export default function Home() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${url}/api/emojis`);
        const data = await res.json();
        setEmojis(data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchEmojis();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Lista de Emojis</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {emojis.map((emoji) => (
          <EmojiCard key={emoji.id} emoji={emoji} />
        ))}
      </div>
    </div>
  );
}
