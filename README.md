# Smoke & Sugar — Apple Pie with Bacon

A single-page recipe site: bourbon-caramel apples under a lattice of
maple-lacquered bacon. Server-rendered, animated, dark.

Built with [TanStack Start](https://tanstack.com/start) (React 19 + TanStack
Router), Tailwind CSS v4, Framer Motion for the reveals and Lenis for smooth
scrolling. The production build is a Nitro bundle targeting Cloudflare Workers.

## Development

Requires Node.js 20+. The lockfile is `bun.lock`, so [Bun](https://bun.sh) gives
the exact dependency versions; npm works too and resolves fresh ones.

```sh
bun install
bun run dev
```

The dev server prints its own URL.

## Checks

```sh
npx tsc --noEmit   # types
npm run lint       # eslint + prettier
npm run format     # write prettier fixes
```

## Build

```sh
npm run build
```

Output lands in `.output/`: the worker in `.output/server`, static assets in
`.output/public`. Note that `npx vite preview` does not work with the Nitro
build — to run the real worker locally:

```sh
cd .output && npx wrangler dev
```

Deploy the same output with `npx wrangler deploy` from `.output`, or
`npx nitro deploy --prebuilt` from the project root.

## Layout

```
src/routes/__root.tsx   document shell, site-wide meta, 404 and error pages
src/routes/index.tsx    the recipe page and its meta
src/components/         page sections — Hero, Story, Ingredients, Method, Serve
src/components/ui/      shadcn/ui primitives
src/lib/site-url.ts     resolves the request origin for absolute og:image URLs
public/og-image.jpg     1200x630 social share card
```
