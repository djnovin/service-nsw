import { SectionData } from '../types';
import { ComponentProps, Component, JSX, For } from 'solid-js';
import { Card } from './Card';

export const SectionComponent: Component<
    SectionData & ComponentProps<'section'>
> = (props): JSX.Element => {
    return (
        <section class="services" {...props}>
            {props.title && <h1 class="title">{props.title}</h1>}
            {props.cards && (
                <div>
                    <For each={props.cards}>
                        {(item) => (
                            <div class="wrapper">
                                <Card {...item} />
                            </div>
                        )}
                    </For>
                </div>
            )}
        </section>
    );
};
