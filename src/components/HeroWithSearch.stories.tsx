import type { Meta, StoryObj } from 'storybook-solidjs';

import { HeroWithSearch } from './HeroWithSearch';

const meta = {
    title: 'Hero With Search',
    component: HeroWithSearch,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof HeroWithSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
    args: {}
};
