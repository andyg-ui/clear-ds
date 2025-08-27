import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import CodeBlock from '../CodeBlock';

const MultiSelectSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('copy-me');
  
  // Basic MultiSelect state
  const [basicDropdownOpen, setBasicDropdownOpen] = useState(false);
  const [basicSelectedOptions, setBasicSelectedOptions] = useState<string[]>([]);
  const [basicSearchTerm, setBasicSearchTerm] = useState('');
  
  // Chips MultiSelect state
  const [chipsDropdownOpen, setChipsDropdownOpen] = useState(false);
  const [chipsSelectedOptions, setChipsSelectedOptions] = useState<string[]>(['Option 2', 'Option 4']);
  const [chipsSearchTerm, setChipsSearchTerm] = useState('');
  
  // Grouped MultiSelect state
  const [groupedDropdownOpen, setGroupedDropdownOpen] = useState(false);
  const [groupedSelectedOptions, setGroupedSelectedOptions] = useState<string[]>(['Option 3']);
  
  // MultiSelect with Search state
  const [searchMultiDropdownOpen, setSearchMultiDropdownOpen] = useState(false);
  const [searchMultiSelectedOptions, setSearchMultiSelectedOptions] = useState<string[]>(['Option 2']);
  const [searchMultiSearchTerm, setSearchMultiSearchTerm] = useState('');
  
  // Component states
  const [componentStates, setComponentStates] = useState({
    default: false,
    filled: false,
    focus: false,
    disabled: false
  });
  
  const basicRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const groupedRef = useRef<HTMLDivElement>(null);
  const searchMultiRef = useRef<HTMLDivElement>(null);
  
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
      if (chipsRef.current && !chipsRef.current.contains(event.target as Node)) {
        setChipsDropdownOpen(false);
      }
      if (groupedRef.current && !groupedRef.current.contains(event.target as Node)) {
        setGroupedDropdownOpen(false);
      }
      if (searchMultiRef.current && !searchMultiRef.current.contains(event.target as Node)) {
        setSearchMultiDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleOptionToggle = (option: string, selectedOptions: string[], setSelectedOptions: (options: string[]) => void) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  
  const removeChip = (option: string, selectedOptions: string[], setSelectedOptions: (options: string[]) => void) => {
    setSelectedOptions(selectedOptions.filter(item => item !== option));
  };
  
  const getFilteredOptions = (searchTerm: string) => {
    return options.filter(option => 
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  const multiSelectCode = `<!-- Basic MultiSelect -->
<div class="multiselect-container">
  <div class="multiselect-input">
    <span class="multiselect-placeholder">Select options...</span>
    <i class="pi pi-chevron-down multiselect-trigger"></i>
  </div>
</div>

<!-- MultiSelect Dropdown -->
<div class="multiselect-panel">
  <div class="multiselect-search">
    <input type="text" placeholder="Search..." class="multiselect-search-input" />
    <i class="pi pi-search multiselect-search-icon"></i>
  </div>
  
  <div class="multiselect-items">
    <div class="multiselect-item">
      <input type="checkbox" class="multiselect-checkbox" />
      <label class="multiselect-label">Option 1</label>
    </div>
    <div class="multiselect-item multiselect-item-selected">
      <input type="checkbox" checked class="multiselect-checkbox" />
      <label class="multiselect-label">Option 2</label>
    </div>
  </div>
</div>

<!-- MultiSelect with Chips -->
<div class="multiselect-container">
  <div class="multiselect-input multiselect-input-chips">
    <div class="multiselect-chip">
      <span>Option 1</span>
      <i class="pi pi-times multiselect-chip-remove"></i>
    </div>
    <div class="multiselect-chip">
      <span>Option 2</span>
      <i class="pi pi-times multiselect-chip-remove"></i>
    </div>
    <i class="pi pi-chevron-down multiselect-trigger"></i>
  </div>
</div>`;

  const reactMultiSelectCode = `// React MultiSelect Component
const MultiSelect = ({ 
  options = [],
  selectedValues = [],
  onChange,
  placeholder = "Select options...",
  searchable = false,
  disabled = false,
  showChips = false,
  grouped = false,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredOptions = searchable 
    ? options.filter(option => 
        option.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;
  
  const handleOptionToggle = (option) => {
    const newSelection = selectedValues.includes(option)
      ? selectedValues.filter(item => item !== option)
      : [...selectedValues, option];
    onChange?.(newSelection);
  };
  
  const removeChip = (option) => {
    const newSelection = selectedValues.filter(item => item !== option);
    onChange?.(newSelection);
  };
  
  return (
    <div className="relative">
      <div 
        className={\`multiselect-container \${disabled ? 'multiselect-disabled' : ''}\`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="multiselect-input">
          {showChips && selectedValues.length > 0 ? (
            <div className="multiselect-chips">
              {selectedValues.map((value, index) => (
                <div key={index} className="multiselect-chip">
                  <span>{value}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeChip(value);
                    }}
                    className="multiselect-chip-remove"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <span className="multiselect-display">
              {selectedValues.length > 0 
                ? selectedValues.join(', ') 
                : placeholder
              }
            </span>
          )}
          <ChevronDown className="multiselect-trigger" />
        </div>
      </div>
      
      {isOpen && !disabled && (
        <div className="multiselect-panel">
          {searchable && (
            <div className="multiselect-search">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="multiselect-search-input"
              />
              <Search className="multiselect-search-icon" />
            </div>
          )}
          
          <div className="multiselect-items">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                className={\`multiselect-item \${selectedValues.includes(option) ? 'multiselect-item-selected' : ''}\`}
                onClick={() => handleOptionToggle(option)}
              >
                <input
                  type="checkbox"
                  checked={selectedValues.includes(option)}
                  onChange={() => {}}
                  className="multiselect-checkbox"
                />
                <label className="multiselect-label">{option}</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};`;

  const renderCopyMeTab = () => (
    <div>
      {/* Basic MultiSelect */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Basic MultiSelect</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm">
            <label className="block text-sm font-medium text-navy-600 mb-2">
              Select Options
            </label>
            <div className="relative" ref={basicRef}>
              <div 
                className={`multiselect-container ${basicDropdownOpen ? 'multiselect-focus' : ''}`}
                onClick={() => setBasicDropdownOpen(!basicDropdownOpen)}
              >
                <div className="multiselect-input">
                  <span className={`multiselect-display ${basicSelectedOptions.length === 0 ? 'multiselect-placeholder' : ''}`}>
                    {basicSelectedOptions.length > 0 
                      ? basicSelectedOptions.join(', ') 
                      : 'Select options...'
                    }
                  </span>
                  <ChevronDown className={`multiselect-trigger ${basicDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
              
              {basicDropdownOpen && (
                <div className="multiselect-panel">
                  <div className="multiselect-search">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={basicSearchTerm}
                      onChange={(e) => setBasicSearchTerm(e.target.value)}
                      className="multiselect-search-input"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <Search className="multiselect-search-icon" />
                  </div>
                  
                  <div className="multiselect-items">
                    {getFilteredOptions(basicSearchTerm).map((option, index) => (
                      <div
                        key={index}
                        className={`multiselect-item ${basicSelectedOptions.includes(option) ? 'multiselect-item-selected' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOptionToggle(option, basicSelectedOptions, setBasicSelectedOptions);
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={basicSelectedOptions.includes(option)}
                          onChange={() => {}}
                          className="multiselect-checkbox"
                        />
                        <label className="multiselect-label">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MultiSelect with Chips */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">MultiSelect with Chips</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm">
            <label className="block text-sm font-medium text-navy-600 mb-2">
              Select Options
            </label>
            <div className="relative" ref={chipsRef}>
              <div 
                className={`multiselect-container ${chipsDropdownOpen ? 'multiselect-focus' : ''}`}
                onClick={() => setChipsDropdownOpen(!chipsDropdownOpen)}
              >
                <div className="multiselect-input multiselect-input-chips">
                  {chipsSelectedOptions.length > 0 ? (
                    <div className="multiselect-chips">
                      {chipsSelectedOptions.map((option, index) => (
                        <div key={index} className="multiselect-chip">
                          <span>{option}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeChip(option, chipsSelectedOptions, setChipsSelectedOptions);
                            }}
                            className="multiselect-chip-remove"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="multiselect-placeholder">Select options...</span>
                  )}
                  <ChevronDown className={`multiselect-trigger ${chipsDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
              
              {chipsDropdownOpen && (
                <div className="multiselect-panel">
                  <div className="multiselect-search">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={chipsSearchTerm}
                      onChange={(e) => setChipsSearchTerm(e.target.value)}
                      className="multiselect-search-input"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <Search className="multiselect-search-icon" />
                  </div>
                  
                  <div className="multiselect-items">
                    {getFilteredOptions(chipsSearchTerm).map((option, index) => (
                      <div
                        key={index}
                        className={`multiselect-item ${chipsSelectedOptions.includes(option) ? 'multiselect-item-selected' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOptionToggle(option, chipsSelectedOptions, setChipsSelectedOptions);
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={chipsSelectedOptions.includes(option)}
                          onChange={() => {}}
                          className="multiselect-checkbox"
                        />
                        <label className="multiselect-label">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Grouped MultiSelect */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Grouped MultiSelect</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm">
            <label className="block text-sm font-medium text-navy-600 mb-2">
              Select Options
            </label>
            <div className="relative" ref={groupedRef}>
              <div 
                className={`multiselect-container ${groupedDropdownOpen ? 'multiselect-focus' : ''}`}
                onClick={() => setGroupedDropdownOpen(!groupedDropdownOpen)}
              >
                <div className="multiselect-input">
                  <span className={`multiselect-display ${groupedSelectedOptions.length === 0 ? 'multiselect-placeholder' : ''}`}>
                    {groupedSelectedOptions.length > 0 
                      ? groupedSelectedOptions.join(', ') 
                      : 'Select options...'
                    }
                  </span>
                  <ChevronDown className={`multiselect-trigger ${groupedDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
              
              {groupedDropdownOpen && (
                <div className="multiselect-panel">
                  <div className="multiselect-items">
                    {Object.entries(groupedOptions).map(([groupName, groupOptions]) => (
                      <div key={groupName}>
                        <div className="multiselect-group-header">
                          {groupName}
                        </div>
                        {groupOptions.map((option, index) => (
                          <div
                            key={index}
                            className={`multiselect-item ${groupedSelectedOptions.includes(option) ? 'multiselect-item-selected' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOptionToggle(option, groupedSelectedOptions, setGroupedSelectedOptions);
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={groupedSelectedOptions.includes(option)}
                              onChange={() => {}}
                              className="multiselect-checkbox"
                            />
                            <label className="multiselect-label">{option}</label>
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

      {/* MultiSelect with Search */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">MultiSelect with Search</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm">
            <label className="block text-sm font-medium text-navy-600 mb-2">
              Select Options
            </label>
            <div className="relative" ref={searchMultiRef}>
              <div 
                className={`multiselect-container ${searchMultiDropdownOpen ? 'multiselect-focus' : ''}`}
                onClick={() => setSearchMultiDropdownOpen(!searchMultiDropdownOpen)}
              >
                <div className="multiselect-input">
                  <span className={`multiselect-display ${searchMultiSelectedOptions.length === 0 ? 'multiselect-placeholder' : ''}`}>
                    {searchMultiSelectedOptions.length > 0 
                      ? searchMultiSelectedOptions.join(', ') 
                      : 'Select options...'
                    }
                  </span>
                  <ChevronDown className={`multiselect-trigger ${searchMultiDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
              
              {searchMultiDropdownOpen && (
                <div className="multiselect-panel">
                  <div className="multiselect-search">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchMultiSearchTerm}
                      onChange={(e) => setSearchMultiSearchTerm(e.target.value)}
                      className="multiselect-search-input"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <Search className="multiselect-search-icon" />
                  </div>
                  
                  <div className="multiselect-items">
                    {getFilteredOptions(searchMultiSearchTerm).map((option, index) => (
                      <div
                        key={index}
                        className={`multiselect-item ${searchMultiSelectedOptions.includes(option) ? 'multiselect-item-selected' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOptionToggle(option, searchMultiSelectedOptions, setSearchMultiSelectedOptions);
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={searchMultiSelectedOptions.includes(option)}
                          onChange={() => {}}
                          className="multiselect-checkbox"
                        />
                        <label className="multiselect-label">{option}</label>
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
        <h3 className="text-h3 text-navy-900 mb-4">When to Use MultiSelect</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Use MultiSelect when you need users to choose multiple options from a predefined list. 
          This component is ideal for filtering, categorization, or when users need to select 
          several related items at once.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Labeling</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Use clear, descriptive labels that indicate multiple selection is possible</li>
          <li>• Consider using helper text to clarify the selection behavior</li>
          <li>• Indicate if the field is required or optional</li>
          <li>• Use placeholder text that suggests multiple selection (e.g., "Select options...")</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Grouping</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Group related options together to improve usability:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Use logical groupings that make sense to users</li>
          <li>• Keep group names short and descriptive</li>
          <li>• Consider alphabetical ordering within groups</li>
          <li>• Don't create too many small groups</li>
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
      {/* MultiSelect States */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">MultiSelect States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Default</span>
              <div className="multiselect-container">
                <div className="multiselect-input">
                  <span className="multiselect-placeholder">Select options...</span>
                  <ChevronDown className="multiselect-trigger" />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Filled</span>
              <div className="multiselect-container">
                <div className="multiselect-input">
                  <span className="multiselect-display">Option 1, Option 2</span>
                  <ChevronDown className="multiselect-trigger" />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Focus</span>
              <div className="multiselect-container multiselect-focus">
                <div className="multiselect-input">
                  <span className="multiselect-placeholder">Select options...</span>
                  <ChevronDown className="multiselect-trigger rotate-180" />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Disabled</span>
              <div className="multiselect-container multiselect-disabled">
                <div className="multiselect-input">
                  <span className="multiselect-placeholder">Select options...</span>
                  <ChevronDown className="multiselect-trigger" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MultiSelect Sizes */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">MultiSelect Sizes</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Small</span>
              <div className="multiselect-container multiselect-small">
                <div className="multiselect-input">
                  <span className="multiselect-placeholder">Select options...</span>
                  <ChevronDown className="multiselect-trigger" />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Medium</span>
              <div className="multiselect-container">
                <div className="multiselect-input">
                  <span className="multiselect-placeholder">Select options...</span>
                  <ChevronDown className="multiselect-trigger" />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Large</span>
              <div className="multiselect-container multiselect-large">
                <div className="multiselect-input">
                  <span className="multiselect-placeholder">Select options...</span>
                  <ChevronDown className="multiselect-trigger" />
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
            <div className="multiselect-panel relative">
              <div className="multiselect-search">
                <input
                  type="text"
                  placeholder="Search..."
                  className="multiselect-search-input"
                />
                <Search className="multiselect-search-icon" />
              </div>
              
              <div className="multiselect-items">
                <div className="multiselect-item">
                  <input type="checkbox" className="multiselect-checkbox" />
                  <label className="multiselect-label">Option 1</label>
                </div>
                <div className="multiselect-item multiselect-item-selected">
                  <input type="checkbox" checked className="multiselect-checkbox" />
                  <label className="multiselect-label">Option 2</label>
                </div>
                <div className="multiselect-item">
                  <input type="checkbox" className="multiselect-checkbox" />
                  <label className="multiselect-label">Option 3</label>
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
      { token: 'multiselect-border-radius', type: 'Border Radius', color: '', value: '6px', rawValue: '0.375rem' },
      { token: 'multiselect-border-color', type: 'Border Color', color: '#cbd5e1', value: '#cbd5e1', rawValue: 'surface.300' },
      { token: 'multiselect-border-focus', type: 'Border Color', color: '#0f766e', value: '#0f766e', rawValue: 'primary.700' },
      { token: 'multiselect-bg-color', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'multiselect-text-color', type: 'Text Color', color: '#0f172a', value: '#0f172a', rawValue: 'surface.900' },
      { token: 'multiselect-placeholder-color', type: 'Text Color', color: '#94a3b8', value: '#94a3b8', rawValue: 'surface.400' },
      { token: 'multiselect-disabled-bg', type: 'Background Color', color: '#f1f5f9', value: '#f1f5f9', rawValue: 'surface.100' },
      { token: 'multiselect-disabled-text', type: 'Text Color', color: '#94a3b8', value: '#94a3b8', rawValue: 'surface.400' },
      { token: 'multiselect-panel-bg', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'multiselect-panel-shadow', type: 'Box Shadow', color: '', value: '0 10px 15px -3px rgb(0 0 0 / 0.1)', rawValue: 'shadow.lg' },
      { token: 'multiselect-item-hover-bg', type: 'Background Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface.50' },
      { token: 'multiselect-item-selected-bg', type: 'Background Color', color: '#f0fdfa', value: '#f0fdfa', rawValue: 'primary.50' },
      { token: 'multiselect-chip-bg', type: 'Background Color', color: '#0f766e', value: '#0f766e', rawValue: 'primary.700' },
      { token: 'multiselect-chip-text', type: 'Text Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'multiselect-search-bg', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'multiselect-group-header-bg', type: 'Background Color', color: '#f1f5f9', value: '#f1f5f9', rawValue: 'surface.100' },
      { token: 'multiselect-group-header-text', type: 'Text Color', color: '#64748b', value: '#64748b', rawValue: 'surface.500' },
      { token: 'multiselect-padding-small', type: 'Spacing', color: '', value: '6px 12px', rawValue: '0.375rem 0.75rem' },
      { token: 'multiselect-padding-medium', type: 'Spacing', color: '', value: '8px 12px', rawValue: '0.5rem 0.75rem' },
      { token: 'multiselect-padding-large', type: 'Spacing', color: '', value: '12px 16px', rawValue: '0.75rem 1rem' },
    ];

    return (
      <div>
        <div className="mb-8">
          <h3 className="text-h3 text-navy-900 mb-6">MultiSelect Token Documentation</h3>
          <p className="text-body-copy-medium text-navy-600 mb-6">
            These design tokens define the visual properties of the MultiSelect component.
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
            <h2 className="text-h2 text-navy-900">MultiSelect</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                COMPLETED
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          MultiSelect is used to select multiple options from a dropdown list. It allows users to choose several items at once, with options displayed as comma-separated text or as removable chips within the input field.
        </p>
        
        <a 
          href="https://primeng.org/multiselect" 
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
                code={multiSelectCode}
              />
            </div>
            
            <div className="bg-white border border-surface-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-4">React Component</h4>
              <CodeBlock
                language="jsx"
                code={reactMultiSelectCode}
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
                    <span>Use clear labels that indicate multiple selection</span>
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
                    <span>Use chips for better visual feedback</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Show selected count for large selections</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-navy-900 mb-4 text-red-700">Don't</h4>
                <ul className="space-y-3 text-navy-600">
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use for single selection (use Select instead)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Make lists too long without search</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use unclear or ambiguous option labels</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Forget to provide clear selection feedback</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Mix different selection patterns in one form</span>
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

export default MultiSelectSection;