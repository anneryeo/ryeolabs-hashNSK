# RYEO LABS

Custom Next.js website with Hashnode CMS integration for content management.

## 🚀 Features

- **Custom Landing Page** - Fully customized RYEO LABS branded homepage
- **Blog Integration** - Content managed through Hashnode's editor
- **Headless CMS** - Hashnode provides content via GraphQL API
- **Full Customization** - Complete control over frontend design and functionality
- **Type-Safe** - Built with TypeScript
- **Responsive Design** - Mobile-first approach with Tailwind CSS

## 🛠️ Tech Stack

- **Framework:** Next.js 13
- **Styling:** Tailwind CSS
- **CMS:** Hashnode (Headless Mode)
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Deployment:** Vercel

## 📁 Project Structure

```
ryeolabs-hashNSK/
├── packages/
│   ├── blog-starter-kit/
│   │   └── themes/
│   │       └── enterprise/          # Main application
│   │           ├── components/       # React components
│   │           ├── pages/            # Next.js pages
│   │           │   ├── index.tsx     # Custom landing page
│   │           │   └── blog/         # Blog routes
│   │           ├── styles/           # Global styles
│   │           └── .env.local        # Environment variables
│   └── utils/                        # Shared utilities
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

1. Clone the repository
```bash
git clone https://github.com/anneryeo/ryeolabs-hashNSK.git
cd ryeolabs-hashNSK
```

2. Install dependencies
```bash
pnpm install
```

3. Set up environment variables

Create `.env.local` in `packages/blog-starter-kit/themes/enterprise/`:

```env
NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT=https://gql.hashnode.com
NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST=ryeolabs.vercel.app
NEXT_PUBLIC_MODE=development
```

4. Run the development server
```bash
cd packages/blog-starter-kit/themes/enterprise
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## 📝 Content Management

Content is managed through [Hashnode](https://hashnode.com) in headless mode:

1. Write and publish posts in Hashnode dashboard
2. Content is fetched via GraphQL API
3. Posts appear automatically on your site at `/blog`

## 🚢 Deployment

The site is deployed on Vercel with automatic deployments from the `main` branch.

**Production URL:** [https://ryeolabs.vercel.app](https://ryeolabs.vercel.app)

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Set the root directory to: `packages/blog-starter-kit/themes/enterprise`
3. Framework preset: Next.js
4. Add environment variables (same as `.env.local`)
5. Deploy!

## 🎨 Customization

- **Landing Page:** Edit `pages/index.tsx`
- **Blog Layout:** Modify `pages/blog/index.tsx`
- **Styling:** Update Tailwind config in `tailwind.config.js`
- **Components:** All reusable components in `components/`
- **Fonts:** Configured in `pages/_document.tsx`

## 📄 License

MIT License - feel free to use this project as a template for your own site.

## 🔗 Links

- **Website:** [ryeolabs.vercel.app](https://ryeolabs.vercel.app)
- **Repository:** [github.com/anneryeo/ryeolabs-hashNSK](https://github.com/anneryeo/ryeolabs-hashNSK)

---

Built with ❤️ by RYEO LABS
