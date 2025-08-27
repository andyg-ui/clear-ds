import React from 'react';
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import toast from 'react-hot-toast';
import DataTableCell from './DataTableCell';

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

interface DataTableRowProps {
  data: any;
  columns: Column[];
  selected?: boolean;
  onSelect?: () => void;
  selectable?: boolean;
  editableRows?: boolean;
  onRowUpdate?: (id: any, updatedData: any) => void;
  index: number;
}

const DataTableRow: React.FC<DataTableRowProps> = ({
  data,
  columns,
  selected = false,
  onSelect,
  selectable = false,
  editableRows = false,
  onRowUpdate,
  index
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempRowData, setTempRowData] = useState(data);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setTempRowData({ ...data });
  };

  const handleSaveClick = () => {
    // Validate email if email field exists and has validation
    const emailColumn = columns.find(col => col.key === 'email' && col.validation === 'email');
    if (emailColumn && tempRowData.email && !validateEmail(tempRowData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Call the update function
    if (onRowUpdate) {
      onRowUpdate(data.id, tempRowData);
      toast.success('Row updated successfully');
    }
    
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setTempRowData({ ...data });
    setIsEditing(false);
  };

  const handleCellChange = (key: string, value: any) => {
    setTempRowData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const renderActionCell = () => {
    if (!editableRows) {
      return (
        <button className="btn btn-primary btn-small">
          Edit
        </button>
      );
    }

    if (isEditing) {
      return (
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleSaveClick}
            className="btn btn-primary btn-small"
          >
            <Check className="w-3 h-3" />
            Save
          </button>
          <button 
            onClick={handleCancelClick}
            className="btn btn-secondary btn-small"
          >
            <X className="w-3 h-3" />
            Cancel
          </button>
        </div>
      );
    }

    return (
      <button 
        onClick={handleEditClick}
        className="btn btn-primary btn-small"
      >
        Edit
      </button>
    );
  };

  return (
    <div 
      className={`
        datatable-row
        ${selected ? 'datatable-row-selected' : ''}
        ${index % 2 === 1 && !selected ? 'datatable-row-striped' : ''}
        ${isEditing ? 'datatable-row-editing' : ''}
      `}
      onClick={selectable && !isEditing ? onSelect : undefined}
    >
      {selectable && (
        <div className="datatable-body-cell datatable-body-cell-checkbox">
          <input
            type="checkbox"
            checked={selected}
            onChange={onSelect}
            className="checkbox-input checkbox-small"
            disabled={isEditing}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      {columns.map((column) => (
        column.key === 'actions' ? (
          <div 
            key={column.key}
            className="datatable-body-cell datatable-body-cell-center"
            style={{ width: column.width }}
          >
            {renderActionCell()}
          </div>
        ) : (
          <DataTableCell
            key={column.key}
            content={isEditing ? tempRowData[column.key] : data[column.key]}
            column={column}
            rowData={isEditing ? tempRowData : data}
            isEditing={isEditing && column.editable}
            onCellChange={handleCellChange}
          />
        )
      ))}
    </div>
  );
};

export default DataTableRow;