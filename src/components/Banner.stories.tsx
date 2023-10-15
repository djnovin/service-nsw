import type { Meta, StoryObj } from 'storybook-solidjs';

import { BannerComponent } from './Banner';

const meta = {
    title: 'Banner',
    component: BannerComponent,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof BannerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Banner: Story = {
    args: {
        bannerTitle: 'ACKNOWLEDGEMENT OF COUNTRY',
        bannerText:
            'We acknowledge the Traditional Custodians of NSW, and their continued connection to land, water and culture. We pay our respects to Elders past and present.'
    }
};
