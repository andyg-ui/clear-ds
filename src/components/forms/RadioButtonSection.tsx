import React, { useState } from 'react';
import CodeBlock from '../CodeBlock';

const RadioButtonSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('copy-me');
  
  // Basic RadioButton state
  const [basicSelection, setBasicSelection] = useState('option2');
  
  // Inline RadioButton state
  const [inlineSelection, setInlineSelection] = useState('option1');
  
  // Grouped RadioButton state
  const [groupedSelection, setGroupedSelection] = useState('option3');
  
  // Update Loan Status example state
  const [loanStatusSelection, setLoanStatusSelection] = useState('approved');

  const radioButtonCode = `<!-- Basic RadioButton -->
<div class="space-y-4">
  <div class="flex items-center space-x-3">
    <input 
      type="radio" 
      id="option1" 
      name="basic-radio"
      class="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
    />
    <label for="option1" class="text-sm font-medium text-gray-700 cursor-pointer">
      Option 1
    </label>
  </div>
  <div class="flex items-center space-x-3">
    <input 
      type="radio" 
      id="option2" 
      name="basic-radio"
      checked
      class="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
    />
    <label for="option2" class="text-sm font-medium text-gray-700 cursor-pointer">
      Option 2
    </label>
  </div>
</div>

<!-- Inline RadioButton -->
<div class="flex items-center space-x-6">
  <div class="flex items-center space-x-3">
    <input 
      type="radio" 
      id="inline1" 
      name="inline-radio"
      class="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
    />
    <label for="inline1" class="text-sm font-medium text-gray-700 cursor-pointer">
      Option 1
    </label>
  </div>
  <div class="flex items-center space-x-3">
    <input 
      type="radio" 
      id="inline2" 
      name="inline-radio"
      checked
      class="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
    />
    <label for="inline2" class="text-sm font-medium text-gray-700 cursor-pointer">
      Option 2
    </label>
  </div>
</div>`;

  const reactRadioButtonCode = `// React RadioButton Component
const RadioButton = ({ 
  options = [],
  value,
  onChange,
  name,
  layout = 'stacked',
  disabled = false,
  size = 'medium',
  ...props 
}) => {
  const sizeClasses = {
    small: 'radiobutton-small',
    medium: 'radiobutton-medium',
    large: 'radiobutton-large'
  };
  
  const layoutClasses = {
    stacked: 'space-y-4',
    inline: 'flex items-center space-x-6'
  };
  
  return (
    <div className={layoutClasses[layout]}>
      {options.map((option, index) => (
        <div key={index} className="flex items-center space-x-3">
          <input
            type="radio"
            id={\`\${name}-\${index}\`}
            name={name}
            value={option.value}
            checked={value === option.value}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.value)}
            className={\`radiobutton-input \${sizeClasses[size]} focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white\`}
            {...props}
          />
          <label 
            htmlFor={\`\${name}-\${index}\`}
            className={\`text-sm font-medium cursor-pointer \${
              disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'
            }\`}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};`;

  const renderCopyMeTab = () => (
    <div>
      {/* Basic RadioButton */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Basic RadioButton</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm">
            <label className="block text-sm font-medium text-navy-600 mb-4">
              Select an option
            </label>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input 
                  type="radio" 
                  id="basic-option1"
                  name="basic-radio"
                  value="option1"
                  checked={basicSelection === 'option1'}
                  onChange={(e) => setBasicSelection(e.target.value)}
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="basic-option1" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option 1
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input 
                  type="radio" 
                  id="basic-option2"
                  name="basic-radio"
                  value="option2"
                  checked={basicSelection === 'option2'}
                  onChange={(e) => setBasicSelection(e.target.value)}
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="basic-option2" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option 2
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input 
                  type="radio" 
                  id="basic-option3"
                  name="basic-radio"
                  value="option3"
                  checked={basicSelection === 'option3'}
                  onChange={(e) => setBasicSelection(e.target.value)}
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="basic-option3" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline RadioButton */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Inline RadioButton</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-lg">
            <label className="block text-sm font-medium text-navy-600 mb-4">
              Select an option
            </label>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <input 
                  type="radio" 
                  id="inline-option1"
                  name="inline-radio"
                  value="option1"
                  checked={inlineSelection === 'option1'}
                  onChange={(e) => setInlineSelection(e.target.value)}
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="inline-option1" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option 1
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input 
                  type="radio" 
                  id="inline-option2"
                  name="inline-radio"
                  value="option2"
                  checked={inlineSelection === 'option2'}
                  onChange={(e) => setInlineSelection(e.target.value)}
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="inline-option2" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option 2
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input 
                  type="radio" 
                  id="inline-option3"
                  name="inline-radio"
                  value="option3"
                  checked={inlineSelection === 'option3'}
                  onChange={(e) => setInlineSelection(e.target.value)}
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="inline-option3" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grouped RadioButton */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Grouped RadioButton</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-md">
            <label className="block text-sm font-medium text-navy-600 mb-4">
              Select an option
            </label>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-navy-600 mb-3 uppercase tracking-wide">Group 1</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input 
                      type="radio" 
                      id="grouped-option1"
                      name="grouped-radio"
                      value="option1"
                      checked={groupedSelection === 'option1'}
                      onChange={(e) => setGroupedSelection(e.target.value)}
                      className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                    />
                    <label htmlFor="grouped-option1" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Option 1
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input 
                      type="radio" 
                      id="grouped-option2"
                      name="grouped-radio"
                      value="option2"
                      checked={groupedSelection === 'option2'}
                      onChange={(e) => setGroupedSelection(e.target.value)}
                      className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                    />
                    <label htmlFor="grouped-option2" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Option 2
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-navy-600 mb-3 uppercase tracking-wide">Group 2</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input 
                      type="radio" 
                      id="grouped-option3"
                      name="grouped-radio"
                      value="option3"
                      checked={groupedSelection === 'option3'}
                      onChange={(e) => setGroupedSelection(e.target.value)}
                      className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                    />
                    <label htmlFor="grouped-option3" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Option 3
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input 
                      type="radio" 
                      id="grouped-option4"
                      name="grouped-radio"
                      value="option4"
                      checked={groupedSelection === 'option4'}
                      onChange={(e) => setGroupedSelection(e.target.value)}
                      className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                    />
                    <label htmlFor="grouped-option4" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Option 4
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Loan Status Example */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Update Loan Status</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-md">
            <label className="block text-sm font-medium text-navy-600 mb-4">
              Update Loan Status
            </label>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <input 
                  type="radio" 
                  id="loan-pending"
                  name="loan-status"
                  value="pending"
                  checked={loanStatusSelection === 'pending'}
                  onChange={(e) => setLoanStatusSelection(e.target.value)}
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="loan-pending" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Pending Review
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input 
                  type="radio" 
                  id="loan-approved"
                  name="loan-status"
                  value="approved"
                  checked={loanStatusSelection === 'approved'}
                  onChange={(e) => setLoanStatusSelection(e.target.value)}
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="loan-approved" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Approved
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input 
                  type="radio" 
                  id="loan-rejected"
                  name="loan-status"
                  value="rejected"
                  checked={loanStatusSelection === 'rejected'}
                  onChange={(e) => setLoanStatusSelection(e.target.value)}
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="loan-rejected" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Rejected
                </label>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="btn btn-secondary btn-small">
                Cancel
              </button>
              <button className="btn btn-primary btn-small">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuidanceTab = () => (
    <div>
      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">When to Use RadioButton</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Use radio buttons when you need users to select exactly one option from a list of mutually exclusive alternatives. 
          Radio buttons are ideal for presenting a small set of options (typically 2-7) where users must make a single choice.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Labeling</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Use clear, concise labels that clearly describe each option</li>
          <li>• Keep labels short and scannable for quick decision-making</li>
          <li>• Use parallel structure and consistent terminology across options</li>
          <li>• Avoid negative phrasing that might confuse users</li>
          <li>• Consider the logical order of options (alphabetical, chronological, or by importance)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Layout</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Choose the appropriate layout based on your content and available space:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• <strong>Stacked:</strong> Use for longer labels or when you have limited horizontal space</li>
          <li>• <strong>Inline:</strong> Use for short labels when horizontal space is available</li>
          <li>• <strong>Grouped:</strong> Use when options can be logically categorized</li>
          <li>• Maintain consistent spacing between options for better readability</li>
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
          <li>• Ensure all options within a group are mutually exclusive</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">States & Behavior</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Always have one option selected by default when appropriate</li>
          <li>• Provide clear visual feedback for selected, hover, and focus states</li>
          <li>• Use consistent styling across all radio button instances</li>
          <li>• Ensure disabled states are clearly distinguishable</li>
          <li>• Include action buttons (Update/Submit and Cancel) for form submissions</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Accessibility</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Ensure proper ARIA labels and fieldset grouping</li>
          <li>• Support keyboard navigation with arrow keys</li>
          <li>• Provide sufficient color contrast for all states</li>
          <li>• Use focus indicators that meet accessibility standards</li>
          <li>• Announce selection changes to screen readers</li>
        </ul>
      </div>
    </div>
  );

  const renderComponentTab = () => (
    <div>
      {/* RadioButton States */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">RadioButton States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Default</span>
              <div className="flex items-center justify-center space-x-3">
                <input 
                  type="radio" 
                  id="state-default"
                  name="state-demo-1"
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="state-default" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option
                </label>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Selected</span>
              <div className="flex items-center justify-center space-x-3">
                <input 
                  type="radio" 
                  id="state-selected"
                  name="state-demo-2"
                  checked
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="state-selected" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option
                </label>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Focus</span>
              <div className="flex items-center justify-center space-x-3">
                <input 
                  type="radio" 
                  id="state-focus"
                  name="state-demo-3"
                  checked
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white ring-teal-500 ring-2 ring-offset-2 ring-offset-white"
                />
                <label htmlFor="state-focus" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Option
                </label>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Disabled</span>
              <div className="flex items-center justify-center space-x-3">
                <input 
                  type="radio" 
                  id="state-disabled"
                  name="state-demo-4"
                  disabled
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="state-disabled" className="text-sm font-medium text-gray-400 cursor-not-allowed">
                  Option
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RadioButton Sizes */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">RadioButton Sizes</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Small</span>
              <div className="flex items-center justify-center space-x-3">
                <input 
                  type="radio" 
                  id="size-small"
                  name="size-demo-1"
                  checked
                  className="radiobutton-input radiobutton-small focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
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
                  type="radio" 
                  id="size-medium"
                  name="size-demo-2"
                  checked
                  className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
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
                  type="radio" 
                  id="size-large"
                  name="size-demo-3"
                  checked
                  className="radiobutton-input radiobutton-large focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                />
                <label htmlFor="size-large" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Large
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Options */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Layout Options</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Stacked Layout</span>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    id="layout-stacked-1"
                    name="layout-stacked"
                    checked
                    className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                  />
                  <label htmlFor="layout-stacked-1" className="text-sm font-medium text-gray-700 cursor-pointer">
                    Option 1
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    id="layout-stacked-2"
                    name="layout-stacked"
                    className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                  />
                  <label htmlFor="layout-stacked-2" className="text-sm font-medium text-gray-700 cursor-pointer">
                    Option 2
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    id="layout-stacked-3"
                    name="layout-stacked"
                    className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                  />
                  <label htmlFor="layout-stacked-3" className="text-sm font-medium text-gray-700 cursor-pointer">
                    Option 3
                  </label>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Inline Layout</span>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    id="layout-inline-1"
                    name="layout-inline"
                    checked
                    className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                  />
                  <label htmlFor="layout-inline-1" className="text-sm font-medium text-gray-700 cursor-pointer">
                    Option 1
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    id="layout-inline-2"
                    name="layout-inline"
                    className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                  />
                  <label htmlFor="layout-inline-2" className="text-sm font-medium text-gray-700 cursor-pointer">
                    Option 2
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    id="layout-inline-3"
                    name="layout-inline"
                    className="radiobutton-input radiobutton-medium focus:ring-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
                  />
                  <label htmlFor="layout-inline-3" className="text-sm font-medium text-gray-700 cursor-pointer">
                    Option 3
                  </label>
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
      { token: 'radiobutton-border-radius', type: 'Border Radius', color: '', value: '50%', rawValue: '50%' },
      { token: 'radiobutton-border-color', type: 'Border Color', color: '#cbd5e1', value: '#cbd5e1', rawValue: 'surface.300' },
      { token: 'radiobutton-border-selected', type: 'Border Color', color: '#14b8a6', value: '#14b8a6', rawValue: 'primary.500' },
      { token: 'radiobutton-bg-color', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'radiobutton-bg-selected', type: 'Background Color', color: '#14b8a6', value: '#14b8a6', rawValue: 'primary.500' },
      { token: 'radiobutton-text-color', type: 'Text Color', color: '#374151', value: '#374151', rawValue: 'gray.700' },
      { token: 'radiobutton-text-disabled', type: 'Text Color', color: '#9ca3af', value: '#9ca3af', rawValue: 'gray.400' },
      { token: 'radiobutton-disabled-bg', type: 'Background Color', color: '#f3f4f6', value: '#f3f4f6', rawValue: 'gray.100' },
      { token: 'radiobutton-disabled-border', type: 'Border Color', color: '#d1d5db', value: '#d1d5db', rawValue: 'gray.300' },
      { token: 'radiobutton-focus-ring', type: 'Box Shadow', color: '#14b8a6', value: '0 0 0 2px #14b8a6', rawValue: 'ring-teal-500' },
      { token: 'radiobutton-hover-bg', type: 'Background Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface.50' },
      { token: 'radiobutton-small-size', type: 'Size', color: '', value: '16px', rawValue: '1rem' },
      { token: 'radiobutton-medium-size', type: 'Size', color: '', value: '20px', rawValue: '1.25rem' },
      { token: 'radiobutton-large-size', type: 'Size', color: '', value: '24px', rawValue: '1.5rem' },
      { token: 'radiobutton-spacing', type: 'Spacing', color: '', value: '12px', rawValue: '0.75rem' },
      { token: 'radiobutton-group-spacing', type: 'Spacing', color: '', value: '24px', rawValue: '1.5rem' },
      { token: 'radiobutton-label-spacing', type: 'Spacing', color: '', value: '12px', rawValue: '0.75rem' },
    ];

    return (
      <div>
        <div className="mb-8">
          <h3 className="text-h3 text-navy-900 mb-6">RadioButton Token Documentation</h3>
          <p className="text-body-copy-medium text-navy-600 mb-6">
            These design tokens define the visual properties of the RadioButton component.
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
            <div className="w-5 h-5 bg-white rounded-full border-2 border-primary-500"></div>
          </div>
          <div>
            <h2 className="text-h2 text-navy-900">RadioButton</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                COMPLETED
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          RadioButton is used to choose one option from a set of mutually exclusive alternatives. Use when a single, required selection must be made within a group.
        </p>
        
        <a 
          href="https://primeng.org/radiobutton" 
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
                code={radioButtonCode}
              />
            </div>
            
            <div className="bg-white border border-surface-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-4">React Component</h4>
              <CodeBlock
                language="jsx"
                code={reactRadioButtonCode}
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
                    <span>Use for mutually exclusive options only</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Provide a default selection when appropriate</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Use clear, concise labels for each option</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Group related options logically</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Include action buttons for form submissions</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-navy-900 mb-4 text-red-700">Don't</h4>
                <ul className="space-y-3 text-navy-600">
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use for multiple selections (use checkboxes instead)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Present too many options (consider a dropdown)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use unclear or ambiguous labels</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Mix different radio button groups without clear separation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Forget to provide visual feedback for different states</span>
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

export default RadioButtonSection;