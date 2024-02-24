/* Component */
import { HeaderLink, ImgComponent } from './headerLink';

export const Blog = () =>
  HeaderLink({ href: '/blog', target: '_top', content: <p>Blog</p> });

export const About = () =>
  HeaderLink({ href: '/about', target: '_top', content: <p>About</p> });

export const GH = () =>
  HeaderLink({
    href: 'https://github.com/kaitokimuraofficial',
    target: '_blank',
    content: ImgComponent('images/icons/github.svg'),
  });

export const LinkedIn = () =>
  HeaderLink({
    href: 'https://www.linkedin.com/in/kaito-kimura-03b88b21a/',
    target: '_blank',
    content: ImgComponent('images/icons/Linkedin.svg'),
  });
