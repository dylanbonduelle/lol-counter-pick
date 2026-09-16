"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ChampionSummary } from "@/lib/dataDragon";

export default function TeamSlotPicker({
  label,
  champions,
  selectedIds,
  onChange,
  maxSlots,
  disabledIds,
}: {
  label: string;
  champions: ChampionSummary[];
  selectedIds: string[];
  onChange: (ids: string[]) => void;
  maxSlots: number;
  disabledIds: string[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return champions
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) &&
          !selectedIds.includes(c.id) &&
          !disabledIds.includes(c.id)
      )
      .slice(0, 6);
  }, [champions, query, selectedIds, disabledIds]);

  const selected = selectedIds
    .map((id) => champions.find((c) => c.id === id))
    .filter((c): c is ChampionSummary => Boolean(c));

  const addChampion = (id: string) => {
    if (selectedIds.length >= maxSlots) return;
    onChange([...selectedIds, id]);
    setQuery("");
  };

  const removeChampion = (id: string) => {
    onChange(selectedIds.filter((x) => x !== id));
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-zinc-400">
        {label}{" "}
        <span className="text-zinc-500">
          ({selected.length}/{maxSlots})
        </span>
      </label>

      <div className="flex flex-wrap gap-2">
        {selected.map((c) => (
          <button
            key={c.id}
            onClick={() => removeChampion(c.id)}
            title="Remove"
            className="flex items-center gap-2 rounded-full bg-zinc-800 py-1 pl-1 pr-3 text-sm text-zinc-100 hover:bg-zinc-700"
          >
            <Image
              src={c.image}
              alt={c.name}
              width={24}
              height={24}
              className="rounded-full"
              unoptimized
            />
            {c.name}
            <span className="text-zinc-500">×</span>
          </button>
        ))}
        {selected.length < maxSlots && (
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Add champion..."
            className="w-40 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:border-green-500"
          />
        )}
      </div>

      {filtered.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {filtered.map((c) => (
            <button
              key={c.id}
              onClick={() => addChampion(c.id)}
              className="flex items-center gap-2 rounded-lg bg-zinc-800/60 px-2 py-1 text-sm text-zinc-200 hover:bg-zinc-700"
            >
              <Image
                src={c.image}
                alt={c.name}
                width={24}
                height={24}
                className="rounded-md"
                unoptimized
              />
              {c.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
