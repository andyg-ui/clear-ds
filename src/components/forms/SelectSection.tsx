import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import CodeBlock from '../CodeBlock';

const SelectSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('copy-me');
  
  // Basic Select state
  const [basicDropdownOpen, setBasicDropdownOpen] = useState(false);
  const [basicSelectedOption, setBasicSelectedOption] = useState<string>('');
  
  // Select with Search state
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [searchSelectedOption, setSearchSelectedOption] = useState<string>('Option 2');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Grouped Select state
  const [groupedDropdownOpen, setGroupedDropdownOpen] = useState(false);
  const [groupedSelectedOption, setGroupedSelectedOption] = useState<string>('Option 3');
  
  const basicRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const groupedRef = useRef<HTMLDivElement>(null);
  
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  
  const groupedOptions = {
    'Group 1': ['Option 1', 'Option 2', 'Option 3'],
    'Group 2': ['Option 4', 'Option 5', 'Option 6']
  };
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (basicRef.current && !basicRef.current.contains(event.target as Node)) {
        setBasicDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchDropdownOpen(false);
      }
      if (groupedRef.current && !groupedRef.current.contains(event.target as Node)) {
        setGroupedDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleOptionSelect = (option: string, setSelectedOption: (option: string) => void, setDropdownOpen: (open: boolean) => void) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };
  
  const getFilteredOptions = (searchTerm: string) => {
    return options.filter(option => 
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  const selectCode = `<!-- Basic Select -->
<div class="select-container">
  <div class="select-input">
    <span class="select-placeholder">Select an option...</span>
    <i class="pi pi-chevron-down select-trigger"></i>
  </div>
</div>

<!-- Select Dropdown -->
<div class="select-panel">
  <div class="select-items">
    <div class="select-item">Option 1</div>
    <div class="select-item select-item-selected">Option 2</div>
    <div class="select-item">Option 3</div>
  </div>
</div>

<!-- Select with Search -->
<div class="select-container">
  <div class="select-input">
    <span class="select-display">Selected Option</span>
    <i class="pi pi-chevron-down select-trigger"></i>
  </div>
</div>

<div class="select-panel">
  <div class="select-search">
    <input type="text" placeholder="Search..." class="select-search-input" />
    <i class="pi pi-search select-search-icon"></i>
  </div>
  <div class="select-items">
    <!-- Filtered options here -->
  </div>
</div>`;

  const reactSelectCode = `// React Select Component
const Select = ({ 
  options = [],
  value,
  onChange,
  placeholder = "Select an option...",
  searchable = false,
  disabled = false,
  grouped = false,
  size = 'medium',
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredOptions = searchable 
    ? options.filter(option => 
        option.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;
  
  const handleOptionSelect = (option) => {
    onChange?.(option);
    setIsOpen(false);
    setSearchTerm('');
  };
  
  const sizeClasses = {
    small: 'select-small',
    medium: '',
    large: 'select-large'
  };
  
  return (
    <div className="relative">
      <div 
        className={\`select-container \${sizeClasses[size]} \${disabled ? 'select-disabled' : ''}\`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="select-input">
          <span className={\`\${value ? 'select-display' : 'select-placeholder'}\`}>
            {value || placeholder}
          </span>
          <ChevronDown className={\`select-trigger \${isOpen ? 'rotate-180' : ''}\`} />
        </div>
      </div>
      
      {isOpen && !disabled && (
        <div className="select-panel">
          {searchable && (
            <div className="select-search">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="select-search-input"
                onClick={(e) => e.stopPropagation()}
              />
              <Search className="select-search-icon" />
            </div>
          )}
          
          <div className="select-items">
            {grouped ? (
              Object.entries(options).map(([groupName, groupOptions]) => (
                <div key={groupName}>
                  <div className="select-group-header">{groupName}</div>
                  {groupOptions.map((option, index) => (
                    <div
                      key={index}
                      className={\`select-item \${value === option ? 'select-item-selected' : ''}\`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              ))
            ) : (
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  className={\`select-item \${value === option ? 'select-item-selected' : ''}\`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};`;

  const renderCopyMeTab = () => (
    <div>
      {/* Basic Select */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Basic Select</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm">
            <label className="block text-sm font-medium text-navy-600 mb-2">
              Select an option
            </label>
            <div className="relative" ref={basicRef}>
              <div 
                className={`select-container ${basicDropdownOpen ? 'select-focus' : ''}`}
                onClick={() => setBasicDropdownOpen(!basicDropdownOpen)}
              >
                <div className="select-input">
                  <span className={`${basicSelectedOption ? 'select-display' : 'select-placeholder'}`}>
                    {basicSelectedOption || 'Select an option...'}
                  </span>
                  <ChevronDown className={`select-trigger ${basicDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
              
              {basicDropdownOpen && (
                <div className="select-panel">
                  <div className="select-items">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className={`select-item ${basicSelectedOption === option ? 'select-item-selected' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOptionSelect(option, setBasicSelectedOption, setBasicDropdownOpen);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Select with Search */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Select with Search</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm">
            <label className="block text-sm font-medium text-navy-600 mb-2">
              Select an option
            </label>
            <div className="relative" ref={searchRef}>
              <div 
                className={`select-container ${searchDropdownOpen ? 'select-focus' : ''}`}
                onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
              >
                <div className="select-input">
                  <span className={`${searchSelectedOption ? 'select-display' : 'select-placeholder'}`}>
                    {searchSelectedOption || 'Select an option...'}
                  </span>
                  <ChevronDown className={`select-trigger ${searchDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
              
              {searchDropdownOpen && (
                <div className="select-panel">
                  <div className="select-search">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="select-search-input"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <Search className="select-search-icon" />
                  </div>
                  
                  <div className="select-items">
                    {getFilteredOptions(searchTerm).map((option, index) => (
                      <div
                        key={index}
                        className={`select-item ${searchSelectedOption === option ? 'select-item-selected' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOptionSelect(option, setSearchSelectedOption, setSearchDropdownOpen);
                          setSearchTerm('');
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Select with Groups */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Select with Groups</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm">
            <label className="block text-sm font-medium text-navy-600 mb-2">
              Select an option
            </label>
            <div className="relative" ref={groupedRef}>
              <div 
                className={`select-container ${groupedDropdownOpen ? 'select-focus' : ''}`}
                onClick={() => setGroupedDropdownOpen(!groupedDropdownOpen)}
              >
                <div className="select-input">
                  <span className={`${groupedSelectedOption ? 'select-display' : 'select-placeholder'}`}>
                    {groupedSelectedOption || 'Select an option...'}
                  </span>
                  <ChevronDown className={`select-trigger ${groupedDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
              
              {groupedDropdownOpen && (
                <div className="select-panel">
                  <div className="select-items">
                    {Object.entries(groupedOptions).map(([groupName, groupOptions]) => (
                      <div key={groupName}>
                        <div className="select-group-header">
                          {groupName}
                        </div>
                        {groupOptions.map((option, index) => (
                          <div
                            key={index}
                            className={`select-item ${groupedSelectedOption === option ? 'select-item-selected' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOptionSelect(option, setGroupedSelectedOption, setGroupedDropdownOpen);
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuidanceTab = () => (
    <div>
      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">When to Use Select</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Use a select component when you need users to choose one option from a list of predefined alternatives. 
          Select is ideal when you have more than 4 options but want to save space compared to radio buttons.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Labeling</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Use clear, descriptive labels that indicate what the user is selecting</li>
          <li>• Keep labels concise and scannable for quick decision-making</li>
          <li>• Indicate if the field is required or optional</li>
          <li>• Use placeholder text that provides context about the expected selection</li>
          <li>• Consider the logical order of options (alphabetical, chronological, or by importance)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Grouping</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Group related options to improve usability and comprehension:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Use logical groupings that make sense to users</li>
          <li>• Provide clear group headers to distinguish categories</li>
          <li>• Limit the number of groups to avoid overwhelming users</li>
          <li>• Keep groups balanced in terms of number of options</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Choosing a Size</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Select the appropriate size based on your layout and content:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• <strong>Small:</strong> Use in compact layouts or secondary forms</li>
          <li>• <strong>Medium:</strong> Default size for most use cases</li>
          <li>• <strong>Large:</strong> Use for primary actions or when more prominence is needed</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Optional Search Bar</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Include a search bar when you have many options:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Enable search for lists with more than 10 options</li>
          <li>• Use placeholder text like "Search..." or "Filter options..."</li>
          <li>• Implement real-time filtering as the user types</li>
          <li>• Show "No results found" when search yields no matches</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Accessibility</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Ensure proper ARIA labels and roles</li>
          <li>• Support keyboard navigation (Tab, Enter, Space, Arrow keys)</li>
          <li>• Announce selection changes to screen readers</li>
          <li>• Use sufficient color contrast for all states</li>
          <li>• Provide clear focus indicators</li>
        </ul>
      </div>
    </div>
  );

  const renderComponentTab = () => (
    <div>
      {/* Select States */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Select States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Default</span>
              <div className="select-container">
                <div className="select-input">
                  <span className="select-placeholder">Select an option...</span>
                  <ChevronDown className="select-trigger" />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Filled</span>
              <div className="select-container">
                <div className="select-input">
                  <span className="select-display">Option 2</span>
                  <ChevronDown className="select-trigger" />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Focus</span>
              <div className="select-container select-focus">
                <div className="select-input">
                  <span className="select-placeholder">Select an option...</span>
                  <ChevronDown className="select-trigger rotate-180" />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Disabled</span>
              <div className="select-container select-disabled">
                <div className="select-input">
                  <span className="select-placeholder">Select an option...</span>
                  <ChevronDown className="select-trigger" />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Invalid</span>
              <div className="select-container select-invalid">
                <div className="select-input">
                  <span className="select-placeholder">Select an option...</span>
                  <ChevronDown className="select-trigger" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Select Sizes */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Select Sizes</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Small</span>
              <div className="select-container select-small">
                <div className="select-input">
                  <span className="select-placeholder">Select an option...</span>
                  <ChevronDown className="select-trigger" />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Medium</span>
              <div className="select-container">
                <div className="select-input">
                  <span className="select-placeholder">Select an option...</span>
                  <ChevronDown className="select-trigger" />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Large</span>
              <div className="select-container select-large">
                <div className="select-input">
                  <span className="select-placeholder">Select an option...</span>
                  <ChevronDown className="select-trigger" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Panel */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Dropdown Panel</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm mx-auto">
            <div className="select-panel relative">
              <div className="select-search">
                <input
                  type="text"
                  placeholder="Search..."
                  className="select-search-input"
                />
                <Search className="select-search-icon" />
              </div>
              
              <div className="select-items">
                <div className="select-item">Option 1</div>
                <div className="select-item select-item-selected">Option 2</div>
                <div className="select-item">Option 3</div>
                <div className="select-item">Option 4</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Select with Groups */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Select with Groups</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm mx-auto">
            <div className="select-panel relative">
              <div className="select-items">
                <div className="select-group-header">Group 1</div>
                <div className="select-item">Option 1</div>
                <div className="select-item">Option 2</div>
                <div className="select-item select-item-selected">Option 3</div>
                
                <div className="select-group-header">Group 2</div>
                <div className="select-item">Option 4</div>
                <div className="select-item">Option 5</div>
                <div className="select-item">Option 6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTokensTab = () => {
    const tokens = [
      { token: 'select-border-radius', type: 'Border Radius', color: '', value: '6px', rawValue: '0.375rem' },
      { token: 'select-border-color', type: 'Border Color', color: '#cbd5e1', value: '#cbd5e1', rawValue: 'surface.300' },
      { token: 'select-border-focus', type: 'Border Color', color: '#0f766e', value: '#0f766e', rawValue: 'primary.700' },
      { token: 'select-border-invalid', type: 'Border Color', color: '#ef4444', value: '#ef4444', rawValue: 'red.500' },
      { token: 'select-bg-color', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'select-text-color', type: 'Text Color', color: '#0f172a', value: '#0f172a', rawValue: 'surface.900' },
      { token: 'select-placeholder-color', type: 'Text Color', color: '#94a3b8', value: '#94a3b8', rawValue: 'surface.400' },
      { token: 'select-disabled-bg', type: 'Background Color', color: '#f1f5f9', value: '#f1f5f9', rawValue: 'surface.100' },
      { token: 'select-disabled-text', type: 'Text Color', color: '#94a3b8', value: '#94a3b8', rawValue: 'surface.400' },
      { token: 'select-panel-bg', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'select-panel-shadow', type: 'Box Shadow', color: '', value: '0 10px 15px -3px rgb(0 0 0 / 0.1)', rawValue: 'shadow.lg' },
      { token: 'select-item-hover-bg', type: 'Background Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface.50' },
      { token: 'select-item-selected-bg', type: 'Background Color', color: '#f0fdfa', value: '#f0fdfa', rawValue: 'primary.50' },
      { token: 'select-search-bg', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'select-group-header-bg', type: 'Background Color', color: '#f1f5f9', value: '#f1f5f9', rawValue: 'surface.100' },
      { token: 'select-group-header-text', type: 'Text Color', color: '#64748b', value: '#64748b', rawValue: 'surface.500' },
      { token: 'select-padding-small', type: 'Spacing', color: '', value: '6px 12px', rawValue: '0.375rem 0.75rem' },
      { token: 'select-padding-medium', type: 'Spacing', color: '', value: '8px 12px', rawValue: '0.5rem 0.75rem' },
      { token: 'select-padding-large', type: 'Spacing', color: '', value: '12px 16px', rawValue: '0.75rem 1rem' },
      { token: 'select-trigger-size', type: 'Size', color: '', value: '16px', rawValue: '1rem' },
    ];

    return (
      <div>
        <div className="mb-8">
          <h3 className="text-h3 text-navy-900 mb-6">Select Token Documentation</h3>
          <p className="text-body-copy-medium text-navy-600 mb-6">
            These design tokens define the visual properties of the Select component.
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
    <div className="mb-16">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>
          <div>
            <h2 className="text-h2 text-navy-900">Select</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                COMPLETED
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          A select is a single element used to choose one option from a list of predefined options. Use for single-choice selections when you want to save space compared to radio buttons and when options are not immediately visible.
        </p>
        
        <a 
          href="https://primeng.org/dropdown" 
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
                code={selectCode}
              />
            </div>
            
            <div className="bg-white border border-surface-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-4">React Component</h4>
              <CodeBlock
                language="jsx"
                code={reactSelectCode}
              />
            </div>
          </div>
        </div>
      )}

      {/* Best Practices */}
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
                    <span>Use for single selection from a list of options</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Provide search functionality for long lists</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Group related options logically</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Use clear, descriptive option labels</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Show selected value clearly in the input</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-navy-900 mb-4 text-red-700">Don't</h4>
                <ul className="space-y-3 text-navy-600">
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use for multiple selections (use MultiSelect instead)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Make lists too long without search or grouping</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use unclear or ambiguous option labels</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use for less than 4 options (use radio buttons instead)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Forget to provide clear selection feedback</span>
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

export default SelectSection;