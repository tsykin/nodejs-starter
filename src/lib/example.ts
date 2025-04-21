export function exampleFunction(): Promise<boolean> {
  try {
    console.log('This is an example function that waits for 5 seconds.');
    setTimeout(() => {}, 5000);
    return Promise.resolve(true);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
    return Promise.resolve(false);
  }
}
