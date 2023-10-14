import { NavData } from '../types'
import { Component, ComponentProps, createSignal, For } from 'solid-js'

type NavProps = Omit<NavData, '_type'>

export const NavComponent: Component<NavProps & ComponentProps<'nav'>> = (
    props
) => {
    const { navItems, ...rest } = props

    const [menu, setMenu] = createSignal<boolean>(false)

    return (
        <nav class="nav" {...rest}>
            <button class="hamburger-wrapper" onClick={() => setMenu(true)}>
                Open Menu
            </button>

            {menu() === true && (
                <div class="fullscreen-menu">
                    <button onClick={() => setMenu(false)}>Close Menu</button>

                    <For each={navItems}>
                        {(item) => <a href="#">{item}</a>}
                    </For>
                </div>
            )}
        </nav>
    )
}
