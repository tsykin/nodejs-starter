import * as z from 'zod';

const serverEnv = {
	NODE_ENV: process.env.NODE_ENV,
	VITE_BASE_URL: process.env.VITE_BASE_URL,
};

export const serverEnvSchema = z.object({
	NODE_ENV: z.enum(['production', 'development']),
	VITE_BASE_URL: z.string(),
});

export const SERVER_ENV = serverEnvSchema.parse(serverEnv);
