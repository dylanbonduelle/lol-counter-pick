// Curated counter-pick data.
//
// Riot's official API (Data Dragon / MATCH-V5) has no "counters" endpoint —
// champion-vs-champion matchup strength isn't published anywhere in the API.
// This file is a hand-curated starter set based on well-known lane matchups,
// not live win-rate stats. Treat it as a heuristic, and expect it to drift
// from the current patch. Extend `COUNTERS` as needed.

export interface CounterEntry {
  championId: string; // Data Dragon champion id, e.g. "Yasuo"
  reason: string;
}

export const COUNTERS: Record<string, CounterEntry[]> = {
  Aatrox: [
    { championId: "Vayne", reason: "Sustained ranged damage punishes his short-range kit." },
    { championId: "Poppy", reason: "Stun on stun peel shuts down his all-in windows." },
    { championId: "Quinn", reason: "Mobility and range deny his engage." },
  ],
  Ahri: [
    { championId: "Yasuo", reason: "Wind wall blocks Charm and her Fox-Fire poke." },
    { championId: "Kassadin", reason: "Silence and mobility close the gap through her kit." },
    { championId: "Malzahar", reason: "Suppression bypasses her escapes entirely." },
  ],
  Akali: [
    { championId: "Lissandra", reason: "Root shuts down her dash-reliant escapes." },
    { championId: "Pantheon", reason: "Early all-in pressure outtrades her before level 6." },
    { championId: "Kennen", reason: "Ranged poke and stuns punish her melee combos." },
  ],
  Ashe: [
    { championId: "Zed", reason: "Burst assassin dives before she can kite." },
    { championId: "Rengar", reason: "Stealth engage skips her kiting entirely." },
  ],
  Camille: [
    { championId: "Gnar", reason: "Kite and mega-range zoning neutralize her all-in." },
    { championId: "Kled", reason: "Sustained dueling pressure out-scales her true-damage combo." },
  ],
  Darius: [
    { championId: "Poppy", reason: "Stun peel and armor stall his stack-and-pull combo." },
    { championId: "Vayne", reason: "Kiting range beats his short reach." },
    { championId: "Quinn", reason: "Mobility denies his pull engage." },
  ],
  Diana: [
    { championId: "Lissandra", reason: "Root and burst outtrade her before she can engage." },
    { championId: "Kayle", reason: "Ranged scaling out-damages her all-in." },
  ],
  Draven: [
    { championId: "Caitlyn", reason: "Range advantage punishes his axe-catch positioning." },
    { championId: "Ashe", reason: "Kiting and slows deny his catch-axe trades." },
  ],
  Ezreal: [
    { championId: "Zed", reason: "Burst assassin closes the gap before Arcane Shift resets." },
    { championId: "Vi", reason: "Guaranteed dash engage skips his kiting entirely." },
  ],
  Fiora: [
    { championId: "Malphite", reason: "Armor stacking and knock-up shut down her vitals." },
    { championId: "Poppy", reason: "Stun interrupts her Riposte-dependent duels." },
  ],
  Fizz: [
    { championId: "Lissandra", reason: "Root punishes his all-in jump before it lands." },
    { championId: "Diana", reason: "Matches his burst and mobility trade for trade." },
  ],
  Garen: [
    { championId: "Vayne", reason: "Kiting and true damage bypass his tankiness." },
    { championId: "Teemo", reason: "Blind and poke deny his silence engage." },
  ],
  Gnar: [
    { championId: "Poppy", reason: "Stun interrupts Mega Gnar engage windows." },
    { championId: "Darius", reason: "Sustained lane pressure punishes his mini-form." },
  ],
  Irelia: [
    { championId: "Poppy", reason: "Stun peel shuts down her mobility resets." },
    { championId: "Malphite", reason: "Armor and knock-up beat her all-in trades." },
    { championId: "Rammus", reason: "Taunt and armor deny her sustained damage." },
  ],
  Jax: [
    { championId: "Poppy", reason: "Stun cancels his jump-in engage." },
    { championId: "Fiora", reason: "Outduels him with true damage vitals." },
  ],
  Jinx: [
    { championId: "Zed", reason: "Burst assassin closes before rockets can kite." },
    { championId: "Vi", reason: "Guaranteed dash engage skips her range advantage." },
  ],
  Kassadin: [
    { championId: "Malzahar", reason: "Suppression ignores his mobility and shield." },
    { championId: "Lucian", reason: "Early lane pressure punishes his weak laning phase." },
  ],
  Kayle: [
    { championId: "Renekton", reason: "Early aggression punishes her before she scales." },
    { championId: "Pantheon", reason: "All-in burst outtrades her low-level kit." },
  ],
  LeeSin: [
    { championId: "MasterYi", reason: "Sustained damage and mobility outpace his early tempo." },
    { championId: "Warwick", reason: "Sustain trades favorably against his burst combos." },
  ],
  Leona: [
    { championId: "Morgana", reason: "Black Shield negates her entire engage combo." },
    { championId: "Kalista", reason: "Ranged poke and mobility avoid her hook-in engage." },
  ],
  Lulu: [
    { championId: "Malzahar", reason: "Suppression bypasses her peel and shields." },
    { championId: "Rengar", reason: "Stealth engage skips her protective cooldowns." },
  ],
  MasterYi: [
    { championId: "Poppy", reason: "Stun interrupts his Highlander resets." },
    { championId: "Rammus", reason: "Taunt and armor shut down his true damage." },
  ],
  Malphite: [
    { championId: "Renekton", reason: "Early lane bullying punishes his slow scaling." },
    { championId: "Gnar", reason: "Kite and range deny his engage-reliant kit." },
  ],
  Nasus: [
    { championId: "Renekton", reason: "Denies farm and stacks with early aggression." },
    { championId: "Vayne", reason: "Kiting neutralizes his Q stacks late." },
  ],
  Pantheon: [
    { championId: "Gnar", reason: "Range and kite deny his all-in burst." },
    { championId: "Poppy", reason: "Stun cancels his jump engage." },
  ],
  Renekton: [
    { championId: "Gnar", reason: "Kites his all-in and out-ranges him post-6." },
    { championId: "Kayle", reason: "Ranged scaling out-lasts his early burst." },
  ],
  Riven: [
    { championId: "Malphite", reason: "Armor and knock-up neutralize her burst combo." },
    { championId: "Poppy", reason: "Stun stops her dash-cancel engage." },
  ],
  Sett: [
    { championId: "Gnar", reason: "Kite and range deny his grab-and-punch combo." },
    { championId: "Vayne", reason: "Kiting avoids his short-range pull." },
  ],
  Shaco: [
    { championId: "Lissandra", reason: "Root punishes his box-and-burst engage." },
    { championId: "Warwick", reason: "Sustain trades favorably vs. his assassination burst." },
  ],
  Sylas: [
    { championId: "Malzahar", reason: "Suppression bypasses his mobility and shields." },
    { championId: "Kassadin", reason: "Silences his combo before it lands." },
  ],
  Talon: [
    { championId: "Lissandra", reason: "Root shuts his dive down before he can reset." },
    { championId: "Pantheon", reason: "Trades burst for burst and wins early." },
  ],
  Teemo: [
    { championId: "Renekton", reason: "Early aggression punishes his squishiness." },
    { championId: "Lillia", reason: "AoE poke and sleep negate his blind kiting." },
  ],
  Tryndamere: [
    { championId: "Malzahar", reason: "Suppression bypasses his Undying Rage timing." },
    { championId: "Quinn", reason: "Mobility and range deny his spin-to-win engage." },
  ],
  Vayne: [
    { championId: "Malzahar", reason: "Suppression ignores her Condemn/roll escapes." },
    { championId: "Caitlyn", reason: "Range advantage outpokes her before stealth stacks land." },
  ],
  Yasuo: [
    { championId: "Malzahar", reason: "Suppression bypasses his mobility and shield." },
    { championId: "Annie", reason: "Stun chain deletes him before Wind Wall matters." },
    { championId: "Diana", reason: "AoE burst punishes his low mobility resistance." },
  ],
  Yone: [
    { championId: "Malzahar", reason: "Suppression bypasses his dash and shield." },
    { championId: "Poppy", reason: "Stun cancels his dash-in combo." },
  ],
  Zed: [
    { championId: "Lissandra", reason: "Root punishes his shadow-dash all-in." },
    { championId: "Malzahar", reason: "Suppression ignores his ultimate escape." },
    { championId: "Diana", reason: "AoE burst trades favorably vs. his squishy kit." },
  ],
  Ziggs: [
    { championId: "Zed", reason: "Burst assassin closes the gap before poke adds up." },
    { championId: "LeeSin", reason: "Early jungle pressure punishes his weak early game." },
  ],
};

export function getCounters(championId: string): CounterEntry[] {
  return COUNTERS[championId] ?? [];
}
