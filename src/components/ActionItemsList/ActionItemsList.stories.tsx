import type { Meta, StoryObj } from '@storybook/react';
import { ActionItemsList } from './ActionItemsList';
import type { ActionItem } from './ActionItemsList';
import { useState } from 'react';
import './ActionItemsList.css';

const meta = {
  title: 'AI Meeting Tool/ActionItemsList',
  component: ActionItemsList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ActionItemsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems: ActionItem[] = [
  {
    id: '1',
    text: 'Update product roadmap with prioritized features',
    assignee: 'Emily Rodriguez',
    dueDate: 'Jan 20, 2024',
    status: 'pending',
    priority: 'high',
  },
  {
    id: '2',
    text: 'Schedule follow-up meeting for next week',
    assignee: 'Sarah Chen',
    dueDate: 'Jan 18, 2024',
    status: 'in-progress',
    priority: 'medium',
  },
  {
    id: '3',
    text: 'Review customer feedback and create report',
    assignee: 'David Kim',
    dueDate: 'Jan 22, 2024',
    status: 'pending',
    priority: 'low',
  },
  {
    id: '4',
    text: 'Finalize Q4 budget proposal',
    assignee: 'Mike Johnson',
    dueDate: 'Jan 16, 2024',
    status: 'completed',
    priority: 'high',
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const HideCompleted: Story = {
  args: {
    items: sampleItems,
    showCompleted: false,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [items, setItems] = useState(sampleItems);
    
    const handleToggle = (id: string) => {
      setItems(items.map(item => 
        item.id === id 
          ? { ...item, status: item.status === 'completed' ? 'pending' : 'completed' }
          : item
      ));
    };

    return <ActionItemsList {...args} items={items} onToggleComplete={handleToggle} />;
  },
};
