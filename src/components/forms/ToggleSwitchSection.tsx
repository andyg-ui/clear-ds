import React, { useState } from 'react';
import CodeBlock from '../CodeBlock';

const ToggleSwitchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('copy-me');
  
  // Basic ToggleSwitch state
  const [basicToggle, setBasicToggle] = useState(false);
  
  // Notifications example states
  const [notifications, setNotifications] = useState(true);
  const [receiveEmailNotifications, setReceiveEmailNotifications] = useState(false);
  const [emailBorrowersAutomatically, setEmailBorrowersAutomatically] = useState(true);
  const [emailCoBorrowersAutomatically, setEmailCoBorrowersAutomatically] = useState(false);
  
  // Single toggle example
  const [emailBorrowersSingle, setEmailBorrowersSingle] = useState(false);

  const toggleSwitchCode = `<!-- Basic ToggleSwitch -->
<div class="flex items-center space-x-3">
  <label class="toggleswitch-container">
    <input type="checkbox" class="toggleswitch-input" />
    <div class="toggleswitch-track">
      <div class="toggleswitch-handle"></div>
    </div>
  </label>
  <span class="text-sm font-medium text-surface-700">
    Toggle Label
  </span>
</div>

<!-- Disabled ToggleSwitch -->
<div class="flex items-center space-x-3">
  <label class="toggleswitch-container">
    <input type="checkbox" disabled class="toggleswitch-input" />
    <div class="toggleswitch-track">
      <div class="toggleswitch-handle"></div>
    </div>
  </label>
  <span class="text-sm font-medium text-surface-400">
    Disabled Toggle
  </span>
</div>`;

  const reactToggleSwitchCode = `// React ToggleSwitch Component
const ToggleSwitch = ({ 
  checked = false,
  disabled = false,
  onChange,
  label,
  id,
  ...props 
}) => {
  return (
    <div className="flex items-center space-x-3">
      <label htmlFor={id} className="toggleswitch-container">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="toggleswitch-input"
          {...props}
        />
        <div className="toggleswitch-track">
          <div className="toggleswitch-handle"></div>
        </div>
      </label>
      {label && (
        <span className={\`text-sm font-medium \${
          disabled ? 'text-surface-400 cursor-not-allowed' : 'text-surface-700'
        }\`}>
          {label}
        </span>
      )}
    </div>
  );
};`;

  const renderCopyMeTab = () => (
    <div>
      {/* Basic ToggleSwitch */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">ToggleSwitch</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm">
            <div className="flex items-center space-x-3">
              <label className="toggleswitch-container">
                <input
                  type="checkbox"
                  checked={basicToggle}
                  onChange={(e) => setBasicToggle(e.target.checked)}
                  className="toggleswitch-input"
                />
                <div className="toggleswitch-track">
                  <div className="toggleswitch-handle"></div>
                </div>
              </label>
              <span className="text-sm font-medium text-navy-600">
                ToggleSwitch
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Example */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Notifications</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-md space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-navy-600">
                Notifications
              </span>
              <label className="toggleswitch-container">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="toggleswitch-input"
                />
                <div className="toggleswitch-track">
                  <div className="toggleswitch-handle"></div>
                </div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-navy-600">
                Receive email notifications
              </span>
              <label className="toggleswitch-container">
                <input
                  type="checkbox"
                  checked={receiveEmailNotifications}
                  onChange={(e) => setReceiveEmailNotifications(e.target.checked)}
                  className="toggleswitch-input"
                />
                <div className="toggleswitch-track">
                  <div className="toggleswitch-handle"></div>
                </div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-navy-600">
                Email borrowers automatically
              </span>
              <label className="toggleswitch-container">
                <input
                  type="checkbox"
                  checked={emailBorrowersAutomatically}
                  onChange={(e) => setEmailBorrowersAutomatically(e.target.checked)}
                  className="toggleswitch-input"
                />
                <div className="toggleswitch-track">
                  <div className="toggleswitch-handle"></div>
                </div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-navy-600">
                Email co-borrowers automatically
              </span>
              <label className="toggleswitch-container">
                <input
                  type="checkbox"
                  checked={emailCoBorrowersAutomatically}
                  onChange={(e) => setEmailCoBorrowersAutomatically(e.target.checked)}
                  className="toggleswitch-input"
                />
                <div className="toggleswitch-track">
                  <div className="toggleswitch-handle"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Single Toggle Example */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Email borrowers</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="max-w-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-navy-600">
                Email borrowers
              </span>
              <label className="toggleswitch-container">
                <input
                  type="checkbox"
                  checked={emailBorrowersSingle}
                  onChange={(e) => setEmailBorrowersSingle(e.target.checked)}
                  className="toggleswitch-input"
                />
                <div className="toggleswitch-track">
                  <div className="toggleswitch-handle"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuidanceTab = () => (
    <div>
      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Usage & Behavior</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Toggle switches are digital on/off switches. They prompt users to choose between two mutually exclusive options and always have a default value. Toggles should provide immediate results, giving users the freedom to control their preferences as needed.
        </p>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Toggles should provide immediate results, which means that a toggle's action takes effect immediately. This is different from other form controls like checkboxes, which require the user to click Save or Submit to apply their state.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Labeling</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Use labels that clearly describe what the toggle controls. The label should be clear enough that users understand what will happen when they toggle the switch.
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Keep labels short and descriptive</li>
          <li>• Use active voice when possible</li>
          <li>• Avoid negative phrasing that might confuse users</li>
          <li>• Consider the context and make labels specific to the action</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Accessibility</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          To enhance user accessibility when operating the toggle switch, consider the following:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Ensure proper ARIA labels and roles are implemented</li>
          <li>• Support keyboard navigation using the TAB, SPACE and ENTER keys</li>
          <li>• Provide sufficient color contrast for all states</li>
          <li>• Use focus indicators that meet accessibility standards</li>
          <li>• Announce state changes to screen readers</li>
          <li>• Ensure the toggle is large enough to be easily clickable</li>
          <li>• Provide clear visual feedback for the current state</li>
          <li>• Consider users with motor impairments by making the target area sufficiently large</li>
          <li>• Ensure the component works with assistive technologies</li>
        </ul>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-blue-800 text-sm">
              <strong>Important:</strong> It is crucial that you test a toggle switch when it's used in a form to ensure it works as expected when the user changes its state.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderComponentTab = () => (
    <div>
      {/* ToggleSwitch States */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">ToggleSwitch</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Unchecked States */}
            <div>
              <h4 className="text-lg font-semibold text-navy-900 mb-6">Unchecked</h4>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-navy-600">Rest</span>
                  <label className="toggleswitch-container">
                    <input type="checkbox" className="toggleswitch-input" />
                    <div className="toggleswitch-track">
                      <div className="toggleswitch-handle"></div>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-navy-600">Hover</span>
                  <label className="toggleswitch-container">
                    <input type="checkbox" className="toggleswitch-input" />
                    <div className="toggleswitch-track toggleswitch-track-hover">
                      <div className="toggleswitch-handle"></div>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-navy-600">Focus</span>
                  <label className="toggleswitch-container">
                    <input type="checkbox" className="toggleswitch-input" />
                    <div className="toggleswitch-track toggleswitch-track-focus">
                      <div className="toggleswitch-handle"></div>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-navy-600">Disabled</span>
                  <label className="toggleswitch-container">
                    <input type="checkbox" disabled className="toggleswitch-input" />
                    <div className="toggleswitch-track">
                      <div className="toggleswitch-handle"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Checked States */}
            <div>
              <h4 className="text-lg font-semibold text-navy-900 mb-6">Checked</h4>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-navy-600">Rest</span>
                  <label className="toggleswitch-container">
                    <input type="checkbox" checked className="toggleswitch-input" />
                    <div className="toggleswitch-track">
                      <div className="toggleswitch-handle"></div>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-navy-600">Hover</span>
                  <label className="toggleswitch-container">
                    <input type="checkbox" checked className="toggleswitch-input" />
                    <div className="toggleswitch-track toggleswitch-track-hover">
                      <div className="toggleswitch-handle"></div>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-navy-600">Focus</span>
                  <label className="toggleswitch-container">
                    <input type="checkbox" checked className="toggleswitch-input" />
                    <div className="toggleswitch-track toggleswitch-track-focus">
                      <div className="toggleswitch-handle"></div>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-navy-600">Disabled</span>
                  <label className="toggleswitch-container">
                    <input type="checkbox" checked disabled className="toggleswitch-input" />
                    <div className="toggleswitch-track">
                      <div className="toggleswitch-handle"></div>
                    </div>
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
      { token: 'toggleswitch-track-width', type: 'Size', color: '', value: '44px', rawValue: '2.75rem' },
      { token: 'toggleswitch-track-height', type: 'Size', color: '', value: '24px', rawValue: '1.5rem' },
      { token: 'toggleswitch-handle-size', type: 'Size', color: '', value: '20px', rawValue: '1.25rem' },
      { token: 'toggleswitch-border-radius', type: 'Border Radius', color: '', value: '12px', rawValue: '0.75rem' },
      { token: 'toggleswitch-handle-radius', type: 'Border Radius', color: '', value: '50%', rawValue: '50%' },
      { token: 'toggleswitch-track-bg-unchecked', type: 'Background Color', color: '#cbd5e1', value: '#cbd5e1', rawValue: 'surface.300' },
      { token: 'toggleswitch-track-bg-checked', type: 'Background Color', color: '#14b8a6', value: '#14b8a6', rawValue: 'primary.500' },
      { token: 'toggleswitch-track-bg-disabled', type: 'Background Color', color: '#e2e8f0', value: '#e2e8f0', rawValue: 'surface.200' },
      { token: 'toggleswitch-handle-bg', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'toggleswitch-handle-shadow', type: 'Box Shadow', color: '', value: '0 1px 3px 0 rgb(0 0 0 / 0.1)', rawValue: 'shadow' },
      { token: 'toggleswitch-focus-ring', type: 'Box Shadow', color: '#14b8a6', value: '0 0 0 2px #14b8a6', rawValue: 'ring-primary-500' },
      { token: 'toggleswitch-transition', type: 'Transition', color: '', value: 'all 0.2s ease', rawValue: 'transition-all duration-200' },
      { token: 'toggleswitch-label-color', type: 'Text Color', color: '#334155', value: '#334155', rawValue: 'surface.700' },
      { token: 'toggleswitch-label-disabled', type: 'Text Color', color: '#94a3b8', value: '#94a3b8', rawValue: 'surface.400' },
      { token: 'toggleswitch-spacing', type: 'Spacing', color: '', value: '12px', rawValue: '0.75rem' },
    ];

    return (
      <div>
        <div className="mb-8">
          <h3 className="text-h3 text-navy-900 mb-6">ToggleSwitch Token Documentation</h3>
          <p className="text-body-copy-medium text-navy-600 mb-6">
            These design tokens define the visual properties of the ToggleSwitch component.
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
            <div className="w-5 h-5 bg-white rounded-full"></div>
          </div>
          <div>
            <h2 className="text-h2 text-navy-900">ToggleSwitch</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                COMPLETED
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          A toggle switch is a UI element that allows users to switch between two mutually exclusive states, typically "on" and "off".
        </p>
        
        <a 
          href="https://primeng.org/togglebutton" 
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
                code={toggleSwitchCode}
              />
            </div>
            
            <div className="bg-white border border-surface-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-4">React Component</h4>
              <CodeBlock
                language="jsx"
                code={reactToggleSwitchCode}
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
                    <span>Use for binary on/off states that take immediate effect</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Use clear, descriptive labels that indicate the action</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Provide immediate feedback when the state changes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Group related toggles together logically</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-check text-green-500 mt-0.5"></i>
                    <span>Use consistent positioning (label left, toggle right)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-navy-900 mb-4 text-red-700">Don't</h4>
                <ul className="space-y-3 text-navy-600">
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use for actions that require a submit button</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use negative phrasing in labels that might confuse users</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Use for multiple choice selections (use checkboxes instead)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Make the toggle too small to be easily clickable</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="pi pi-times text-red-500 mt-0.5"></i>
                    <span>Forget to provide clear visual feedback for state changes</span>
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

export default ToggleSwitchSection;