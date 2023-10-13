import { Component, ComponentProps, JSX } from 'solid-js';
import { BannerData } from '../types';

type BannerProps = Omit<BannerData, '_type'>;

export const BannerComponent: Component<
  BannerProps & ComponentProps<'section'>
> = ({ bannerTitle, bannerText, ...rest }): JSX.Element => (
  <section
    {...rest}
    class='banner'
  >
    <h3>{bannerTitle}</h3>
    <p>{bannerText}</p>
  </section>
);
