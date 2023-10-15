import type { Meta, StoryObj } from 'storybook-solidjs';

import { FooterComponent } from './Footer';

const meta = {
    title: 'Footer',
    component: FooterComponent,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof FooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {
    args: {
        footerLinks: [
            {
                label: 'About Us',
                href: '#'
            }
        ]
    }
};
