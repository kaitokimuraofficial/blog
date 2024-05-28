/* Library */
import styled from 'styled-components';

type Props = {
  href?: string;
  target: '_blank' | '_top';
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
  height: 3.2rem;
  width: 3.2rem;

  @media (max-width: 600px) {
    height: 6.4rem;
    width: 6.4rem;
  }
`;

const A = styled.a`
  color: #808080;
  font-weight: bold;
  font-size: 1.5rem;
  :hover {
    color: var(--bs-white);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
