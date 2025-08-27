import React from 'react';
import CodeBlock from '../CodeBlock';
import { Box } from 'lucide-react';

const Elevation: React.FC = () => {
  const shadowLevels = [
    {
      name: 'Shadow Depth 1',
      class: 'shadow-sm',
      css: 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);',
      description: 'Subtle shadow for cards and buttons'
    },
    {
      name: 'Shadow Depth 2', 
      class: 'shadow',
      css: 'box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
      description: 'Default shadow for elevated elements'
    },
    {
      name: 'Shadow Depth 3',
      class: 'shadow-md',
      css: 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
      description: 'Medium shadow for dropdowns and tooltips'
    },
    {
      name: 'Shadow Depth 4',
      class: 'shadow-lg',
      css: 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
      description: 'Large shadow for modals and overlays'
    }
  ];

  const shadowCode = `<!-- Shadow Classes -->
<div class="shadow-sm">Shadow Depth 1</div>
<div class="shadow">Shadow Depth 2</div>
<div class="shadow-md">Shadow Depth 3</div>
<div class="shadow-lg">Shadow Depth 4</div>

<!-- Custom CSS -->
.shadow-depth-1 {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.shadow-depth-2 {
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.shadow-depth-3 {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.shadow-depth-4 {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}`;

  const scrimCode = `<!-- Scrim Overlay -->
<div class="fixed inset-0 bg-black bg-opacity-50 z-40">
  <!-- Modal content -->
  <div class="bg-white rounded-lg shadow-lg p-6">
    <h2>Modal Title</h2>
    <p>Modal content goes here...</p>
  </div>
</div>

<!-- CSS Implementation -->
.scrim {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}`;

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <Box className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-h1 text-navy-900">Elevation</h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                COMPLETED
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl">
          Elevation refers to the use of shadows, opacity and layering to create a sense of depth and visual hierarchy between UI elements. It helps users distinguish elements, establish relationships, and improve usability by making interfaces more intuitive.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Guidance */}
        <div>
          <div className="bg-surface-800 text-white px-6 py-4 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-surface-800 rounded-full"></div>
              </div>
              <h2 className="text-lg font-semibold">Guidance</h2>
            </div>
          </div>
          
          <div className="bg-white border border-surface-300 rounded-b-lg p-6">
            {/* Shadows Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Shadows</h3>
              <p className="text-navy-600 text-sm mb-4">
                Shadows are used to enhance visual hierarchy, indicate elevation, and create a sense of depth.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-blue-900 text-sm">
                    The shadow styles are part of the Clear design system. You can apply shadow by applying an effect style on a given layer.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {shadowLevels.map((shadow, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-surface-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div 
                        className={`w-12 h-12 bg-white rounded-lg ${shadow.class}`}
                      ></div>
                      <div>
                        <div className="text-body-normal-semibold text-navy-900">
                          {shadow.name}
                        </div>
                        <div className="text-body-small-regular text-navy-500">
                          {shadow.description}
                        </div>
                      </div>
                      <div className="text-body-small-regular text-navy-600">
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scrim Section */}
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Scrim</h3>
              <p className="text-navy-600 text-sm mb-6">
                Scrims are darkened layered surfaces used to bring attention to UI elements like modals and expanded navigation menus.
              </p>
              
              {/* Scrim Example Image */}
              <div className="bg-surface-100 rounded-lg p-4">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Scrim example showing modal overlay"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Component / Copy Me */}
        <div>
          <div className="bg-surface-800 text-white px-6 py-4 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-surface-800 rounded-full"></div>
              </div>
              <h2 className="text-lg font-semibold">Component / Copy Me</h2>
            </div>
          </div>
          
          <div className="bg-white border border-surface-300 rounded-b-lg p-6">
            {/* Scrim Label */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
              <span className="text-body-small-semibold text-primary-600 uppercase tracking-wide">
                Scrim
              </span>
            </div>
            
            {/* Interactive Scrim Example */}
            <div className="relative bg-surface-300 rounded-lg h-80 overflow-hidden">
              {/* Background content */}
              <div className="absolute inset-0 p-6">
                <div className="grid grid-cols-3 gap-4 h-full">
                  <div className="bg-white rounded-lg shadow-sm"></div>
                  <div className="bg-white rounded-lg shadow-sm"></div>
                  <div className="bg-white rounded-lg shadow-sm"></div>
                  <div className="bg-white rounded-lg shadow-sm"></div>
                  <div className="bg-white rounded-lg shadow-sm"></div>
                  <div className="bg-white rounded-lg shadow-sm"></div>
                </div>
              </div>
              
              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-4">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    Modal Example
                  </h3>
                  <p className="text-navy-600 text-sm mb-4">
                    This modal demonstrates how scrim creates focus by darkening the background content.
                  </p>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-primary-500 text-white rounded-md text-sm font-medium">
                      Confirm
                    </button>
                    <button className="px-4 py-2 border border-surface-300 text-navy-500 rounded-md text-sm font-medium">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mt-12">
        <h2 className="text-h2 text-navy-900 mb-6">Usage Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-surface-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-navy-900 mb-4">Shadow Implementation</h3>
            <CodeBlock
              language="html"
              code={shadowCode}
            />
          </div>
          
          <div className="bg-white border border-surface-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-navy-900 mb-4">Scrim Implementation</h3>
            <CodeBlock
              language="html"
              code={scrimCode}
            />
          </div>
        </div>
      </div>

      {/* Shadow Depth Examples */}
      <div className="mt-12">
        <h2 className="text-h2 text-navy-900 mb-6">Shadow Depth Examples</h2>
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shadowLevels.map((shadow, index) => (
              <div key={index} className="text-center">
                <div className={`w-24 h-24 bg-white rounded-lg mx-auto mb-4 ${shadow.class}`}></div>
                <div className="text-body-normal-semibold text-navy-900 mb-1">
                  {shadow.name}
                </div>
                <div className="text-body-small-regular text-navy-600 font-mono">
                  {shadow.class}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elevation;