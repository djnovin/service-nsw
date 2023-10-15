import type { Meta, StoryObj } from 'storybook-solidjs';

import { SectionComponent } from './Section';
import { CardLabel } from '../types';
import { DefaultArrow } from './Icons';

const meta = {
    title: 'Section',
    component: SectionComponent,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof SectionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Banner: Story = {
    args: {
        title: 'Browse services',
        cards: [
            {
                label: CardLabel.BirthsRelationshipsDeaths,
                arrow: DefaultArrow
            },
            {
                label: CardLabel.BusinessIndustriesEmployment,
                arrow: DefaultArrow
            },
            {
                label: CardLabel.DrivingTransport,
                arrow: DefaultArrow
            }
        ]
    }
};
