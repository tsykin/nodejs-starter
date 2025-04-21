import { exampleFunction } from './lib/example';

// Allow running specific functions from the command line
const arg = process.argv[2];

switch (arg) {
  case 'example':
    exampleFunction().catch((err) => {
      console.error('Error:', err);
      process.exit(1);
    });
    break;
  default:
    console.error('Available commands:');
    console.error('example  - Run the example function');
    process.exit(1);
}
