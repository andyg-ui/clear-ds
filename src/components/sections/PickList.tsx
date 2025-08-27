import React, { useState } from 'react';
import { ListChecks, ChevronRight, Diamond } from 'lucide-react';
import CodeBlock from '../CodeBlock';

const PickList: React.FC = () => {
  const [activeTab, setActiveTab] = useState('copy-me');
  
  // PickList state management
  const [sourceItems, setSourceItems] = useState([
    'Option 1',
    'Option 2', 
    'Option 3',
    'Option 4',
    'Option 5'
  ]);
  
  const [targetItems, setTargetItems] = useState([
    'Option 6'
  ]);
  
  const [selectedSourceItems, setSelectedSourceItems] = useState<string[]>([]);
  const [selectedTargetItems, setSelectedTargetItems] = useState<string[]>([]);

  const handleSourceItemSelect = (item: string) => {
    setSelectedSourceItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const handleTargetItemSelect = (item: string) => {
    setSelectedTargetItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const moveToTarget = () => {
    if (selectedSourceItems.length === 0) return;
    
    setTargetItems(prev => [...prev, ...selectedSourceItems]);
    setSourceItems(prev => prev.filter(item => !selectedSourceItems.includes(item)));
    setSelectedSourceItems([]);
  };

  const moveToSource = () => {
    if (selectedTargetItems.length === 0) return;
    
    setSourceItems(prev => [...prev, ...selectedTargetItems]);
    setTargetItems(prev => prev.filter(item => !selectedTargetItems.includes(item)));
    setSelectedTargetItems([]);
  };

  const pickListCode = `<!-- Basic PickList -->
<div class="picklist-container">
  <!-- Source List -->
  <div class="picklist-list">
    <div class="picklist-item">
      <input type="checkbox" class="checkbox-input checkbox-small" />
      <label class="picklist-item-label">Option 1</label>
    </div>
    <div class="picklist-item">
      <input type="checkbox" class="checkbox-input checkbox-small" />
      <label class="picklist-item-label">Option 2</label>
    </div>
    <div class="picklist-item picklist-item-selected">
      <input type="checkbox" checked class="checkbox-input checkbox-small" />
      <label class="picklist-item-label">Option 3</label>
    </div>
  </div>
  
  <!-- Controls -->
  <div class="picklist-controls">
    <button class="picklist-control-button">
      <i class="pi pi-chevron-right"></i>
    </button>
    <button class="picklist-control-button">
      <i class="pi pi-chevron-left"></i>
    </button>
  </div>
  
  <!-- Target List -->
  <div class="picklist-list">
    <div class="picklist-item">
      <input type="checkbox" class="checkbox-input checkbox-small" />
      <label class="picklist-item-label">Option 4</label>
    </div>
  </div>
</div>`;

  const reactPickListCode = `// React PickList Component
const PickList = ({ 
  sourceItems = [],
  targetItems = [],
  onSourceChange,
  onTargetChange,
  sourceHeader = "Available",
  targetHeader = "Selected",
  ...props 
}) => {
  const [selectedSource, setSelectedSource] = useState([]);
  const [selectedTarget, setSelectedTarget] = useState([]);
  
  const moveToTarget = () => {
    if (selectedSource.length === 0) return;
    
    const newTargetItems = [...targetItems, ...selectedSource];
    const newSourceItems = sourceItems.filter(item => !selectedSource.includes(item));
    
    onTargetChange?.(newTargetItems);
    onSourceChange?.(newSourceItems);
    setSelectedSource([]);
  };
  
  const moveToSource = () => {
    if (selectedTarget.length === 0) return;
    
    const newSourceItems = [...sourceItems, ...selectedTarget];
    const newTargetItems = targetItems.filter(item => !selectedTarget.includes(item));
    
    onSourceChange?.(newSourceItems);
    onTargetChange?.(newTargetItems);
    setSelectedTarget([]);
  };
  
  const handleSourceSelect = (item) => {
    setSelectedSource(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };
  
  const handleTargetSelect = (item) => {
    setSelectedTarget(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };
  
  return (
    <div className="picklist-container">
      {/* Source List */}
      <div className="picklist-list">
        <div className="picklist-header">{sourceHeader}</div>
        <div className="picklist-items">
          {sourceItems.map((item, index) => (
            <div 
              key={index}
              className={\`picklist-item \${selectedSource.includes(item) ? 'picklist-item-selected' : ''}\`}
              onClick={() => handleSourceSelect(item)}
            >
              <input
                type="checkbox"
                checked={selectedSource.includes(item)}
                onChange={() => handleSourceSelect(item)}
                className="checkbox-input checkbox-small"
              />
              <label className="picklist-item-label">{item}</label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Controls */}
      <div className="picklist-controls">
        <button 
          onClick={moveToTarget}
          disabled={selectedSource.length === 0}
          className="picklist-control-button"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <button 
          onClick={moveToSource}
          disabled={selectedTarget.length === 0}
          className="picklist-control-button"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>
      
      {/* Target List */}
      <div className="picklist-list">
        <div className="picklist-header">{targetHeader}</div>
        <div className="picklist-items">
          {targetItems.map((item, index) => (
            <div 
              key={index}
              className={\`picklist-item \${selectedTarget.includes(item) ? 'picklist-item-selected' : ''}\`}
              onClick={() => handleTargetSelect(item)}
            >
              <input
                type="checkbox"
                checked={selectedTarget.includes(item)}
                onChange={() => handleTargetSelect(item)}
                className="checkbox-input checkbox-small"
              />
              <label className="picklist-item-label">{item}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};`;

  const renderCopyMeTab = () => (
    <div>
      {/* Basic PickList */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Basic PickList</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="picklist-container">
            {/* Source List */}
            <div className="picklist-list">
              <div className="picklist-items">
                {sourceItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`picklist-item ${selectedSourceItems.includes(item) ? 'picklist-item-selected' : ''}`}
                    onClick={() => handleSourceItemSelect(item)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedSourceItems.includes(item)}
                      onChange={() => handleSourceItemSelect(item)}
                      className="checkbox-input checkbox-small"
                    />
                    <label className="picklist-item-label">{item}</label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Controls */}
            <div className="picklist-controls">
              <button 
                onClick={moveToTarget}
                disabled={selectedSourceItems.length === 0}
                className={`picklist-control-button ${selectedSourceItems.length === 0 ? 'picklist-control-button-disabled' : ''}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={moveToSource}
                disabled={selectedTargetItems.length === 0}
                className={`picklist-control-button ${selectedTargetItems.length === 0 ? 'picklist-control-button-disabled' : ''}`}
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
            
            {/* Target List */}
            <div className="picklist-list">
              <div className="picklist-items">
                {targetItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`picklist-item ${selectedTargetItems.includes(item) ? 'picklist-item-selected' : ''}`}
                    onClick={() => handleTargetItemSelect(item)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedTargetItems.includes(item)}
                      onChange={() => handleTargetItemSelect(item)}
                      className="checkbox-input checkbox-small"
                    />
                    <label className="picklist-item-label">{item}</label>
                  </div>
                ))}
              </div>
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
              code={pickListCode}
            />
          </div>
          
          <div className="bg-white border border-surface-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-navy-900 mb-4">React Component</h4>
            <CodeBlock
              language="jsx"
              code={reactPickListCode}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuidanceTab = () => (
    <div>
      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">When to Use PickList</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Use PickList when you need users to select items from one list and move them to another. 
          This component is ideal for scenarios like assigning permissions, organizing categories, 
          or any workflow where items need to be transferred between two distinct groups.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Interaction Patterns</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Users can select multiple items using checkboxes</li>
          <li>• Arrow buttons move selected items between lists</li>
          <li>• Items can be moved individually or in bulk</li>
          <li>• Clear visual feedback shows selected items</li>
          <li>• Disabled state for arrow buttons when no items are selected</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">List Organization</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Organize lists to improve user comprehension:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• Use clear headers to distinguish between source and target lists</li>
          <li>• Consider alphabetical or logical ordering of items</li>
          <li>• Provide search functionality for long lists</li>
          <li>• Show item counts for each list when helpful</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Accessibility</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Ensure proper ARIA labels for lists and controls</li>
          <li>• Support keyboard navigation between lists and items</li>
          <li>• Announce item movements to screen readers</li>
          <li>• Use sufficient color contrast for all states</li>
          <li>• Provide clear focus indicators</li>
        </ul>
      </div>
    </div>
  );

  const renderComponentTab = () => (
    <div>
      {/* PickList States */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">PickList States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="space-y-8">
            <div>
              <div className="mb-4">
                <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Default State</span>
              </div>
              <div className="picklist-container">
                <div className="picklist-list">
                  <div className="picklist-items">
                    <div className="picklist-item">
                      <input type="checkbox" className="checkbox-input checkbox-small" />
                      <label className="picklist-item-label">Option 1</label>
                    </div>
                    <div className="picklist-item">
                      <input type="checkbox" className="checkbox-input checkbox-small" />
                      <label className="picklist-item-label">Option 2</label>
                    </div>
                    <div className="picklist-item picklist-item-selected">
                      <input type="checkbox" checked className="checkbox-input checkbox-small" />
                      <label className="picklist-item-label">Option 3</label>
                    </div>
                  </div>
                </div>
                
                <div className="picklist-controls">
                  <button className="picklist-control-button">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="picklist-control-button picklist-control-button-disabled">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                  </button>
                </div>
                
                <div className="picklist-list">
                  <div className="picklist-items">
                    <div className="picklist-item">
                      <input type="checkbox" className="checkbox-input checkbox-small" />
                      <label className="picklist-item-label">Option 4</label>
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
      { token: 'picklist-gap', type: 'Spacing', color: '', value: '2rem', rawValue: '2rem' },
      { token: 'picklist-controls-gap', type: 'Spacing', color: '', value: '0.5rem', rawValue: '0.5rem' },
      { token: 'picklist-control-bg', type: 'Background Color', color: '#32A4AC', value: '#32A4AC', rawValue: 'primary.500' },
      { token: 'picklist-control-text', type: 'Text Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'picklist-control-border', type: 'Border Color', color: '#138890', value: '#138890', rawValue: 'primary.600' },
      { token: 'picklist-divider-color', type: 'Border Color', color: '#CBCED1', value: '#CBCED1', rawValue: 'navy.100' },
    ];

    return (
      <div>
        <div className="mb-8">
          <h3 className="text-h3 text-navy-900 mb-6">PickList Token Documentation</h3>
          <p className="text-body-copy-medium text-navy-600 mb-6">
            These design tokens define the spacing properties of the PickList component.
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
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    Spacing
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
            <ListChecks className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-h1 text-navy-900">PickList</h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                IN PROGRESS
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          PickList is used to reorder items between different lists.
        </p>
        
        <a 
          href="https://primeng.org/picklist" 
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

export default PickList;