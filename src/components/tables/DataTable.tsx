import React, { useState, useMemo } from 'react';
import DataTableHeader from './DataTableHeader';
import DataTableRow from './DataTableRow';
import DataTableFooter from './DataTableFooter';

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

interface DataTableProps {
  data: any[];
  columns: Column[];
  sortable?: boolean;
  filterable?: boolean;
  selectable?: boolean;
  editableRows?: boolean;
  onRowUpdate?: (id: any, updatedData: any) => void;
  className?: string;
}

const DataTable: React.FC<DataTableProps> = ({
  data = [],
  columns = [],
  sortable = true,
  filterable = true,
  selectable = false,
  editableRows = false,
  onRowUpdate,
  className = ''
}) => {
  const [sortConfig, setSortConfig] = useState<{ key: string | null; direction: 'asc' | 'desc' }>({
    key: null,
    direction: 'asc'
  });
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleFilter = (key: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilter = (key: string) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setFilters({});
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];
      
      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter(row => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value || (Array.isArray(value) && value.length === 0)) return true;
        
        const rowValue = row[key];
        if (Array.isArray(value)) {
          return value.includes(rowValue);
        }
        
        return rowValue.toString().toLowerCase().includes(value.toString().toLowerCase());
      });
    });
  }, [sortedData, filters]);

  const handleRowSelect = (rowId: any) => {
    if (!selectable) return;
    
    setSelectedRows(prev => 
      prev.includes(rowId)
        ? prev.filter(id => id !== rowId)
        : [...prev, rowId]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredData.map(row => row.id));
    }
  };

  return (
    <div className={`datatable-container ${className}`}>
      <DataTableHeader 
        columns={columns}
        sortConfig={sortConfig}
        onSort={handleSort}
        filters={filters}
        onFilter={handleFilter}
        onClearFilter={clearFilter}
        onClearAllFilters={clearAllFilters}
        filterable={filterable}
        sortable={sortable}
        selectable={selectable}
        selectedCount={selectedRows.length}
        totalCount={filteredData.length}
        onSelectAll={handleSelectAll}
      />
      
      <div className="datatable-body">
        {filteredData.map((row, index) => (
          <DataTableRow
            key={row.id || index}
            data={row}
            columns={columns}
            selected={selectedRows.includes(row.id)}
            onSelect={() => handleRowSelect(row.id)}
            selectable={selectable}
            editableRows={editableRows}
            onRowUpdate={onRowUpdate}
            index={index}
          />
        ))}
      </div>
      
      <DataTableFooter 
        total={filteredData.length}
        selected={selectedRows.length}
        hasFilters={Object.keys(filters).length > 0}
        onClearFilters={clearAllFilters}
      />
    </div>
  );
};

export default DataTable;