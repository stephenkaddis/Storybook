import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';
import './Card.css';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a simple card component with a title and description.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Beautiful Landscape',
    description: 'A stunning view of mountains and lakes.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Product Card',
    description: 'This card includes a footer with action buttons.',
    footer: (
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <Button label="Cancel" size="small" />
        <Button label="Buy Now" size="small" primary />
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    description: 'This card has an elevated shadow effect.',
    variant: 'elevated',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    description: 'This card has a colored border outline.',
    variant: 'outlined',
  },
};
