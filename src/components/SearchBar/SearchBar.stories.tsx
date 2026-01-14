import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import './SearchBar.css';

const meta = {
  title: 'AI Meeting Tool/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    initialValue: 'Q4 planning',
  },
};

export const WithoutFilters: Story = {
  args: {
    showFilters: false,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
      <div style={{ width: '600px' }}>
        <SearchBar
          {...args}
          onSearch={setSearchQuery}
          onFilterClick={() => alert('Filters clicked!')}
        />
        {searchQuery && (
          <p style={{ marginTop: '16px', color: '#666' }}>
            Searching for: <strong>{searchQuery}</strong>
          </p>
        )}
      </div>
    );
  },
};
