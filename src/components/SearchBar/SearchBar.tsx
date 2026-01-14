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
    <div className="search-bar">
      <div className="search-bar__container">
        <span className="search-bar__icon">🔍</span>
        <input
          type="text"
          className="search-bar__input"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
        />
        {query && (
          <button
            className="search-bar__clear"
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
          className="search-bar__filter"
          onClick={onFilterClick}
          aria-label="Open filters"
        >
          ⚙️ Filters
        </button>
      )}
    </div>
  );
};
