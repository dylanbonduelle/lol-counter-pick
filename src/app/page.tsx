import { getChampions } from "@/lib/dataDragon";
import ChampionPicker from "@/components/ChampionPicker";

export default async function Home() {
  const champions = await getChampions();

  return (
    <div className="flex min-h-screen flex-col items-center bg-green-500 px-6 py-16">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-bold text-zinc-950">LoL Counter-Pick</h1>
          <p className="max-w-md text-zinc-900">
            Pick your opponent&apos;s champion and get a curated counter-pick
            recommendation, including the exact ability that wins the trade.
            Champion data comes from Riot&apos;s Data Dragon; matchup
            suggestions are a hand-curated starter set.
          </p>
        </div>
        <ChampionPicker champions={champions} />
      </main>
    </div>
  );
}
