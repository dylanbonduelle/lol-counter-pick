"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ChampionSummary } from "@/lib/dataDragon";
import { getCounters } from "@/data/counters";
import { getRole, type Role } from "@/data/roles";

const LANES: Role[] = ["Top", "Jungle", "Mid", "ADC", "Support"];

type LaneAssignment = Partial<Record<Role, string>>;

interface Candidate {
  championId: string;
  score: number;
  reasons: { enemyId: string; reason: string; keyAbility: string }[];
  weaknesses: string[];
}

function abilitySlot(keyAbility: string): string {
  return keyAbility.split(" — ")[0].trim();
}

function ChampionSearch({
  placeholder,
  champions,
  onAssign,
  disabledIds,
}: {
  placeholder: string;
  champions: ChampionSummary[];
  onAssign: (id: string) => void;
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

  return (
    <div className="relative flex-1">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:border-green-500"
      />
      {filtered.length > 0 && (
        <div className="absolute z-10 mt-1 flex w-full flex-col gap-0.5 rounded-md border border-zinc-700 bg-zinc-900 p-1 shadow-lg">
          {filtered.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                onAssign(c.id);
                setQuery("");
              }}
              className="flex items-center gap-2 rounded px-2 py-1 text-left text-sm text-zinc-200 hover:bg-zinc-800"
            >
              <Image src={c.image} alt={c.name} width={20} height={20} className="rounded" unoptimized />
              {c.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ChampionChip({
  champion,
  onClear,
}: {
  champion: ChampionSummary;
  onClear: () => void;
}) {
  return (
    <button
      onClick={onClear}
      title="Remove"
      className="flex flex-1 items-center gap-2 rounded-md bg-zinc-800 px-2 py-1.5 text-sm text-zinc-100 hover:bg-zinc-700"
    >
      <Image src={champion.image} alt={champion.name} width={22} height={22} className="rounded" unoptimized />
      {champion.name}
      <span className="ml-auto text-zinc-500">×</span>
    </button>
  );
}

function PoolEditor({
  champions,
  poolIds,
  onChange,
}: {
  champions: ChampionSummary[];
  poolIds: string[];
  onChange: (ids: string[]) => void;
}) {
  const byId = useMemo(() => new Map(champions.map((c) => [c.id, c])), [champions]);

  return (
    <div className="flex flex-wrap items-center gap-1.5 pl-16">
      <span className="text-[10px] text-zinc-500">My pool:</span>
      {poolIds.map((id) => {
        const c = byId.get(id);
        if (!c) return null;
        return (
          <button key={id} onClick={() => onChange(poolIds.filter((x) => x !== id))} title={`Remove ${c.name}`}>
            <Image src={c.image} alt={c.name} width={20} height={20} className="rounded" unoptimized />
          </button>
        );
      })}
      <div className="w-28">
        <ChampionSearch
          placeholder="Add..."
          champions={champions}
          onAssign={(id) => onChange([...poolIds, id])}
          disabledIds={poolIds}
        />
      </div>
    </div>
  );
}

function BanRow({
  label,
  champions,
  bans,
  onChange,
  disabledIds,
}: {
  label: string;
  champions: ChampionSummary[];
  bans: string[];
  onChange: (ids: string[]) => void;
  disabledIds: string[];
}) {
  const byId = useMemo(() => new Map(champions.map((c) => [c.id, c])), [champions]);

  return (
    <div className="flex flex-1 flex-col gap-1.5">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {bans.map((id) => {
          const c = byId.get(id);
          if (!c) return null;
          return (
            <button
              key={id}
              onClick={() => onChange(bans.filter((x) => x !== id))}
              title="Remove ban"
              className="relative"
            >
              <Image
                src={c.image}
                alt={c.name}
                width={28}
                height={28}
                className="rounded opacity-60 grayscale"
                unoptimized
              />
            </button>
          );
        })}
        {bans.length < 5 && (
          <div className="w-32">
            <ChampionSearch
              placeholder="Ban..."
              champions={champions}
              onAssign={(id) => onChange([...bans, id])}
              disabledIds={[...disabledIds, ...bans]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChampSelectBoard({ champions }: { champions: ChampionSummary[] }) {
  const [allyLanes, setAllyLanes] = useState<LaneAssignment>({});
  const [enemyLanes, setEnemyLanes] = useState<LaneAssignment>({});
  const [yourBans, setYourBans] = useState<string[]>([]);
  const [enemyBans, setEnemyBans] = useState<string[]>([]);
  const [pool, setPool] = useState<Partial<Record<Role, string[]>>>({});

  const byId = useMemo(() => new Map(champions.map((c) => [c.id, c])), [champions]);

  const allyIds = useMemo(
    () => Object.values(allyLanes).filter((id): id is string => Boolean(id)),
    [allyLanes]
  );
  const enemyIds = useMemo(
    () => Object.values(enemyLanes).filter((id): id is string => Boolean(id)),
    [enemyLanes]
  );

  const takenIds = useMemo(
    () => [...allyIds, ...enemyIds, ...yourBans, ...enemyBans],
    [allyIds, enemyIds, yourBans, enemyBans]
  );

  function suggestionsFor(lane: Role): { candidates: Candidate[]; usedFallback: boolean } {
    if (enemyIds.length === 0) return { candidates: [], usedFallback: false };
    const primaryEnemyId = enemyLanes[lane];
    const map = new Map<string, Candidate>();

    enemyIds.forEach((enemyId) => {
      const weight = enemyId === primaryEnemyId ? 3 : 1;
      getCounters(enemyId).forEach((entry) => {
        if (takenIds.includes(entry.championId)) return;
        const existing = map.get(entry.championId) ?? {
          championId: entry.championId,
          score: 0,
          reasons: [],
          weaknesses: [],
        };
        existing.score += weight;
        existing.reasons.push({ enemyId, reason: entry.reason, keyAbility: entry.keyAbility });
        map.set(entry.championId, existing);
      });
    });

    map.forEach((candidate) => {
      enemyIds.forEach((enemyId) => {
        const isCounteredBy = getCounters(candidate.championId).some((e) => e.championId === enemyId);
        if (isCounteredBy) candidate.weaknesses.push(enemyId);
      });
    });

    const all = [...map.values()].filter((c) => byId.has(c.championId));
    const poolIds = pool[lane] ?? [];

    let candidates: Candidate[] = [];
    if (poolIds.length > 0) {
      candidates = all
        .filter((c) => poolIds.includes(c.championId))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
    }

    let usedFallback = false;
    if (candidates.length === 0) {
      candidates = all
        .filter((c) => getRole(c.championId) === lane)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      usedFallback = poolIds.length > 0;
    }

    return { candidates, usedFallback };
  }

  return (
    <div className="flex w-full max-w-5xl flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:flex-row sm:gap-10">
        <BanRow
          label="Your Bans"
          champions={champions}
          bans={yourBans}
          onChange={setYourBans}
          disabledIds={takenIds.filter((id) => !yourBans.includes(id))}
        />
        <BanRow
          label="Enemy Bans"
          champions={champions}
          bans={enemyBans}
          onChange={setEnemyBans}
          disabledIds={takenIds.filter((id) => !enemyBans.includes(id))}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <p className="text-sm font-semibold text-zinc-300">Your Team</p>
        <p className="text-sm font-semibold text-zinc-300">Enemy Team</p>

        {LANES.map((lane) => {
          const allyChampionId = allyLanes[lane];
          const allyChampion = allyChampionId ? byId.get(allyChampionId) : undefined;
          const enemyChampionId = enemyLanes[lane];
          const enemyChampion = enemyChampionId ? byId.get(enemyChampionId) : undefined;
          const { candidates: suggestions, usedFallback } = !allyChampion
            ? suggestionsFor(lane)
            : { candidates: [], usedFallback: false };

          return (
            <div key={`${lane}-ally`} className="contents">
              <div className="flex flex-col gap-2 rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                <div className="flex items-center gap-2">
                  <span className="w-14 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                    {lane}
                  </span>
                  {allyChampion ? (
                    <ChampionChip
                      champion={allyChampion}
                      onClear={() => {
                        const next = { ...allyLanes };
                        delete next[lane];
                        setAllyLanes(next);
                      }}
                    />
                  ) : (
                    <ChampionSearch
                      placeholder={`Add ${lane.toLowerCase()}...`}
                      champions={champions}
                      onAssign={(id) => setAllyLanes({ ...allyLanes, [lane]: id })}
                      disabledIds={takenIds}
                    />
                  )}
                </div>

                <PoolEditor
                  champions={champions}
                  poolIds={pool[lane] ?? []}
                  onChange={(ids) => setPool({ ...pool, [lane]: ids })}
                />

                {!allyChampion && (
                  <div className="flex flex-col gap-1.5 pl-16">
                    {suggestions.length === 0 ? (
                      <p className="text-xs text-zinc-600">
                        {enemyIds.length === 0
                          ? "Fill in enemy picks to see suggestions."
                          : "No curated counter data yet for this matchup."}
                      </p>
                    ) : (
                      <>
                        {usedFallback && (
                          <p className="text-[10px] text-zinc-500">
                            No pool champion fits — showing general suggestions:
                          </p>
                        )}
                        {suggestions.map((s) => {
                        const champion = byId.get(s.championId)!;
                        const bestReason =
                          s.reasons.find((r) => r.enemyId === enemyChampionId) ?? s.reasons[0];
                        return (
                          <div
                            key={s.championId}
                            className="flex items-start gap-2 rounded-md bg-zinc-800/60 px-2 py-1.5"
                          >
                            <Image
                              src={champion.image}
                              alt={champion.name}
                              width={24}
                              height={24}
                              className="rounded"
                              unoptimized
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-medium text-zinc-100">
                                  {champion.name}
                                </span>
                                <span className="text-[10px] font-medium text-green-400">
                                  ({abilitySlot(bestReason.keyAbility)})
                                </span>
                                {s.reasons.length > 1 && (
                                  <span className="rounded bg-green-900/60 px-1 text-[9px] font-medium text-green-300">
                                    +{s.reasons.length - 1}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-zinc-500">{bestReason.reason}</p>
                              {s.weaknesses.length > 0 && (
                                <p className="text-[10px] font-medium text-amber-400">
                                  Careful — countered by{" "}
                                  {s.weaknesses.map((id) => byId.get(id)?.name ?? id).join(", ")}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                        })}
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 self-start rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                <span className="w-14 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                  {lane}
                </span>
                {enemyChampion ? (
                  <ChampionChip
                    champion={enemyChampion}
                    onClear={() => {
                      const next = { ...enemyLanes };
                      delete next[lane];
                      setEnemyLanes(next);
                    }}
                  />
                ) : (
                  <ChampionSearch
                    placeholder={`Add ${lane.toLowerCase()}...`}
                    champions={champions}
                    onAssign={(id) => setEnemyLanes({ ...enemyLanes, [lane]: id })}
                    disabledIds={takenIds}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
