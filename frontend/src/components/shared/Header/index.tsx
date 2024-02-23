/* Library */
import styled from 'styled-components';

/* Component */
import { HeaderLink, ImgComponent } from './HeaderLink';

export const Blog = () => HeaderLink({ target: 'self', content: <p>Blog</p> });

export const About = () =>
  HeaderLink({ target: 'self', content: <p>About</p> });

export const GH = () =>
  HeaderLink({
    href: 'https://github.com/kaitokimuraofficial',
    target: 'blank',
    content: ImgComponent('images/icons/Linkedin.svg'),
  });

export const LinkedIn = () =>
  HeaderLink({
    href: 'https://www.linkedin.com/in/kaito-kimura-03b88b21a/',
    target: 'blank',
    content: ImgComponent('images/icons/Linkedin.svg'),
  });
