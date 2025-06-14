import { exec } from 'child_process';
import { mkdir } from 'fs/promises';
import { join } from 'path';
import * as path from 'path';
import { promisify } from 'util';

import { ENV } from './lib/env';
import { formatDate, generateRandomNumber } from './lib/utils';

const now = new Date();
const formattedDate = formatDate(now, 'DD Month YYYY');
const randomN = generateRandomNumber(1, 100);
console.log(`Environment: ${ENV.NODE_ENV}`);
console.log(`Current timestamp: ${formattedDate}`);
console.log(`Random number: ${randomN}`);
