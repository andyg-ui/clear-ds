import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronsLeft, ChevronsRight } from 'lucide-react';
import CodeBlock from '../CodeBlock';

const Paginator: React.FC = () => {
  const [activeTab, setActiveTab] = useState('copy-me');
  
  // Basic Paginator state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Current Page Report state
  const [reportCurrentPage, setReportCurrentPage] = useState(1);
  const [reportRowsPerPage, setReportRowsPerPage] = useState(10);
  const [reportDropdownOpen, setReportDropdownOpen] = useState(false);
  
  const totalRecords = 120;
  const totalPages = Math.ceil(totalRecords / rowsPerPage);
  const reportTotalPages = Math.ceil(totalRecords / reportRowsPerPage);
  
  const rowsPerPageOptions = [10, 25, 50];

  const getVisiblePages = (current: number, total: number) => {
    const pages = [];
    const maxVisible = 7; // Show up to 7 pages as seen in the image
    
    if (total <= maxVisible) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 4) {
        for (let i = 1; i <= maxVisible; i++) {
          pages.push(i);
        }
      } else if (current >= total - 3) {
        for (let i = total - maxVisible + 1; i <= total; i++) {
          pages.push(i);
        }
      } else {
        const start = current - 3;
        for (let i = start; i < start + maxVisible; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };

  const paginatorCode = `<!-- Basic Paginator -->
<div class="paginator-container">
  <div class="paginator-content">
    <!-- Previous Button -->
    <button class="paginator-button paginator-button-nav">
      <i class="pi pi-chevron-left"></i>
    </button>
    
    <!-- Page Numbers -->
    <button class="paginator-button">1</button>
    <button class="paginator-button paginator-button-active">2</button>
    <button class="paginator-button">3</button>
    <button class="paginator-button">4</button>
    <button class="paginator-button">5</button>
    
    <!-- Next Button -->
    <button class="paginator-button paginator-button-nav">
      <i class="pi pi-chevron-right"></i>
    </button>
  </div>
</div>

<!-- Current Page Report -->
<div class="paginator-container">
  <div class="paginator-content">
    <span class="paginator-info">Showing 1 to 10 of 120 entries</span>
    
    <div class="paginator-controls">
      <!-- Previous Button -->
      <button class="paginator-button paginator-button-nav">
        <i class="pi pi-chevron-left"></i>
      </button>
      
      <!-- Page Numbers -->
      <button class="paginator-button">1</button>
      <button class="paginator-button paginator-button-active">2</button>
      <button class="paginator-button">3</button>
      
      <!-- Next Button -->
      <button class="paginator-button paginator-button-nav">
        <i class="pi pi-chevron-right"></i>
      </button>
    </div>
  </div>
</div>

<!-- Rows Per Page -->
<div class="paginator-container">
  <div class="paginator-content">
    <span class="paginator-info">Results per page</span>
    
    <div class="paginator-dropdown">
      <button class="paginator-dropdown-trigger">
        <span>10</span>
        <i class="pi pi-chevron-down"></i>
      </button>
      
      <div class="paginator-dropdown-panel">
        <button class="paginator-dropdown-option">10</button>
        <button class="paginator-dropdown-option">25</button>
        <button class="paginator-dropdown-option">50</button>
      </div>
    </div>
  </div>
</div>`;

  const reactPaginatorCode = `// React Paginator Component
const Paginator = ({ 
  totalRecords = 0,
  rows = 10,
  first = 0,
  onPageChange,
  rowsPerPageOptions = [10, 25, 50],
  showCurrentPageReport = false,
  currentPageReportTemplate = "Showing {first} to {last} of {totalRecords} entries",
  ...props 
}) => {
  const [currentFirst, setCurrentFirst] = useState(first);
  const [currentRows, setCurrentRows] = useState(rows);
  
  const totalPages = Math.ceil(totalRecords / currentRows);
  const currentPage = Math.floor(currentFirst / currentRows) + 1;
  
  const handlePageChange = (page) => {
    const newFirst = (page - 1) * currentRows;
    setCurrentFirst(newFirst);
    onPageChange?.({ first: newFirst, rows: currentRows, page });
  };
  
  const handleFirstPage = () => handlePageChange(1);
  const handleLastPage = () => handlePageChange(totalPages);
  
  const handleRowsChange = (newRows) => {
    setCurrentRows(newRows);
    setCurrentFirst(0);
    onPageChange?.({ first: 0, rows: newRows, page: 1 });
  };
  
  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 7;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= maxVisible; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 3) {
        for (let i = totalPages - maxVisible + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        const start = currentPage - 3;
        for (let i = start; i < start + maxVisible; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };
  
  const formatCurrentPageReport = () => {
    const first = currentFirst + 1;
    const last = Math.min(currentFirst + currentRows, totalRecords);
    
    return currentPageReportTemplate
      .replace('{first}', first.toString())
      .replace('{last}', last.toString())
      .replace('{totalRecords}', totalRecords.toString());
  };
  
  return (
    <div className="paginator-container">
      <div className="paginator-content">
        {showCurrentPageReport && (
          <span className="paginator-info">
            {formatCurrentPageReport()}
          </span>
        )}
        
        <div className="paginator-controls">
           <button
             onClick={handleFirstPage}
             disabled={currentPage === 1}
             className={\`paginator-button-nav \${currentPage === 1 ? 'paginator-button-disabled' : ''}\`}
           >
             <ChevronsLeft className="w-4 h-4" />
           </button>
           
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={\`paginator-button paginator-button-nav \${currentPage === 1 ? 'paginator-button-disabled' : ''}\`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {getVisiblePages().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={\`paginator-button \${currentPage === page ? 'paginator-button-active' : ''}\`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={\`paginator-button paginator-button-nav \${currentPage === totalPages ? 'paginator-button-disabled' : ''}\`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
           
           <button
             onClick={handleLastPage}
             disabled={currentPage === totalPages}
             className={\`paginator-button-nav \${currentPage === totalPages ? 'paginator-button-disabled' : ''}\`}
           >
             <ChevronsRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </div>
  );
};`;

  const renderCopyMeTab = () => (
    <div>
      {/* Basic Paginator */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Basic</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="paginator-container">
            <div className="paginator-content">
              <div className="paginator-controls">
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`paginator-button paginator-button-nav ${currentPage === 1 ? 'paginator-button-disabled' : ''}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {getVisiblePages(currentPage, totalPages).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`paginator-button ${currentPage === page ? 'paginator-button-active' : ''}`}
                  >
                    {page}
                  </button>
                ))}
                
                <button 
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`paginator-button paginator-button-nav ${currentPage === totalPages ? 'paginator-button-disabled' : ''}`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Page Report */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Current Page Report</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="paginator-container">
            <div className="paginator-content">
              <span className="paginator-info">
                Showing {((reportCurrentPage - 1) * reportRowsPerPage) + 1} to {Math.min(reportCurrentPage * reportRowsPerPage, totalRecords)} of {totalRecords} entries
              </span>
              
              <div className="paginator-controls">
                <button 
                  onClick={() => setReportCurrentPage(Math.max(1, reportCurrentPage - 1))}
                  disabled={reportCurrentPage === 1}
                  className={`paginator-button paginator-button-nav ${reportCurrentPage === 1 ? 'paginator-button-disabled' : ''}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {getVisiblePages(reportCurrentPage, reportTotalPages).map((page) => (
                  <button
                    key={page}
                    onClick={() => setReportCurrentPage(page)}
                    className={`paginator-button ${reportCurrentPage === page ? 'paginator-button-active' : ''}`}
                  >
                    {page}
                  </button>
                ))}
                
                <button 
                  onClick={() => setReportCurrentPage(Math.min(reportTotalPages, reportCurrentPage + 1))}
                  disabled={reportCurrentPage === reportTotalPages}
                  className={`paginator-button paginator-button-nav ${reportCurrentPage === reportTotalPages ? 'paginator-button-disabled' : ''}`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rows Per Page */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Results per page</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="paginator-container">
            <div className="paginator-content">
              <span className="paginator-info">Results per page</span>
              
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="paginator-dropdown-trigger"
                >
                  <span>{rowsPerPage}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="paginator-dropdown-panel">
                    {rowsPerPageOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setRowsPerPage(option);
                          setDropdownOpen(false);
                          setCurrentPage(1);
                        }}
                        className={`paginator-dropdown-option ${rowsPerPage === option ? 'paginator-dropdown-option-selected' : ''}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuidanceTab = () => (
    <div>
      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Choosing a Variant</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Use the "Basic" version when users primarily need to navigate between pages and the current page context is clear from other UI elements. Use the "Current Page Report" when additional context about the current page and total entries will help users understand their position within the dataset.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Use the Current Page Report when additional context about the current page and total entries will help users understand their position within the dataset.</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          When users need context about their current position within a dataset, use the Current Page Report variant. This provides clear information about which entries are currently visible and how many total entries exist.
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Display the range of currently visible entries</li>
          <li>• Show the total number of entries in the dataset</li>
          <li>• Update the report immediately when pagination changes</li>
          <li>• Use clear, descriptive language like "Showing X to Y of Z entries"</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Avoid Paginators When</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Content is best consumed as a single unit</li>
          <li>• Users need to see all items at once for comparison</li>
          <li>• The dataset is small enough to display entirely</li>
          <li>• Users frequently need to search across all items</li>
          <li>• Breaking content would disrupt the user's workflow</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Responsive Navigation</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Ensure pagination works well across different screen sizes:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Reduce visible page numbers on smaller screens</li>
          <li>• Maintain easy access to previous/next navigation</li>
          <li>• Consider showing fewer options in rows per page dropdown on mobile</li>
          <li>• Ensure touch targets are large enough for mobile interaction</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Page Sizes & Limits</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Choose appropriate page sizes for your content:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Offer common page sizes like 10, 25, 50, 100</li>
          <li>• Consider the complexity and size of individual items</li>
          <li>• Balance between reducing page loads and maintaining performance</li>
          <li>• Provide reasonable defaults based on your use case</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Screen Reader Announcements</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Enhance accessibility with proper announcements:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Announce page changes to screen readers</li>
          <li>• Provide context about total pages and current position</li>
          <li>• Use ARIA labels for navigation buttons</li>
          <li>• Announce when content is loading or has finished loading</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Keyboard & Focus</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Support Tab navigation through all interactive elements</li>
          <li>• Use Enter and Space keys to activate pagination controls</li>
          <li>• Provide clear focus indicators that meet accessibility standards</li>
          <li>• Consider arrow key navigation between page numbers</li>
          <li>• Ensure focus management when content updates</li>
        </ul>
      </div>
    </div>
  );

  const renderComponentTab = () => (
    <div>
      {/* Paginator Elements */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Paginator</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="space-y-8">
            <div className="text-center">
              <div className="mb-4">
                <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Basic Elements</span>
              </div>
              <div className="paginator-container">
                <div className="paginator-content">
                  <div className="paginator-controls">
                    <button className="paginator-button paginator-button-nav paginator-button-disabled">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="paginator-button">1</button>
                    <button className="paginator-button paginator-button-active">2</button>
                    <button className="paginator-button">3</button>
                    <button className="paginator-button">4</button>
                    <button className="paginator-button">5</button>
                    <button className="paginator-button paginator-button-nav">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Page Report */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Current page report</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="space-y-8">
            <div className="text-center">
              <div className="mb-4">
                <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">With Report Text</span>
              </div>
              <div className="paginator-container">
                <div className="paginator-content">
                  <span className="paginator-info">Showing 11 to 20 of 120 entries</span>
                  
                  <div className="paginator-controls">
                    <button className="paginator-button paginator-button-nav">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="paginator-button">1</button>
                    <button className="paginator-button paginator-button-active">2</button>
                    <button className="paginator-button">3</button>
                    <button className="paginator-button paginator-button-nav">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rows Per Page Dropdown */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Paginator rows/page dropdown</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="space-y-8">
            <div className="text-center">
              <div className="mb-4">
                <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Dropdown Closed</span>
              </div>
              <div className="paginator-container">
                <div className="paginator-content">
                  <span className="paginator-info">Results per page</span>
                  
                  <div className="paginator-dropdown">
                    <button className="paginator-dropdown-trigger">
                      <span>10</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Dropdown Open</span>
              </div>
              <div className="paginator-container">
                <div className="paginator-content">
                  <span className="paginator-info">Results per page</span>
                  
                  <div className="relative">
                    <button className="paginator-dropdown-trigger">
                      <span>10</span>
                      <ChevronDown className="w-4 h-4 rotate-180" />
                    </button>
                    
                    <div className="paginator-dropdown-panel">
                      <button className="paginator-dropdown-option paginator-dropdown-option-selected">10</button>
                      <button className="paginator-dropdown-option">25</button>
                      <button className="paginator-dropdown-option">50</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTokensTab = () => {
    const tokens = [
      { token: 'paginator-nav-button-width', type: 'Sizing', color: '', value: '2.5rem', rawValue: '2.5rem' },
      { token: 'paginator-nav-button-height', type: 'Sizing', color: '', value: '2.5rem', rawValue: '2.5rem' },
      { token: 'paginator-page-button-min-width', type: 'Sizing', color: '', value: '2.5rem', rawValue: '2.5rem' },
      { token: 'paginator-padding', type: 'Spacing', color: '', value: '0.5rem 1rem', rawValue: '0.5rem 1rem' },
      { token: 'paginator-gap', type: 'Spacing', color: '', value: '0.25rem', rawValue: '0.25rem' },
      { token: 'paginator-background', type: 'Color', color: '#ffffff', value: '#ffffff', rawValue: 'surface-background' },
      { token: 'paginator-nav-button-background', type: 'Color', color: '#ffffff', value: '#ffffff', rawValue: 'surface-background' },
      { token: 'paginator-nav-button-hover-background', type: 'Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface-hover-background' },
      { token: 'paginator-nav-button-focus-background', type: 'Color', color: '#f0fdfa', value: '#f0fdfa', rawValue: 'primary-focus-background' },
      { token: 'paginator-nav-button-disabled-background', type: 'Color', color: '#f1f5f9', value: '#f1f5f9', rawValue: 'surface-disabled-background' },
      { token: 'paginator-page-button-background', type: 'Color', color: '#ffffff', value: '#ffffff', rawValue: 'surface-background' },
      { token: 'paginator-page-button-hover-background', type: 'Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface-hover-background' },
      { token: 'paginator-page-button-focus-background', type: 'Color', color: '#f0fdfa', value: '#f0fdfa', rawValue: 'primary-focus-background' },
      { token: 'paginator-page-button-selected-background', type: 'Color', color: '#32A4AC', value: '#32A4AC', rawValue: 'primary-selected-background' },
      { token: 'paginator-page-button-selected-color', type: 'Color', color: '#ffffff', value: '#ffffff', rawValue: 'primary-selected-color' },
      { token: 'paginator-border-radius', type: 'Border Radius', color: '', value: '0.375rem', rawValue: '0.375rem' },
      { token: 'paginator-border-color', type: 'Color', color: '#cbd5e1', value: '#cbd5e1', rawValue: 'surface-border-color' },
      { token: 'paginator-border-focus-color', type: 'Color', color: '#14b8a6', value: '#14b8a6', rawValue: 'primary-border-focus-color' },
      { token: 'paginator-border-selected-color', type: 'Color', color: '#32A4AC', value: '#32A4AC', rawValue: 'primary-border-selected-color' },
      { token: 'paginator-color', type: 'Color', color: '#334155', value: '#334155', rawValue: 'surface-color' },
      { token: 'paginator-hover-color', type: 'Color', color: '#1e293b', value: '#1e293b', rawValue: 'surface-hover-color' },
      { token: 'paginator-focus-color', type: 'Color', color: '#0f766e', value: '#0f766e', rawValue: 'primary-focus-color' },
      { token: 'paginator-disabled-color', type: 'Color', color: '#94a3b8', value: '#94a3b8', rawValue: 'surface-disabled-color' },
      { token: 'paginator-dropdown-background', type: 'Color', color: '#ffffff', value: '#ffffff', rawValue: 'surface-background' },
      { token: 'paginator-dropdown-border-color', type: 'Color', color: '#cbd5e1', value: '#cbd5e1', rawValue: 'surface-border-color' },
      { token: 'paginator-dropdown-shadow', type: 'Box Shadow', color: '', value: '0 4px 6px -1px rgb(0 0 0 / 0.1)', rawValue: 'shadow-md' },
      { token: 'paginator-dropdown-option-hover', type: 'Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface-hover-background' },
      { token: 'paginator-dropdown-option-selected', type: 'Color', color: '#f0fdfa', value: '#f0fdfa', rawValue: 'primary-selected-background' },
    ];

    return (
      <div>
        <div className="mb-8">
          <h3 className="text-h3 text-navy-900 mb-6">Paginator Token Documentation</h3>
          <p className="text-body-copy-medium text-navy-600 mb-6">
            These design tokens define the visual properties of the Paginator component.
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
            <ChevronDown className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-h1 text-navy-900">Paginator</h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                IN PROGRESS
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          Paginator displays data in paged format and provides navigation between pages.
        </p>
        
        <a 
          href="https://primeng.org/paginator" 
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

      {/* Usage Examples - Only show in Copy Me tab */}
      {activeTab === 'copy-me' && (
        <div className="mb-12">
          <h3 className="text-h3 text-navy-900 mb-6">Usage Examples</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-surface-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-4">HTML/CSS</h4>
              <CodeBlock
                language="html"
                code={paginatorCode}
              />
            </div>
            
            <div className="bg-white border border-surface-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-4">React Component</h4>
              <CodeBlock
                language="jsx"
                code={reactPaginatorCode}
              />
            </div>
          </div>
        </div>
      )}

      {/* Best Practices - Only show in Copy Me tab */}
      {activeTab === 'copy-me' && (
        <div className="mb-12">
          <h3 className="text-h3 text-navy-900 mb-6">Best Practices</h3>
          <div className="bg-white border border-surface-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-navy-900 mb-4 text-green-700">Do</h4>
                <ul className="space-y-3 text-navy-600">
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Use clear page number indicators</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Provide context about current position in dataset</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Offer appropriate page size options</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Disable navigation when at boundaries</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Maintain consistent spacing and alignment</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-navy-900 mb-4 text-red-700">Don't</h4>
                <ul className="space-y-3 text-navy-600">
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Show too many page numbers at once</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use pagination for small datasets</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Make navigation buttons too small for touch</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Forget to provide loading states</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use inconsistent page size options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Paginator;