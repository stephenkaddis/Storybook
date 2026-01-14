import type { Meta, StoryObj } from '@storybook/react';
import { Insights } from './Insights';
import type { Insight } from './Insights';
import './Insights.css';

const meta = {
  title: 'AI Meeting Tool/Insights',
  component: Insights,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Insights>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleInsights: Insight[] = [
  {
    id: '1',
    type: 'decision',
    title: 'Approved Q4 budget increase',
    description: 'Team agreed to increase marketing budget by 20% for Q4 campaign',
    participants: ['Sarah Chen', 'Mike Johnson'],
  },
  {
    id: '2',
    type: 'action',
    title: 'Update product roadmap',
    description: 'Emily will prioritize core features and update roadmap by end of week',
    participants: ['Emily Rodriguez'],
  },
  {
    id: '3',
    type: 'topic',
    title: 'Customer feedback analysis',
    description: 'Discussed recent customer survey results and identified key pain points',
    participants: ['David Kim', 'Sarah Chen'],
  },
  {
    id: '4',
    type: 'question',
    title: 'Resource allocation for new project',
    description: 'Team raised concerns about available resources for upcoming initiative',
    participants: ['Mike Johnson'],
  },
];

export const Default: Story = {
  args: {
    insights: sampleInsights,
  },
};

export const SingleInsight: Story = {
  args: {
    insights: [sampleInsights[0]],
  },
};
