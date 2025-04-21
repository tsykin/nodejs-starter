export function exampleFunction(): Promise<boolean> {
  try {
    setTimeout(() => {}, 2000);
    console.log('This is an example function.');
    return Promise.resolve(true);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
    return Promise.resolve(false);
  }
}
