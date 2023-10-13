import { FooterData } from '../types';
import { Component, ComponentProps, JSX } from 'solid-js';

type FooterProps = Omit<FooterData, '_type'>;

export const FooterComponent: Component<
  FooterProps & ComponentProps<'footer'>
> = ({ footerLinks, ...rest }): JSX.Element => (
  <footer
    {...rest}
    class='footer'
  >
    {footerLinks.map((item, index) => (
      <a
        key={index}
        href={item.href}
      >
        {item.label}
      </a>
    ))}
  </footer>
);
