import { SectionData } from '../types'
import { ComponentProps, Component, JSX } from 'solid-js'
import { Card } from './Card'

export const SectionComponent: Component<
    SectionData & ComponentProps<'section'>
> = (props): JSX.Element => {
    const { title, cards, ...rest } = props

    return (
        <section class="services" {...rest}>
            {title && <h1 class="title">{title}</h1>}
            {cards && (
                <div>
                    {cards.map((item, index) => (
                        <div class="wrapper" key={index}>
                            <Card {...item} />
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}
