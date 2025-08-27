import React, { useState } from 'react';
import CodeBlock from '../CodeBlock';

const CheckboxSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('copy-me');
  
  const [checkboxStates, setCheckboxStates] = useState({
    basic: { option1: false, option2: true, option3: false },
    states: { default: false, focus: true, disabled: false },
    sizes: { small: true, medium: false, large: true },
    validation: { valid: true, invalid: false }
  });

  const handleCheckboxChange = (section: string, option: string) => {
    setCheckboxStates(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [option]: (() => {
          const sectionState = prev[section as keyof typeof prev];
          return !sectionState[option as keyof typeof sectionState];
        })()
      }
    }));
  };

  const checkboxCode = `<!-- Basic Checkbox -->
<div class="flex items-center space-x-3">
  <input 
    type="checkbox" 
    id="option1" 
    class="checkbox-input checkbox-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
  />
  <label for="option1" class="text-sm font-medium text-gray-700">
    Option 1
  </label>
</div>

<!-- Disabled Checkbox -->
<div class="flex items-center space-x-3">
  <input 
    type="checkbox" 
    id="disabled" 
    disabled
    class="checkbox-input checkbox-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
  />
  <label for="disabled" class="text-sm font-medium text-gray-400">
    Disabled Option
  </label>
</div>`;

  const reactCheckboxCode = `// React Checkbox Component
const Checkbox = ({ 
  id,
  checked = false,
  disabled = false,
  size = 'medium',
  invalid = false,
  children,
  onChange,
  ...props 
}) => {
  const sizeClasses = {
    small: 'checkbox-small',
    medium: 'checkbox-medium',
    large: 'checkbox-large'
  };
  
  const baseClasses = \`
    checkbox-input \${sizeClasses[size]}
    \${invalid ? 'checkbox-invalid' : ''}
    \${invalid ? 'focus:ring-red-500' : 'focus:ring-teal-500'}
    focus:ring-2 focus:ring-offset-2 focus:ring-offset-white
  \`;
  
  return (
    <div className="flex items-center space-x-3">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={baseClasses}
        {...props}
      />
      <label 
        htmlFor={id} 
        className={\`text-sm font-medium \${
          disabled ? 'text-gray-400 cursor-not-allowed' : 
          invalid ? 'text-red-500' : 'text-gray-700'
        } cursor-pointer\`}
      >
        {children}
      </label>
    </div>
  );
};`;

  const renderCopyMeTab = () => (
    <div>
      {/* Basic Checkbox */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Basic Checkbox</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm">
            <label className="block text-sm font-medium text-surface-700 mb-4">
              Select options
            </label>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="basic-option1"
                  checked={checkboxStates.basic.option1}
                  onChange={() => handleCheckboxChange('basic', 'option1')}
                  className="checkbox-input checkbox-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="basic-option1" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option 1
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="basic-option2"
                  checked={checkboxStates.basic.option2}
                  onChange={() => handleCheckboxChange('basic', 'option2')}
                  className="checkbox-input checkbox-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="basic-option2" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option 2
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="basic-option3"
                  checked={checkboxStates.basic.option3}
                  onChange={() => handleCheckboxChange('basic', 'option3')}
                  className="checkbox-input checkbox-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="basic-option3" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation States */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Validation States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-body-small-semibold text-surface-500 uppercase tracking-wide">Valid</span>
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="valid-checkbox"
                  checked={checkboxStates.validation.valid}
                  onChange={() => handleCheckboxChange('validation', 'valid')}
                  className="checkbox-input checkbox-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="valid-checkbox" className="text-sm font-medium text-gray-700 cursor-pointer">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-surface-500 uppercase tracking-wide">Invalid</span>
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="invalid-checkbox"
                  checked={checkboxStates.validation.invalid}
                  onChange={() => handleCheckboxChange('validation', 'invalid')}
                  className="checkbox-input checkbox-medium checkbox-invalid focus:ring-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="invalid-checkbox" className="text-sm font-medium text-red-500 cursor-pointer">
                  Required field
                </label>
              </div>
              <p className="text-body-small-regular text-red-500 ml-8">
                This field is required
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuidanceTab = () => (
    <div>
      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">When to Use Checkbox</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Use checkboxes when you need users to select one or more options from a list of choices. 
          Checkboxes are ideal for forms where multiple selections are allowed and each option 
          can be independently selected or deselected.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Labeling</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Use clear, descriptive labels that clearly explain each option</li>
          <li>• Keep labels concise and scannable for quick decision-making</li>
          <li>• Use parallel structure and consistent terminology across options</li>
          <li>• Avoid negative phrasing that might confuse users</li>
          <li>• Make labels clickable to improve usability</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Layout & Grouping</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Organize checkboxes logically to improve user comprehension:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Group related options together with clear visual separation</li>
          <li>• Use consistent spacing between individual checkboxes</li>
          <li>• Consider the logical order of options (alphabetical, by importance, or frequency of use)</li>
          <li>• Use fieldsets and legends for screen reader accessibility</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Validation</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Provide clear feedback for validation states:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Use red styling for invalid/error states</li>
          <li>• Provide specific error messages that help users understand what's wrong</li>
          <li>• Show validation feedback immediately after user interaction</li>
          <li>• Use green styling sparingly for confirmed valid states</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Accessibility</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Ensure proper ARIA labels and fieldset grouping</li>
          <li>• Support keyboard navigation with Tab and Space keys</li>
          <li>• Provide sufficient color contrast for all states</li>
          <li>• Use focus indicators that meet accessibility standards</li>
          <li>• Announce selection changes to screen readers</li>
          <li>• Make click targets large enough for easy interaction</li>
        </ul>
      </div>
    </div>
  );

  const renderComponentTab = () => (
    <div>
      {/* Checkbox States */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Checkbox States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Default</span>
              <div className="flex items-center justify-center space-x-3">
                <input 
                  type="checkbox" 
                  id="state-default"
                  checked={checkboxStates.states.default}
                  onChange={() => handleCheckboxChange('states', 'default')}
                  className="checkbox-input checkbox-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="state-default" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option 1
                </label>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Selected</span>
              <div className="flex items-center justify-center space-x-3">
                <input 
                  type="checkbox" 
                  id="state-selected"
                  checked
                  className="checkbox-input checkbox-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="state-selected" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option 2
                </label>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Focus</span>
              <div className="flex items-center justify-center space-x-3">
                <input 
                  type="checkbox" 
                  id="state-focus"
                  checked={checkboxStates.states.focus}
                  onChange={() => handleCheckboxChange('states', 'focus')}
                  className="checkbox-input checkbox-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white ring-teal-500 ring-2 ring-offset-2 ring-offset-white"
                />
                <label htmlFor="state-focus" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option 3
                </label>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Disabled</span>
              <div className="flex items-center justify-center space-x-3">
                <input 
                  type="checkbox" 
                  id="state-disabled"
                  checked={checkboxStates.states.disabled}
                  disabled
                  className="checkbox-input checkbox-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="state-disabled" className="text-sm font-medium text-gray-400 cursor-not-allowed">
                  Option 4
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkbox Sizes */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Checkbox Sizes</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Small</span>
              <div className="flex items-center justify-center space-x-3">
                <input 
                  type="checkbox" 
                  id="size-small"
                  checked={checkboxStates.sizes.small}
                  onChange={() => handleCheckboxChange('sizes', 'small')}
                  className="checkbox-input checkbox-small focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="size-small" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Small
                </label>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Medium</span>
              <div className="flex items-center justify-center space-x-3">
                <input 
                  type="checkbox" 
                  id="size-medium"
                  checked={checkboxStates.sizes.medium}
                  onChange={() => handleCheckboxChange('sizes', 'medium')}
                  className="checkbox-input checkbox-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="size-medium" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Medium
                </label>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Large</span>
              <div className="flex items-center justify-center space-x-3">
                <input 
                  type="checkbox" 
                  id="size-large"
                  checked={checkboxStates.sizes.large}
                  onChange={() => handleCheckboxChange('sizes', 'large')}
                  className="checkbox-input checkbox-large focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="size-large" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Large
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation Examples */}
      <div className="mb-12">
        <h3 className="text-h3 text-surface-900 mb-6">Validation Examples</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Valid State</span>
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="valid-example"
                  checked={checkboxStates.validation.valid}
                  onChange={() => handleCheckboxChange('validation', 'valid')}
                  className="checkbox-input checkbox-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="valid-example" className="text-sm font-medium text-gray-700 cursor-pointer">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Invalid State</span>
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="invalid-example"
                  checked={checkboxStates.validation.invalid}
                  onChange={() => handleCheckboxChange('validation', 'invalid')}
                  className="checkbox-input checkbox-medium checkbox-invalid focus:ring-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="invalid-example" className="text-sm font-medium text-red-500 cursor-pointer">
                  Required field
                </label>
              </div>
              <p className="text-body-small-regular text-red-500 ml-8">
                This field is required
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTokensTab = () => {
    const tokens = [
      { token: 'checkbox-border-radius', type: 'Border Radius', color: '', value: '4px', rawValue: '0.25rem' },
      { token: 'checkbox-border-color', type: 'Border Color', color: '#cbd5e1', value: '#cbd5e1', rawValue: 'surface.300' },
      { token: 'checkbox-border-checked', type: 'Border Color', color: '#14b8a6', value: '#14b8a6', rawValue: 'primary.500' },
      { token: 'checkbox-border-invalid', type: 'Border Color', color: '#ef4444', value: '#ef4444', rawValue: 'red.500' },
      { token: 'checkbox-bg-color', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'checkbox-bg-checked', type: 'Background Color', color: '#14b8a6', value: '#14b8a6', rawValue: 'primary.500' },
      { token: 'checkbox-bg-invalid', type: 'Background Color', color: '#ef4444', value: '#ef4444', rawValue: 'red.500' },
      { token: 'checkbox-text-color', type: 'Text Color', color: '#374151', value: '#374151', rawValue: 'gray.700' },
      { token: 'checkbox-text-invalid', type: 'Text Color', color: '#ef4444', value: '#ef4444', rawValue: 'red.500' },
      { token: 'checkbox-text-disabled', type: 'Text Color', color: '#9ca3af', value: '#9ca3af', rawValue: 'gray.400' },
      { token: 'checkbox-disabled-bg', type: 'Background Color', color: '#f1f5f9', value: '#f1f5f9', rawValue: 'surface.100' },
      { token: 'checkbox-disabled-border', type: 'Border Color', color: '#cbd5e1', value: '#cbd5e1', rawValue: 'surface.300' },
      { token: 'checkbox-focus-ring', type: 'Box Shadow', color: '#14b8a6', value: '0 0 0 2px #14b8a6', rawValue: 'ring-teal-500' },
      { token: 'checkbox-small-size', type: 'Size', color: '', value: '16px', rawValue: '1rem' },
      { token: 'checkbox-medium-size', type: 'Size', color: '', value: '20px', rawValue: '1.25rem' },
      { token: 'checkbox-large-size', type: 'Size', color: '', value: '24px', rawValue: '1.5rem' },
      { token: 'checkbox-spacing', type: 'Spacing', color: '', value: '12px', rawValue: '0.75rem' },
      { token: 'checkbox-border-width', type: 'Border Width', color: '', value: '2px', rawValue: '2px' },
    ];

    return (
      <div>
        <div className="mb-8">
          <h3 className="text-h3 text-navy-900 mb-6">Validation Examples</h3>
          <p className="text-body-copy-medium text-navy-600 mb-6">
            These design tokens define the visual properties of the Checkbox component.
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
            <h2 className="text-h2 text-navy-900">Checkbox</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                COMPLETED
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          Checkboxes allow users to select one or more options from a set. They are used in forms 
          where multiple selections are possible and provide clear visual feedback for the selected state.
        </p>
        
        <a 
          href="https://primeng.org/checkbox" 
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
                code={checkboxCode}
              />
            </div>
            
            <div className="bg-white border border-surface-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-4">React Component</h4>
              <CodeBlock
                language="jsx"
                code={reactCheckboxCode}
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
                    <span>Group related checkboxes together logically</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Provide clear visual feedback for different states</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Use consistent spacing and alignment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Make labels clickable to improve usability</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-navy-900 mb-4 text-red-700">Don't</h4>
                <ul className="space-y-3 text-navy-600">
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use checkboxes for mutually exclusive options (use radio buttons)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Make checkbox labels too long or unclear</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use inconsistent sizing within the same form</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Disable checkboxes without clear indication why</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Forget to provide validation feedback when required</span>
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

export default CheckboxSection;