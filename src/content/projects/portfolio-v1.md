---
id: portfolio-v1
title: Portfolio V1
tech: React, Vite, Framer Motion
description: My personal developer portfolio simulating a Linux environment.
date: 2024-03-22
---
# Portfolio V1

This is my developer portfolio, designed to look like a modern tiling window manager setup, inspired by Linux "ricing" themes.

### Features
- Fully responsive design using **Ant Design** components.
- Clean terminal aesthetic removing all bloat.
- Written in TypeScript using **React 19** and **Vite**.
- Completely data-driven via Markdown files for easy updates!

### Tech Stack
- Frontend Framework: \`React 19\`
- Build Tool: \`Vite\`
- UI Library: \`Ant Design v5\`
- Animations: \`Framer Motion\`
- Icons: \`Lucide React\`

### Code Example
Here is the core logic that parses these Markdown files automatically:
\`\`\`typescript
const loadProject = async () => {
  const mdFiles = import.meta.glob('../content/projects/*.md', { query: '?raw', import: 'default' });
  const rawContent = await mdFiles['path/to/file']() as string;
  const { metadata, content } = parseMD(rawContent);
}
\`\`\`
