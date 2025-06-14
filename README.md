# Node.js TypeScript Starter

A modern Node.js starter template with TypeScript support.

## Features

- 🚀 TypeScript 5
- 📦 ESM support
- ✨ ESLint 9 + Prettier
- 🐋 Docker support
- 🪝 Git hooks with Husky
- 📝 Lint-staged for pre-commit checks
- 🏃 Fast development with tsx
- 🛠️ Production builds with tsc
- 💾 Linting on save

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Fix lint issues
- `npm run lint:fix` - Fix lint issues
- `npm run format` - Format code
- `npm run format:check` - Check code formatting
- `npm run typecheck` - Check types
- `npm run example` - Example of running a specific function instead of watching for changes

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory (see `.env.example` for available variables)
4. Run `npm run prepare` to set up Git hooks
5. Start development server: `npm run dev`

## Notes

### lint-staged

Upon adding additional dependencies, you may need to change lint-staged config to following:

```json
"lint-staged": {
    "*.{ts,tsx}": [
     "bash -c 'npm run typecheck'"
    ],
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
```

Reason: `tsc` isn’t designed to typecheck only staged files. Wrapping it in `bash -c` runs a full typecheck without `lint-staged` appending file names.

### import sorting

Current implementation uses `eslint-plugin-import-x` esling plugin. It will automatically sort imports when running precommit hook. In order to sort imports on save, uncomment this line in `.vscode/settings.json`:

```json
...
 // "source.organizeImports": "explicit",
 ...
```
