import React from 'react';
import { Palette, Type, ImageIcon, MousePointer } from 'lucide-react';

const Overview: React.FC = () => {
  const features = [
    {
      name: 'Colors',
      description: 'A comprehensive color system with primary, secondary, and system colors.',
      icon: Palette,
      href: '#colors',
    },
    {
      name: 'Typography',
      description: 'Open Sans font family with various sizes and weights for all use cases.',
      icon: Type,
      href: '#typography',
    },
    {
      name: 'Iconography',
      description: 'PrimeIcons library with 400+ open source icons organized by category.',
      icon: ImageIcon,
      href: '#iconography',
    },
    {
      name: 'Components',
      description: 'Production-ready components with multiple variants and states.',
      icon: MousePointer,
      href: '#components',
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
            <div className="w-7 h-7 bg-white rounded-sm"></div>
          </div>
          <div>
            <h1 className="text-h1 text-navy-900">Clear Design System</h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                IN PROGRESS
              </span>
              <span className="text-navy-500 text-sm">Version 1.0.0</span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-700 max-w-3xl">
          Welcome to the Clear Design System - a comprehensive design language that provides 
          the building blocks for creating consistent, accessible, and beautiful user interfaces. 
          This system includes foundation elements like colors and typography, as well as 
          production-ready components with code examples.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="bg-white rounded-lg p-6 border border-surface-300 hover:border-primary-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary-100 rounded-lg">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2">
              {feature.name}
            </h3>
            <p className="text-navy-600 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-surface-300 p-8">
        <h2 className="text-h3 text-navy-900 mb-4">Getting Started</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-navy-900 mb-3">For Designers</h3>
            <ul className="space-y-2 text-navy-600">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></span>
                <span>Download the Figma library with all components and styles</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></span>
                <span>Use the color palette and typography scale for consistent designs</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></span>
                <span>Reference component documentation for proper usage</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy-900 mb-3">For Developers</h3>
            <ul className="space-y-2 text-navy-600">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></span>
                <span>Copy the Tailwind config file with all design tokens</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></span>
                <span>Use provided code snippets for component implementation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></span>
                <span>Install PrimeIcons for the complete icon library</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;