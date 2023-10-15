import { CardData } from '../types';
// import { DefaultArrow } from './Icons';
import { Component, ComponentProps } from 'solid-js';

export const Card: Component<CardData & ComponentProps<'button'>> = (props) => {
    return (
        <button class="card" {...props}>
            {props.icon && <div class="icon">{props.icon}</div>}
            <p class="text">{props.label}</p>
            {props.arrow && <div class="arrow">{props.arrow}</div>}
        </button>
    );
};
