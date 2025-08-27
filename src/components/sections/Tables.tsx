import React, { useState } from 'react';
import { Table } from 'lucide-react';
import DataTable from '../tables/DataTable';
import CodeBlock from '../CodeBlock';

const Tables: React.FC = () => {
  const [activeTab, setActiveTab] = useState('copy-me');

  const sampleData = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-01-15',
      actions: 'Edit'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      role: 'User',
      status: 'Active',
      lastLogin: '2024-01-14',
      actions: 'Edit'
    },
    {
      id: 3,
      name: 'Mike Davis',
      email: 'mike.davis@email.com',
      role: 'Editor',
      status: 'Inactive',
      lastLogin: '2024-01-10',
      actions: 'Edit'
    },
    {
      id: 4,
      name: 'Emily Wilson',
      email: 'emily.wilson@email.com',
      role: 'User',
      status: 'Active',
      lastLogin: '2024-01-13',
      actions: 'Edit'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david.brown@email.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-01-12',
      actions: 'Edit'
    }
  ];

  const [editableData, setEditableData] = useState(sampleData);

  const columns = [
    { 
      key: 'name', 
      label: 'Name', 
      sortable: true, 
      filterable: true,
      filterType: 'text'
    },
    { 
      key: 'email', 
      label: 'Email', 
      sortable: true, 
      filterable: true,
      filterType: 'text'
    },
    { 
      key: 'role', 
      label: 'Role', 
      sortable: true, 
      filterable: true,
      filterType: 'select',
      filterOptions: ['Admin', 'User', 'Editor']
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true, 
      filterable: true,
      filterType: 'select',
      filterOptions: ['Active', 'Inactive']
    },
    { 
      key: 'lastLogin', 
      label: 'Last Login', 
      sortable: true, 
      filterable: true,
      filterType: 'date'
    },
    { 
      key: 'actions', 
      label: 'Actions', 
      sortable: false, 
      filterable: false
    }
  ];

  const editableColumns = [
    { 
      key: 'name', 
      label: 'Name', 
      sortable: true, 
      filterable: true,
      filterType: 'text',
      editable: true
    },
    { 
      key: 'email', 
      label: 'Email', 
      sortable: true, 
      filterable: true,
      filterType: 'text',
      editable: true,
      validation: 'email'
    },
    { 
      key: 'role', 
      label: 'Role', 
      sortable: true, 
      filterable: true,
      filterType: 'select',
      filterOptions: ['Admin', 'User', 'Editor', 'Manager', 'Viewer'],
      editable: true
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true, 
      filterable: true,
      filterType: 'select',
      filterOptions: ['Active', 'Inactive', 'Locked'],
      editable: true
    },
    { 
      key: 'lastLogin', 
      label: 'Last Login', 
      sortable: true, 
      filterable: true,
      filterType: 'date',
      editable: false
    },
    { 
      key: 'actions', 
      label: 'Actions', 
      sortable: false, 
      filterable: false,
      editable: false
    }
  ];

  const handleRowUpdate = (id: number, updatedData: any) => {
    setEditableData(prev => 
      prev.map(row => 
        row.id === id ? { ...row, ...updatedData } : row
      )
    );
  };

  const tableCode = `<!-- Basic DataTable -->
<div class="datatable-container">
  <!-- Table Header -->
  <div class="datatable-header">
    <div class="datatable-header-cell datatable-header-cell-sortable">
      <span>Name</span>
      <i class="pi pi-sort-alt datatable-sort-icon"></i>
      <button class="datatable-filter-button">
        <i class="pi pi-filter"></i>
      </button>
    </div>
    <div class="datatable-header-cell datatable-header-cell-sortable">
      <span>Email</span>
      <i class="pi pi-sort-alt datatable-sort-icon"></i>
      <button class="datatable-filter-button">
        <i class="pi pi-filter"></i>
      </button>
    </div>
    <div class="datatable-header-cell">
      <span>Actions</span>
    </div>
  </div>
  
  <!-- Table Body -->
  <div class="datatable-body">
    <div class="datatable-row">
      <div class="datatable-body-cell">John Smith</div>
      <div class="datatable-body-cell">john.smith@email.com</div>
      <div class="datatable-body-cell">
        <button class="btn btn-primary btn-small">Edit</button>
      </div>
    </div>
    <div class="datatable-row datatable-row-hover">
      <div class="datatable-body-cell">Sarah Johnson</div>
      <div class="datatable-body-cell">sarah.johnson@email.com</div>
      <div class="datatable-body-cell">
        <button class="btn btn-primary btn-small">Edit</button>
      </div>
    </div>
  </div>
  
  <!-- Table Footer -->
  <div class="datatable-footer">
    <div class="datatable-footer-cell">Total: 2 items</div>
  </div>
</div>

<!-- Filter Popover -->
<div class="datatable-filter-popover">
  <div class="datatable-filter-header">
    <h4>Filter by Role</h4>
  </div>
  <div class="datatable-filter-content">
    <div class="datatable-filter-group">
      <h5>Role Type</h5>
      <div class="space-y-2">
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="checkbox-input checkbox-small" />
          <span>Admin</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="checkbox-input checkbox-small" />
          <span>User</span>
        </label>
      </div>
    </div>
  </div>
  <div class="datatable-filter-footer">
    <button class="btn btn-secondary btn-small">Clear</button>
    <button class="btn btn-primary btn-small">Apply</button>
  </div>
</div>`;

  const reactTableCode = `// React DataTable Component
const DataTable = ({ 
  data = [],
  columns = [],
  sortable = true,
  filterable = true,
  selectable = false,
  ...props 
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filters, setFilters] = useState({});
  const [selectedRows, setSelectedRows] = useState([]);
  
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  
  const handleFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };
  
  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;
    
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);
  
  const filteredData = React.useMemo(() => {
    return sortedData.filter(row => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return row[key].toLowerCase().includes(value.toLowerCase());
      });
    });
  }, [sortedData, filters]);
  
  return (
    <div className="datatable-container">
      <DataTableHeader 
        columns={columns}
        sortConfig={sortConfig}
        onSort={handleSort}
        onFilter={handleFilter}
        filterable={filterable}
        sortable={sortable}
      />
      
      <div className="datatable-body">
        {filteredData.map((row, index) => (
          <DataTableRow
            key={row.id || index}
            data={row}
            columns={columns}
            selected={selectedRows.includes(row.id)}
            onSelect={() => {
              if (selectable) {
                setSelectedRows(prev => 
                  prev.includes(row.id)
                    ? prev.filter(id => id !== row.id)
                    : [...prev, row.id]
                );
              }
            }}
          />
        ))}
      </div>
      
      <DataTableFooter 
        total={filteredData.length}
        selected={selectedRows.length}
      />
    </div>
  );
};`;

  const renderCopyMeTab = () => (
    <div>
      {/* Basic DataTable */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Basic DataTable</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <DataTable 
            data={sampleData}
            columns={columns}
            sortable={true}
            filterable={true}
          />
        </div>
      </div>

      {/* DataTable with Selection */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">DataTable with Selection</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <DataTable 
            data={sampleData}
            columns={columns}
            sortable={true}
            filterable={true}
            selectable={true}
          />
        </div>
      </div>

      {/* Editable DataTable */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Editable DataTable</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <DataTable 
            data={editableData}
            columns={editableColumns}
            sortable={true}
            filterable={true}
            editableRows={true}
            onRowUpdate={handleRowUpdate}
          />
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Usage Examples</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-surface-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-navy-900 mb-4">HTML/CSS</h4>
            <CodeBlock
              language="html"
              code={tableCode}
            />
          </div>
          
          <div className="bg-white border border-surface-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-navy-900 mb-4">React Component</h4>
            <CodeBlock
              language="jsx"
              code={reactTableCode}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuidanceTab = () => (
    <div>
      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">When to Use DataTable</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Use DataTable when you need to display structured data in rows and columns with the ability to sort, filter, and interact with the data. DataTable is ideal for displaying large datasets where users need to find, compare, and act on specific information.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Column Design</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Use clear, descriptive column headers that indicate the data type</li>
          <li>• Align data appropriately (left for text, right for numbers, center for actions)</li>
          <li>• Provide adequate column width for the expected content</li>
          <li>• Use consistent formatting within each column</li>
          <li>• Consider responsive behavior for smaller screens</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Sorting & Filtering</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Enable sorting and filtering to help users find and organize data:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Make sortable columns clearly identifiable with sort indicators</li>
          <li>• Provide visual feedback for the current sort state</li>
          <li>• Use appropriate filter types for different data types</li>
          <li>• Group related filter options logically</li>
          <li>• Show active filters and allow easy clearing</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Row Selection</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          When enabling row selection:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Provide clear visual feedback for selected rows</li>
          <li>• Include a "select all" option in the header when appropriate</li>
          <li>• Show the count of selected items</li>
          <li>• Provide bulk actions for selected items</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Accessibility</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Use proper table markup with thead, tbody, and th elements</li>
          <li>• Provide ARIA labels for interactive elements</li>
          <li>• Support keyboard navigation for all interactive elements</li>
          <li>• Ensure sufficient color contrast for all states</li>
          <li>• Announce sort and filter changes to screen readers</li>
        </ul>
      </div>
    </div>
  );

  const renderComponentTab = () => (
    <div>
      {/* Table States */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Table States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-navy-900 mb-4">Default State</h4>
              <DataTable 
                data={sampleData.slice(0, 3)}
                columns={columns}
                sortable={true}
                filterable={true}
              />
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-navy-900 mb-4">With Selection</h4>
              <DataTable 
                data={sampleData.slice(0, 3)}
                columns={columns}
                sortable={true}
                filterable={true}
                selectable={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTokensTab = () => {
    const tokens = [
      { token: 'datatable-border-radius', type: 'Border Radius', color: '', value: '8px', rawValue: '0.5rem' },
      { token: 'datatable-border-color', type: 'Border Color', color: '#e2e8f0', value: '#e2e8f0', rawValue: 'surface.200' },
      { token: 'datatable-header-bg', type: 'Background Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface.50' },
      { token: 'datatable-header-text', type: 'Text Color', color: '#334155', value: '#334155', rawValue: 'surface.700' },
      { token: 'datatable-body-bg', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'datatable-body-text', type: 'Text Color', color: '#1e293b', value: '#1e293b', rawValue: 'surface.800' },
      { token: 'datatable-row-hover-bg', type: 'Background Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface.50' },
      { token: 'datatable-row-selected-bg', type: 'Background Color', color: '#f0fdfa', value: '#f0fdfa', rawValue: 'primary.50' },
      { token: 'datatable-cell-padding', type: 'Spacing', color: '', value: '12px 16px', rawValue: '0.75rem 1rem' },
      { token: 'datatable-header-padding', type: 'Spacing', color: '', value: '16px', rawValue: '1rem' },
      { token: 'datatable-filter-button-size', type: 'Size', color: '', value: '24px', rawValue: '1.5rem' },
      { token: 'datatable-sort-icon-size', type: 'Size', color: '', value: '16px', rawValue: '1rem' },
      { token: 'datatable-filter-popover-bg', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'datatable-filter-popover-shadow', type: 'Box Shadow', color: '', value: '0 10px 15px -3px rgb(0 0 0 / 0.1)', rawValue: 'shadow.lg' },
      { token: 'datatable-footer-bg', type: 'Background Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface.50' },
      { token: 'datatable-footer-text', type: 'Text Color', color: '#64748b', value: '#64748b', rawValue: 'surface.500' },
    ];

    return (
      <div>
        <div className="mb-8">
          <h3 className="text-h3 text-navy-900 mb-6">DataTable Token Documentation</h3>
          <p className="text-body-copy-medium text-navy-600 mb-6">
            These design tokens define the visual properties of the DataTable component.
          </p>
        </div>

        <div className="bg-white border border-surface-200 rounded-lg overflow-hidden">
          <div className="bg-surface-800 text-white px-6 py-4">
            <div className="grid grid-cols-5 gap-4">
              <div className="text-sm font-semibold">Token</div>
              <div className="text-sm font-semibold">Type</div>
              <div className="text-sm font-semibold">Color</div>
              <div className="text-sm font-semibold">Value</div>
              <div className="text-sm font-semibold">Raw Value</div>
            </div>
          </div>
          
          <div className="divide-y divide-surface-200">
            {tokens.map((item, index) => (
              <div key={index} className="grid grid-cols-5 gap-4 px-6 py-4 items-center">
                <div className="text-body-small-regular text-navy-900 font-mono">
                  {item.token}
                </div>
                <div className="text-body-small-regular text-navy-600">
                  {item.type}
                </div>
                <div className="flex items-center">
                  {item.color && (
                    <div 
                      className="w-4 h-4 rounded border border-surface-200 mr-2"
                      style={{ backgroundColor: item.color }}
                    ></div>
                  )}
                  <span className="text-body-small-regular text-navy-600 font-mono">
                    {item.color}
                  </span>
                </div>
                <div className="text-body-small-regular text-navy-600 font-mono">
                  {item.value}
                </div>
                <div className="text-body-small-regular text-navy-500 font-mono">
                  {item.rawValue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <Table className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-h1 text-navy-900">DataTable</h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                COMPLETED
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          DataTable displays data in tabular format with features like sorting, filtering, pagination, and selection. 
          It provides a comprehensive solution for displaying and interacting with structured data sets.
        </p>
        
        <a 
          href="https://primeng.org/table" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600 transition-colors text-body-normal-regular underline"
        >
          View PrimeNG Documentation
        </a>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-surface-100 p-1 rounded-lg">
          <button 
            onClick={() => setActiveTab('copy-me')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'copy-me' 
                ? 'bg-surface-800 text-white' 
                : 'text-navy-600 hover:bg-surface-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-sm ${activeTab === 'copy-me' ? 'bg-white' : 'bg-surface-400'}`}></div>
            <span>Copy Me</span>
          </button>
          <button 
            onClick={() => setActiveTab('guidance')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'guidance' 
                ? 'bg-surface-800 text-white' 
                : 'text-navy-600 hover:bg-surface-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-sm ${activeTab === 'guidance' ? 'bg-white' : 'bg-surface-400'}`}></div>
            <span>Guidance</span>
          </button>
          <button 
            onClick={() => setActiveTab('component')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'component' 
                ? 'bg-surface-800 text-white' 
                : 'text-navy-600 hover:bg-surface-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-sm ${activeTab === 'component' ? 'bg-white' : 'bg-surface-400'}`}></div>
            <span>Component</span>
          </button>
          <button 
            onClick={() => setActiveTab('tokens')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'tokens' 
                ? 'bg-surface-800 text-white' 
                : 'text-navy-600 hover:bg-surface-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-sm ${activeTab === 'tokens' ? 'bg-white' : 'bg-surface-400'}`}></div>
            <span>Tokens</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'copy-me' && renderCopyMeTab()}
        {activeTab === 'guidance' && renderGuidanceTab()}
        {activeTab === 'component' && renderComponentTab()}
        {activeTab === 'tokens' && renderTokensTab()}
      </div>
    </div>
  );
};

export default Tables;