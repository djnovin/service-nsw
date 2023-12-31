import type { Meta, StoryObj } from 'storybook-solidjs';

import { Card } from './Card';
import { DefaultArrow } from './Icons';
import { CardLabel } from '../types';

const meta = {
    title: 'Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: CardLabel.DrivingTransport,
        arrow: <DefaultArrow />
    }
};
