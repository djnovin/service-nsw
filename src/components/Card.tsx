import { CardData } from '../types'
import { DefaultArrow } from './Icons'
import { Component, ComponentProps, JSX } from 'solid-js'

export const Card: Component<CardData & ComponentProps<'button'>> = (
    props
): JSX.Element => {
    const { icon, label, arrow = DefaultArrow, ...rest } = props

    return (
        <button class="card" {...rest}>
            {icon && <div class="icon">{icon}</div>}
            <p class="text">{label}</p>
            {arrow && <div class="arrow">{arrow}</div>}
        </button>
    )
}
