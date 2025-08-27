import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

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

interface DataTableFilterPopoverProps {
  column: Column;
  value: any;
  onChange: (value: any) => void;
  onClear: () => void;
  onClose: () => void;
}

const DataTableFilterPopover: React.FC<DataTableFilterPopoverProps> = ({
  column,
  value,
  onChange,
  onClear,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tempValue, setTempValue] = useState(value || (column.filterType === 'select' ? [] : ''));

  const handleApply = () => {
    onChange(tempValue);
    onClose();
  };

  const handleClear = () => {
    setTempValue(column.filterType === 'select' ? [] : '');
    onClear();
    onClose();
  };

  const renderFilterContent = () => {
    switch (column.filterType) {
      case 'text':
        return (
          <div className="datatable-filter-text-group">
            <label className="datatable-filter-label">
              Filter by {column.label}
            </label>
            <input
              type="text"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              placeholder={`Enter ${column.label.toLowerCase()}...`}
              className="datatable-filter-input"
            />
          </div>
        );
        
      case 'select':
        const filteredOptions = column.filterOptions?.filter(option =>
          option.toLowerCase().includes(searchTerm.toLowerCase())
        ) || [];
        
        return (
          <div className="datatable-filter-select-group">
            <label className="datatable-filter-label">
              Filter by {column.label}
            </label>
            
            {(column.filterOptions?.length || 0) > 5 && (
              <div className="datatable-filter-search">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search options..."
                    className="datatable-filter-search-input"
                  />
                  <Search className="datatable-filter-search-icon" />
                </div>
              </div>
            )}
            
            <div className="datatable-filter-options">
              {filteredOptions.map((option) => (
                <label key={option} className="datatable-filter-option">
                  <input
                    type="checkbox"
                    checked={Array.isArray(tempValue) ? tempValue.includes(option) : tempValue === option}
                    onChange={(e) => {
                      if (Array.isArray(tempValue)) {
                        if (e.target.checked) {
                          setTempValue([...tempValue, option]);
                        } else {
                          setTempValue(tempValue.filter((v: string) => v !== option));
                        }
                      } else {
                        setTempValue(e.target.checked ? option : '');
                      }
                    }}
                    className="checkbox-input checkbox-small"
                  />
                  <span className="datatable-filter-option-label">{option}</span>
                </label>
              ))}
            </div>
          </div>
        );
        
      case 'date':
        return (
          <div className="datatable-filter-date-group">
            <label className="datatable-filter-label">
              Filter by {column.label}
            </label>
            <div className="datatable-filter-date-inputs">
              <div>
                <label className="datatable-filter-sublabel">From</label>
                <input
                  type="date"
                  value={tempValue?.from || ''}
                  onChange={(e) => setTempValue(prev => ({ ...prev, from: e.target.value }))}
                  className="datatable-filter-date-input"
                />
              </div>
              <div>
                <label className="datatable-filter-sublabel">To</label>
                <input
                  type="date"
                  value={tempValue?.to || ''}
                  onChange={(e) => setTempValue(prev => ({ ...prev, to: e.target.value }))}
                  className="datatable-filter-date-input"
                />
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="datatable-filter-popover">
      <div className="datatable-filter-popover-header">
        <h4 className="datatable-filter-popover-title">
          Filter {column.label}
        </h4>
        <button
          onClick={onClose}
          className="datatable-filter-popover-close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="datatable-filter-popover-content">
        {renderFilterContent()}
      </div>
      
      <div className="datatable-filter-popover-footer">
        <button
          onClick={handleClear}
          className="btn btn-secondary btn-small"
        >
          Clear
        </button>
        <button
          onClick={handleApply}
          className="btn btn-primary btn-small"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default DataTableFilterPopover;