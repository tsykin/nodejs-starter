import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
	server: {
		port: 3000,
	},
	plugins: [
		tsConfigPaths(),
		// Enable Nitro only in production builds to avoid dev server timeout
		...(mode === 'production' ? [nitro()] : []),
	],
}));
