"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ChampionSummary } from "@/lib/dataDragon";
import { getCounters } from "@/data/counters";
import { getRole, type Role } from "@/data/roles";
import TeamSlotPicker from "./TeamSlotPicker";

interface CandidateReason {
  enemyId: string;
  reason: string;
  keyAbility: string;
}

interface Candidate {
  championId: string;
  score: number;
  reasons: CandidateReason[];
  weaknesses: string[]; // enemy champion ids that counter this candidate back
}

export default function ChampionPicker({
  champions,
}: {
  champions: ChampionSummary[];
}) {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [allyIds, setAllyIds] = useState<string[]>([]);
  const [enemyIds, setEnemyIds] = useState<string[]>([]);
  const [yourBans, setYourBans] = useState<string[]>([]);
  const [enemyBans, setEnemyBans] = useState<string[]>([]);

  const byId = useMemo(() => {
    const map = new Map<string, ChampionSummary>();
    champions.forEach((c) => map.set(c.id, c));
    return map;
  }, [champions]);

  const takenIds = useMemo(
    () =>
      [selectedId, ...allyIds, ...enemyIds, ...yourBans, ...enemyBans].filter(
        (id): id is string => Boolean(id)
      ),
    [selectedId, allyIds, enemyIds, yourBans, enemyBans]
  );

  const filtered = useMemo(() => {
    const pool = champions.filter((c) => !takenIds.includes(c.id) || c.id === selectedId);
    if (!query.trim()) return pool.slice(0, 12);
    const q = query.toLowerCase();
    return pool.filter((c) => c.name.toLowerCase().includes(q)).slice(0, 12);
  }, [champions, query, takenIds, selectedId]);

  const selected = selectedId ? byId.get(selectedId) ?? null : null;

  const allyRoles = useMemo(
    () => new Set(allyIds.map((id) => getRole(id)).filter((r): r is Role => Boolean(r))),
    [allyIds]
  );

  const isRoleTaken = (championId: string) => {
    const role = getRole(championId);
    return role ? allyRoles.has(role) : false;
  };

  const candidates = useMemo<Candidate[]>(() => {
    if (!selected) return [];
    const enemyLineup = [selected.id, ...enemyIds];
    const map = new Map<string, Candidate>();

    enemyLineup.forEach((enemyId) => {
      const weight = enemyId === selected.id ? 2 : 1;
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
      enemyLineup.forEach((enemyId) => {
        const isCounteredBy = getCounters(candidate.championId).some(
          (e) => e.championId === enemyId
        );
        if (isCounteredBy) candidate.weaknesses.push(enemyId);
      });
    });

    return [...map.values()]
      .filter((c) => byId.has(c.championId))
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        const aRoleTaken = isRoleTaken(a.championId);
        const bRoleTaken = isRoleTaken(b.championId);
        if (aRoleTaken !== bRoleTaken) return aRoleTaken ? 1 : -1;
        return 0;
      })
      .slice(0, 8);
  }, [selected, enemyIds, takenIds, byId, allyRoles]);

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
            <p className="text-sm font-medium text-zinc-400">
              Recommended counters
              {enemyIds.length > 0 && (
                <span className="text-zinc-500"> — weighted against the whole enemy team</span>
              )}
            </p>
            {candidates.length === 0 ? (
              <p className="text-sm text-zinc-500">
                No curated counter data for this matchup yet, or every counter is already
                picked/banned.
              </p>
            ) : (
              <ul className="flex flex-col gap-3">
                {candidates.map((candidate) => {
                  const champion = byId.get(candidate.championId)!;
                  const role = getRole(candidate.championId);
                  const roleTaken = isRoleTaken(candidate.championId);
                  return (
                    <li
                      key={candidate.championId}
                      className="flex flex-col gap-2 rounded-lg bg-zinc-800/60 p-3"
                    >
                      <div className="flex items-start gap-3">
                        <Image
                          src={champion.image}
                          alt={champion.name}
                          width={40}
                          height={40}
                          className="rounded-md"
                          unoptimized
                        />
                        <div className="flex flex-1 flex-col gap-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-medium text-zinc-100">{champion.name}</p>
                            {role && (
                              <span className="rounded bg-zinc-700 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-300">
                                {role}
                              </span>
                            )}
                            {candidate.reasons.length > 1 && (
                              <span className="rounded bg-green-900/60 px-1.5 py-0.5 text-[10px] font-medium text-green-300">
                                Counters {candidate.reasons.length} of their picks
                              </span>
                            )}
                            {roleTaken && (
                              <span className="rounded bg-zinc-700/60 px-1.5 py-0.5 text-[10px] text-zinc-400">
                                Role already on your team
                              </span>
                            )}
                          </div>
                          {candidate.reasons.map((r) => (
                            <div key={r.enemyId} className="text-sm text-zinc-400">
                              vs {byId.get(r.enemyId)?.name ?? r.enemyId}: {r.reason}{" "}
                              <span className="font-medium text-green-400">
                                ({r.keyAbility})
                              </span>
                            </div>
                          ))}
                          {candidate.weaknesses.length > 0 && (
                            <p className="text-xs font-medium text-amber-400">
                              Caution — also countered by{" "}
                              {candidate.weaknesses
                                .map((id) => byId.get(id)?.name ?? id)
                                .join(", ")}{" "}
                              on their team.
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
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
          disabledIds={takenIds.filter((id) => !allyIds.includes(id))}
        />
        <TeamSlotPicker
          label="Enemy team (other picks)"
          champions={champions}
          selectedIds={enemyIds}
          onChange={setEnemyIds}
          maxSlots={4}
          disabledIds={takenIds.filter((id) => !enemyIds.includes(id))}
        />
        <TeamSlotPicker
          label="Your bans"
          champions={champions}
          selectedIds={yourBans}
          onChange={setYourBans}
          maxSlots={5}
          disabledIds={takenIds.filter((id) => !yourBans.includes(id))}
        />
        <TeamSlotPicker
          label="Enemy bans"
          champions={champions}
          selectedIds={enemyBans}
          onChange={setEnemyBans}
          maxSlots={5}
          disabledIds={takenIds.filter((id) => !enemyBans.includes(id))}
        />
      </div>
    </div>
  );
}
