# LoL Counter-Pick

Pick your opponent's League of Legends champion and get a recommended counter-pick.

## Data sources

- **Champion roster, portraits, titles** — [Riot Data Dragon](https://developer.riotgames.com/docs/lol#data-dragon), fetched live, no API key required.
- **Counter-pick matchups** — `src/data/counters.ts`, a hand-curated starter set. Riot's API has no matchup/counter-pick endpoint (it only exposes static champion data and raw match history), so this is community lane-matchup knowledge rather than live win-rate stats. Expect drift from the current patch — extend the `COUNTERS` map as needed.

A `RIOT_API_KEY` env var is wired up (`.env.local`) for future features that need Riot's live APIs (e.g. looking up a real match or summoner), even though the current MVP doesn't call an authenticated endpoint yet.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Deployed on Vercel
