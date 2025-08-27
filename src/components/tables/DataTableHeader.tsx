import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, Filter, X } from 'lucide-react';
import DataTableFilterPopover from './DataTableFilterPopover';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  filterType?: 'text' | 'select' | 'date';
  filterOptions?: string[];
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface DataTableHeaderProps {
  columns: Column[];
  sortConfig: { key: string | null; direction: 'asc' | 'desc' };
  onSort: (key: string) => void;
  filters: Record<string, any>;
  onFilter: (key: string, value: any) => void;
  onClearFilter: (key: string) => void;
  onClearAllFilters: () => void;
  filterable?: boolean;
  sortable?: boolean;
  selectable?: boolean;
  selectedCount?: number;
  totalCount?: number;
  onSelectAll?: () => void;
}

const DataTableHeader: React.FC<DataTableHeaderProps> = ({
  columns,
  sortConfig,
  onSort,
  filters,
  onFilter,
  onClearFilter,
  onClearAllFilters,
  filterable = true,
  sortable = true,
  selectable = false,
  selectedCount = 0,
  totalCount = 0,
  onSelectAll
}) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const filterRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeFilter && filterRefs.current[activeFilter] && 
          !filterRefs.current[activeFilter]?.contains(event.target as Node)) {
        setActiveFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeFilter]);

  const getSortIcon = (columnKey: string) => {
    if (sortConfig.key !== columnKey) {
      return <div className="datatable-sort-icon datatable-sort-icon-default" />;
    }
    
    return sortConfig.direction === 'asc' ? (
      <ChevronUp className="datatable-sort-icon datatable-sort-icon-active" />
    ) : (
      <ChevronDown className="datatable-sort-icon datatable-sort-icon-active" />
    );
  };

  const hasActiveFilter = (columnKey: string) => {
    const filterValue = filters[columnKey];
    return filterValue && (Array.isArray(filterValue) ? filterValue.length > 0 : true);
  };

  return (
    <div className="datatable-header">
      {selectable && (
        <div className="datatable-header-cell datatable-header-cell-checkbox">
          <input
            type="checkbox"
            checked={selectedCount > 0 && selectedCount === totalCount}
            onChange={onSelectAll}
            className="checkbox-input checkbox-small"
          />
        </div>
      )}
      
      {columns.map((column) => (
        <div
          key={column.key}
          className={`
            datatable-header-cell
            ${column.sortable && sortable ? 'datatable-header-cell-sortable' : ''}
            ${sortConfig.key === column.key ? 'datatable-header-cell-sorted' : ''}
          `}
          style={{ width: column.width }}
        >
          <div className="datatable-header-content">
            <span className="datatable-header-label">{column.label}</span>
            
            <div className="datatable-header-actions">
              {column.sortable && sortable && (
                <button
                  onClick={() => onSort(column.key)}
                  className="datatable-sort-button"
                >
                  {getSortIcon(column.key)}
                </button>
              )}
              
              {column.filterable && filterable && (
                <div className="relative" ref={el => filterRefs.current[column.key] = el}>
                  <button
                    onClick={() => setActiveFilter(activeFilter === column.key ? null : column.key)}
                    className={`
                      datatable-filter-button
                      ${hasActiveFilter(column.key) ? 'datatable-filter-button-active' : ''}
                    `}
                  >
                    <Filter className="datatable-filter-icon" />
                  </button>
                  
                  {activeFilter === column.key && (
                    <DataTableFilterPopover
                      column={column}
                      value={filters[column.key]}
                      onChange={(value) => onFilter(column.key, value)}
                      onClear={() => onClearFilter(column.key)}
                      onClose={() => setActiveFilter(null)}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataTableHeader;