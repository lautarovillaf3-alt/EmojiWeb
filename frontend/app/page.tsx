import { Emoji } from "./types/emoji";
import EmojiCard from "./components/EmojiCard";

async function getEmojis(): Promise<Emoji[]> {
  const res = await fetch("http://localhost:5000/api/emojis", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const emojis = await getEmojis();

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
