import { FooterData } from '../types'
import { Component, ComponentProps, For, JSX } from 'solid-js'

type FooterProps = Omit<FooterData, '_type'>

export const FooterComponent: Component<
    FooterProps & ComponentProps<'footer'>
> = ({ footerLinks, ...rest }): JSX.Element => (
    <footer {...rest} class="footer">
        <For each={footerLinks}>
            {(item) => <a href={item.href}>{item.label}</a>}
        </For>
    </footer>
)
