export async function aboutLoader() {
  const response = await fetch('/api/health');
  const movies = await response.json();
  console.log('about');
  console.log(movies);
  return { movies };
}
