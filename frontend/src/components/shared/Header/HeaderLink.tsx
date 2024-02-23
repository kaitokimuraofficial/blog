/* Library */
import styled from 'styled-components';

type Props = {
  href?: string;
  target: 'blank' | 'self';
  content: JSX.Element;
};

export function HeaderLink({ href, target, content }: Props) {
  return (
    <A href={href} target={target}>
      {content}
    </A>
  );
}

export function ImgComponent(src: string) {
  return <Img src={src} />;
}

const Img = styled.img`
  height: 25px;
  width: 25px;
`;

const A = styled.a`
  color: #808080;
  font-weight: bold;

  :hover {
    color: white;
    cursor: pointer;
  }
`;
