import { Component, ComponentProps, JSX, splitProps } from 'solid-js';
import { BannerData } from '../types';

type BannerProps = Omit<BannerData, '_type'>;

export const BannerComponent: Component<
    BannerProps & ComponentProps<'section'>
> = (props): JSX.Element => {
    const [mainProps, rest] = splitProps(props, ['bannerTitle', 'bannerText']);
    return (
        <section {...rest} class="banner">
            <h3>{mainProps.bannerTitle}</h3>
            <p>{mainProps.bannerText}</p>
        </section>
    );
};
