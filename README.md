<p align="center">
  <img src="packages/blog-starter-kit/themes/enterprise/public/assets/images/AI05_Ryeo-Labs%20Artboard_3-01.png" alt="RYEO LABS Artwork" width="280" />
</p>

# RYEO LABS Frontend 

This repository contains the RYEO LABS frontend for a headless blog. It is a fork and customization of the original Hashnode "starter-kit" and provides RYEO LABS-specific styling, components, and deployment guidance.

**Important:** RYEO LABS uses Hashnode as the primary content host via Hashnode's public GraphQL APIs. This frontend consumes content from Hashnode; see the "APIs" section below for details and links.

## Live Demos 

Please note: The themes showcased in these demos have been heavily customized.

- [Personal theme](https://starter-diopgk410-hashnode-prod.vercel.app/blog)
- [Enterprise theme](https://hashnode.com/blog) (What RYEO LABS was based on)
- [Community theme example (Hashnode)](https://datazip.io/blog?utm_source=hashnode&utm_medium=github&utm_campaign=promotional)

## How to deploy

### Step 1 — Deploy to Vercel (recommended)

- Fork this repo (this repository is maintained by RYEO LABS; it is forked from the Hashnode starter-kit).
- Create a new project on Vercel and connect this repo.
- It's a monorepo: choose one of `packages/blog-starter-kit/themes/enterprise`, `packages/blog-starter-kit/themes/hashnode`, or `packages/blog-starter-kit/themes/personal` as the root directory while importing on Vercel.

  ![selecting the directory to deploy a monorepo](https://cdn.hashnode.com/res/hashnode/image/upload/v1698839884060/O8OoBML5v.PNG?auto=format)

- Choose `Next.js` as the framework preset.

Set the following environment variables (these point the frontend to your Hashnode-hosted content):

```
NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT=https://gql.hashnode.com
NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST=engineering.hashnode.com  # Change to your Hashnode publication host (e.g. handle.hashnode.dev)
NEXT_PUBLIC_BASE_URL=/blog  # Use if installing on a subpath; otherwise remove
NEXT_PUBLIC_MODE=production
```

Once deployed, visit the Vercel domain to check the site. Initially you may not see posts until `NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST` points at a valid Hashnode publication host.

### Step 2 — Optional: Subpath installation

Follow the original instructions in the upstream starter-kit if you need to host the blog under a subpath (rewrites, Cloudflare worker examples, etc.). This fork preserves those instructions where applicable.

### Step 3 — Enable Headless mode on Hashnode

Enable Headless mode in your Hashnode dashboard so Hashnode will treat your publication as headless and send readers directly to your frontend origin.

## Running Locally

- cd into either `packages/blog-starter-kit/themes/enterprise`, `packages/blog-starter-kit/themes/hashnode`, or `packages/blog-starter-kit/themes/personal`
- Copy `.env.example` to `.env.local`
- `pnpm install`
- `pnpm dev`

Visit http://localhost:3000

## APIs

This frontend consumes Hashnode's public GraphQL APIs as the content source. Useful links:

- Hashnode API Docs: https://apidocs.hashnode.com
- GraphQL Playground: https://gql.hashnode.com

## Pricing & Platform Notes

This project uses Hashnode's headless APIs. For details about Hashnode's offerings (free for individuals, enterprise options, and headless access), refer to Hashnode's official pages.

## Demo Videos

[![Headless Hashnode Demo — With Blog Starter Kit (Deployed to Vercel)](https://cdn.hashnode.com/res/hashnode/image/upload/v1697541065189/5ct0eFWIu.png?auto=format&w=500)](https://youtu.be/5Yuxoqohvrk)

## Community Themes

Community-contributed themes and demos are listed in the original project; this fork preserves references to community examples.

## Found an issue?

This fork is maintained by RYEO LABS. If you find an issue in this repository, please open an issue here. For problems specifically with the Hashnode platform or APIs, consult Hashnode's upstream support resources.

## Have feedback or need help?

- For issues with this RYEO LABS frontend: open an issue in this repository.
- For questions about Hashnode's platform or headless mode: see Hashnode docs and support.

Community & Support:

- Hashnode Docs & Support: https://hashnode.com
- Hashnode API Docs: https://apidocs.hashnode.com
- Hashnode Community Discord: https://discord.gg/qsAQfxX

Thank you to Hashnode for providing the headless APIs and platform that make this integration possible. This project is a fork and customization maintained by RYEO LABS.