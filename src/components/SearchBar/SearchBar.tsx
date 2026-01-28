import React, { useState } from 'react';

export interface SearchBarProps {
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Initial search value
   */
  initialValue?: string;
  /**
   * Show filter button
   */
  showFilters?: boolean;
  /**
   * Search handler
   */
  onSearch?: (query: string) => void;
  /**
   * Filter click handler
   */
  onFilterClick?: () => void;
}

/**
 * Search bar component for finding meetings and content
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search meetings, transcripts, or summaries...',
  initialValue = '',
  showFilters = true,
  onSearch,
  onFilterClick,
}) => {
  const [query, setQuery] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <div className="flex gap-3 items-center">
      <div className="form-control flex-1 relative flex items-center bg-base-100 border-2 border-base-300 rounded-xl px-4 transition-all duration-200 focus-within:border-primary focus-within:shadow-lg focus-within:shadow-primary/10">
        <span className="text-lg text-base-content/40 mr-3">🔍</span>
        <input
          type="text"
          className="input input-ghost flex-1 border-0 focus:outline-none p-3.5 text-base text-base-content font-normal tracking-tight placeholder:text-base-content/40"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
        />
        {query && (
          <button
            className="btn btn-ghost btn-sm btn-circle text-base-content/40 hover:text-base-content transition-colors"
            onClick={() => {
              setQuery('');
              onSearch?.('');
            }}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      {showFilters && (
        <button
          className="btn btn-outline btn-md font-semibold tracking-tight whitespace-nowrap shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          onClick={onFilterClick}
          aria-label="Open filters"
        >
          ⚙️ Filters
        </button>
      )}
    </div>
  );
};
