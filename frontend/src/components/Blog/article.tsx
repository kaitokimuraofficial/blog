type Prop = {
  title: string;
  body: string;
};

export function Article({ title, body }: Prop) {
  return (
    <>
      <h1>{title}</h1>
      <div>{body}</div>
    </>
  );
}
