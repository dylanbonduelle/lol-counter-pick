"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ChampionSummary } from "@/lib/dataDragon";
import { getCounters } from "@/data/counters";
import TeamSlotPicker from "./TeamSlotPicker";

export default function ChampionPicker({
  champions,
}: {
  champions: ChampionSummary[];
}) {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [allyIds, setAllyIds] = useState<string[]>([]);
  const [enemyIds, setEnemyIds] = useState<string[]>([]);

  const filtered = useMemo(() => {
    if (!query.trim()) return champions.slice(0, 12);
    const q = query.toLowerCase();
    return champions.filter((c) => c.name.toLowerCase().includes(q)).slice(0, 12);
  }, [champions, query]);

  const selected = champions.find((c) => c.id === selectedId) ?? null;
  const takenIds = useMemo(
    () => [selectedId, ...allyIds, ...enemyIds].filter((id): id is string => Boolean(id)),
    [selectedId, allyIds, enemyIds]
  );

  const counters = selected ? getCounters(selected.id) : [];
  const counterChampions = counters
    .map((entry) => ({
      entry,
      champion: champions.find((c) => c.id === entry.championId),
    }))
    .filter((c) => c.champion && !takenIds.includes(c.champion.id));

  return (
    <div className="flex w-full max-w-2xl flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="champion-search" className="text-sm font-semibold text-zinc-900">
          Opponent&apos;s champion
        </label>
        <input
          id="champion-search"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedId(null);
          }}
          placeholder="Search for a champion..."
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-zinc-100 placeholder-zinc-500 outline-none focus:border-green-500"
        />
      </div>

      {!selected && filtered.length > 0 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
          {filtered.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedId(c.id);
                setQuery(c.name);
              }}
              className="flex flex-col items-center gap-1 rounded-lg p-2 transition-colors hover:bg-zinc-800"
            >
              <Image
                src={c.image}
                alt={c.name}
                width={56}
                height={56}
                className="rounded-md"
                unoptimized
              />
              <span className="text-xs text-zinc-300">{c.name}</span>
            </button>
          ))}
        </div>
      )}

      {selected && (
        <div className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="flex items-center gap-3">
            <Image
              src={selected.image}
              alt={selected.name}
              width={48}
              height={48}
              className="rounded-md"
              unoptimized
            />
            <div>
              <p className="font-semibold text-zinc-100">{selected.name}</p>
              <p className="text-sm text-zinc-500">{selected.title}</p>
            </div>
            <button
              onClick={() => {
                setSelectedId(null);
                setQuery("");
              }}
              className="ml-auto text-sm text-zinc-500 hover:text-zinc-300"
            >
              Change
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-zinc-400">Recommended counters</p>
            {counterChampions.length === 0 ? (
              <p className="text-sm text-zinc-500">
                {counters.length === 0
                  ? `No curated counter data for ${selected.name} yet.`
                  : "All curated counters for this champion are already picked."}
              </p>
            ) : (
              <ul className="flex flex-col gap-3">
                {counterChampions.map(({ entry, champion }) => (
                  <li
                    key={entry.championId}
                    className="flex items-start gap-3 rounded-lg bg-zinc-800/60 p-3"
                  >
                    <Image
                      src={champion!.image}
                      alt={champion!.name}
                      width={40}
                      height={40}
                      className="rounded-md"
                      unoptimized
                    />
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-zinc-100">{champion!.name}</p>
                      <p className="text-sm text-zinc-400">{entry.reason}</p>
                      <p className="text-xs font-medium text-green-400">
                        Key ability: {entry.keyAbility}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-5 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
        <p className="text-sm font-medium text-zinc-300">
          Draft context <span className="text-zinc-500">(optional)</span>
        </p>
        <TeamSlotPicker
          label="Your team"
          champions={champions}
          selectedIds={allyIds}
          onChange={setAllyIds}
          maxSlots={4}
          disabledIds={[selectedId, ...enemyIds].filter((id): id is string => Boolean(id))}
        />
        <TeamSlotPicker
          label="Enemy team (other picks)"
          champions={champions}
          selectedIds={enemyIds}
          onChange={setEnemyIds}
          maxSlots={4}
          disabledIds={[selectedId, ...allyIds].filter((id): id is string => Boolean(id))}
        />
      </div>
    </div>
  );
}
