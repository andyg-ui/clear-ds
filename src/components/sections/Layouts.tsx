import React from 'react';
import CodeBlock from '../CodeBlock';
import { Grid, Layout, Smartphone, Tablet, Monitor } from 'lucide-react';

const Layouts: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('copy-me');

  const gridSystemCode = `<!-- 12 Column Grid System -->
<div class="container mx-auto px-4">
  <div class="grid grid-cols-12 gap-6">
    <!-- Full width -->
    <div class="col-span-12">Content</div>
    
    <!-- Half width -->
    <div class="col-span-6">Content</div>
    <div class="col-span-6">Content</div>
    
    <!-- Thirds -->
    <div class="col-span-4">Content</div>
    <div class="col-span-4">Content</div>
    <div class="col-span-4">Content</div>
    
    <!-- Responsive columns -->
    <div class="col-span-12 md:col-span-8 lg:col-span-9">
      Main Content
    </div>
    <div class="col-span-12 md:col-span-4 lg:col-span-3">
      Sidebar
    </div>
  </div>
</div>`;

  const containerCode = `<!-- Container Sizes -->
<div class="container mx-auto px-4">
  <!-- Max width container with responsive padding -->
</div>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Custom max width with responsive padding -->
</div>

<!-- Responsive Containers -->
<div class="w-full max-w-sm mx-auto">Small</div>
<div class="w-full max-w-md mx-auto">Medium</div>
<div class="w-full max-w-lg mx-auto">Large</div>
<div class="w-full max-w-xl mx-auto">Extra Large</div>`;

  const mobileLayoutCode = `<!-- Mobile Layout -->
<div class="w-full px-4">
  <div class="space-y-4">
    <!-- Stacked content for mobile -->
    <div class="w-full">Content Block 1</div>
    <div class="w-full">Content Block 2</div>
    <div class="w-full">Content Block 3</div>
  </div>
</div>

<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

  const responsiveBreakpoints = [
    { name: 'Mobile', size: '< 768px', cols: '1-4 columns', description: 'Single column layout with stacked content' },
    { name: 'Tablet', size: '768px - 1024px', cols: '6-8 columns', description: 'Two column layout with flexible content areas' },
    { name: 'Desktop', size: '> 1024px', cols: '12 columns', description: 'Full grid system with maximum flexibility' },
  ];

  const spacingTokens = [
    { token: 'space-1', value: '4px', usage: 'Tight spacing between related elements' },
    { token: 'space-2', value: '8px', usage: 'Small gaps, form field spacing' },
    { token: 'space-3', value: '12px', usage: 'Default component padding' },
    { token: 'space-4', value: '16px', usage: 'Standard spacing between elements' },
    { token: 'space-6', value: '24px', usage: 'Section spacing, card padding' },
    { token: 'space-8', value: '32px', usage: 'Large section gaps' },
    { token: 'space-12', value: '48px', usage: 'Major section separation' },
    { token: 'space-16', value: '64px', usage: 'Page section spacing' },
  ];

  const layoutTokens = [
    { token: 'grid-cols-12', type: 'Grid Columns', value: '12', rawValue: 'repeat(12, minmax(0, 1fr))' },
    { token: 'gap-1', type: 'Grid Gap', value: '4px', rawValue: '0.25rem' },
    { token: 'gap-2', type: 'Grid Gap', value: '8px', rawValue: '0.5rem' },
    { token: 'gap-4', type: 'Grid Gap', value: '16px', rawValue: '1rem' },
    { token: 'gap-6', type: 'Grid Gap', value: '24px', rawValue: '1.5rem' },
    { token: 'gap-8', type: 'Grid Gap', value: '32px', rawValue: '2rem' },
    { token: 'container-sm', type: 'Max Width', value: '640px', rawValue: '40rem' },
    { token: 'container-md', type: 'Max Width', value: '768px', rawValue: '48rem' },
    { token: 'container-lg', type: 'Max Width', value: '1024px', rawValue: '64rem' },
    { token: 'container-xl', type: 'Max Width', value: '1280px', rawValue: '80rem' },
    { token: 'container-2xl', type: 'Max Width', value: '1536px', rawValue: '96rem' },
    { token: 'px-4', type: 'Padding X', value: '16px', rawValue: '1rem' },
    { token: 'px-6', type: 'Padding X', value: '24px', rawValue: '1.5rem' },
    { token: 'px-8', type: 'Padding X', value: '32px', rawValue: '2rem' },
    { token: 'py-4', type: 'Padding Y', value: '16px', rawValue: '1rem' },
    { token: 'py-6', type: 'Padding Y', value: '24px', rawValue: '1.5rem' },
    { token: 'py-8', type: 'Padding Y', value: '32px', rawValue: '2rem' },
  ];

  const renderCopyMeTab = () => (
    <div>
      {/* Grid System */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Grid System</h3>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <p className="text-body-copy-medium text-navy-600 mb-6">
            The 12-column grid system provides maximum flexibility for creating layouts. 
            Columns can be combined to create different width combinations, and the grid 
            automatically adjusts for different screen sizes.
          </p>
          
          {/* Visual Grid Example */}
          <div className="mb-8 p-6 bg-surface-50 rounded-lg">
            <div className="grid grid-cols-12 gap-2 mb-4">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="bg-primary-200 text-primary-800 text-xs font-medium p-2 rounded text-center">
                  {i + 1}
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 bg-primary-500 text-white text-sm font-medium p-3 rounded text-center">
                  12 columns (Full width)
                </div>
              </div>
              
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-6 bg-primary-500 text-white text-sm font-medium p-3 rounded text-center">
                  6 columns
                </div>
                <div className="col-span-6 bg-primary-500 text-white text-sm font-medium p-3 rounded text-center">
                  6 columns
                </div>
              </div>
              
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-4 bg-primary-500 text-white text-sm font-medium p-3 rounded text-center">
                  4 columns
                </div>
                <div className="col-span-4 bg-primary-500 text-white text-sm font-medium p-3 rounded text-center">
                  4 columns
                </div>
                <div className="col-span-4 bg-primary-500 text-white text-sm font-medium p-3 rounded text-center">
                  4 columns
                </div>
              </div>
            </div>
          </div>
          
          <CodeBlock
            language="html"
            code={gridSystemCode}
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Desktop Layout</h3>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <div className="bg-surface-100 rounded-lg p-8 mb-6">
            <div className="bg-surface-800 rounded-lg p-8 text-white text-center">
              <h4 className="text-lg font-semibold mb-2">Full Container</h4>
              <p className="text-sm text-navy-300">Max-width: 1280px with responsive padding</p>
            </div>
          </div>
          
          <CodeBlock
            language="html"
            code={containerCode}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Mobile Layout</h3>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <div className="bg-surface-100 rounded-lg p-6 mb-6">
            <div className="bg-surface-800 rounded-lg p-6 text-white text-center max-w-sm mx-auto">
              <h4 className="text-base font-semibold mb-2">Mobile Container</h4>
              <p className="text-xs text-navy-300">Full width with 16px padding</p>
            </div>
          </div>
          
          <CodeBlock
            language="html"
            code={mobileLayoutCode}
          />
        </div>
      </div>
    </div>
  );

  const renderGuidanceTab = () => (
    <div>
      {/* Overview */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Layout Principles</h3>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <p className="text-body-copy-medium text-navy-600 mb-6">
            Our layout system is built on a 12-column grid that adapts to different screen sizes. 
            It uses consistent spacing tokens and follows responsive design principles to ensure 
            optimal user experience across all devices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Grid className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-body-normal-semibold text-navy-900 mb-2">12-Column Grid</h4>
              <p className="text-body-small-regular text-navy-600">
                Flexible grid system that adapts to any layout requirement
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-body-normal-semibold text-navy-900 mb-2">Mobile First</h4>
              <p className="text-body-small-regular text-navy-600">
                Responsive design that starts with mobile and scales up
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Layout className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-body-normal-semibold text-navy-900 mb-2">Consistent Spacing</h4>
              <p className="text-body-small-regular text-navy-600">
                8px base unit system for predictable spacing patterns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Design */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Responsive Design</h3>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <p className="text-body-copy-medium text-navy-600 mb-6">
            Our responsive system uses three main breakpoints to ensure optimal layouts across all device sizes. 
            The grid automatically adjusts column counts and spacing based on screen width.
          </p>
          
          <div className="space-y-6">
            {responsiveBreakpoints.map((breakpoint) => (
              <div key={breakpoint.name} className="flex items-start space-x-4 p-4 bg-surface-50 rounded-lg">
                <div className="flex-shrink-0">
                  {breakpoint.name === 'Mobile' && <Smartphone className="w-6 h-6 text-primary-500" />}
                  {breakpoint.name === 'Tablet' && <Tablet className="w-6 h-6 text-primary-500" />}
                  {breakpoint.name === 'Desktop' && <Monitor className="w-6 h-6 text-primary-500" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h4 className="text-body-normal-semibold text-navy-900">{breakpoint.name}</h4>
                    <span className="text-body-small-regular text-navy-500 font-mono">{breakpoint.size}</span>
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                      {breakpoint.cols}
                    </span>
                  </div>
                  <p className="text-body-small-regular text-navy-600">{breakpoint.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Best Practices</h3>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-navy-900 mb-4 text-green-700">Do</h4>
              <ul className="space-y-3 text-navy-600">
                <li className="flex items-start space-x-3">
                  <i className="pi pi-check text-green-500 mt-0.5"></i>
                  <span>Use the 12-column grid for consistent layouts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="pi pi-check text-green-500 mt-0.5"></i>
                  <span>Design mobile-first and enhance for larger screens</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="pi pi-check text-green-500 mt-0.5"></i>
                  <span>Use consistent spacing tokens throughout</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="pi pi-check text-green-500 mt-0.5"></i>
                  <span>Test layouts across all breakpoints</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="pi pi-check text-green-500 mt-0.5"></i>
                  <span>Use semantic HTML structure</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-navy-900 mb-4 text-red-700">Don't</h4>
              <ul className="space-y-3 text-navy-600">
                <li className="flex items-start space-x-3">
                  <i className="pi pi-times text-red-500 mt-0.5"></i>
                  <span>Use arbitrary spacing values outside the token system</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="pi pi-times text-red-500 mt-0.5"></i>
                  <span>Create layouts that only work on desktop</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="pi pi-times text-red-500 mt-0.5"></i>
                  <span>Ignore content hierarchy and visual flow</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="pi pi-times text-red-500 mt-0.5"></i>
                  <span>Use fixed pixel widths for responsive content</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="pi pi-times text-red-500 mt-0.5"></i>
                  <span>Overcomplicate layouts with unnecessary nesting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* When to Use */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">When to Use Different Layouts</h3>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <div className="space-y-6">
            <div className="p-4 bg-surface-50 rounded-lg">
              <h4 className="text-body-normal-semibold text-navy-900 mb-2">Single Column</h4>
              <p className="text-body-copy-medium text-navy-600">
                Use for mobile layouts, forms, and content-focused pages where linear reading is important.
              </p>
            </div>
            <div className="p-4 bg-surface-50 rounded-lg">
              <h4 className="text-body-normal-semibold text-navy-900 mb-2">Two Column</h4>
              <p className="text-body-copy-medium text-navy-600">
                Ideal for main content with sidebar, or splitting content into primary and secondary areas.
              </p>
            </div>
            <div className="p-4 bg-surface-50 rounded-lg">
              <h4 className="text-body-normal-semibold text-navy-900 mb-2">Multi Column</h4>
              <p className="text-body-copy-medium text-navy-600">
                Use for dashboards, card layouts, or when displaying multiple equal-priority content blocks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderComponentTab = () => (
    <div>
      {/* Breakpoints */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Breakpoints</h3>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <div className="bg-surface-800 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">sm</div>
                <div className="text-sm text-navy-300">640px</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">md</div>
                <div className="text-sm text-navy-300">768px</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">lg</div>
                <div className="text-sm text-navy-300">1024px</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">xl</div>
                <div className="text-sm text-navy-300">1280px</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">2xl</div>
                <div className="text-sm text-navy-300">1536px</div>
              </div>
            </div>
          </div>
          
          <CodeBlock
            language="css"
            code={`/* Tailwind Breakpoints */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }`}
          />
        </div>
      </div>

      {/* Spacing System */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Spacing System</h3>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <p className="text-body-copy-medium text-navy-600 mb-6">
            Our spacing system is based on an 8px grid, providing consistent and predictable spacing 
            throughout the interface. These tokens ensure visual harmony and proper information hierarchy.
          </p>
          
          <div className="space-y-4">
            {spacingTokens.map((token) => (
              <div key={token.token} className="flex items-center justify-between p-4 bg-surface-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div 
                    className="bg-primary-500 rounded"
                    style={{ width: token.value, height: token.value }}
                  ></div>
                  <div>
                    <div className="text-body-normal-semibold text-navy-900 font-mono">
                      {token.token}
                    </div>
                    <div className="text-body-small-regular text-navy-500">
                      {token.value}
                    </div>
                  </div>
                </div>
                <div className="text-body-small-regular text-navy-600 max-w-xs text-right">
                  {token.usage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Container Examples */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Container Examples</h3>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <div className="space-y-6">
            <div className="bg-surface-100 p-4 rounded-lg">
              <div className="bg-primary-500 text-white p-4 rounded text-center max-w-sm mx-auto">
                <span className="text-sm font-medium">Small Container (384px)</span>
              </div>
            </div>
            
            <div className="bg-surface-100 p-4 rounded-lg">
              <div className="bg-primary-500 text-white p-4 rounded text-center max-w-md mx-auto">
                <span className="text-sm font-medium">Medium Container (448px)</span>
              </div>
            </div>
            
            <div className="bg-surface-100 p-4 rounded-lg">
              <div className="bg-primary-500 text-white p-4 rounded text-center max-w-lg mx-auto">
                <span className="text-sm font-medium">Large Container (512px)</span>
              </div>
            </div>
            
            <div className="bg-surface-100 p-4 rounded-lg">
              <div className="bg-primary-500 text-white p-4 rounded text-center max-w-7xl mx-auto">
                <span className="text-sm font-medium">Full Container (1280px)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTokensTab = () => (
    <div>
      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-6">Layout Token Documentation</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          These design tokens define the spacing, grid, and container properties used throughout the layout system.
        </p>
      </div>

      <div className="bg-white border border-surface-200 rounded-lg overflow-hidden">
        <div className="bg-surface-800 text-white px-6 py-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="text-sm font-semibold">Token</div>
            <div className="text-sm font-semibold">Type</div>
            <div className="text-sm font-semibold">Value</div>
            <div className="text-sm font-semibold">Raw Value</div>
          </div>
        </div>
        
        <div className="divide-y divide-surface-200">
          {layoutTokens.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 px-6 py-4 items-center">
              <div className="text-body-small-regular text-navy-900 font-mono">
                {item.token}
              </div>
              <div className="text-body-small-regular text-navy-600">
                {item.type}
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

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <Layout className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-h1 text-navy-900">Layouts</h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                IN PROGRESS
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl">
          The Clear Design System uses a flexible 12-column grid system built on CSS Grid and Flexbox. 
          This system provides consistent spacing, alignment, and responsive behavior across all components and layouts.
        </p>
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

export default Layouts;