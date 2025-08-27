import React from 'react';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  filterType?: 'text' | 'select' | 'date';
  filterOptions?: string[];
  width?: string;
  align?: 'left' | 'center' | 'right';
  editable?: boolean;
  validation?: 'email' | 'number' | 'url';
}

interface DataTableCellProps {
  content: any;
  column: Column;
  rowData: any;
  isEditing?: boolean;
  onCellChange?: (key: string, value: any) => void;
}

const DataTableCell: React.FC<DataTableCellProps> = ({
  content,
  column,
  rowData,
  isEditing = false,
  onCellChange
}) => {
  const getAlignmentClass = () => {
    switch (column.align) {
      case 'center':
        return 'datatable-body-cell-center';
      case 'right':
        return 'datatable-body-cell-right';
      default:
        return 'datatable-body-cell-left';
    }
  };

  const renderCellContent = () => {
    // Handle editing mode
    if (isEditing && column.editable) {
      if (column.key === 'role' || column.key === 'status') {
        return (
          <select
            value={content}
            onChange={(e) => onCellChange?.(column.key, e.target.value)}
            className="w-full px-2 py-1 text-sm border border-surface-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {column.filterOptions?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      }
      
      if (column.key === 'name' || column.key === 'email') {
        return (
          <input
            type={column.key === 'email' ? 'email' : 'text'}
            value={content}
            onChange={(e) => onCellChange?.(column.key, e.target.value)}
            className="w-full px-2 py-1 text-sm border border-surface-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder={column.key === 'email' ? 'Enter email...' : 'Enter name...'}
          />
        );
      }
    }

    // Handle special cases based on column key
    if (column.key === 'status') {
      return (
        <span className={`
          datatable-status-badge
          ${content === 'Active' ? 'datatable-status-badge-active' : 'datatable-status-badge-inactive'}
        `}>
          {content}
        </span>
      );
    }
    
    return content;
  };

  return (
    <div 
      className={`datatable-body-cell ${getAlignmentClass()}`}
      style={{ width: column.width }}
    >
      {renderCellContent()}
    </div>
  );
};

export default DataTableCell;