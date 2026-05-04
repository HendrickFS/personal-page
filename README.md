# Personal Portfolio Page

A modern, responsive personal portfolio website built with React, TypeScript, and Vite.

## Features

- **Home Page**: Introduction and personal overview.
- **Experience**: Timeline of professional history and roles.
- **Projects**: Showcase of personal and professional projects.
- **Dynamic Project Details**: Markdown-powered individual project pages.
- **Smooth Animations**: Interactive and fluid UI using Framer Motion.
- **Responsive Design**: Mobile-friendly layout using Ant Design.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling & UI Components**: [Ant Design](https://ant.design/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Content Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory (if you haven't already):
   ```bash
   cd personal-page
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` (or the port specified by Vite).

## Project Structure

- `src/pages/`: Contains the main route components (`Home.tsx`, `Experience.tsx`, `Projects.tsx`, `ProjectDetail.tsx`).
- `src/components/`: Reusable UI components, including the main `Layout`.
- `src/content/`: Markdown files used for dynamic content, such as project details.
- `src/App.tsx`: Main application router setup.

## Building for Production

To create an optimized production build, run:
```bash
npm run build
```

This will compile TypeScript and generate a `dist` folder with static assets ready for deployment.
