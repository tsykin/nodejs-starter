import 'dotenv/config';

// Run using command
// npx tsx src/scripts/example.ts

export async function main() {
	console.log('Running script');
	console.log(`Example script.`);
}

main().catch((error) => {
	console.error('Failed to run script.');
	console.error(error);
	process.exit(1);
});
