import { exec } from 'child_process';
import { mkdir } from 'fs/promises';
import { join } from 'path';
import * as path from 'path';
import { promisify } from 'util';

import { ENV } from './lib/env';
import { formatDate, generateRandomNumber } from './lib/utils';

const now = new Date();
const formattedDate = formatDate(now, 'DD Month YYYY');
const env = process.env.NODE_ENV;
console.log(`Current timestamp: ${formattedDate}`);
const randomN = generateRandomNumber(4);
console.log(`Random number: ${randomN}`);
let test = 'test';
console.log(`Environment: ${ENV.NODE_ENV}`);
