"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ChampionSummary } from "@/lib/dataDragon";
import type { Role } from "@/data/roles";

const LANES: Role[] = ["Top", "Jungle", "Mid", "ADC", "Support"];

export type LaneAssignment = Partial<Record<Role, string>>;

function LaneRow({
  lane,
  champions,
  championId,
  onAssign,
  onClear,
  disabledIds,
}: {
  lane: Role;
  champions: ChampionSummary[];
  championId: string | undefined;
  onAssign: (id: string) => void;
  onClear: () => void;
  disabledIds: string[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return champions
      .filter((c) => c.name.toLowerCase().includes(q) && !disabledIds.includes(c.id))
      .slice(0, 6);
  }, [champions, query, disabledIds]);

  const champion = championId ? champions.find((c) => c.id === championId) : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-3">
        <span className="w-16 shrink-0 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          {lane}
        </span>
        {champion ? (
          <button
            onClick={onClear}
            title="Remove"
            className="flex items-center gap-2 rounded-full bg-zinc-800 py-1 pl-1 pr-3 text-sm text-zinc-100 hover:bg-zinc-700"
          >
            <Image
              src={champion.image}
              alt={champion.name}
              width={24}
              height={24}
              className="rounded-full"
              unoptimized
            />
            {champion.name}
            <span className="text-zinc-500">×</span>
          </button>
        ) : (
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Add ${lane.toLowerCase()}...`}
            className="w-44 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:border-green-500"
          />
        )}
      </div>
      {!champion && filtered.length > 0 && (
        <div className="ml-[76px] flex flex-wrap gap-2">
          {filtered.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                onAssign(c.id);
                setQuery("");
              }}
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

export default function LaneDraftBoard({
  label,
  champions,
  lanes,
  onChange,
  disabledIds,
}: {
  label: string;
  champions: ChampionSummary[];
  lanes: LaneAssignment;
  onChange: (lanes: LaneAssignment) => void;
  disabledIds: string[];
}) {
  const filledCount = Object.values(lanes).filter(Boolean).length;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-zinc-400">
        {label} <span className="text-zinc-500">({filledCount}/5 lanes filled)</span>
      </p>
      <div className="flex flex-col gap-2">
        {LANES.map((lane) => (
          <LaneRow
            key={lane}
            lane={lane}
            champions={champions}
            championId={lanes[lane]}
            onAssign={(id) => onChange({ ...lanes, [lane]: id })}
            onClear={() => {
              const next = { ...lanes };
              delete next[lane];
              onChange(next);
            }}
            disabledIds={disabledIds}
          />
        ))}
      </div>
    </div>
  );
}
