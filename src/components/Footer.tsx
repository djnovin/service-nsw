import { FooterData } from '../types';
import { Component, ComponentProps, For, JSX, splitProps } from 'solid-js';

type FooterProps = Omit<FooterData, '_type'>;

export const FooterComponent: Component<
    FooterProps & ComponentProps<'footer'>
> = (_props): JSX.Element => {
    const [props, rest] = splitProps(_props, ['footerLinks']);
    return (
        <footer {...rest} class="footer">
            <For each={props.footerLinks}>
                {(item) => <a href={item.href}>{item.label}</a>}
            </For>
        </footer>
    );
};
