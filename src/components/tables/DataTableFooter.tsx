import React from 'react';

interface DataTableFooterProps {
  total: number;
  selected?: number;
  hasFilters?: boolean;
  onClearFilters?: () => void;
}

const DataTableFooter: React.FC<DataTableFooterProps> = ({
  total,
  selected = 0,
  hasFilters = false,
  onClearFilters
}) => {
  return (
    <div className="datatable-footer">
      <div className="datatable-footer-content">
        <div className="datatable-footer-info">
          <span className="datatable-footer-text">
            Total: {total} items
          </span>
          {selected > 0 && (
            <span className="datatable-footer-text">
              • {selected} selected
            </span>
          )}
        </div>
        
        {hasFilters && (
          <button
            onClick={onClearFilters}
            className="datatable-footer-clear-filters"
          >
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
};

export default DataTableFooter;