// import { exec } from 'child_process';
// import { mkdir } from 'fs/promises';
// import * as path from 'path';
// import { join } from 'path';
// import { promisify } from 'util';
import { CLIENT_ENV } from '@/shared/env.client';
import { formatDate, generateRandomNumber } from '@/shared/utils';

const now = new Date();
const formattedDate = formatDate(now, 'DD Month YYYY');
const randomN = generateRandomNumber(1, 100);
console.log(`Environment: ${CLIENT_ENV.VITE_BASE_URL}`);
console.log(`Current timestamp: ${formattedDate}`);
console.log(`Random number: ${randomN}`);
