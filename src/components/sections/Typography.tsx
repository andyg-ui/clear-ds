import React from 'react';
import CodeBlock from '../CodeBlock';

const Typography: React.FC = () => {
  const typographyStyles = [
    { 
      label: 'H1', 
      class: 'text-h1', 
      specs: 'Open Sans - 48px/Auto - Bold',
      sample: 'Lorem Ipsum Dolor Sit Amet'
    },
    { 
      label: 'H2', 
      class: 'text-h2', 
      specs: 'Open Sans - 38px/Auto - Bold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'H3', 
      class: 'text-h3', 
      specs: 'Open Sans - 32px/Auto - Bold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'H4', 
      class: 'text-h4', 
      specs: 'Open Sans - 20px/Auto - Bold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'H5', 
      class: 'text-h5', 
      specs: 'Open Sans - 12px/Auto - Bold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'H6', 
      class: 'text-h6', 
      specs: 'Open Sans - 10px/Auto - Bold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'Large Bold', 
      class: 'text-body-large-bold', 
      specs: 'Open Sans - 18px/Auto - Bold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'Large SemiBold', 
      class: 'text-body-large-semibold', 
      specs: 'Open Sans - 18px/Auto - SemiBold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'Large Regular', 
      class: 'text-body-large-regular', 
      specs: 'Open Sans - 18px/Auto - Regular',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'Normal Bold', 
      class: 'text-body-normal-bold', 
      specs: 'Open Sans - 15px/Auto - Bold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'Normal SemiBold', 
      class: 'text-body-normal-semibold', 
      specs: 'Open Sans - 15px/Auto - SemiBold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'Normal Regular', 
      class: 'text-body-normal-regular', 
      specs: 'Open Sans - 15px/Auto - Regular',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'Small Bold', 
      class: 'text-body-small-bold', 
      specs: 'Open Sans - 12px/Auto - Bold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'Small SemiBold', 
      class: 'text-body-small-semibold', 
      specs: 'Open Sans - 12px/Auto - SemiBold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'Small Regular', 
      class: 'text-body-small-regular', 
      specs: 'Open Sans - 12px/Auto - Regular',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'XSmall Bold', 
      class: 'text-body-xsmall-bold', 
      specs: 'Open Sans - 10px/Auto - Bold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'XSmall SemiBold', 
      class: 'text-body-xsmall-semibold', 
      specs: 'Open Sans - 10px/Auto - SemiBold',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'XSmall Regular', 
      class: 'text-body-xsmall-regular', 
      specs: 'Open Sans - 10px/Auto - Regular',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'Body Copy Large', 
      class: 'text-body-copy-large', 
      specs: 'Open Sans - 16px/Auto - Regular',
      sample: 'Lorem ipsum dolor sit amet'
    },
    { 
      label: 'Body Copy Medium', 
      class: 'text-body-copy-medium', 
      specs: 'Open Sans - 14px/Auto - Regular',
      sample: 'Lorem ipsum dolor sit amet'
    },
  ];

  const cssCode = `/* Typography CSS Classes */
.text-h1 { font-size: 48px; line-height: 1.2; font-weight: 700; }
.text-h2 { font-size: 38px; line-height: 1.2; font-weight: 700; }
.text-h3 { font-size: 32px; line-height: 1.2; font-weight: 700; }
.text-h4 { font-size: 20px; line-height: 1.2; font-weight: 700; }
.text-h5 { font-size: 12px; line-height: 1.2; font-weight: 700; }
.text-h6 { font-size: 10px; line-height: 1.2; font-weight: 700; }

.text-body-large-bold { font-size: 18px; line-height: 1.5; font-weight: 700; }
.text-body-large-semibold { font-size: 18px; line-height: 1.5; font-weight: 600; }
.text-body-large-regular { font-size: 18px; line-height: 1.5; font-weight: 400; }

.text-body-normal-bold { font-size: 15px; line-height: 1.5; font-weight: 700; }
.text-body-normal-semibold { font-size: 15px; line-height: 1.5; font-weight: 600; }
.text-body-normal-regular { font-size: 15px; line-height: 1.5; font-weight: 400; }`;

  const tailwindConfig = `// Tailwind Typography Configuration
fontSize: {
  // Heading Sizes
  'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
  'h2': ['38px', { lineHeight: '1.2', fontWeight: '700' }], 
  'h3': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
  'h4': ['20px', { lineHeight: '1.2', fontWeight: '700' }],
  'h5': ['12px', { lineHeight: '1.2', fontWeight: '700' }],
  'h6': ['10px', { lineHeight: '1.2', fontWeight: '700' }],
  
  // Body Sizes
  'body-large-bold': ['18px', { lineHeight: '1.5', fontWeight: '700' }],
  'body-large-semibold': ['18px', { lineHeight: '1.5', fontWeight: '600' }],
  'body-large-regular': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
  
  'body-normal-bold': ['15px', { lineHeight: '1.5', fontWeight: '700' }],
  'body-normal-semibold': ['15px', { lineHeight: '1.5', fontWeight: '600' }],
  'body-normal-regular': ['15px', { lineHeight: '1.5', fontWeight: '400' }],
  
  'body-copy-large': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
  'body-copy-medium': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
}`;

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>
          <div>
            <h1 className="text-h1 text-navy-900">Typography</h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                COMPLETED
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          Below are all the type styles available in Clear. The font used is Open Sans, it's downloadable via the link below.
        </p>
        
        <a 
          href="https://fonts.google.com/specimen/Open+Sans" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600 transition-colors text-body-normal-regular underline"
        >
          Download OpenSans
        </a>
      </div>

      {/* Typography Scale */}
      <div className="mb-12">
        <div className="bg-white border border-surface-300 rounded-lg p-8 space-y-8">
          {typographyStyles.map((style, index) => (
            <div key={index} className="border-b border-surface-200 pb-6 last:border-b-0 last:pb-0">
              <div className="mb-2 text-body-small-regular text-navy-600 uppercase tracking-wide">
                {style.label}
              </div>
              <div className={`${style.class} text-navy-900 mb-2`}>
                {style.sample}
              </div>
              <div className="text-body-small-regular text-navy-600 font-mono">
                {style.specs}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-h2 text-navy-900 mb-6">Usage Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-surface-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-navy-900 mb-4">HTML Usage</h3>
            <CodeBlock
              language="html"
              code={`<h1 class="text-h1">Main Heading</h1>
<h2 class="text-h2">Section Heading</h2>
<p class="text-body-copy-large">
  Body text with larger size for better readability.
</p>
<p class="text-body-normal-regular">
  Standard body text for most content.
</p>
<span class="text-body-small-semibold">
  Small emphasized text
</span>`}
            />
          </div>
          
          <div className="bg-white border border-surface-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-navy-900 mb-4">React/JSX Usage</h3>
            <CodeBlock
              language="jsx"
              code={`<div>
  <h1 className="text-h1 text-surface-900">
    Clear Design System
  </h1>
  <p className="text-body-copy-large text-surface-600">
    A comprehensive design language for building 
    beautiful interfaces.
  </p>
  <button className="text-body-normal-semibold">
    Learn More
  </button>
</div>`}
            />
          </div>
        </div>
      </div>

      {/* Typography Hierarchy */}
      <div className="mb-12">
        <h2 className="text-h2 text-navy-900 mb-6">Typography Hierarchy</h2>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">Headings</h3>
              <ul className="space-y-2 text-navy-600">
                <li className="text-body-small-regular">H1 - 48px - Page titles</li>
                <li className="text-body-small-regular">H2 - 38px - Section headers</li>
                <li className="text-body-small-regular">H3 - 32px - Subsection headers</li>
                <li className="text-body-small-regular">H4 - 20px - Minor headings</li>
                <li className="text-body-small-regular">H5 - 12px - Component labels</li>
                <li className="text-body-small-regular">H6 - 10px - Fine print headings</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">Body Text</h3>
              <ul className="space-y-2 text-navy-600">
                <li className="text-body-small-regular">Large - 18px - Emphasized content</li>
                <li className="text-body-small-regular">Normal - 15px - Standard text</li>
                <li className="text-body-small-regular">Small - 12px - Secondary information</li>
                <li className="text-body-small-regular">XSmall - 10px - Captions, labels</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">Body Copy</h3>
              <ul className="space-y-2 text-navy-600">
                <li className="text-body-small-regular">Large - 16px - Long form content</li>
                <li className="text-body-small-regular">Medium - 14px - Standard body copy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Classes */}
      <div className="mb-12">
        <h2 className="text-h2 text-navy-900 mb-6">CSS Classes</h2>
        <div className="bg-white border border-surface-300 rounded-lg">
          <CodeBlock
            language="css"
            code={cssCode}
          />
        </div>
      </div>

      {/* Tailwind Configuration */}
      <div className="mb-12">
        <h2 className="text-h2 text-navy-900 mb-6">Tailwind Configuration</h2>
        <div className="bg-white border border-surface-300 rounded-lg">
          <CodeBlock
            language="javascript"
            code={tailwindConfig}
          />
        </div>
      </div>
    </div>
  );
};

export default Typography;