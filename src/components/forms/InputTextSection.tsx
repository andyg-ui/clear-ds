import React, { useState } from 'react';
import { Eye, EyeOff, Search } from 'lucide-react';
import CodeBlock from '../CodeBlock';

const InputTextSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('copy-me');
  
  const [inputValues, setInputValues] = useState({
    basic: '',
    filled: 'Sample text',
    focus: '',
    disabled: '',
    email: '',
    number: '',
    password: '',
    search: '',
    url: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setInputValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const inputTextCode = `<!-- Basic Input -->
<div class="space-y-2">
  <label class="block text-sm font-medium text-surface-700">
    Label
  </label>
  <input 
    type="text" 
    class="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-surface-400 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
    placeholder="Enter text..."
  />
  <p class="text-xs text-surface-500">Helper text goes here</p>
</div>

<!-- Error State -->
<div class="space-y-2">
  <label class="block text-sm font-medium text-red-700">
    Label
  </label>
  <input 
    type="text" 
    class="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-surface-400 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-20 focus:border-red-500"
    placeholder="Enter text..."
  />
  <p class="text-xs text-red-500">Error message goes here</p>
</div>

<!-- Disabled Input -->
<div class="space-y-2">
  <label class="block text-sm font-medium text-surface-400">
    Label
  </label>
  <input 
    type="text" 
    disabled
    class="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-400 placeholder-surface-400 bg-surface-100 cursor-not-allowed"
    placeholder="Disabled input..."
  />
</div>`;

  const reactInputCode = `// React Input Component
const InputText = ({ 
  label,
  helperText,
  errorMessage,
  size = 'medium',
  disabled = false,
  type = 'text',
  ...props 
}) => {
  const sizeClasses = {
    small: 'px-2 py-1.5 text-xs',
    medium: 'px-3 py-2 text-sm',
    large: 'px-4 py-3 text-base'
  };
  
  const hasError = !!errorMessage;
  
  return (
    <div className="space-y-2">
      {label && (
        <label className={\`block text-sm font-medium \${
          hasError ? 'text-red-700' : 
          disabled ? 'text-surface-400' : 'text-surface-700'
        }\`}>
          {label}
        </label>
      )}
      
      <input
        type={type}
        disabled={disabled}
        className={\`
          w-full border rounded-md transition-colors duration-200
          \${sizeClasses[size]}
          \${disabled 
            ? 'bg-surface-100 text-surface-400 cursor-not-allowed' 
            : 'bg-white text-surface-900 hover:border-surface-400'
          }
          \${hasError 
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
            : 'border-navy-100 focus:ring-teal-500 focus:border-teal-500'
          }
          focus:outline-none focus:ring-2 focus:ring-opacity-20
          placeholder-surface-400
        \`}
        {...props}
      />
      
      {(helperText || errorMessage) && (
        <p className={\`text-xs \${hasError ? 'text-red-500' : 'text-surface-500'}\`}>
          {errorMessage || helperText}
        </p>
      )}
    </div>
  );
};`;

  const renderCopyMeTab = () => (
    <div>
      {/* Input States */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Input States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Default</span>
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Enter text..."
                  value={inputValues.basic}
                  onChange={(e) => handleInputChange('basic', e.target.value)}
                  className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Filled</span>
              <div className="space-y-2">
                <input 
                  type="text" 
                  value={inputValues.filled}
                  onChange={(e) => handleInputChange('filled', e.target.value)}
                  className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Focus</span>
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Focused input..."
                  value={inputValues.focus}
                  onChange={(e) => handleInputChange('focus', e.target.value)}
                  className="w-full px-3 py-2 border border-teal-500 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white ring-2 ring-teal-500 ring-opacity-20 outline-none"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Disabled</span>
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Disabled input..."
                  disabled
                  className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-400 placeholder-navy-300 bg-surface-100 cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Sizes */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Input Sizes</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Small</span>
              <input 
                type="text" 
                placeholder="Small input..."
                className="w-full px-2 py-1.5 border border-navy-100 rounded-md text-xs text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
              />
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Medium</span>
              <input 
                type="text" 
                placeholder="Medium input..."
                className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
              />
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Large</span>
              <input 
                type="text" 
                placeholder="Large input..."
                className="w-full px-4 py-3 border border-navy-100 rounded-md text-base text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Labels and Helper Text */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Labels and Helper Text</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy-600">
                Basic Label
              </label>
              <input 
                type="text" 
                placeholder="Enter text..."
                className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy-600">
                With Helper Text
              </label>
              <input 
                type="text" 
                placeholder="Enter text..."
                className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
              />
              <p className="text-xs text-navy-500">Helper text goes here</p>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-red-700">
                Error State
              </label>
              <input 
                type="text" 
                placeholder="Enter text..."
                className="w-full px-3 py-2 border border-red-500 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-20 focus:border-red-500"
              />
              <p className="text-xs text-red-500">Error message goes here</p>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy-300">
                Disabled Label
              </label>
              <input 
                type="text" 
                placeholder="Disabled input..."
                disabled
                className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-400 placeholder-navy-300 bg-surface-100 cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Input Types */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Input Types</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy-600">
                Text
              </label>
              <input 
                type="text" 
                placeholder="Enter text..."
                className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy-600">
                Email
              </label>
              <input 
                type="email" 
                placeholder="Enter email..."
                value={inputValues.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy-600">
                Number
              </label>
              <input 
                type="number" 
                placeholder="Enter number..."
                value={inputValues.number}
                onChange={(e) => handleInputChange('number', e.target.value)}
                className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy-600">
                Password
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password..."
                  value={inputValues.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-surface-400 hover:text-surface-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy-600">
                Search
              </label>
              <div className="relative">
                <input 
                  type="search" 
                  placeholder="Search..."
                  value={inputValues.search}
                  onChange={(e) => handleInputChange('search', e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-surface-400" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy-600">
                URL
              </label>
              <input 
                type="url" 
                placeholder="https://example.com"
                value={inputValues.url}
                onChange={(e) => handleInputChange('url', e.target.value)}
                className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-20 focus:border-teal-500 hover:border-surface-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuidanceTab = () => (
    <div>
      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">When to Use InputText</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Use input text fields when you need users to enter free-form text, numbers, or other data. 
          InputText is the most fundamental form element and should be used for single-line text entry 
          where users need to provide specific information.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Labeling</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Use clear, descriptive labels that indicate what information is expected</li>
          <li>• Keep labels concise but informative</li>
          <li>• Indicate if the field is required or optional</li>
          <li>• Use placeholder text to provide examples or additional context</li>
          <li>• Position labels above the input field for better readability</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Input Types</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Choose the appropriate input type to improve user experience and validation:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• <strong>Text:</strong> For general text input</li>
          <li>• <strong>Email:</strong> For email addresses with built-in validation</li>
          <li>• <strong>Number:</strong> For numeric input with number pad on mobile</li>
          <li>• <strong>Password:</strong> For sensitive information with hidden characters</li>
          <li>• <strong>Search:</strong> For search queries with appropriate styling</li>
          <li>• <strong>URL:</strong> For web addresses with validation</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Validation & Error Handling</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Provide clear feedback for validation states:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Show validation feedback immediately after user interaction</li>
          <li>• Use specific error messages that help users understand what's wrong</li>
          <li>• Use red styling for error states with clear visual indicators</li>
          <li>• Provide helper text to guide users on expected input format</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Accessibility</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Ensure proper label association with input fields</li>
          <li>• Support keyboard navigation and focus management</li>
          <li>• Provide sufficient color contrast for all states</li>
          <li>• Use ARIA attributes for error states and descriptions</li>
          <li>• Announce validation changes to screen readers</li>
          <li>• Ensure focus indicators are clearly visible</li>
        </ul>
      </div>
    </div>
  );

  const renderComponentTab = () => (
    <div>
      {/* Input States */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Input States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Default</span>
              <input 
                type="text" 
                placeholder="Enter text..."
                className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white"
              />
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Filled</span>
              <input 
                type="text" 
                value="Sample text"
                readOnly
                className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 bg-white"
              />
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Focus</span>
              <input 
                type="text" 
                placeholder="Focused..."
                className="w-full px-3 py-2 border border-teal-500 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white ring-2 ring-teal-500 ring-opacity-20 outline-none"
              />
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Disabled</span>
              <input 
                type="text" 
                placeholder="Disabled..."
                disabled
                className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-400 placeholder-navy-300 bg-surface-100 cursor-not-allowed"
              />
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Invalid</span>
              <input 
                type="text" 
                placeholder="Invalid..."
                className="w-full px-3 py-2 border border-red-500 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white ring-2 ring-red-500 ring-opacity-20 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Input Sizes */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Input Sizes</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Small</span>
              <input 
                type="text" 
                placeholder="Small input..."
                className="w-full px-2 py-1.5 border border-navy-100 rounded-md text-xs text-surface-900 placeholder-navy-300 bg-white"
              />
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Medium</span>
              <input 
                type="text" 
                placeholder="Medium input..."
                className="w-full px-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white"
              />
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Large</span>
              <input 
                type="text" 
                placeholder="Large input..."
                className="w-full px-4 py-3 border border-navy-100 rounded-md text-base text-surface-900 placeholder-navy-300 bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Input with Icons */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Input with Icons</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Left Icon</span>
              <div className="relative">
                <input 
                  type="search" 
                  placeholder="Search..."
                  className="w-full pl-10 pr-3 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-surface-400" />
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Right Icon</span>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="Password..."
                  className="w-full px-3 pr-10 py-2 border border-navy-100 rounded-md text-sm text-surface-900 placeholder-navy-300 bg-white"
                />
                <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-surface-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTokensTab = () => {
    const tokens = [
      { token: 'input-border-radius', type: 'Border Radius', color: '', value: '6px', rawValue: '0.375rem' },
      { token: 'input-border-color', type: 'Border Color', color: '#cbd5e1', value: '#cbd5e1', rawValue: 'surface.300' },
      { token: 'input-border-focus', type: 'Border Color', color: '#0f766e', value: '#0f766e', rawValue: 'primary.700' },
      { token: 'input-border-error', type: 'Border Color', color: '#ef4444', value: '#ef4444', rawValue: 'red.500' },
      { token: 'input-bg-color', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'input-bg-disabled', type: 'Background Color', color: '#f1f5f9', value: '#f1f5f9', rawValue: 'surface.100' },
      { token: 'input-text-color', type: 'Text Color', color: '#0f172a', value: '#0f172a', rawValue: 'surface.900' },
      { token: 'input-text-disabled', type: 'Text Color', color: '#94a3b8', value: '#94a3b8', rawValue: 'surface.400' },
      { token: 'input-placeholder-color', type: 'Text Color', color: '#94a3b8', value: '#94a3b8', rawValue: 'surface.400' },
      { token: 'input-label-color', type: 'Text Color', color: '#334155', value: '#334155', rawValue: 'surface.700' },
      { token: 'input-label-error', type: 'Text Color', color: '#b91c1c', value: '#b91c1c', rawValue: 'red.700' },
      { token: 'input-helper-color', type: 'Text Color', color: '#64748b', value: '#64748b', rawValue: 'surface.500' },
      { token: 'input-error-color', type: 'Text Color', color: '#ef4444', value: '#ef4444', rawValue: 'red.500' },
      { token: 'input-focus-ring', type: 'Box Shadow', color: '#14b8a6', value: '0 0 0 2px rgba(20, 184, 166, 0.2)', rawValue: 'ring-teal-500' },
      { token: 'input-padding-small', type: 'Spacing', color: '', value: '6px 8px', rawValue: '0.375rem 0.5rem' },
      { token: 'input-padding-medium', type: 'Spacing', color: '', value: '8px 12px', rawValue: '0.5rem 0.75rem' },
      { token: 'input-padding-large', type: 'Spacing', color: '', value: '12px 16px', rawValue: '0.75rem 1rem' },
      { token: 'input-font-size-small', type: 'Font Size', color: '', value: '12px', rawValue: '0.75rem' },
      { token: 'input-font-size-medium', type: 'Font Size', color: '', value: '14px', rawValue: '0.875rem' },
      { token: 'input-font-size-large', type: 'Font Size', color: '', value: '16px', rawValue: '1rem' },
    ];

    return (
      <div>
        <div className="mb-8">
          <h3 className="text-h3 text-navy-900 mb-6">InputText Token Documentation</h3>
          <p className="text-body-copy-medium text-navy-600 mb-6">
            These design tokens define the visual properties of the InputText component.
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
            <h2 className="text-h2 text-navy-900">InputText</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                COMPLETED
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          InputText allows users to enter and edit text. It's one of the most fundamental form elements, 
          providing various states and validation options to ensure proper data collection and user feedback.
        </p>
        
        <a 
          href="https://primeng.org/inputtext" 
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
                code={inputTextCode}
              />
            </div>
            
            <div className="bg-white border border-surface-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-4">React Component</h4>
              <CodeBlock
                language="jsx"
                code={reactInputCode}
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
                    <span>Use clear, descriptive labels for each input</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Provide helpful placeholder text as examples</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Use appropriate input types for better UX</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Show clear error messages for validation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Use consistent sizing throughout your forms</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-navy-900 mb-4 text-red-700">Don't</h4>
                <ul className="space-y-3 text-navy-600">
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use placeholder text as labels</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Make inputs too narrow for expected content</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use generic error messages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Disable inputs without clear indication why</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use the wrong input type for the data expected</span>
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

export default InputTextSection;