// Curated counter-pick data.
//
// Riot's official API (Data Dragon / MATCH-V5) has no "counters" endpoint —
// champion-vs-champion matchup strength isn't published anywhere in the API.
// This file is a hand-curated set based on well-known lane matchups and the
// specific ability that wins the trade, not live win-rate stats. Treat it as
// a heuristic, and expect it to drift from the current patch.

export interface CounterEntry {
  championId: string; // Data Dragon champion id, e.g. "Yasuo"
  reason: string;
  keyAbility: string; // the ability that swings the matchup, e.g. "R — Nether Grasp"
}

export const COUNTERS: Record<string, CounterEntry[]> = {
  // ---- Top ----
  Aatrox: [
    { championId: "Vayne", reason: "Sustained ranged damage punishes his short-range kit.", keyAbility: "Q — Tumble" },
    { championId: "Poppy", reason: "Stun peel shuts down his all-in windows.", keyAbility: "E — Heroic Charge" },
  ],
  Camille: [
    { championId: "Gnar", reason: "Kite and mega-range zoning neutralize her all-in.", keyAbility: "E — Hyper" },
    { championId: "Kled", reason: "Sustained dueling pressure out-scales her true-damage combo.", keyAbility: "Q — Beartrap on a Rope" },
  ],
  Chogath: [
    { championId: "Renekton", reason: "Early lane aggression punishes his slow scaling.", keyAbility: "E — Slice and Dice" },
    { championId: "Vayne", reason: "Kiting avoids his knock-up-and-silence combo.", keyAbility: "Q — Tumble" },
  ],
  Darius: [
    { championId: "Poppy", reason: "Stun peel and armor stall his stack-and-pull combo.", keyAbility: "W — Steadfast Presence" },
    { championId: "Vayne", reason: "Kiting range beats his short reach.", keyAbility: "E — Condemn" },
  ],
  DrMundo: [
    { championId: "Illaoi", reason: "True damage tentacle pressure out-sustains his healing.", keyAbility: "W — Harsh Lesson" },
    { championId: "Vayne", reason: "Kiting punishes his lack of gap-close outside ultimate.", keyAbility: "Q — Tumble" },
  ],
  Fiora: [
    { championId: "Malphite", reason: "Armor stacking and knock-up shut down her vitals.", keyAbility: "R — Unstoppable Force" },
    { championId: "Poppy", reason: "Stun interrupts her Riposte-dependent duels.", keyAbility: "E — Heroic Charge" },
  ],
  Gangplank: [
    { championId: "Irelia", reason: "Mobility and sustained damage close the gap through his barrels.", keyAbility: "Q — Bladesurge" },
    { championId: "Renekton", reason: "Early all-in aggression punishes his weak level 1-3.", keyAbility: "E — Slice and Dice" },
  ],
  Garen: [
    { championId: "Vayne", reason: "Kiting and true damage bypass his tankiness.", keyAbility: "Q — Tumble" },
    { championId: "Teemo", reason: "Blind and poke deny his silence engage.", keyAbility: "Q — Blinding Dart" },
  ],
  Gnar: [
    { championId: "Poppy", reason: "Stun interrupts Mega Gnar engage windows.", keyAbility: "E — Heroic Charge" },
    { championId: "Darius", reason: "Sustained lane pressure punishes his mini-form.", keyAbility: "E — Apprehend" },
  ],
  Gwen: [
    { championId: "Vayne", reason: "True damage and kiting outpace her mist-shielded sustain.", keyAbility: "Q — Tumble" },
    { championId: "Renekton", reason: "Early aggression punishes her weak early trades.", keyAbility: "E — Slice and Dice" },
  ],
  Illaoi: [
    { championId: "Vayne", reason: "Kiting and range avoid her tentacle zone entirely.", keyAbility: "Q — Tumble" },
    { championId: "Quinn", reason: "Mobility denies her spirit-pull engage.", keyAbility: "E — Blinding Assault" },
  ],
  Irelia: [
    { championId: "Poppy", reason: "Stun peel shuts down her mobility resets.", keyAbility: "E — Heroic Charge" },
    { championId: "Malphite", reason: "Armor and knock-up beat her all-in trades.", keyAbility: "R — Unstoppable Force" },
  ],
  Jax: [
    { championId: "Poppy", reason: "Stun cancels his jump-in engage.", keyAbility: "E — Heroic Charge" },
    { championId: "Fiora", reason: "Outduels him with true damage vitals.", keyAbility: "W — Riposte" },
  ],
  Jayce: [
    { championId: "Renekton", reason: "Early all-in punishes him before he hits poke range.", keyAbility: "E — Slice and Dice" },
    { championId: "Malphite", reason: "Armor and engage close the gap on his ranged form.", keyAbility: "R — Unstoppable Force" },
  ],
  KSante: [
    { championId: "Vayne", reason: "Kiting range avoids his all-in engage combo.", keyAbility: "Q — Tumble" },
    { championId: "Renekton", reason: "Early aggression punishes his weak laning phase.", keyAbility: "E — Slice and Dice" },
  ],
  Kled: [
    { championId: "Poppy", reason: "Stun interrupts his Skaarl charge engage.", keyAbility: "E — Heroic Charge" },
    { championId: "Malphite", reason: "Armor blunts his dismount all-in burst.", keyAbility: "Passive — Granite Shield" },
  ],
  Kayle: [
    { championId: "Renekton", reason: "Early aggression punishes her before she scales.", keyAbility: "E — Slice and Dice" },
    { championId: "Pantheon", reason: "All-in burst outtrades her low-level kit.", keyAbility: "Q — Comet Spear" },
  ],
  Mordekaiser: [
    { championId: "Poppy", reason: "Stun disrupts his pull-and-ultimate combo.", keyAbility: "E — Heroic Charge" },
    { championId: "Gnar", reason: "Kite and range deny his ghost-realm all-in.", keyAbility: "E — Hyper" },
  ],
  Nasus: [
    { championId: "Renekton", reason: "Denies farm and stacks with early aggression.", keyAbility: "E — Slice and Dice" },
    { championId: "Vayne", reason: "Kiting neutralizes his Q stacks late.", keyAbility: "Q — Tumble" },
  ],
  Olaf: [
    { championId: "Vayne", reason: "Kiting avoids his unstoppable true-damage all-in.", keyAbility: "Q — Tumble" },
    { championId: "Poppy", reason: "Knock-away displacement resets his engage distance.", keyAbility: "R — Keeper's Verdict" },
  ],
  Ornn: [
    { championId: "Renekton", reason: "Early lane aggression punishes his slow scaling.", keyAbility: "E — Slice and Dice" },
    { championId: "Vayne", reason: "Kiting late-game avoids his knock-up combo.", keyAbility: "Q — Tumble" },
  ],
  Pantheon: [
    { championId: "Gnar", reason: "Range and kite deny his all-in burst.", keyAbility: "E — Hyper" },
    { championId: "Poppy", reason: "Stun cancels his jump engage.", keyAbility: "E — Heroic Charge" },
  ],
  Quinn: [
    { championId: "Malphite", reason: "Armor and gap-close counter her poke-and-roam plan.", keyAbility: "R — Unstoppable Force" },
    { championId: "Renekton", reason: "Early aggression punishes her weak melee trades.", keyAbility: "E — Slice and Dice" },
  ],
  Renekton: [
    { championId: "Gnar", reason: "Kites his all-in and out-ranges him post-6.", keyAbility: "E — Hyper" },
    { championId: "Kayle", reason: "Ranged scaling out-lasts his early burst.", keyAbility: "Q — Radiant Blast" },
  ],
  Riven: [
    { championId: "Malphite", reason: "Armor and knock-up neutralize her burst combo.", keyAbility: "R — Unstoppable Force" },
    { championId: "Poppy", reason: "Stun stops her dash-cancel engage.", keyAbility: "E — Heroic Charge" },
  ],
  Rumble: [
    { championId: "Gnar", reason: "Kite and range deny his flamethrower zoning.", keyAbility: "E — Hyper" },
    { championId: "Poppy", reason: "Stun interrupts his ultimate engage.", keyAbility: "E — Heroic Charge" },
  ],
  Sett: [
    { championId: "Gnar", reason: "Kite and range deny his grab-and-punch combo.", keyAbility: "E — Hyper" },
    { championId: "Vayne", reason: "Kiting avoids his short-range pull.", keyAbility: "Q — Tumble" },
  ],
  Shen: [
    { championId: "Renekton", reason: "Early lane pressure punishes his passive laning.", keyAbility: "E — Slice and Dice" },
    { championId: "Vayne", reason: "Kiting neutralizes his taunt engage.", keyAbility: "Q — Tumble" },
  ],
  Singed: [
    { championId: "Poppy", reason: "Stun stops his fling-and-kite chase.", keyAbility: "E — Heroic Charge" },
    { championId: "Gnar", reason: "Kite range matches his sustained chase pattern.", keyAbility: "E — Hyper" },
  ],
  Sion: [
    { championId: "Renekton", reason: "Early aggression punishes him before he scales into a tank.", keyAbility: "E — Slice and Dice" },
    { championId: "Poppy", reason: "Stun interrupts his knock-up engage.", keyAbility: "E — Heroic Charge" },
  ],
  Teemo: [
    { championId: "Renekton", reason: "Early aggression punishes his squishiness.", keyAbility: "E — Slice and Dice" },
    { championId: "Lillia", reason: "AoE poke and sleep negate his blind kiting.", keyAbility: "E — Watch Out! Eep!" },
  ],
  Tryndamere: [
    { championId: "Malzahar", reason: "Suppression bypasses his Undying Rage timing.", keyAbility: "R — Nether Grasp" },
    { championId: "Quinn", reason: "Mobility and range deny his spin-to-win engage.", keyAbility: "E — Blinding Assault" },
  ],
  Urgot: [
    { championId: "Vayne", reason: "Kiting range avoids his short-range execute combo.", keyAbility: "Q — Tumble" },
    { championId: "Quinn", reason: "Mobility and range deny his all-in engage.", keyAbility: "E — Blinding Assault" },
  ],
  Volibear: [
    { championId: "Poppy", reason: "Stun interrupts his dive-and-stun combo.", keyAbility: "E — Heroic Charge" },
    { championId: "Gnar", reason: "Kite and range deny his all-in engage.", keyAbility: "E — Hyper" },
  ],
  Yorick: [
    { championId: "Vayne", reason: "Kiting thins his ghoul wall without trading into it.", keyAbility: "Q — Tumble" },
    { championId: "Renekton", reason: "Early aggression punishes his passive scaling laning.", keyAbility: "E — Slice and Dice" },
  ],

  // ---- Jungle ----
  Amumu: [
    { championId: "MasterYi", reason: "Sustained damage race outpaces his engage window.", keyAbility: "R — Highlander" },
    { championId: "Rammus", reason: "Armor and taunt shut down his bandage-grab combo.", keyAbility: "E — Frenzying Taunt" },
  ],
  Belveth: [
    { championId: "Rammus", reason: "Armor and taunt blunt her true-damage attack speed scaling.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Tankier frontline out-trades her voidling swarm.", keyAbility: "R — Glacial Prison" },
  ],
  Briar: [
    { championId: "Sejuani", reason: "CC-heavy tankiness survives and shuts down her frenzy.", keyAbility: "R — Glacial Prison" },
    { championId: "Rammus", reason: "Taunt and armor blunt her sustained brawl damage.", keyAbility: "E — Frenzying Taunt" },
  ],
  Elise: [
    { championId: "Sejuani", reason: "Tankiness absorbs her burst combo without dying.", keyAbility: "R — Glacial Prison" },
    { championId: "Rammus", reason: "Armor and taunt shut down her spider-form damage.", keyAbility: "E — Frenzying Taunt" },
  ],
  Evelynn: [
    { championId: "JarvanIV", reason: "Vision denial counters and flash-cage catch her engage.", keyAbility: "R — Cataclysm" },
    { championId: "Rammus", reason: "Armor blunts her true-damage burst.", keyAbility: "E — Frenzying Taunt" },
  ],
  Fiddlesticks: [
    { championId: "Rammus", reason: "Armor blunts his channel-fear burst, taunt punishes the flee.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Tanky frontline survives his ultimate fear-and-burst combo.", keyAbility: "R — Glacial Prison" },
  ],
  Graves: [
    { championId: "Rammus", reason: "Armor stacking blunts his auto-attack burst.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Frontline tank absorbs his short-range damage.", keyAbility: "R — Glacial Prison" },
  ],
  Gragas: [
    { championId: "Sejuani", reason: "Tanky frontline out-trades his body-slam engage.", keyAbility: "R — Glacial Prison" },
    { championId: "Rammus", reason: "Armor and taunt punish his melee burst combo.", keyAbility: "E — Frenzying Taunt" },
  ],
  Hecarim: [
    { championId: "Rammus", reason: "Taunt and armor shut down his charge damage.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Out-tanks and out-crowd-controls his engage.", keyAbility: "R — Glacial Prison" },
  ],
  Ivern: [
    { championId: "LeeSin", reason: "Early invades punish his non-damaging early clear.", keyAbility: "Q — Sonic Wave" },
    { championId: "Elise", reason: "Faster early skirmishing outpaces his enabler playstyle.", keyAbility: "Q — Neurotoxin" },
  ],
  JarvanIV: [
    { championId: "Rammus", reason: "Armor and taunt shut down his cage-and-flag combo.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Tankier frontline absorbs his engage burst.", keyAbility: "R — Glacial Prison" },
  ],
  Karthus: [
    { championId: "Rengar", reason: "Stealth engage kills him before he can channel Requiem safely.", keyAbility: "R — Thrill of the Hunt" },
    { championId: "LeeSin", reason: "Early invades snowball before his passive-defer scaling kicks in.", keyAbility: "Q — Sonic Wave" },
  ],
  Kayn: [
    { championId: "Rammus", reason: "Armor and taunt shut down either of his forms.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Tankiness and CC out-trade his all-in.", keyAbility: "R — Glacial Prison" },
  ],
  Khazix: [
    { championId: "Rammus", reason: "Armor and taunt blunt his isolation burst.", keyAbility: "E — Frenzying Taunt" },
    { championId: "JarvanIV", reason: "Vision denial and flash-cage catch his isolation picks.", keyAbility: "R — Cataclysm" },
  ],
  Kindred: [
    { championId: "MasterYi", reason: "Sustained damage races through her marks faster.", keyAbility: "R — Highlander" },
    { championId: "LeeSin", reason: "Early tempo punishes her weak early skirmishes.", keyAbility: "Q — Sonic Wave" },
  ],
  LeeSin: [
    { championId: "MasterYi", reason: "Sustained damage and mobility outpace his early tempo.", keyAbility: "R — Highlander" },
    { championId: "Warwick", reason: "Sustain trades favorably against his burst combos.", keyAbility: "R — Infinite Duress" },
  ],
  Naafiri: [
    { championId: "Rammus", reason: "Armor and taunt blunt her pack of pups' burst.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Tanky frontline survives her all-in dash combo.", keyAbility: "R — Glacial Prison" },
  ],
  Nidalee: [
    { championId: "Rammus", reason: "Armor tanks her spear poke and closes the gap.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Elise", reason: "Matches her early-game skirmish pressure.", keyAbility: "Q — Neurotoxin" },
  ],
  Nocturne: [
    { championId: "Rammus", reason: "Armor and taunt shut down his fear-and-burst all-in.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Tanky frontline survives his ultimate dive.", keyAbility: "R — Glacial Prison" },
  ],
  Nunu: [
    { championId: "LeeSin", reason: "Early invades punish his slow-scaling clear.", keyAbility: "Q — Sonic Wave" },
    { championId: "Elise", reason: "Faster early clear and ganks outpace him.", keyAbility: "Q — Neurotoxin" },
  ],
  RekSai: [
    { championId: "Rammus", reason: "Armor and taunt shut down her burrow-and-burst combo.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Tankier frontline absorbs her ambush damage.", keyAbility: "R — Glacial Prison" },
  ],
  Rengar: [
    { championId: "Rammus", reason: "Armor and taunt blunt his empowered-leap burst.", keyAbility: "E — Frenzying Taunt" },
    { championId: "JarvanIV", reason: "Vision denial and flash-cage counter his stealth pickoffs.", keyAbility: "R — Cataclysm" },
  ],
  Sejuani: [
    { championId: "MasterYi", reason: "Sustained true damage out-scales her tankiness.", keyAbility: "R — Highlander" },
    { championId: "Nidalee", reason: "Kiting and poke avoid her slow engage.", keyAbility: "E — Pounce" },
  ],
  Shaco: [
    { championId: "Lissandra", reason: "Root punishes his box-and-burst engage.", keyAbility: "E — Glacial Path" },
    { championId: "Warwick", reason: "Sustain trades favorably vs. his assassination burst.", keyAbility: "R — Infinite Duress" },
  ],
  Shyvana: [
    { championId: "Rammus", reason: "Armor and taunt shut down her dragon-form burst.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Elise", reason: "Faster early game punishes her scaling clear.", keyAbility: "Q — Neurotoxin" },
  ],
  Skarner: [
    { championId: "Rammus", reason: "Armor and taunt blunt his grab-and-slam combo.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Out-tanks and out-trades his engage all-in.", keyAbility: "R — Glacial Prison" },
  ],
  Trundle: [
    { championId: "MasterYi", reason: "Sustained damage race punishes his sustain-tank duels.", keyAbility: "R — Highlander" },
    { championId: "Sejuani", reason: "CC-heavy frontline survives his pillar-and-drain combo.", keyAbility: "R — Glacial Prison" },
  ],
  Udyr: [
    { championId: "Rammus", reason: "Armor and taunt blunt his stance-swap all-in.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Tankier frontline out-trades his sustained brawl.", keyAbility: "R — Glacial Prison" },
  ],
  Viego: [
    { championId: "Rammus", reason: "Armor and taunt blunt his possession-fueled burst.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Tanky CC shuts him down before a kill possession snowballs.", keyAbility: "R — Glacial Prison" },
  ],
  Vi: [
    { championId: "JarvanIV", reason: "Counter-engage and cage punish her commitment to a dash.", keyAbility: "R — Cataclysm" },
    { championId: "Sejuani", reason: "Tankier frontline out-trades her all-in.", keyAbility: "R — Glacial Prison" },
  ],
  Warwick: [
    { championId: "MasterYi", reason: "Sustained damage race outpaces his healing.", keyAbility: "R — Highlander" },
    { championId: "Rammus", reason: "Armor and taunt shut down his sustain-tank combo.", keyAbility: "E — Frenzying Taunt" },
  ],
  XinZhao: [
    { championId: "Rammus", reason: "Armor and taunt neutralize his all-in combo.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Out-tanks and out-trades his skirmish damage.", keyAbility: "R — Glacial Prison" },
  ],
  Zac: [
    { championId: "Rammus", reason: "Armor and taunt blunt his blob-splitting engage.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "Out-tanks and out-CCs his all-in dive.", keyAbility: "R — Glacial Prison" },
  ],

  // ---- Mid ----
  Ahri: [
    { championId: "Yasuo", reason: "Wind Wall blocks Charm and her Fox-Fire poke.", keyAbility: "W — Wind Wall" },
    { championId: "Kassadin", reason: "Silence and mobility close the gap through her kit.", keyAbility: "W — Nether Blade" },
    { championId: "Malzahar", reason: "Suppression bypasses her escapes entirely.", keyAbility: "R — Nether Grasp" },
  ],
  Akali: [
    { championId: "Lissandra", reason: "Root shuts down her dash-reliant escapes.", keyAbility: "E — Glacial Path" },
    { championId: "Pantheon", reason: "Early all-in pressure outtrades her before level 6.", keyAbility: "Q — Comet Spear" },
    { championId: "Kennen", reason: "Ranged poke and stuns punish her melee combos.", keyAbility: "E — Electrical Surge" },
  ],
  Anivia: [
    { championId: "Zed", reason: "Burst assassin punishes her immobility between wall casts.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks her key poke projectile.", keyAbility: "W — Wind Wall" },
  ],
  Annie: [
    { championId: "Yasuo", reason: "Wind Wall blocks her signature stun projectile.", keyAbility: "W — Wind Wall" },
    { championId: "Kassadin", reason: "Silence and mobility close the gap before her stun combo lands.", keyAbility: "W — Nether Blade" },
  ],
  Aurora: [
    { championId: "Kassadin", reason: "Silence shuts down her combo before the translocate escape.", keyAbility: "W — Nether Blade" },
    { championId: "Malzahar", reason: "Suppression bypasses her mobility entirely.", keyAbility: "R — Nether Grasp" },
  ],
  Azir: [
    { championId: "Zed", reason: "Burst assassin dives past his soldier zoning.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks his ultimate shockwave.", keyAbility: "W — Wind Wall" },
  ],
  Cassiopeia: [
    { championId: "Yasuo", reason: "Wind Wall blocks her key poison bolt.", keyAbility: "W — Wind Wall" },
    { championId: "Zed", reason: "Burst assassin closes the gap before she can kite in Twin Fang range.", keyAbility: "R — Death Mark" },
  ],
  Corki: [
    { championId: "Zed", reason: "Burst assassin closes the gap through his poke.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks his rocket-based poke.", keyAbility: "W — Wind Wall" },
  ],
  Ekko: [
    { championId: "Lissandra", reason: "Root punishes his all-in before the rewind escape resets.", keyAbility: "E — Glacial Path" },
    { championId: "Kassadin", reason: "Silence shuts down his combo before it lands.", keyAbility: "W — Nether Blade" },
  ],
  Galio: [
    { championId: "Zed", reason: "Burst assassin punishes him before his taunt ultimate lands.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks his signature wind-based poke.", keyAbility: "W — Wind Wall" },
  ],
  Heimerdinger: [
    { championId: "Zed", reason: "Burst assassin dives past his turret zoning.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks his rocket poke.", keyAbility: "W — Wind Wall" },
  ],
  Hwei: [
    { championId: "Zed", reason: "Burst assassin closes the gap before his combo fully lands.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks his key ranged spells.", keyAbility: "W — Wind Wall" },
  ],
  Kassadin: [
    { championId: "Malzahar", reason: "Suppression ignores his mobility and shield.", keyAbility: "R — Nether Grasp" },
    { championId: "Lucian", reason: "Early lane pressure punishes his weak laning phase.", keyAbility: "Q — Piercing Light" },
  ],
  Katarina: [
    { championId: "Diana", reason: "AoE burst punishes her positioning before daggers reset.", keyAbility: "R — Moonfall" },
    { championId: "Lissandra", reason: "Root shuts down her dagger-reset engage.", keyAbility: "E — Glacial Path" },
  ],
  Kennen: [
    { championId: "Yasuo", reason: "Wind Wall blocks his key stun projectile.", keyAbility: "W — Wind Wall" },
    { championId: "Zed", reason: "Burst assassin punishes his squishy energy kit.", keyAbility: "R — Death Mark" },
  ],
  Leblanc: [
    { championId: "Lissandra", reason: "Root punishes her all-in before the distortion escape resets.", keyAbility: "E — Glacial Path" },
    { championId: "Kassadin", reason: "Silence shuts down her combo before it lands.", keyAbility: "W — Nether Blade" },
  ],
  Lissandra: [
    { championId: "Zed", reason: "Burst assassin punishes her before her own root lands.", keyAbility: "R — Death Mark" },
    { championId: "Kassadin", reason: "Silence bypasses her self-peel kit.", keyAbility: "W — Nether Blade" },
  ],
  Lux: [
    { championId: "Zed", reason: "Burst assassin closes the gap before her root-based poke lands.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks her signature root and ultimate laser.", keyAbility: "W — Wind Wall" },
  ],
  Malzahar: [
    { championId: "Yasuo", reason: "Wind Wall blocks his key silence-negate projectile before ultimate range.", keyAbility: "W — Wind Wall" },
    { championId: "Zed", reason: "Burst assassin dives before his voidlings can peel.", keyAbility: "R — Death Mark" },
  ],
  Mel: [
    { championId: "Zed", reason: "Burst assassin closes the gap before her reflect can trigger.", keyAbility: "R — Death Mark" },
    { championId: "Kassadin", reason: "Silence shuts her combo down before it fires.", keyAbility: "W — Nether Blade" },
  ],
  Neeko: [
    { championId: "Zed", reason: "Burst assassin punishes her before the disguise trick lands.", keyAbility: "R — Death Mark" },
    { championId: "Kassadin", reason: "Silence and mobility close the gap on her poke.", keyAbility: "W — Nether Blade" },
  ],
  Orianna: [
    { championId: "Zed", reason: "Burst assassin punishes her lack of a personal escape.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks her ball-based poke and ultimate.", keyAbility: "W — Wind Wall" },
  ],
  Qiyana: [
    { championId: "Lissandra", reason: "Root punishes her all-in before her elemental combo lands.", keyAbility: "E — Glacial Path" },
    { championId: "Kassadin", reason: "Silence shuts down her burst combo.", keyAbility: "W — Nether Blade" },
  ],
  Ryze: [
    { championId: "Zed", reason: "Burst assassin punishes his weak early laning phase.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks his root-and-snare combo.", keyAbility: "W — Wind Wall" },
  ],
  Swain: [
    { championId: "Zed", reason: "Burst assassin punishes him before his root-drain combo lands.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks his root-based poke.", keyAbility: "W — Wind Wall" },
  ],
  Sylas: [
    { championId: "Malzahar", reason: "Suppression bypasses his mobility and shields.", keyAbility: "R — Nether Grasp" },
    { championId: "Kassadin", reason: "Silences his combo before it lands.", keyAbility: "W — Nether Blade" },
  ],
  Syndra: [
    { championId: "Zed", reason: "Burst assassin closes the gap before her stun combo lands.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks her key stun projectile.", keyAbility: "W — Wind Wall" },
  ],
  Taliyah: [
    { championId: "Zed", reason: "Burst assassin closes the gap before her worked ground combo lands.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks her signature seismic projectile.", keyAbility: "W — Wind Wall" },
  ],
  Talon: [
    { championId: "Lissandra", reason: "Root shuts his dive down before he can reset.", keyAbility: "E — Glacial Path" },
    { championId: "Pantheon", reason: "Trades burst for burst and wins early.", keyAbility: "Q — Comet Spear" },
  ],
  TwistedFate: [
    { championId: "Zed", reason: "Burst assassin closes the gap before his card combo lands.", keyAbility: "R — Death Mark" },
    { championId: "Kassadin", reason: "Silence and mobility deny his pick potential.", keyAbility: "W — Nether Blade" },
  ],
  Veigar: [
    { championId: "Zed", reason: "Burst assassin closes the gap before his stun cage lands.", keyAbility: "R — Death Mark" },
    { championId: "Kassadin", reason: "Silence and mobility bypass his cage zoning.", keyAbility: "W — Nether Blade" },
  ],
  Velkoz: [
    { championId: "Zed", reason: "Burst assassin closes the gap before his split-beam combo lands.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks his signature beam poke.", keyAbility: "W — Wind Wall" },
  ],
  Vex: [
    { championId: "Yasuo", reason: "Wind Wall blocks her signature fear projectile.", keyAbility: "W — Wind Wall" },
    { championId: "Kassadin", reason: "Silence and mobility deny her point-and-click threat.", keyAbility: "W — Nether Blade" },
  ],
  Viktor: [
    { championId: "Zed", reason: "Burst assassin closes the gap before Gravity Field lands.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks his key poke abilities.", keyAbility: "W — Wind Wall" },
  ],
  Vladimir: [
    { championId: "Zed", reason: "Burst assassin punishes him during his weak early trades.", keyAbility: "R — Death Mark" },
    { championId: "Kassadin", reason: "Silence blocks his key sustain-poke abilities.", keyAbility: "W — Nether Blade" },
  ],
  Xerath: [
    { championId: "Zed", reason: "Burst assassin closes the gap through his long-range poke.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks his signature ranged poke.", keyAbility: "W — Wind Wall" },
  ],
  Yone: [
    { championId: "Malzahar", reason: "Suppression bypasses his dash and shield.", keyAbility: "R — Nether Grasp" },
    { championId: "Poppy", reason: "Stun cancels his dash-in combo.", keyAbility: "E — Heroic Charge" },
  ],
  Zed: [
    { championId: "Lissandra", reason: "Root punishes his shadow-dash all-in.", keyAbility: "E — Glacial Path" },
    { championId: "Malzahar", reason: "Suppression ignores his ultimate escape.", keyAbility: "R — Nether Grasp" },
    { championId: "Diana", reason: "AoE burst trades favorably vs. his squishy kit.", keyAbility: "R — Moonfall" },
  ],
  Zoe: [
    { championId: "Kassadin", reason: "Silence shuts down her poke-and-sleep combo before it lands.", keyAbility: "W — Nether Blade" },
    { championId: "Yasuo", reason: "Wind Wall blocks her key bubble projectile.", keyAbility: "W — Wind Wall" },
  ],
  Ziggs: [
    { championId: "Zed", reason: "Burst assassin closes the gap before poke adds up.", keyAbility: "R — Death Mark" },
    { championId: "LeeSin", reason: "Early jungle pressure punishes his weak early game.", keyAbility: "Q — Sonic Wave" },
  ],

  // ---- ADC ----
  Akshan: [
    { championId: "Leona", reason: "Hard engage catches him before he can reposition and revive allies.", keyAbility: "E — Zenith Blade" },
    { championId: "Rengar", reason: "Stealth engage skips his camouflage entirely.", keyAbility: "R — Thrill of the Hunt" },
  ],
  Aphelios: [
    { championId: "Rengar", reason: "Stealth engage punishes his lack of a personal escape.", keyAbility: "R — Thrill of the Hunt" },
    { championId: "Leona", reason: "Hard engage denies his gun-swap kiting.", keyAbility: "E — Zenith Blade" },
  ],
  Ashe: [
    { championId: "Zed", reason: "Burst assassin dives before she can kite.", keyAbility: "R — Death Mark" },
    { championId: "Rengar", reason: "Stealth engage skips her kiting entirely.", keyAbility: "R — Thrill of the Hunt" },
  ],
  Caitlyn: [
    { championId: "Zed", reason: "Burst assassin closes the gap through her trap zoning.", keyAbility: "R — Death Mark" },
    { championId: "Rengar", reason: "Stealth engage skips her long-range poke entirely.", keyAbility: "R — Thrill of the Hunt" },
  ],
  Draven: [
    { championId: "Caitlyn", reason: "Range advantage punishes his axe-catch positioning.", keyAbility: "Q — Piltover Peacemaker" },
    { championId: "Ashe", reason: "Kiting and slows deny his catch-axe trades.", keyAbility: "W — Volley" },
  ],
  Ezreal: [
    { championId: "Zed", reason: "Burst assassin closes the gap before Arcane Shift resets.", keyAbility: "R — Death Mark" },
    { championId: "Vi", reason: "Guaranteed dash engage skips his kiting entirely.", keyAbility: "R — Cease and Desist" },
  ],
  Jhin: [
    { championId: "Rengar", reason: "Stealth engage punishes his fixed 4-shot rhythm.", keyAbility: "R — Thrill of the Hunt" },
    { championId: "Vi", reason: "Guaranteed dash engage skips his root traps.", keyAbility: "R — Cease and Desist" },
  ],
  Jinx: [
    { championId: "Zed", reason: "Burst assassin closes before rockets can kite.", keyAbility: "R — Death Mark" },
    { championId: "Vi", reason: "Guaranteed dash engage skips her range advantage.", keyAbility: "R — Cease and Desist" },
  ],
  Kaisa: [
    { championId: "Pantheon", reason: "Early lane all-in punishes her scaling kit.", keyAbility: "Q — Comet Spear" },
    { championId: "Leona", reason: "Hard engage denies her evolve-and-kite plan.", keyAbility: "E — Zenith Blade" },
  ],
  Kalista: [
    { championId: "Morgana", reason: "Black Shield removes her main peel/engage answer.", keyAbility: "E — Black Shield" },
    { championId: "Pantheon", reason: "All-in burst punishes her fragile early laning.", keyAbility: "Q — Comet Spear" },
  ],
  KogMaw: [
    { championId: "Rengar", reason: "Stealth engage bypasses his lack of any escape entirely.", keyAbility: "R — Thrill of the Hunt" },
    { championId: "Leona", reason: "Hard engage punishes his immobile late-game hyper-carry form.", keyAbility: "E — Zenith Blade" },
  ],
  Lucian: [
    { championId: "Zed", reason: "Burst assassin punishes his lack of hard escape once cooldowns are down.", keyAbility: "R — Death Mark" },
    { championId: "Kassadin", reason: "Silence and mobility close the gap on his poke.", keyAbility: "W — Nether Blade" },
  ],
  MissFortune: [
    { championId: "Zed", reason: "Burst assassin closes the gap before her ultimate channels.", keyAbility: "R — Death Mark" },
    { championId: "Rengar", reason: "Stealth engage skips her positioning entirely.", keyAbility: "R — Thrill of the Hunt" },
  ],
  Nilah: [
    { championId: "Rammus", reason: "Armor and taunt blunt her lifesteal-fueled trades.", keyAbility: "E — Frenzying Taunt" },
    { championId: "Sejuani", reason: "CC-heavy tank shuts down her all-in before it snowballs.", keyAbility: "R — Glacial Prison" },
  ],
  Samira: [
    { championId: "Morgana", reason: "Black Shield stops her whole engage combo.", keyAbility: "E — Black Shield" },
    { championId: "Janna", reason: "Knock-up disruption breaks her combo chain.", keyAbility: "R — Monsoon" },
  ],
  Senna: [
    { championId: "Zed", reason: "Burst assassin closes the gap before her soul-piercing poke stacks up.", keyAbility: "R — Death Mark" },
    { championId: "Rengar", reason: "Stealth engage skips her long-range mist form entirely.", keyAbility: "R — Thrill of the Hunt" },
  ],
  Sivir: [
    { championId: "Zed", reason: "Burst assassin bypasses her Spell Shield timing.", keyAbility: "R — Death Mark" },
    { championId: "Draven", reason: "Early lane damage out-trades her scaling kit.", keyAbility: "Q — Spinning Axe" },
  ],
  Smolder: [
    { championId: "Zed", reason: "Burst assassin punishes his weak early laning before his stacks matter.", keyAbility: "R — Death Mark" },
    { championId: "Rengar", reason: "Stealth engage skips his ranged zoning entirely.", keyAbility: "R — Thrill of the Hunt" },
  ],
  Tristana: [
    { championId: "Zed", reason: "Burst assassin closes before her jump resets.", keyAbility: "R — Death Mark" },
    { championId: "Leona", reason: "Hard engage denies her kiting and jump escape.", keyAbility: "E — Zenith Blade" },
  ],
  Twitch: [
    { championId: "Leona", reason: "Hard engage catches him before stealth resets.", keyAbility: "E — Zenith Blade" },
    { championId: "Rengar", reason: "Out-stealths and burst kills him before he can reposition.", keyAbility: "R — Thrill of the Hunt" },
  ],
  Varus: [
    { championId: "Zed", reason: "Burst assassin closes the gap before poke stacks up.", keyAbility: "R — Death Mark" },
    { championId: "Leona", reason: "Hard engage skips his root-chain damage.", keyAbility: "E — Zenith Blade" },
  ],
  Vayne: [
    { championId: "Malzahar", reason: "Suppression ignores her Condemn/roll escapes.", keyAbility: "R — Nether Grasp" },
    { championId: "Caitlyn", reason: "Range advantage outpokes her before stealth stacks land.", keyAbility: "Q — Piltover Peacemaker" },
  ],
  Xayah: [
    { championId: "Rengar", reason: "Stealth engage closes the gap before feathers stack.", keyAbility: "R — Thrill of the Hunt" },
    { championId: "Leona", reason: "Guaranteed engage skips her root punish.", keyAbility: "E — Zenith Blade" },
  ],
  Yunara: [
    { championId: "Leona", reason: "Hard engage skips her spirit-form kiting entirely.", keyAbility: "E — Zenith Blade" },
    { championId: "Rengar", reason: "Stealth engage punishes her before she can reposition.", keyAbility: "R — Thrill of the Hunt" },
  ],
  Zeri: [
    { championId: "Leona", reason: "Hard engage skips her wall-hop mobility entirely.", keyAbility: "E — Zenith Blade" },
    { championId: "Vi", reason: "Guaranteed dash engage denies her zap-and-kite plan.", keyAbility: "R — Cease and Desist" },
  ],

  // ---- Support ----
  Alistar: [
    { championId: "Morgana", reason: "Black Shield negates his knock-up-and-headbutt combo.", keyAbility: "E — Black Shield" },
    { championId: "Nami", reason: "Bubble and heal punish his all-in if it lands anyway.", keyAbility: "E — Tidal Wave" },
  ],
  Bard: [
    { championId: "Pyke", reason: "Ranged hook punishes his lack of a hard peel tool.", keyAbility: "Q — Bone Skewer" },
    { championId: "Blitzcrank", reason: "Hook engage skips his chime-roaming playstyle.", keyAbility: "Q — Rocket Grab" },
  ],
  Blitzcrank: [
    { championId: "Morgana", reason: "Black Shield negates his hook entirely.", keyAbility: "E — Black Shield" },
    { championId: "Nami", reason: "Bubble and heal punish his all-in if the hook lands.", keyAbility: "E — Tidal Wave" },
  ],
  Braum: [
    { championId: "Pyke", reason: "Ranged hook punishes his lack of a personal escape.", keyAbility: "Q — Bone Skewer" },
    { championId: "Morgana", reason: "Black Shield ignores his passive stun stacking.", keyAbility: "E — Black Shield" },
  ],
  Janna: [
    { championId: "Pyke", reason: "Burst execute punishes her low HP before she can peel.", keyAbility: "Q — Bone Skewer" },
    { championId: "Morgana", reason: "Black Shield removes her disengage tools from a fight.", keyAbility: "E — Black Shield" },
  ],
  Karma: [
    { championId: "Zed", reason: "Burst assassin punishes her lack of a hard escape.", keyAbility: "R — Death Mark" },
    { championId: "Pyke", reason: "Burst execute punishes her squishiness before shields matter.", keyAbility: "Q — Bone Skewer" },
  ],
  Leona: [
    { championId: "Morgana", reason: "Black Shield negates her entire engage combo.", keyAbility: "E — Black Shield" },
    { championId: "Kalista", reason: "Ranged poke and mobility avoid her hook-in engage.", keyAbility: "E — Rend" },
  ],
  Lulu: [
    { championId: "Malzahar", reason: "Suppression bypasses her peel and shields.", keyAbility: "R — Nether Grasp" },
    { championId: "Rengar", reason: "Stealth engage skips her protective cooldowns.", keyAbility: "R — Thrill of the Hunt" },
  ],
  Milio: [
    { championId: "Pyke", reason: "Burst execute punishes him before his cleanse-heal cooldown is up.", keyAbility: "Q — Bone Skewer" },
    { championId: "Blitzcrank", reason: "Hook engage skips his zone-shielding entirely.", keyAbility: "Q — Rocket Grab" },
  ],
  Nami: [
    { championId: "Pyke", reason: "Ranged hook punishes her lack of a dash or escape.", keyAbility: "Q — Bone Skewer" },
    { championId: "Blitzcrank", reason: "Hook engage skips her heal-and-peel window.", keyAbility: "Q — Rocket Grab" },
  ],
  Nautilus: [
    { championId: "Morgana", reason: "Black Shield negates his root-chain engage.", keyAbility: "E — Black Shield" },
    { championId: "Janna", reason: "Disengage undoes his all-in before it lands.", keyAbility: "R — Monsoon" },
  ],
  Pyke: [
    { championId: "Morgana", reason: "Black Shield blocks his hook and execute combo.", keyAbility: "E — Black Shield" },
    { championId: "Braum", reason: "Shield and stun peel deny his kill pickoffs.", keyAbility: "E — Stand Behind Me" },
  ],
  Rakan: [
    { championId: "Morgana", reason: "Black Shield stops his charm-engage combo.", keyAbility: "E — Black Shield" },
    { championId: "Nautilus", reason: "Guaranteed root beats his dash-in engage.", keyAbility: "Q — Dredge Line" },
  ],
  Rell: [
    { championId: "Morgana", reason: "Black Shield negates her armor-pull engage.", keyAbility: "E — Black Shield" },
    { championId: "Janna", reason: "Disengage denies her all-in before it connects.", keyAbility: "R — Monsoon" },
  ],
  Renata: [
    { championId: "Morgana", reason: "Black Shield blocks her signature chain-bind combo.", keyAbility: "E — Black Shield" },
    { championId: "Pyke", reason: "Burst execute punishes her squishiness before peel lands.", keyAbility: "Q — Bone Skewer" },
  ],
  Seraphine: [
    { championId: "Zed", reason: "Burst assassin closes the gap before her charm chain lands.", keyAbility: "R — Death Mark" },
    { championId: "Pyke", reason: "Burst execute punishes her squishiness before notes stack.", keyAbility: "Q — Bone Skewer" },
  ],
  Sona: [
    { championId: "Pyke", reason: "Burst execute punishes her fragile positioning before auras matter.", keyAbility: "Q — Bone Skewer" },
    { championId: "Blitzcrank", reason: "Hook engage skips her poke-and-aura playstyle.", keyAbility: "Q — Rocket Grab" },
  ],
  Soraka: [
    { championId: "Pyke", reason: "Execute threshold ignores her sustain healing.", keyAbility: "Q — Bone Skewer" },
    { championId: "Blitzcrank", reason: "Hook punishes her lack of escape from range.", keyAbility: "Q — Rocket Grab" },
  ],
  TahmKench: [
    { championId: "Morgana", reason: "Black Shield stops his devour-and-combo engage.", keyAbility: "E — Black Shield" },
    { championId: "Pyke", reason: "Burst execute finishes his ally-swallow target before Tahm can save them.", keyAbility: "R — Death from Below" },
  ],
  Taric: [
    { championId: "Morgana", reason: "Black Shield negates his stun-and-heal engage.", keyAbility: "E — Black Shield" },
    { championId: "Pyke", reason: "Burst execute punishes him before his shield cooldown resets.", keyAbility: "Q — Bone Skewer" },
  ],
  Thresh: [
    { championId: "Morgana", reason: "Black Shield negates his hook and lantern engage.", keyAbility: "E — Black Shield" },
    { championId: "Janna", reason: "Disengage and shields undo his pick potential.", keyAbility: "R — Monsoon" },
  ],
  Yuumi: [
    { championId: "Pyke", reason: "Can target and kill her carrier even while she's attached.", keyAbility: "Q — Bone Skewer" },
    { championId: "Leona", reason: "Hard engage overwhelms her passive playstyle.", keyAbility: "E — Zenith Blade" },
  ],
  Zilean: [
    { championId: "Zed", reason: "Burst assassin punishes his lack of personal escape early.", keyAbility: "R — Death Mark" },
    { championId: "Pyke", reason: "Burst execute punishes him before his revive bomb matters.", keyAbility: "Q — Bone Skewer" },
  ],
  Zyra: [
    { championId: "Pyke", reason: "Burst execute punishes her fragile positioning before seeds bloom.", keyAbility: "Q — Bone Skewer" },
    { championId: "Rengar", reason: "Stealth engage skips her plant-zoning entirely.", keyAbility: "R — Thrill of the Hunt" },
  ],

  // ---- Additional roster fill-ins ----
  Ambessa: [
    { championId: "Poppy", reason: "Stun interrupts her dash-and-slam combo.", keyAbility: "E — Heroic Charge" },
    { championId: "Gnar", reason: "Kite and range deny her all-in engage.", keyAbility: "E — Hyper" },
  ],
  AurelionSol: [
    { championId: "Zed", reason: "Burst assassin closes the gap before his star orbit deals real damage.", keyAbility: "R — Death Mark" },
    { championId: "Yasuo", reason: "Wind Wall blocks his signature ranged breath.", keyAbility: "W — Wind Wall" },
  ],
  Brand: [
    { championId: "Yasuo", reason: "Wind Wall blocks his key ignite-chain projectile.", keyAbility: "W — Wind Wall" },
    { championId: "Zed", reason: "Burst assassin closes the gap before his stun-chain combo lands.", keyAbility: "R — Death Mark" },
  ],
  Diana: [
    { championId: "Lissandra", reason: "Root and burst outtrade her before she can engage.", keyAbility: "E — Glacial Path" },
    { championId: "Kayle", reason: "Ranged scaling out-damages her all-in.", keyAbility: "Q — Radiant Blast" },
  ],
  Fizz: [
    { championId: "Lissandra", reason: "Root punishes his all-in jump before it lands.", keyAbility: "E — Glacial Path" },
    { championId: "Diana", reason: "Matches his burst and mobility trade for trade.", keyAbility: "R — Moonfall" },
  ],
  Lillia: [
    { championId: "Zed", reason: "Burst assassin closes the gap before her sleep-stun combo lands.", keyAbility: "R — Death Mark" },
    { championId: "Rammus", reason: "Armor and taunt blunt her sustained AoE damage.", keyAbility: "E — Frenzying Taunt" },
  ],
  Maokai: [
    { championId: "Renekton", reason: "Early lane aggression punishes his slow scaling.", keyAbility: "E — Slice and Dice" },
    { championId: "Vayne", reason: "Kiting avoids his root-and-engage combo.", keyAbility: "Q — Tumble" },
  ],
  Yasuo: [
    { championId: "Malzahar", reason: "Suppression bypasses his mobility and shield.", keyAbility: "R — Nether Grasp" },
    { championId: "Annie", reason: "Stun chain deletes him before Wind Wall matters.", keyAbility: "W — Incinerate" },
    { championId: "Diana", reason: "AoE burst punishes his low mobility resistance.", keyAbility: "R — Moonfall" },
  ],

  // ---- Referenced tanks / utility that also need entries as targets ----
  Malphite: [
    { championId: "Renekton", reason: "Early lane bullying punishes his slow scaling.", keyAbility: "E — Slice and Dice" },
    { championId: "Gnar", reason: "Kite and range deny his engage-reliant kit.", keyAbility: "E — Hyper" },
  ],
  MasterYi: [
    { championId: "Poppy", reason: "Stun interrupts his Highlander resets.", keyAbility: "E — Heroic Charge" },
    { championId: "Rammus", reason: "Taunt and armor shut down his true damage.", keyAbility: "E — Frenzying Taunt" },
  ],
  MonkeyKing: [
    { championId: "Malphite", reason: "Armor and knock-up interrupt his clone-decoy engage.", keyAbility: "R — Unstoppable Force" },
    { championId: "Poppy", reason: "Stun cancels his spin-and-smash combo.", keyAbility: "E — Heroic Charge" },
  ],
  Morgana: [
    { championId: "Pyke", reason: "Ranged hook outranges her root and bypasses her shield timing.", keyAbility: "Q — Bone Skewer" },
    { championId: "Nautilus", reason: "Guaranteed engage chain beats her single-target root.", keyAbility: "Q — Dredge Line" },
  ],
  Poppy: [
    { championId: "MasterYi", reason: "Sustained true damage bypasses her stun's short window.", keyAbility: "R — Highlander" },
    { championId: "Renekton", reason: "Early lane aggression punishes her passive scaling.", keyAbility: "E — Slice and Dice" },
  ],
  Rammus: [
    { championId: "MasterYi", reason: "True damage ignores his armor stacking.", keyAbility: "R — Highlander" },
    { championId: "Kindred", reason: "Ranged kiting avoids his taunt-and-roll engage.", keyAbility: "Q — Dance of Arrows" },
  ],
};

export function getCounters(championId: string): CounterEntry[] {
  return COUNTERS[championId] ?? [];
}
