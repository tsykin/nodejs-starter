import * as z from 'zod';

const clientEnv = {
	VITE_BASE_URL: import.meta.env.VITE_BASE_URL,
};

export const clientEnvSchema = z.object({
	VITE_BASE_URL: z.string().url().default('http://localhost:3000'),
});

export const CLIENT_ENV = clientEnvSchema.parse(clientEnv);
