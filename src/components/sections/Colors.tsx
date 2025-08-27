import React from 'react';
import CodeBlock from '../CodeBlock';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';

const Colors: React.FC = () => {
  const colorPalettes = {
    primary: {
      name: 'Primary Colors',
      description: 'Teal is the core color that defines the visual identity. It is used throughout the interface, primarily for key actions and interactive elements.',
      colors: [
        { name: 'teal-50', hex: '#EAF6F7', description: 'Lightest teal for backgrounds' },
        { name: 'teal-100', hex: '#D1EDEF', description: 'Very light teal' },
        { name: 'teal-200', hex: '#ADDDE0', description: 'Light teal' },
        { name: 'teal-300', hex: '#8BD2D7', description: 'Medium light teal' },
        { name: 'teal-400', hex: '#6BC2C8', description: 'Medium teal' },
        { name: 'teal-500', hex: '#32A4AC', description: 'Primary teal' },
        { name: 'teal-600', hex: '#138890', description: 'Medium dark teal' },
        { name: 'teal-700', hex: '#047880', description: 'Dark teal' },
        { name: 'teal-800', hex: '#186368', description: 'Very dark teal' },
        { name: 'teal-900', hex: '#18474A', description: 'Darkest teal' },
      ]
    },
    secondary: [
      {
        name: 'Surface',
        description: 'Surface is the main color used for backgrounds and containers to provide visual hierarchy.',
        colors: [
          { name: 'surface-50', hex: '#FFFFFF', description: 'Lightest gray for backgrounds' },
          { name: 'surface-100', hex: '#FCFCFC', description: 'Very light gray' },
          { name: 'surface-200', hex: '#F7F7F7', description: 'Light gray for borders' },
          { name: 'surface-300', hex: '#F4F4F5', description: 'Medium light gray' },
          { name: 'surface-400', hex: '#EDEDED', description: 'Medium gray for disabled states' },
          { name: 'surface-500', hex: '#E4E4E4', description: 'Medium gray for text' },
          { name: 'surface-600', hex: '#CFCFCF', description: 'Medium dark gray' },
          { name: 'surface-700', hex: '#A2A2A2', description: 'Dark gray for text' },
          { name: 'surface-800', hex: '#7D7D7D', description: 'Very dark gray' },
          { name: 'surface-900', hex: '#606060', description: 'Darkest gray' },
        ]
      },
      {
        name: 'Navy',
        description: 'Navy is mainly used for text. It is also used for borders and site states on some of the components.',
        colors: [
          { name: 'navy-50', hex: '#EAEBEC', description: 'Lightest navy' },
          { name: 'navy-100', hex: '#CBCED1', description: 'Very light navy' },
          { name: 'navy-200', hex: '#9DA2A6', description: 'Light navy' },
          { name: 'navy-300', hex: '#70777D', description: 'Medium light navy' },
          { name: 'navy-400', hex: '#555D64', description: 'Medium navy' },
          { name: 'navy-500', hex: '#2A343D', description: 'Primary navy' },
          { name: 'navy-600', hex: '#262F38', description: 'Medium dark navy' },
          { name: 'navy-700', hex: '#1E252B', description: 'Dark navy' },
          { name: 'navy-800', hex: '#171D22', description: 'Very dark navy' },
          { name: 'navy-900', hex: '#12161A', description: 'Darkest navy' },
        ]
      }
    ],
    system: [
      {
        name: 'Yellow',
        description: 'Yellow is the warning color. It is used to signal caution to user and brings their attention to areas that need user intervention without implying immediate danger.',
        colors: [
          { name: 'yellow-50', hex: '#FFFCE7', description: 'Lightest yellow' },
          { name: 'yellow-100', hex: '#FEF5B3', description: 'Very light yellow' },
          { name: 'yellow-200', hex: '#FDF08F', description: 'Light yellow' },
          { name: 'yellow-300', hex: '#FCE95C', description: 'Medium light yellow' },
          { name: 'yellow-400', hex: '#FCE53C', description: 'Medium yellow' },
          { name: 'yellow-500', hex: '#FBDE0B', description: 'Primary warning yellow' },
          { name: 'yellow-600', hex: '#E4CA0A', description: 'Medium dark yellow' },
          { name: 'yellow-700', hex: '#717509', description: 'Dark yellow' },
          { name: 'yellow-800', hex: '#695D05', description: 'Very dark yellow' },
          { name: 'yellow-900', hex: '#514908', description: 'Darkest yellow' },
        ]
      },
      {
        name: 'Blue',
        description: 'Blue is the information color. It is used to provide users with neutral information and any consequenes in the system.',
        colors: [
          { name: 'blue-50', hex: '#F5F9FF', description: 'Lightest blue' },
          { name: 'blue-100', hex: '#D0E1FD', description: 'Very light blue' },
          { name: 'blue-200', hex: '#ABC9FB', description: 'Light blue' },
          { name: 'blue-300', hex: '#85B2F9', description: 'Medium light blue' },
          { name: 'blue-400', hex: '#609AF8', description: 'Medium blue' },
          { name: 'blue-500', hex: '#3B82F6', description: 'Primary information blue' },
          { name: 'blue-600', hex: '#326FD1', description: 'Medium dark blue' },
          { name: 'blue-700', hex: '#295BAC', description: 'Dark blue' },
          { name: 'blue-800', hex: '#204887', description: 'Very dark blue' },
          { name: 'blue-900', hex: '#183462', description: 'Darkest blue' },
        ]
      },
      {
        name: 'Green',
        description: 'Green is the success color. It is used to confirm positive actions and successful completion of tasks.',
        colors: [
          { name: 'green-50', hex: '#EDF8EA', description: 'Lightest green' },
          { name: 'green-100', hex: '#C8E8C3', description: 'Very light green' },
          { name: 'green-200', hex: '#9BD491', description: 'Light green' },
          { name: 'green-300', hex: '#6FB864', description: 'Medium light green' },
          { name: 'green-400', hex: '#4B9C3E', description: 'Medium green' },
          { name: 'green-500', hex: '#1E830E', description: 'Primary success green' },
          { name: 'green-600', hex: '#1A760B', description: 'Medium dark green' },
          { name: 'green-700', hex: '#155D0A', description: 'Dark green' },
          { name: 'green-800', hex: '#174510', description: 'Very dark green' },
          { name: 'green-900', hex: '#11340B', description: 'Darkest green' },
        ]
      },
      {
        name: 'Red',
        description: 'Red is the error color. It is used to signal errors to user and brings their attention to areas requiring caution.',
        colors: [
          { name: 'red-50', hex: '#FFF5F5', description: 'Lightest red' },
          { name: 'red-100', hex: '#FFE0DF', description: 'Very light red' },
          { name: 'red-200', hex: '#FFB8B3', description: 'Light red' },
          { name: 'red-300', hex: '#FF867F', description: 'Medium light red' },
          { name: 'red-400', hex: '#FF5A4E', description: 'Medium red' },
          { name: 'red-500', hex: '#EB1000', description: 'Primary error red' },
          { name: 'red-600', hex: '#D60F00', description: 'Medium dark red' },
          { name: 'red-700', hex: '#C00B14', description: 'Dark red' },
          { name: 'red-800', hex: '#990D03', description: 'Very dark red' },
          { name: 'red-900', hex: '#630700', description: 'Darkest red' },
        ]
      }
    ]
  };

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    toast.success(`Copied ${hex} to clipboard`);
  };

  const tailwindConfig = `// Tailwind CSS Color Configuration
const colors = {
  // Primary Colors - Teal
  primary: {
    50: '#EAF6F7',
    100: '#D1EDEF', 
    200: '#ADDDE0',
    300: '#8BD2D7',
    400: '#6BC2C8',
    500: '#32A4AC', // Primary
    600: '#138890',
    700: '#047880',
    800: '#186368',
    900: '#18474A',
  },
  // Secondary Colors
  surface: {
    50: '#FFFFFF',
    100: '#FCFCFC',
    200: '#F7F7F7',
    300: '#F4F4F5',
    400: '#EDEDED',
    500: '#E4E4E4',
    600: '#CFCFCF',
    700: '#A2A2A2',
    800: '#7D7D7D',
    900: '#606060',
  },
  navy: {
    50: '#EAEBEC',
    100: '#CBCED1',
    200: '#9DA2A6',
    300: '#70777D',
    400: '#555D64',
    500: '#2A343D',
    600: '#262F38',
    700: '#1E252B',
    800: '#171D22',
    900: '#12161A',
  },
  // System Colors
  yellow: {
    50: '#FFFCE7',
    100: '#FEF5B3',
    200: '#FDF08F',
    300: '#FCE95C',
    400: '#FCE53C',
    500: '#FBDE0B', // Warning
    600: '#E4CA0A',
    700: '#717509',
    800: '#695D05',
    900: '#514908',
  },
  blue: {
    50: '#F5F9FF',
    100: '#D0E1FD',
    200: '#ABC9FB',
    300: '#85B2F9',
    400: '#609AF8',
    500: '#3B82F6', // Information
    600: '#326FD1',
    700: '#295BAC',
    800: '#204887',
    900: '#183462',
  },
  green: {
    50: '#EDF8EA',
    100: '#C8E8C3',
    200: '#9BD491',
    300: '#6FB864',
    400: '#4B9C3E',
    500: '#1E830E', // Success
    600: '#1A760B',
    700: '#155D0A',
    800: '#174510',
    900: '#11340B',
  },
  red: {
    50: '#FFF5F5',
    100: '#FFE0DF',
    200: '#FFB8B3',
    300: '#FF867F',
    400: '#FF5A4E',
    500: '#EB1000', // Error
    600: '#D60F00',
    700: '#C00B14',
    800: '#990D03',
    900: '#630700',
  }
}`;

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-h1 text-navy-900 mb-4">Colors</h1>
        <p className="text-body-copy-large text-navy-600 max-w-4xl">
          The swatches listed in this document include all the colors available for use within Clear.
          Our color palette is designed to provide visual hierarchy, communicate meaning, and ensure
          accessibility across all components and interfaces.
        </p>
      </div>

      {/* Primary Colors */}
      <div className="mb-12">
        <div className="bg-surface-800 text-white px-6 py-4 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-surface-800 rounded-full"></div>
            </div>
            <h2 className="text-lg font-semibold">Primary Colors</h2>
          </div>
        </div>
        
        <div className="bg-white border border-surface-200 rounded-b-lg p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-navy-900 mb-2">Teal</h3>
            <p className="text-navy-600 text-sm mb-4">{colorPalettes.primary.description}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {colorPalettes.primary.colors.map((color) => (
              <div key={color.name} className="group">
                <div 
                  className="w-full h-20 rounded-lg cursor-pointer relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => copyColor(color.hex)}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                    <Copy className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>
                <div className="mt-2 text-xs">
                  <div className="font-medium text-navy-900">{color.name}</div>
                  <div className="text-navy-600 uppercase font-mono">{color.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary Colors */}
      <div className="mb-12">
        <div className="bg-surface-800 text-white px-6 py-4 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-surface-800 rounded-full"></div>
            </div>
            <h2 className="text-lg font-semibold">Secondary Colors</h2>
          </div>
        </div>
        
        <div className="bg-white border border-surface-200 rounded-b-lg p-6 space-y-8">
          {colorPalettes.secondary.map((palette) => (
            <div key={palette.name}>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{palette.name}</h3>
                <p className="text-navy-600 text-sm">{palette.description}</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
                {palette.colors.map((color) => (
                  <div key={color.name} className="group">
                    <div 
                      className="w-full h-20 rounded-lg cursor-pointer relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                      style={{ backgroundColor: color.hex }}
                      onClick={() => copyColor(color.hex)}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                        <Copy className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </div>
                    </div>
                    <div className="mt-2 text-xs">
                      <div className="font-medium text-navy-900">{color.name}</div>
                      <div className="text-navy-600 uppercase font-mono">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Colors */}
      <div className="mb-12">
        <div className="bg-surface-800 text-white px-6 py-4 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-surface-800 rounded-full"></div>
            </div>
            <h2 className="text-lg font-semibold">System Colors</h2>
          </div>
        </div>
        
        <div className="bg-white border border-surface-200 rounded-b-lg p-6 space-y-8">
          {colorPalettes.system.map((palette) => (
            <div key={palette.name}>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{palette.name}</h3>
                <p className="text-navy-600 text-sm">{palette.description}</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
                {palette.colors.map((color) => (
                  <div key={color.name} className="group">
                    <div 
                      className="w-full h-20 rounded-lg cursor-pointer relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                      style={{ backgroundColor: color.hex }}
                      onClick={() => copyColor(color.hex)}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                        <Copy className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </div>
                    </div>
                    <div className="mt-2 text-xs">
                      <div className="font-medium text-navy-900">{color.name}</div>
                      <div className="text-navy-600 uppercase font-mono">{color.hex}</div>
                    </div>
                  </div>
                ))}
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
            <h3 className="text-lg font-semibold text-navy-900 mb-4">CSS Variables</h3>
            <CodeBlock
              language="css"
              code={`:root {
  --color-primary-500: #14b8a6;
  --color-surface-100: #f1f5f9;
  --color-surface-900: #0f172a;
  --color-green-500: #22c55e;
  --color-red-500: #ef4444;
}`}
            />
          </div>
          <div className="bg-white border border-surface-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-navy-900 mb-4">Tailwind Classes</h3>
            <CodeBlock
              language="html"
              code={`<button class="bg-primary-500 text-white">
  Primary Button
</button>

<div class="bg-surface-50 border-surface-200">
  Card Content
</div>

<span class="text-green-500">Success</span>`}
            />
          </div>
        </div>
      </div>

      {/* Tailwind Configuration */}
      <div className="mb-12">
        <h2 className="text-h2 text-navy-900 mb-6">Tailwind Configuration</h2>
        <div className="bg-white border border-surface-200 rounded-lg">
          <CodeBlock
            language="javascript"
            code={tailwindConfig}
          />
        </div>
      </div>
    </div>
  );
};

export default Colors;