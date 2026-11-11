# MacDonald Highlands Homes

Luxury realtor website for **MacDonald Highlands** (Henderson, NV) by **Dr. Jan Duffy** — Homes by Dr. Jan Duffy.

**Production:** [https://www.macdonaldhighlandshomes.com](https://www.macdonaldhighlandshomes.com)  
**Primary sitemap:** [https://www.macdonaldhighlandshomes.com/sitemap.xml](https://www.macdonaldhighlandshomes.com/sitemap.xml)

## App location

The live Next.js 15 App Router site lives in **`regency-site/`**. Root `package.json` scripts proxy into that folder. Vercel builds from this repository with `npm run build`.

```bash
npm run dev      # local: http://localhost:3000
npm run build    # production build
npm run lint
```

Brand mark: **MacDonald Highlands** with subtext **Homes by Dr. Jan Duffy**. Site config: `regency-site/config/siteConfig.js`.

## Git workflow (luxury site)

| Branch | Role |
|--------|------|
| `main` | Production. Deploys to Vercel. Keep green. |
| `cursor/<topic>-####` | Short-lived feature branches. Open a PR into `main`. |

**Do**

- Branch from an up-to-date `main`: `git checkout main && git pull && git checkout -b cursor/<topic>-####`
- One concern per PR (SEO, imagery, Fair Housing copy, analytics)
- Delete the remote feature branch after merge
- Keep secrets out of git (`.env*`, keys, tokens)

**Don’t**

- Commit on a merged feature branch that already equals `main`
- Leave stale local `main` behind `origin/main`
- Commit `.next/`, `node_modules/`, or Search Console `.xlsx` exports

### Sync after pull

```bash
git checkout main
git pull origin main
git fetch --prune
git branch -d <merged-local-branch>   # if still present
```

## Repository layout

```
├── regency-site/          # Next.js marketing site (source of truth)
├── package.json           # root scripts → regency-site
├── vercel.json            # Vercel build entry
└── README.md              # this file
```

Historical ThemeWagon / Nextra template leftovers are not the product surface — ship changes only under `regency-site/` unless updating root deploy config.
