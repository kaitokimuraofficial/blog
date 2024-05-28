export function BlogHeader() {
  const key = import.meta.env.ENV_IMAGE_URL;

  return (
    <div>
      <p>Blog</p>
      <img src={`${key}/images/man-using-pc.svg`} />
    </div>
  );
}
