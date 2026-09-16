// Primary role per champion, used to flag when a suggested counter duplicates
// a role your team has already picked. Riot's API doesn't expose role either —
// this is a hand-curated approximation of common primary role, not a hard rule
// (most champions can flex into a second role).

export type Role = "Top" | "Jungle" | "Mid" | "ADC" | "Support";

export const ROLES: Record<string, Role> = {
  Aatrox: "Top", Ahri: "Mid", Akali: "Mid", Akshan: "Mid", Alistar: "Support",
  Ambessa: "Top", Amumu: "Jungle", Anivia: "Mid", Annie: "Mid", Aphelios: "ADC",
  Ashe: "ADC", AurelionSol: "Mid", Aurora: "Mid", Azir: "Mid", Bard: "Support",
  Belveth: "Jungle", Blitzcrank: "Support", Brand: "Support", Braum: "Support",
  Briar: "Jungle", Caitlyn: "ADC", Camille: "Top", Cassiopeia: "Mid",
  Chogath: "Top", Corki: "Mid", Darius: "Top", Diana: "Jungle", DrMundo: "Top",
  Draven: "ADC", Ekko: "Mid", Elise: "Jungle", Evelynn: "Jungle", Ezreal: "ADC",
  Fiddlesticks: "Jungle", Fiora: "Top", Fizz: "Mid", Galio: "Mid",
  Gangplank: "Top", Garen: "Top", Gnar: "Top", Gragas: "Jungle", Graves: "Jungle",
  Gwen: "Top", Hecarim: "Jungle", Heimerdinger: "Mid", Hwei: "Mid",
  Illaoi: "Top", Irelia: "Top", Ivern: "Jungle", Janna: "Support",
  JarvanIV: "Jungle", Jax: "Top", Jayce: "Top", Jhin: "ADC", Jinx: "ADC",
  KSante: "Top", Kaisa: "ADC", Kalista: "ADC", Karma: "Support", Karthus: "Jungle",
  Kassadin: "Mid", Katarina: "Mid", Kayle: "Top", Kayn: "Jungle", Kennen: "Top",
  Khazix: "Jungle", Kindred: "Jungle", Kled: "Top", KogMaw: "ADC",
  Leblanc: "Mid", LeeSin: "Jungle", Leona: "Support", Lillia: "Jungle",
  Lissandra: "Mid", Lucian: "ADC", Lulu: "Support", Lux: "Mid", Malphite: "Top",
  Malzahar: "Mid", Maokai: "Top", MasterYi: "Jungle", Mel: "Mid", Milio: "Support",
  MissFortune: "ADC", MonkeyKing: "Top", Mordekaiser: "Top", Morgana: "Support",
  Naafiri: "Mid", Nami: "Support", Nasus: "Top", Nautilus: "Support",
  Neeko: "Mid", Nidalee: "Jungle", Nilah: "ADC", Nocturne: "Jungle", Nunu: "Jungle",
  Olaf: "Jungle", Orianna: "Mid", Ornn: "Top", Pantheon: "Support", Poppy: "Top",
  Pyke: "Support", Qiyana: "Mid", Quinn: "Top", Rakan: "Support", Rammus: "Jungle",
  RekSai: "Jungle", Rell: "Support", Renata: "Support", Renekton: "Top",
  Rengar: "Jungle", Riven: "Top", Rumble: "Top", Ryze: "Mid", Samira: "ADC",
  Sejuani: "Jungle", Senna: "Support", Seraphine: "Support", Sett: "Top",
  Shaco: "Jungle", Shen: "Top", Shyvana: "Jungle", Singed: "Top", Sion: "Top",
  Sivir: "ADC", Skarner: "Jungle", Smolder: "ADC", Sona: "Support", Soraka: "Support",
  Swain: "Support", Sylas: "Mid", Syndra: "Mid", TahmKench: "Support",
  Taliyah: "Jungle", Talon: "Mid", Taric: "Support", Teemo: "Top", Thresh: "Support",
  Tristana: "ADC", Trundle: "Jungle", Tryndamere: "Top", TwistedFate: "Mid",
  Twitch: "ADC", Udyr: "Jungle", Urgot: "Top", Varus: "ADC", Vayne: "ADC",
  Veigar: "Mid", Velkoz: "Support", Vex: "Mid", Vi: "Jungle", Viego: "Jungle",
  Viktor: "Mid", Vladimir: "Mid", Volibear: "Jungle", Warwick: "Jungle",
  Xayah: "ADC", Xerath: "Mid", XinZhao: "Jungle", Yasuo: "Mid", Yone: "Mid",
  Yorick: "Top", Yunara: "ADC", Yuumi: "Support", Zac: "Jungle", Zed: "Mid",
  Zeri: "ADC", Ziggs: "Mid", Zilean: "Support", Zoe: "Mid", Zyra: "Support",
};

export function getRole(championId: string): Role | undefined {
  return ROLES[championId];
}
