import Markdoc from '@markdoc/markdoc';

type Prop = {
  body: string;
};

export function Markdown({ body }: Prop) {
  const ast = Markdoc.parse(body);
  const content = Markdoc.transform(ast);
  const rend = Markdoc.renderers.html(content);

  return <div dangerouslySetInnerHTML={{ __html: rend }} />;
}
