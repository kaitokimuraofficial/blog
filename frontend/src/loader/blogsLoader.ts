export async function blogsLoader() {
  const response = await fetch('/api/articles');
  const articles = await response.json();
  return articles;
}
