import { For, createSignal } from 'solid-js';
import './HeroWithSearch.modules.scss';
import cn from 'classnames';
import { ChevronRight } from './Icons';

export const HeroWithSearch = () => {
    const [open, setOpen] = createSignal<boolean>(false);

    const links = [
        {
            href: '#',
            label: 'Renew rego'
        },
        {
            href: '#',
            label: 'Renew rego'
        },
        {
            href: '#',
            label: 'Renew rego'
        },
        {
            href: '#',
            label: 'Renew rego'
        },
        {
            href: '#',
            label: 'Renew rego'
        },
        {
            href: '#',
            label: 'Renew rego'
        }
    ];

    return (
        <div
            class={cn('hero-wrapper', {
                [cn('bg-when-active')]: open() === true,
                [cn('bg-when-inactive')]: open() === false
            })}
        >
            <div
                class={cn('nested-wrapper')}
                onClick={() => setOpen((prev) => !prev)}
            >
                <h1
                    class={cn({
                        [cn('text-when-active')]: open() === true,
                        [cn('text-when-inactive')]: open() === false
                    })}
                >
                    Popular Pages
                </h1>
                <ChevronRight
                    class={cn('chevron', {
                        [cn('chevron-when-active')]: open() === true,
                        [cn('chevron-when-inactive')]: open() === false
                    })}
                />
            </div>
            {open() === true && (
                <div class={cn('nested-grid')}>
                    <For each={links}>
                        {(link) => (
                            <div>
                                <a href={link.href}>{link.label}</a>
                            </div>
                        )}
                    </For>
                </div>
            )}
        </div>
    );
};
