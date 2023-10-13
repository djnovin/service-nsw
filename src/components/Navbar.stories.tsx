import type { Meta, StoryObj } from 'storybook-solidjs';

import { NavComponent } from './Navbar';

const meta = {
  title: 'Footer',
  component: NavComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NavComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Navbar: Story = {
  args: {
    navItems: ['Home', 'About', 'Blog', 'Information'],
  },
};
