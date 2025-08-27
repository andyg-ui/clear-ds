import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CodeBlock from '../CodeBlock';

const ListBoxSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('copy-me');
  
  const [basicSelections, setBasicSelections] = useState({
    default: [],
    selected: ['Option 2'],
    multiple: ['Option 1', 'Option 3'],
    disabled: []
  });

  const [stateSelections, setStateSelections] = useState({
    default: [],
    focus: ['Option 2'],
    disabled: []
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [searchSelections, setSearchSelections] = useState(['Option 3']);
  const [groupSelections, setGroupSelections] = useState(['Option 3']);

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedOptions = {
    'Group 1': ['Option 1', 'Option 2'],
    'Group 2': ['Option 3', 'Option 4']
  };

  const handleSelectionChange = (section: string, option: string) => {
    if (section === 'search') {
      setSearchSelections(prev => 
        prev.includes(option) 
          ? prev.filter(item => item !== option)
          : [...prev, option]
      );
    } else if (section === 'group') {
      setGroupSelections(prev => 
        prev.includes(option) 
          ? prev.filter(item => item !== option)
          : [...prev, option]
      );
    } else {
      const currentSelections = section === 'basic' ? basicSelections : stateSelections;
      const setSelections = section === 'basic' ? setBasicSelections : setStateSelections;
      
      setSelections(prev => ({
        ...prev,
        [option]: prev[option as keyof typeof prev].includes(option)
          ? prev[option as keyof typeof prev].filter((item: string) => item !== option)
          : [...prev[option as keyof typeof prev], option]
      }));
    }
  };

  const listBoxCode = `<!-- Basic ListBox -->
<div class="border border-surface-300 rounded-md bg-white overflow-hidden shadow-sm max-h-48">
  <div class="overflow-y-auto max-h-40">
    <div class="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer">
      <input 
        type="checkbox" 
        id="option1" 
        class="w-4 h-4 text-teal-500 border-surface-300 rounded focus:ring-teal-500 focus:ring-2 mr-3"
      />
      <label for="option1" class="text-sm text-surface-700 cursor-pointer select-none flex-1">
        Option 1
      </label>
    </div>
    <div class="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer">
      <input 
        type="checkbox" 
        id="option2" 
        checked
        class="w-4 h-4 text-teal-500 border-surface-300 rounded focus:ring-teal-500 focus:ring-2 mr-3"
      />
      <label for="option2" class="text-sm text-surface-700 cursor-pointer select-none flex-1">
        Option 2
      </label>
    </div>
  </div>
</div>

<!-- ListBox with Search -->
<div class="border border-navy-100 rounded-md bg-white overflow-hidden shadow-sm max-h-48">
  <div class="p-2 border-b border-surface-200 bg-surface-50">
    <input 
      type="text" 
      placeholder="Search options..."
      class="w-full px-3 py-2 text-sm border border-navy-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
    />
  </div>
  <div class="overflow-y-auto max-h-40">
    <!-- Options here -->
  </div>
</div>`;

  const reactListBoxCode = `// React ListBox Component
const ListBox = ({ 
  options = [],
  selectedValues = [],
  onChange,
  searchable = false,
  disabled = false,
  grouped = false,
  ...props 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredOptions = searchable 
    ? options.filter(option => 
        option.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;
  
  const handleSelectionChange = (option) => {
    const newSelection = selectedValues.includes(option)
      ? selectedValues.filter(item => item !== option)
      : [...selectedValues, option];
    onChange?.(newSelection);
  };
  
  return (
    <div className={\`
      border border-navy-100 rounded-md bg-white overflow-hidden shadow-sm max-h-48
      \${disabled ? 'bg-surface-100 opacity-60' : ''}
    \`}>
      {searchable && (
        <div className="p-2 border-b border-navy-100 bg-surface-50">
          <input
            type="text"
            placeholder="Search options..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-navy-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      )}
      
      <div className="overflow-y-auto max-h-40">
        {filteredOptions.map((option, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer"
            onClick={() => !disabled && handleSelectionChange(option)}
          >
            <input
              type="checkbox"
              checked={selectedValues.includes(option)}
              onChange={() => handleSelectionChange(option)}
              disabled={disabled}
              className="checkbox-input checkbox-small mr-3 focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
            />
            <label className="text-sm text-surface-700 cursor-pointer select-none flex-1">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};`;

  const renderCopyMeTab = () => (
    <div>
      {/* Basic ListBox */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Basic ListBox</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Default</span>
              <div className="border border-navy-100 rounded-md bg-white overflow-hidden shadow-sm max-h-48 w-40">
                <div className="overflow-y-auto max-h-40">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer"
                      onClick={() => handleSelectionChange('basic', 'default')}
                    >
                      <input
                        type="checkbox"
                        checked={basicSelections.default.includes(option)}
                        onChange={() => {}}
                        className="checkbox-input checkbox-small mr-3 focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                      />
                      <label className="text-sm text-surface-700 cursor-pointer select-none flex-1">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Selected</span>
              <div className="border border-navy-100 rounded-md bg-white overflow-hidden shadow-sm max-h-48 w-40">
                <div className="overflow-y-auto max-h-40">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={basicSelections.selected.includes(option)}
                        onChange={() => {}}
                        className="checkbox-input checkbox-small mr-3 focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                      />
                      <label className="text-sm text-surface-700 cursor-pointer select-none flex-1">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Multiple Selected</span>
              <div className="border border-navy-100 rounded-md bg-white overflow-hidden shadow-sm max-h-48 w-40">
                <div className="overflow-y-auto max-h-40">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={basicSelections.multiple.includes(option)}
                        onChange={() => {}}
                        className="checkbox-input checkbox-small mr-3 focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                      />
                      <label className="text-sm text-surface-700 cursor-pointer select-none flex-1">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Disabled</span>
              <div className="border border-navy-100 rounded-md bg-surface-100 overflow-hidden shadow-sm max-h-48 w-40 opacity-60">
                <div className="overflow-y-auto max-h-40">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 cursor-not-allowed"
                    >
                      <input
                        type="checkbox"
                        disabled
                        className="checkbox-input checkbox-small mr-3 opacity-50 cursor-not-allowed"
                      />
                      <label className="text-sm text-surface-400 cursor-not-allowed select-none flex-1">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ListBox States */}
      <div className="mb-12">
        <h3 className="text-h3 text-surface-900 mb-6">ListBox States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Default</span>
              <div className="border border-navy-100 rounded-md bg-white overflow-hidden shadow-sm max-h-48 w-40">
                <div className="overflow-y-auto max-h-40">
                  {options.slice(0, 3).map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={stateSelections.default.includes(option)}
                        onChange={() => {}}
                        className="checkbox-input checkbox-small mr-3 focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                      />
                      <label className="text-sm text-surface-700 cursor-pointer select-none flex-1">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Focus</span>
              <div className="border border-teal-500 rounded-md bg-white overflow-hidden shadow-sm max-h-48 w-40 ring-2 ring-teal-500 ring-opacity-20">
                <div className="overflow-y-auto max-h-40">
                  {options.slice(0, 3).map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={stateSelections.focus.includes(option)}
                        onChange={() => {}}
                        className="checkbox-input checkbox-small mr-3 focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                      />
                      <label className="text-sm text-surface-700 cursor-pointer select-none flex-1">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Disabled</span>
              <div className="border border-navy-100 rounded-md bg-surface-100 overflow-hidden shadow-sm max-h-48 w-40 opacity-60">
                <div className="overflow-y-auto max-h-40">
                  {options.slice(0, 3).map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 cursor-not-allowed"
                    >
                      <input
                        type="checkbox"
                        disabled
                        className="checkbox-input checkbox-small mr-3 opacity-50 cursor-not-allowed"
                      />
                      <label className="text-sm text-surface-400 cursor-not-allowed select-none flex-1">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced ListBox */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Advanced ListBox</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">ListBox with Search</span>
              <div className="border border-surface-300 rounded-md bg-white overflow-hidden shadow-sm max-h-48 w-48">
                <div className="p-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search options..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-sm border border-surface-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-surface-400" />
                  </div>
                </div>
                <div className="overflow-y-auto max-h-32">
                  {filteredOptions.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer"
                      onClick={() => handleSelectionChange('search', option)}
                    >
                      <input
                        type="checkbox"
                        checked={searchSelections.includes(option)}
                        onChange={() => {}}
                        className="checkbox-input checkbox-small mr-3 focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                      />
                      <label className="text-sm text-surface-700 cursor-pointer select-none flex-1">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">ListBox with Groups</span>
              <div className="border border-surface-300 rounded-md bg-white overflow-hidden shadow-sm max-h-48 w-48">
                <div className="overflow-y-auto max-h-40">
                  {Object.entries(groupedOptions).map(([groupName, groupOptions]) => (
                    <div key={groupName}>
                      <div className="px-3 py-2 text-xs font-semibold text-surface-500 uppercase tracking-wide bg-surface-100 border-b border-surface-200">
                        {groupName}
                      </div>
                      {groupOptions.map((option, index) => (
                        <div
                          key={index}
                          className="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer"
                          onClick={() => handleSelectionChange('group', option)}
                        >
                          <input
                            type="checkbox"
                            checked={groupSelections.includes(option)}
                            onChange={() => {}}
                            className="checkbox-input checkbox-small mr-3 focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                          />
                          <label className="text-sm text-surface-700 cursor-pointer select-none flex-1">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
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
        <h3 className="text-h3 text-navy-900 mb-4">When to Use ListBox</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Use ListBox when you need users to select one or more options from a visible list. 
          Unlike dropdowns, ListBox shows all available options at once, making it ideal when 
          you want users to see all choices without additional interaction.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Labeling</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Use clear, descriptive labels that indicate multiple selection is possible</li>
          <li>• Consider using helper text to clarify the selection behavior</li>
          <li>• Indicate if the field is required or optional</li>
          <li>• Use consistent terminology across similar components</li>
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
        <h3 className="text-h3 text-navy-900 mb-4">Search Functionality</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Include search when you have many options:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Enable search for lists with more than 10 options</li>
          <li>• Use placeholder text like "Search options..."</li>
          <li>• Implement real-time filtering as the user types</li>
          <li>• Show "No results found" when search yields no matches</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Accessibility</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Ensure proper ARIA labels and roles</li>
          <li>• Support keyboard navigation (Tab, Space, Arrow keys)</li>
          <li>• Announce selection changes to screen readers</li>
          <li>• Use sufficient color contrast for all states</li>
          <li>• Provide clear focus indicators</li>
        </ul>
      </div>
    </div>
  );

  const renderComponentTab = () => (
    <div>
      {/* ListBox States */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">ListBox States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-surface-500 uppercase tracking-wide">Default</span>
              <div className="border border-surface-300 rounded-md bg-white overflow-hidden shadow-sm max-h-48 w-40 mx-auto">
                <div className="overflow-y-auto max-h-40">
                  {options.slice(0, 3).map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="checkbox-input checkbox-small mr-3"
                      />
                      <label className="text-sm text-surface-700 cursor-pointer select-none flex-1">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-surface-500 uppercase tracking-wide">Focus</span>
              <div className="border border-teal-500 rounded-md bg-white overflow-hidden shadow-sm max-h-48 w-40 mx-auto ring-2 ring-teal-500 ring-opacity-20">
                <div className="overflow-y-auto max-h-40">
                  {options.slice(0, 3).map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={index === 1}
                        className="checkbox-input checkbox-small mr-3"
                      />
                      <label className="text-sm text-surface-700 cursor-pointer select-none flex-1">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-surface-500 uppercase tracking-wide">Disabled</span>
              <div className="border border-surface-300 rounded-md bg-surface-100 overflow-hidden shadow-sm max-h-48 w-40 mx-auto opacity-60">
                <div className="overflow-y-auto max-h-40">
                  {options.slice(0, 3).map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 cursor-not-allowed"
                    >
                      <input
                        type="checkbox"
                        disabled
                        className="checkbox-input checkbox-small mr-3 opacity-50 cursor-not-allowed"
                      />
                      <label className="text-sm text-surface-400 cursor-not-allowed select-none flex-1">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ListBox with Search */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">ListBox with Search</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="flex justify-center">
            <div className="border border-navy-100 rounded-md bg-white overflow-hidden shadow-sm max-h-48 w-48">
              <div className="p-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search options..."
                    className="w-full pl-8 pr-3 py-2 text-sm border border-navy-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-surface-400" />
                </div>
              </div>
              <div className="overflow-y-auto max-h-32">
                {options.slice(0, 4).map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={index === 2}
                      className="checkbox-input checkbox-small mr-3"
                    />
                    <label className="text-sm text-surface-700 cursor-pointer select-none flex-1">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ListBox with Groups */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">ListBox with Groups</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="flex justify-center">
            <div className="border border-navy-100 rounded-md bg-white overflow-hidden shadow-sm max-h-48 w-48">
              <div className="overflow-y-auto max-h-40">
                {Object.entries(groupedOptions).map(([groupName, groupOptions]) => (
                  <div key={groupName}>
                    <div className="px-3 py-2 text-xs font-semibold text-surface-500 uppercase tracking-wide bg-surface-100 border-b border-navy-100">
                      {groupName}
                    </div>
                    {groupOptions.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center px-3 py-2 hover:bg-surface-50 transition-colors cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={option === 'Option 3'}
                          className="checkbox-input checkbox-small mr-3"
                        />
                        <label className="text-sm text-surface-700 cursor-pointer select-none flex-1">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTokensTab = () => {
    const tokens = [
      { token: 'listbox-border-radius', type: 'Border Radius', color: '', value: '6px', rawValue: '0.375rem' },
      { token: 'listbox-border-color', type: 'Border Color', color: '#cbd5e1', value: '#cbd5e1', rawValue: 'surface.300' },
      { token: 'listbox-border-focus', type: 'Border Color', color: '#0f766e', value: '#0f766e', rawValue: 'primary.700' },
      { token: 'listbox-bg-color', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'listbox-bg-disabled', type: 'Background Color', color: '#f1f5f9', value: '#f1f5f9', rawValue: 'surface.100' },
      { token: 'listbox-text-color', type: 'Text Color', color: '#334155', value: '#334155', rawValue: 'surface.700' },
      { token: 'listbox-text-disabled', type: 'Text Color', color: '#94a3b8', value: '#94a3b8', rawValue: 'surface.400' },
      { token: 'listbox-item-hover-bg', type: 'Background Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface.50' },
      { token: 'listbox-item-selected-bg', type: 'Background Color', color: '#f0fdfa', value: '#f0fdfa', rawValue: 'primary.50' },
      { token: 'listbox-search-bg', type: 'Background Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface.50' },
      { token: 'listbox-search-border', type: 'Border Color', color: '#e2e8f0', value: '#e2e8f0', rawValue: 'surface.200' },
      { token: 'listbox-group-header-bg', type: 'Background Color', color: '#f1f5f9', value: '#f1f5f9', rawValue: 'surface.100' },
      { token: 'listbox-group-header-text', type: 'Text Color', color: '#64748b', value: '#64748b', rawValue: 'surface.500' },
      { token: 'listbox-shadow', type: 'Box Shadow', color: '', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)', rawValue: 'shadow.sm' },
      { token: 'listbox-focus-ring', type: 'Box Shadow', color: '#14b8a6', value: '0 0 0 2px rgba(20, 184, 166, 0.2)', rawValue: 'ring-teal-500' },
      { token: 'listbox-max-height', type: 'Size', color: '', value: '192px', rawValue: '12rem' },
      { token: 'listbox-item-padding', type: 'Spacing', color: '', value: '8px 12px', rawValue: '0.5rem 0.75rem' },
      { token: 'listbox-search-padding', type: 'Spacing', color: '', value: '12px', rawValue: '0.75rem' },
      { token: 'listbox-checkbox-margin', type: 'Spacing', color: '', value: '12px', rawValue: '0.75rem' },
    ];

    return (
      <div>
        <div className="mb-8">
          <h3 className="text-h3 text-navy-900 mb-6">ListBox Token Documentation</h3>
          <p className="text-body-copy-medium text-navy-600 mb-6">
            These design tokens define the visual properties of the ListBox component.
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
            <h2 className="text-h2 text-navy-900">ListBox</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                IN PROGRESS
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          ListBox is used to select one or more values from a list of items. Unlike dropdowns, 
          all options are visible at once, making it easier for users to see all available choices.
        </p>
        
        <a 
          href="https://primeng.org/listbox" 
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
                code={listBoxCode}
              />
            </div>
            
            <div className="bg-white border border-surface-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-4">React Component</h4>
              <CodeBlock
                language="jsx"
                code={reactListBoxCode}
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
                    <span>Use clear, descriptive labels for each option</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Provide search functionality for long lists</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Group related options together</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Show selected count for multiple selections</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Use consistent spacing and alignment</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-navy-900 mb-4 text-red-700">Don't</h4>
                <ul className="space-y-3 text-navy-600">
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Make lists too long without search or pagination</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use unclear or ambiguous option labels</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Mix single and multiple selection patterns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Forget to provide visual feedback for selections</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use ListBox for single selections (use Select instead)</span>
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

export default ListBoxSection;