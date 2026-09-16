import { getChampions } from "@/lib/dataDragon";
import ChampSelectBoard from "@/components/ChampSelectBoard";

export default async function Home() {
  const champions = await getChampions();

  return (
    <div className="flex min-h-screen flex-col items-center bg-black px-6 py-16">
      <main className="flex w-full max-w-5xl flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-bold text-zinc-50">LoL Counter-Pick</h1>
          <p className="max-w-lg text-zinc-400">
            Fill in picks and bans like champion select. As enemy lanes get
            filled in, counter suggestions form for your open lanes.
            Champion data comes from Riot&apos;s Data Dragon; matchup
            suggestions are a hand-curated starter set.
          </p>
        </div>
        <ChampSelectBoard champions={champions} />
      </main>
    </div>
  );
}
