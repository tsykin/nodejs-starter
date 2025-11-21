# Node.js TypeScript Starter

A modern Node.js starter template with TypeScript support.

## Features

- 🚀 TypeScript 5
- 📦 ESM support
- ✨ Biome (linter + formatter)
- 🐋 Docker support
- 🪝 Git hooks with Husky
- 📝 Lint-staged for pre-commit checks
- 🏃 Fast development with tsx
- 🛠️ Production builds with Vite + Nitro
- 💾 Linting and formatting on save

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run index` - Run the main script once (no watch mode)
- `npm run lint` - Lint code
- `npm run format` - Format code
- `npm run check` - Check code (lint + format)
- `npm run fix` - Fix lint and format issues
- `npm run typecheck` - Check types and run biome checks
- `npm run prepare` - Set up Git hooks

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory (if needed)
4. Run `npm run prepare` to set up Git hooks
5. Start development server: `npm run dev`

## Notes

### lint-staged

The project uses Biome for linting and formatting. The lint-staged configuration runs:
- Biome check (lint + format) on all staged files
- TypeScript type checking (full project check) for TypeScript files

The typecheck is wrapped in `bash -c` because `tsc` isn't designed to typecheck only staged files. This runs a full typecheck without `lint-staged` appending file names.

### Import sorting

Biome automatically organizes imports. Import sorting is enabled in `.vscode/settings.json` via:
- `source.organizeImports.biome: "explicit"` - Organizes imports on save
- `source.fixAll.biome: "explicit"` - Applies all Biome fixes on save

### Absolute imports

The project uses absolute imports with the `@/` alias. Relative imports are restricted by Biome configuration. Always use:
- `@/` for imports from `src/` directory
- `@root/` for imports from the root directory
