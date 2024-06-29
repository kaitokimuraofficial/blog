export async function BlogsLoader() {
  const response = await fetch('/api/articles');
  const articles = await response.json();
  return articles;
}
