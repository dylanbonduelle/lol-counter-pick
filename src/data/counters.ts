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

  // Supports
  Nami: [
    { championId: "Pyke", reason: "Ranged hook punishes her lack of a dash or escape." },
    { championId: "Blitzcrank", reason: "Hook engage skips her heal-and-peel window." },
    { championId: "Zyra", reason: "Poke and root chip her down before she can enable an all-in." },
  ],
  Thresh: [
    { championId: "Morgana", reason: "Black Shield negates his hook and lantern engage." },
    { championId: "Janna", reason: "Disengage and shields undo his pick potential." },
  ],
  Blitzcrank: [
    { championId: "Morgana", reason: "Black Shield negates his hook entirely." },
    { championId: "Nami", reason: "Bubble and heal punish his all-in if the hook lands." },
  ],
  Morgana: [
    { championId: "Pyke", reason: "Ranged hook outranges her root and bypasses her shield timing." },
    { championId: "Nautilus", reason: "Guaranteed engage chain beats her single-target root." },
  ],
  Janna: [
    { championId: "Pyke", reason: "Burst execute punishes her low HP before she can peel." },
    { championId: "Morgana", reason: "Black Shield removes her disengage tools from a fight." },
  ],
  Soraka: [
    { championId: "Pyke", reason: "Execute threshold ignores her sustain healing." },
    { championId: "Blitzcrank", reason: "Hook punishes her lack of escape from range." },
  ],
  Yuumi: [
    { championId: "Pyke", reason: "Can target and kill her carrier even while she's attached." },
    { championId: "Leona", reason: "Hard engage overwhelms her passive playstyle." },
  ],
  Pyke: [
    { championId: "Morgana", reason: "Black Shield blocks his hook and execute combo." },
    { championId: "Braum", reason: "Shield and stun peel deny his kill pickoffs." },
  ],
  Nautilus: [
    { championId: "Morgana", reason: "Black Shield negates his root-chain engage." },
    { championId: "Janna", reason: "Disengage undoes his all-in before it lands." },
  ],
  Rakan: [
    { championId: "Morgana", reason: "Black Shield stops his charm-engage combo." },
    { championId: "Nautilus", reason: "Guaranteed root beats his dash-in engage." },
  ],
  // ADCs
  MissFortune: [
    { championId: "Zed", reason: "Burst assassin closes the gap before her ultimate channels." },
    { championId: "Rengar", reason: "Stealth engage skips her positioning entirely." },
  ],
  Jhin: [
    { championId: "Rengar", reason: "Stealth engage punishes his fixed 4-shot rhythm." },
    { championId: "Vi", reason: "Guaranteed dash engage skips his root traps." },
  ],
  Kaisa: [
    { championId: "Pantheon", reason: "Early lane all-in punishes her scaling kit." },
    { championId: "Leona", reason: "Hard engage denies her evolve-and-kite plan." },
  ],
  Xayah: [
    { championId: "Rengar", reason: "Stealth engage closes the gap before feathers stack." },
    { championId: "Leona", reason: "Guaranteed engage skips her root punish." },
  ],
  Samira: [
    { championId: "Morgana", reason: "Black Shield stops her whole engage combo." },
    { championId: "Janna", reason: "Knock-up disruption breaks her combo chain." },
  ],
  Sivir: [
    { championId: "Zed", reason: "Burst assassin bypasses her Spell Shield timing." },
    { championId: "Draven", reason: "Early lane damage out-trades her scaling kit." },
  ],
  Tristana: [
    { championId: "Zed", reason: "Burst assassin closes before her jump resets." },
    { championId: "Leona", reason: "Hard engage denies her kiting and jump escape." },
  ],
  Varus: [
    { championId: "Zed", reason: "Burst assassin closes the gap before poke stacks up." },
    { championId: "Leona", reason: "Hard engage skips his root-chain damage." },
  ],
  Kalista: [
    { championId: "Morgana", reason: "Black Shield removes her main peel/engage answer." },
    { championId: "Pantheon", reason: "All-in burst punishes her fragile early laning." },
  ],
  Twitch: [
    { championId: "Leona", reason: "Hard engage catches him before stealth resets." },
    { championId: "Rengar", reason: "Out-stealths and burst kills him before he can reposition." },
  ],
  Caitlyn: [
    { championId: "Zed", reason: "Burst assassin closes the gap through her trap zoning." },
    { championId: "Rengar", reason: "Stealth engage skips her long-range poke entirely." },
  ],

  // Junglers
  Vi: [
    { championId: "JarvanIV", reason: "Counter-engage and cage punish her commitment to a dash." },
    { championId: "Sejuani", reason: "Tankier frontline out-trades her all-in." },
  ],
  Elise: [
    { championId: "Sejuani", reason: "Tankiness absorbs her burst combo without dying." },
    { championId: "Rammus", reason: "Armor and taunt shut down her spider-form damage." },
  ],
  Kindred: [
    { championId: "MasterYi", reason: "Sustained damage races through her marks faster." },
    { championId: "LeeSin", reason: "Early tempo punishes her weak early skirmishes." },
  ],
  Nidalee: [
    { championId: "Rammus", reason: "Armor tanks her spear poke and closes the gap." },
    { championId: "Elise", reason: "Matches her early-game skirmish pressure." },
  ],
  Graves: [
    { championId: "Rammus", reason: "Armor stacking blunts his auto-attack burst." },
    { championId: "Sejuani", reason: "Frontline tank absorbs his short-range damage." },
  ],
  Hecarim: [
    { championId: "Rammus", reason: "Taunt and armor shut down his charge damage." },
    { championId: "Sejuani", reason: "Out-tanks and out-crowd-controls his engage." },
  ],
  Sejuani: [
    { championId: "MasterYi", reason: "Sustained true damage out-scales her tankiness." },
    { championId: "Nidalee", reason: "Kiting and poke avoid her slow engage." },
  ],
  Nunu: [
    { championId: "LeeSin", reason: "Early invades punish his slow-scaling clear." },
    { championId: "Elise", reason: "Faster early clear and ganks outpace him." },
  ],
  Evelynn: [
    { championId: "JarvanIV", reason: "Vision denial counters and flash-cage catch her engage." },
    { championId: "Rammus", reason: "Armor blunts her true-damage burst." },
  ],
  Warwick: [
    { championId: "MasterYi", reason: "Sustained damage race outpaces his healing." },
    { championId: "Rammus", reason: "Armor and taunt shut down his sustain-tank combo." },
  ],
  Rammus: [
    { championId: "MasterYi", reason: "True damage ignores his armor stacking." },
    { championId: "Kindred", reason: "Ranged kiting avoids his taunt-and-roll engage." },
  ],
  Shyvana: [
    { championId: "Rammus", reason: "Armor and taunt shut down her dragon-form burst." },
    { championId: "Elise", reason: "Faster early game punishes her scaling clear." },
  ],
  XinZhao: [
    { championId: "Rammus", reason: "Armor and taunt neutralize his all-in combo." },
    { championId: "Sejuani", reason: "Out-tanks and out-trades his skirmish damage." },
  ],
  JarvanIV: [
    { championId: "Rammus", reason: "Armor and taunt shut down his cage-and-flag combo." },
    { championId: "Sejuani", reason: "Tankier frontline absorbs his engage burst." },
  ],

  // Mid
  Viktor: [
    { championId: "Zed", reason: "Burst assassin closes the gap before Gravity Field lands." },
    { championId: "Yasuo", reason: "Wind Wall blocks his key poke abilities." },
  ],
  Orianna: [
    { championId: "Zed", reason: "Burst assassin punishes her lack of a personal escape." },
    { championId: "Yasuo", reason: "Wind Wall blocks her ball-based poke and ultimate." },
  ],
  Syndra: [
    { championId: "Zed", reason: "Burst assassin closes the gap before her stun combo lands." },
    { championId: "Yasuo", reason: "Wind Wall blocks her key stun projectile." },
  ],
  Azir: [
    { championId: "Zed", reason: "Burst assassin dives past his soldier zoning." },
    { championId: "Yasuo", reason: "Wind Wall blocks his ultimate shockwave." },
  ],
  Katarina: [
    { championId: "Diana", reason: "AoE burst punishes her positioning before daggers reset." },
    { championId: "Lissandra", reason: "Root shuts down her dagger-reset engage." },
  ],
  Leblanc: [
    { championId: "Lissandra", reason: "Root punishes her all-in before the distortion escape resets." },
    { championId: "Kassadin", reason: "Silence shuts down her combo before it lands." },
  ],
  TwistedFate: [
    { championId: "Zed", reason: "Burst assassin closes the gap before his card combo lands." },
    { championId: "Kassadin", reason: "Silence and mobility deny his pick potential." },
  ],
  Veigar: [
    { championId: "Zed", reason: "Burst assassin closes the gap before his stun cage lands." },
    { championId: "Kassadin", reason: "Silence and mobility bypass his cage zoning." },
  ],
  Anivia: [
    { championId: "Zed", reason: "Burst assassin punishes her immobility between wall casts." },
    { championId: "Yasuo", reason: "Wind Wall blocks her key poke projectile." },
  ],
  Vex: [
    { championId: "Yasuo", reason: "Wind Wall blocks her signature fear projectile." },
    { championId: "Kassadin", reason: "Silence and mobility deny her point-and-click threat." },
  ],

  // Top
  Ornn: [
    { championId: "Renekton", reason: "Early lane aggression punishes his slow scaling." },
    { championId: "Vayne", reason: "Kiting late-game avoids his knock-up combo." },
  ],
  Shen: [
    { championId: "Renekton", reason: "Early lane pressure punishes his passive laning." },
    { championId: "Vayne", reason: "Kiting neutralizes his taunt engage." },
  ],
  Sion: [
    { championId: "Renekton", reason: "Early aggression punishes him before he scales into a tank." },
    { championId: "Poppy", reason: "Stun interrupts his knock-up engage." },
  ],
  Urgot: [
    { championId: "Vayne", reason: "Kiting range avoids his short-range execute combo." },
    { championId: "Quinn", reason: "Mobility and range deny his all-in engage." },
  ],
  Illaoi: [
    { championId: "Vayne", reason: "Kiting and range avoid her tentacle zone entirely." },
    { championId: "Quinn", reason: "Mobility denies her spirit-pull engage." },
  ],
  Volibear: [
    { championId: "Poppy", reason: "Stun interrupts his dive-and-stun combo." },
    { championId: "Gnar", reason: "Kite and range deny his all-in engage." },
  ],
  Mordekaiser: [
    { championId: "Poppy", reason: "Stun disrupts his pull-and-ultimate combo." },
    { championId: "Gnar", reason: "Kite and range deny his ghost-realm all-in." },
  ],
  Singed: [
    { championId: "Poppy", reason: "Stun stops his fling-and-kite chase." },
    { championId: "Gnar", reason: "Kite range matches his sustained chase pattern." },
  ],
  Chogath: [
    { championId: "Renekton", reason: "Early lane aggression punishes his slow scaling." },
    { championId: "Vayne", reason: "Kiting avoids his knock-up-and-silence combo." },
  ],
  Rumble: [
    { championId: "Gnar", reason: "Kite and range deny his flamethrower zoning." },
    { championId: "Poppy", reason: "Stun interrupts his ultimate engage." },
  ],
};

export function getCounters(championId: string): CounterEntry[] {
  return COUNTERS[championId] ?? [];
}
