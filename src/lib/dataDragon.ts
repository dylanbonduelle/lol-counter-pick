const DDRAGON_BASE = "https://ddragon.leagueoflegends.com";

export interface ChampionSummary {
  id: string;
  key: string;
  name: string;
  title: string;
  tags: string[];
  image: string;
}

let cachedVersion: string | null = null;

export async function getLatestVersion(): Promise<string> {
  if (cachedVersion) return cachedVersion;
  const res = await fetch(`${DDRAGON_BASE}/api/versions.json`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Failed to fetch Data Dragon versions: ${res.status}`);
  const versions: string[] = await res.json();
  cachedVersion = versions[0];
  return cachedVersion;
}

export async function getChampions(): Promise<ChampionSummary[]> {
  const version = await getLatestVersion();
  const res = await fetch(
    `${DDRAGON_BASE}/cdn/${version}/data/en_US/champion.json`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error(`Failed to fetch champion list: ${res.status}`);
  const json = await res.json();
  const champions: ChampionSummary[] = Object.values(json.data).map((c: any) => ({
    id: c.id,
    key: c.key,
    name: c.name,
    title: c.title,
    tags: c.tags,
    image: `${DDRAGON_BASE}/cdn/${version}/img/champion/${c.image.full}`,
  }));
  return champions.sort((a, b) => a.name.localeCompare(b.name));
}
