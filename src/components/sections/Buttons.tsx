import React, { useState } from 'react';
import { ChevronDown, Plus, ArrowRight, Check } from 'lucide-react';
import CodeBlock from '../CodeBlock';

const Buttons: React.FC = () => {
  const [activeTab, setActiveTab] = useState('copy-me');
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const buttonVariants = [
    {
      name: 'Primary',
      description: 'Used for primary actions and main call-to-actions',
      examples: [
        { label: 'Default', classes: 'btn btn-primary', state: 'default' },
        { label: 'Hover', classes: 'btn btn-primary', state: 'hover' },
        { label: 'Disabled', classes: 'btn btn-disabled', state: 'disabled', disabled: true },
      ]
    },
    {
      name: 'Secondary',
      description: 'Used for secondary actions and alternative options',
      examples: [
        { label: 'Default', classes: 'btn btn-secondary', state: 'default' },
        { label: 'Hover', classes: 'btn btn-secondary', state: 'hover' },
        { label: 'Disabled', classes: 'btn btn-disabled', state: 'disabled', disabled: true },
      ]
    },
    {
      name: 'Plain',
      description: 'Used for subtle actions and less prominent interactions',
      examples: [
        { label: 'Default', classes: 'btn btn-plain', state: 'default' },
        { label: 'Hover', classes: 'btn btn-plain', state: 'hover' },
        { label: 'Disabled', classes: 'btn btn-disabled', state: 'disabled', disabled: true },
      ]
    },
    {
      name: 'Danger',
      description: 'Used for destructive actions and critical operations',
      examples: [
        { label: 'Default', classes: 'btn btn-danger', state: 'default' },
        { label: 'Hover', classes: 'btn btn-danger', state: 'hover' },
        { label: 'Disabled', classes: 'btn btn-disabled', state: 'disabled', disabled: true },
      ]
    }
  ];

  const buttonSizes = [
    { name: 'Large', classes: 'btn-large', height: '48px' },
    { name: 'Medium', classes: 'btn-medium', height: '40px' },
    { name: 'Small', classes: 'btn-small', height: '32px' },
    { name: 'XSmall', classes: 'btn-xsmall', height: '24px' },
  ];

  const iconButtons = [
    { name: 'With Icon Left', icon: Check, iconPosition: 'left' },
    { name: 'With Icon Right', icon: ArrowRight, iconPosition: 'right' },
    { name: 'Icon Only', icon: Plus, iconPosition: 'only' },
  ];

  const primaryButtonCode = `<!-- Primary Button -->
<button class="btn btn-primary btn-medium">
  Button Label
</button>

<!-- Secondary Button -->
<button class="btn btn-secondary btn-medium">
  Button Label
</button>

<!-- Plain Button -->
<button class="btn btn-plain btn-medium">
  Button Label
</button>

<!-- Danger Button -->
<button class="btn btn-danger btn-medium">
  Button Label
</button>

<!-- Disabled Button -->
<button class="btn btn-disabled btn-medium" disabled>
  Button Label
</button>

<!-- Icon Button -->
<button class="btn btn-primary btn-medium">
  <i class="pi pi-check"></i>
  Button Label
</button>

<!-- Icon Only Button -->
<button class="btn btn-primary btn-icon-only btn-icon-only-medium">
  <i class="pi pi-plus"></i>
</button>

<!-- Split Button -->
<div class="relative inline-block">
  <div class="split-button">
    <button class="split-button-main">
      Button Label
    </button>
    <button class="split-button-dropdown-trigger">
      <i class="pi pi-chevron-down"></i>
    </button>
  </div>
  
  <div class="split-button-dropdown-panel">
    <button class="split-button-option">Import Liabilities</button>
    <button class="split-button-option">View Report</button>
    <button class="split-button-option">Get MI Quote</button>
  </div>
</div>`;

  const reactButtonCode = `// React Button Component
const Button = ({ 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  iconLeft,
  iconRight,
  iconOnly,
  children,
  onClick,
  ...props 
}) => {
  const baseClasses = 'btn';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    plain: 'btn-plain',
    danger: 'btn-danger'
  };
  
  const sizeClasses = {
    large: 'btn-large',
    medium: 'btn-medium',
    small: 'btn-small',
    xsmall: 'btn-xsmall'
  };
  
  const iconOnlyClasses = {
    large: 'btn-icon-only btn-icon-only-large',
    medium: 'btn-icon-only btn-icon-only-medium',
    small: 'btn-icon-only btn-icon-only-small',
    xsmall: 'btn-icon-only btn-icon-only-xsmall'
  };
  
  const buttonClasses = \`
    \${baseClasses} 
    \${disabled ? 'btn-disabled' : variantClasses[variant]} 
    \${iconOnly ? iconOnlyClasses[size] : sizeClasses[size]}
  \`;
  
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {iconLeft && <i className={\`pi pi-\${iconLeft}\`} />}
      {iconOnly ? (
        <i className={\`pi pi-\${iconOnly}\`} />
      ) : (
        children
      )}
      {iconRight && <i className={\`pi pi-\${iconRight}\`} />}
    </button>
  );
};

// Split Button Component
const SplitButton = ({ 
  children, 
  options = [], 
  onOptionClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative inline-block">
      <div className="split-button">
        <button 
          className="split-button-main"
          disabled={disabled}
          {...props}
        >
          {children}
        </button>
        <button 
          className="split-button-dropdown-trigger"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="pi pi-chevron-down"></i>
        </button>
      </div>
      
      {isOpen && !disabled && (
        <div className="split-button-dropdown-panel">
          {options.map((option, index) => (
            <button
              key={index}
              className="split-button-option"
              onClick={() => {
                onOptionClick?.(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};`;

  const renderCopyMeTab = () => (
    <div>
      {/* Button Variants */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Button Variants</h3>
        <div className="space-y-8">
          {buttonVariants.map((variant) => (
            <div key={variant.name} className="bg-white border border-surface-200 rounded-lg p-8">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-navy-900 mb-2">{variant.name}</h4>
                <p className="text-navy-600">{variant.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {variant.examples.map((example) => (
                  <div key={example.label} className="text-center">
                    <div className="mb-3">
                      <span className="text-body-small-semibold text-navy-600 uppercase tracking-wide">
                        {example.label}
                      </span>
                    </div>
                    <button 
                      className={`${example.classes} btn-medium`}
                      disabled={example.disabled}
                    >
                      Button Label
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button Sizes */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Button Sizes</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buttonSizes.map((size) => (
              <div key={size.name} className="text-center space-y-4">
                <div>
                  <span className="text-body-small-semibold text-navy-600 uppercase tracking-wide">
                    {size.name}
                  </span>
                  <div className="text-body-xsmall-regular text-navy-500 mt-1">
                    {size.height}
                  </div>
                </div>
                <button className={`btn btn-primary ${size.classes}`}>
                  Button
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Icon Buttons</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {iconButtons.map((button) => (
              <div key={button.name} className="text-center space-y-4">
                <div>
                  <span className="text-body-small-semibold text-navy-600 uppercase tracking-wide">
                    {button.name}
                  </span>
                </div>
                <div className="flex justify-center">
                  {button.iconPosition === 'only' ? (
                    <button className="btn btn-primary btn-icon-only btn-icon-only-medium">
                      <button.icon className="w-4 h-4" />
                    </button>
                  ) : (
                    <button className="btn btn-primary btn-medium">
                      {button.iconPosition === 'left' && <button.icon className="w-4 h-4" />}
                      <span>Button Label</span>
                      {button.iconPosition === 'right' && <button.icon className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Split Button */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Split Button</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="flex justify-center">
            <div className="relative inline-block">
              <div className="split-button">
                <button className="split-button-main">
                  Button Label
                </button>
                <button 
                  className="split-button-dropdown-trigger"
                  onClick={() => setSplitButtonOpen(!splitButtonOpen)}
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              {splitButtonOpen && (
                <div className="split-button-dropdown-panel">
                  <button 
                    className="split-button-option"
                    onClick={() => setSplitButtonOpen(false)}
                  >
                    Import Liabilities
                  </button>
                  <button 
                    className="split-button-option"
                    onClick={() => setSplitButtonOpen(false)}
                  >
                    View Report
                  </button>
                  <button 
                    className="split-button-option"
                    onClick={() => setSplitButtonOpen(false)}
                  >
                    Get MI Quote
                  </button>
                </div>
              )}
            </div>
          </div>
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
              code={primaryButtonCode}
            />
          </div>
          
          <div className="bg-white border border-surface-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-navy-900 mb-4">React Component</h4>
            <CodeBlock
              language="jsx"
              code={reactButtonCode}
            />
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Best Practices</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-navy-900 mb-4 text-green-700">Do</h4>
              <ul className="space-y-3 text-navy-600">
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Use Primary buttons for the most important actions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Keep button text concise and action-oriented</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Use consistent spacing and sizing throughout your interface</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Provide clear visual feedback for different states</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Use Danger buttons only for destructive actions</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-navy-900 mb-4 text-red-700">Don't</h4>
              <ul className="space-y-3 text-navy-600">
                <li className="flex items-start space-x-3">
                  <div className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-red-500"></div>
                  </div>
                  <span>Use multiple Primary buttons in the same area</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-red-500"></div>
                  </div>
                  <span>Make button text too long or unclear</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-red-500"></div>
                  </div>
                  <span>Use square corners - buttons should be fully rounded</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-red-500"></div>
                  </div>
                  <span>Disable buttons without providing clear feedback</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-0.5 bg-red-500"></div>
                  </div>
                  <span>Use Danger buttons for non-destructive actions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuidanceTab = () => (
    <div>
      <div className="mb-8">
        <h3 className="text-h3 text-surface-900 mb-4">When to Use Buttons</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Buttons allow users to perform actions and make choices with a single tap. They communicate 
          the action that will occur when the user touches them. Use buttons for actions that affect 
          the current page or trigger a process.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-surface-900 mb-4">Button Types</h3>
        <div className="space-y-4">
          <div className="p-4 bg-surface-50 rounded-lg">
            <h4 className="text-body-normal-semibold text-surface-900 mb-2">Primary</h4>
            <p className="text-body-copy-medium text-navy-600">
              Use for the most important actions on a page. There should typically be only one primary button per section.
            </p>
          </div>
          <div className="p-4 bg-surface-50 rounded-lg">
            <h4 className="text-body-normal-semibold text-surface-900 mb-2">Secondary</h4>
            <p className="text-body-copy-medium text-navy-600">
              Use for secondary actions that are important but not the primary focus of the page.
            </p>
          </div>
          <div className="p-4 bg-surface-50 rounded-lg">
            <h4 className="text-body-normal-semibold text-surface-900 mb-2">Plain</h4>
            <p className="text-body-copy-medium text-navy-600">
              Use for subtle actions and less prominent interactions. Good for cancel actions or tertiary options.
            </p>
          </div>
          <div className="p-4 bg-surface-50 rounded-lg">
            <h4 className="text-body-normal-semibold text-surface-900 mb-2">Danger</h4>
            <p className="text-body-copy-medium text-navy-600">
              Use for destructive actions like delete, remove, or cancel operations that cannot be undone.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-surface-900 mb-4">Labeling</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Use clear, action-oriented language that describes what will happen</li>
          <li>• Keep labels concise - ideally 1-3 words</li>
          <li>• Use sentence case for button labels</li>
          <li>• Avoid generic labels like "Click here" or "Submit"</li>
          <li>• Be specific about the action (e.g., "Save changes" instead of "Save")</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-surface-900 mb-4">Icon Usage</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Icons can enhance button clarity and recognition:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Use icons that clearly represent the action</li>
          <li>• Place icons on the left for most actions, right for "next" or "forward" actions</li>
          <li>• Use icon-only buttons sparingly and only for universally understood actions</li>
          <li>• Ensure icon-only buttons are perfectly circular</li>
          <li>• Maintain consistent icon sizing within button sizes</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-surface-900 mb-4">Accessibility</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Ensure sufficient color contrast for all button states</li>
          <li>• Provide clear focus indicators that meet accessibility standards</li>
          <li>• Use descriptive labels or aria-labels for icon-only buttons</li>
          <li>• Support keyboard navigation with Tab and Enter keys</li>
          <li>• Announce state changes to screen readers</li>
          <li>• Ensure buttons are large enough for easy interaction (minimum 44px)</li>
        </ul>
      </div>
    </div>
  );

  const renderComponentTab = () => (
    <div>
      {/* Button States */}
      <div className="mb-12">
        <h3 className="text-h3 text-surface-900 mb-6">Button States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="space-y-8">
            {buttonVariants.map((variant) => (
              <div key={variant.name}>
                <h4 className="text-lg font-semibold text-surface-900 mb-4">{variant.name}</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="mb-3">
                      <span className="text-body-small-semibold text-navy-600 uppercase tracking-wide">Default</span>
                    </div>
                    <button className={`btn ${variant.name === 'Primary' ? 'btn-primary' : variant.name === 'Secondary' ? 'btn-secondary' : variant.name === 'Plain' ? 'btn-plain' : 'btn-danger'} btn-medium`}>
                      Button
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="mb-3">
                      <span className="text-body-small-semibold text-navy-600 uppercase tracking-wide">Hover</span>
                    </div>
                    <button className={`btn ${variant.name === 'Primary' ? 'btn-primary' : variant.name === 'Secondary' ? 'btn-secondary' : variant.name === 'Plain' ? 'btn-plain' : 'btn-danger'} btn-medium`} style={{
                      backgroundColor: variant.name === 'Primary' ? '#115e59' : variant.name === 'Secondary' ? '#ccfbf1' : variant.name === 'Plain' ? '#f0fdfa' : '#dc2626',
                      boxShadow: '0 0 0 4px rgba(240, 253, 250, 0.8)'
                    }}>
                      Button
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="mb-3">
                      <span className="text-body-small-semibold text-navy-600 uppercase tracking-wide">Focus</span>
                    </div>
                    <button className={`btn ${variant.name === 'Primary' ? 'btn-primary' : variant.name === 'Secondary' ? 'btn-secondary' : variant.name === 'Plain' ? 'btn-plain' : 'btn-danger'} btn-medium`} style={{
                      boxShadow: variant.name === 'Plain' ? '0 0 0 2px rgba(240, 253, 250, 0.5), 0 0 0 4px rgba(240, 253, 250, 0.2)' : '0 0 0 2px rgba(15, 118, 110, 0.5), 0 0 0 4px rgba(15, 118, 110, 0.2)'
                    }}>
                      Button
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="mb-3">
                      <span className="text-body-small-semibold text-navy-600 uppercase tracking-wide">Disabled</span>
                    </div>
                    <button className="btn btn-disabled btn-medium" disabled>
                      Button
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button Sizes */}
      <div className="mb-12">
        <h3 className="text-h3 text-surface-900 mb-6">Button Sizes</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {buttonSizes.map((size) => (
              <div key={size.name} className="text-center">
                <div className="mb-3">
                  <span className="text-body-small-semibold text-navy-600 uppercase tracking-wide">{size.name}</span>
                </div>
                <button className={`btn btn-primary ${size.classes}`}>
                  Button
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Icon Button Examples */}
      <div className="mb-12">
        <h3 className="text-h3 text-surface-900 mb-6">Icon Button Examples</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-3">
                <span className="text-body-small-semibold text-navy-600 uppercase tracking-wide">Icon Left</span>
              </div>
              <button className="btn btn-primary btn-medium">
                <Check className="w-4 h-4" />
                <span>Button</span>
              </button>
            </div>
            <div className="text-center">
              <div className="mb-3">
                <span className="text-body-small-semibold text-navy-600 uppercase tracking-wide">Icon Right</span>
              </div>
              <button className="btn btn-primary btn-medium">
                <span>Button</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center">
              <div className="mb-3">
                <span className="text-body-small-semibold text-navy-600 uppercase tracking-wide">Icon Only</span>
              </div>
              <button className="btn btn-primary btn-icon-only btn-icon-only-medium">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Split Button Example */}
      <div className="mb-12">
        <h3 className="text-h3 text-surface-900 mb-6">Split Button</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="flex justify-center">
            <div className="split-button">
              <button className="split-button-main">
                Button Label
              </button>
              <button className="split-button-dropdown-trigger">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTokensTab = () => {
    const tokens = [
      { token: 'button-border-radius', type: 'Border Radius', color: '', value: '30px', rawValue: '30px' },
      { token: 'button-font-weight', type: 'Font Weight', color: '', value: '600', rawValue: 'semibold' },
      { token: 'button-transition', type: 'Transition', color: '', value: 'all 0.2s ease', rawValue: 'transition-all duration-200' },
      { token: 'button-primary-bg', type: 'Background Color', color: '#0f766e', value: '#0f766e', rawValue: 'primary.700' },
      { token: 'button-primary-bg', type: 'Background Color', color: '#047880', value: '#047880', rawValue: 'primary.700' },
      { token: 'button-primary-text', type: 'Text Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'button-primary-hover-bg', type: 'Background Color', color: '#186368', value: '#186368', rawValue: 'primary.800' },
      { token: 'button-primary-hover-ring', type: 'Box Shadow', color: '#EAF6F7', value: '0 0 0 4px rgba(234, 246, 247, 0.8)', rawValue: 'primary.50' },
      { token: 'button-primary-focus-ring', type: 'Box Shadow', color: '#047880', value: '0 0 0 2px rgba(4, 120, 128, 0.5)', rawValue: 'primary.700' },
      { token: 'button-secondary-bg', type: 'Background Color', color: '#EAF6F7', value: '#EAF6F7', rawValue: 'primary.50' },
      { token: 'button-secondary-border', type: 'Border Color', color: '#D1EDEF', value: '#D1EDEF', rawValue: 'primary.100' },
      { token: 'button-secondary-text', type: 'Text Color', color: '#047880', value: '#047880', rawValue: 'primary.700' },
      { token: 'button-secondary-hover-bg', type: 'Background Color', color: '#D1EDEF', value: '#D1EDEF', rawValue: 'primary.100' },
      { token: 'button-secondary-hover-ring', type: 'Box Shadow', color: '#EAF6F7', value: '0 0 0 4px rgba(234, 246, 247, 0.8)', rawValue: 'primary.50' },
      { token: 'button-secondary-focus-ring', type: 'Box Shadow', color: '#047880', value: '0 0 0 2px rgba(4, 120, 128, 0.5)', rawValue: 'primary.700' },
      { token: 'button-plain-bg', type: 'Background Color', color: 'transparent', value: 'transparent', rawValue: 'transparent' },
      { token: 'button-plain-text', type: 'Text Color', color: '#047880', value: '#047880', rawValue: 'primary.700' },
      { token: 'button-plain-hover-bg', type: 'Background Color', color: '#EAF6F7', value: '#EAF6F7', rawValue: 'primary.50' },
      { token: 'button-plain-hover-ring', type: 'Box Shadow', color: '#EAF6F7', value: '0 0 0 4px rgba(234, 246, 247, 0.8)', rawValue: 'primary.50' },
      { token: 'button-plain-focus-ring', type: 'Box Shadow', color: '#EAF6F7', value: '0 0 0 2px rgba(234, 246, 247, 0.5)', rawValue: 'primary.50' },
      { token: 'button-danger-bg', type: 'Background Color', color: '#EB1000', value: '#EB1000', rawValue: 'red.500' },
      { token: 'button-danger-text', type: 'Text Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'button-danger-hover-bg', type: 'Background Color', color: '#D60F00', value: '#D60F00', rawValue: 'red.600' },
      { token: 'button-danger-hover-ring', type: 'Box Shadow', color: '#FFF5F5', value: '0 0 0 4px rgba(255, 245, 245, 0.8)', rawValue: 'red.50' },
      { token: 'button-danger-focus-ring', type: 'Box Shadow', color: '#EB1000', value: '0 0 0 2px rgba(235, 16, 0, 0.5)', rawValue: 'red.500' },
      { token: 'button-disabled-bg', type: 'Background Color', color: '#F4F4F5', value: '#F4F4F5', rawValue: 'surface.300' },
      { token: 'button-disabled-text', type: 'Text Color', color: '#A2A2A2', value: '#A2A2A2', rawValue: 'surface.700' },
      { token: 'button-padding-large', type: 'Spacing', color: '', value: '12px 24px', rawValue: '0.75rem 1.5rem' },
      { token: 'button-padding-medium', type: 'Spacing', color: '', value: '10px 20px', rawValue: '0.625rem 1.25rem' },
      { token: 'button-padding-small', type: 'Spacing', color: '', value: '8px 16px', rawValue: '0.5rem 1rem' },
      { token: 'button-padding-xsmall', type: 'Spacing', color: '', value: '6px 12px', rawValue: '0.375rem 0.75rem' },
      { token: 'button-font-size-large', type: 'Font Size', color: '', value: '16px', rawValue: '1rem' },
      { token: 'button-font-size-medium', type: 'Font Size', color: '', value: '14px', rawValue: '0.875rem' },
      { token: 'button-font-size-small', type: 'Font Size', color: '', value: '12px', rawValue: '0.75rem' },
      { token: 'button-font-size-xsmall', type: 'Font Size', color: '', value: '10px', rawValue: '0.625rem' },
    ];

    return (
      <div>
        <div className="mb-8">
          <h3 className="text-h3 text-surface-900 mb-6">Button Token Documentation</h3>
          <p className="text-body-copy-medium text-navy-600 mb-6">
            These design tokens define the visual properties of the Button component.
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
                <div className="text-body-small-regular text-surface-900 font-mono">
                  {item.token}
                </div>
                <div className="text-body-small-regular text-navy-600">
                  {item.type}
                </div>
                <div className="flex items-center">
                  {item.color && item.color !== 'transparent' && (
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
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>
          <div>
            <h1 className="text-h1 text-navy-900">Button</h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                COMPLETED
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          Buttons allow users to perform actions and make choices with a single tap. They communicate 
          the action that will occur when the user touches them. Use the appropriate button variant 
          for different levels of emphasis and hierarchy.
        </p>
        
        <a 
          href="https://primeng.org/button" 
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
                : 'text-navy-500 hover:bg-surface-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-sm ${activeTab === 'copy-me' ? 'bg-white' : 'bg-navy-400'}`}></div>
            <span>Copy Me</span>
          </button>
          <button 
            onClick={() => setActiveTab('guidance')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'guidance' 
                ? 'bg-surface-800 text-white' 
                : 'text-navy-500 hover:bg-surface-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-sm ${activeTab === 'guidance' ? 'bg-white' : 'bg-navy-400'}`}></div>
            <span>Guidance</span>
          </button>
          <button 
            onClick={() => setActiveTab('component')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'component' 
                ? 'bg-surface-800 text-white' 
                : 'text-navy-500 hover:bg-surface-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-sm ${activeTab === 'component' ? 'bg-white' : 'bg-navy-400'}`}></div>
            <span>Component</span>
          </button>
          <button 
            onClick={() => setActiveTab('tokens')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'tokens' 
                ? 'bg-surface-800 text-white' 
                : 'text-navy-500 hover:bg-surface-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-sm ${activeTab === 'tokens' ? 'bg-white' : 'bg-navy-400'}`}></div>
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

export default Buttons;