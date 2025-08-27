import React from 'react';
import { Construction } from 'lucide-react';

interface ComingSoonProps {
  sectionName: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ sectionName }) => {
  const getSectionTitle = (section: string) => {
    switch (section) {
      case 'tables': return 'Tables';
      case 'accordions': return 'Accordions';
      case 'navigation': return 'Navigation';
      default: return section.charAt(0).toUpperCase() + section.slice(1);
    }
  };

  const getSectionDescription = (section: string) => {
    switch (section) {
      case 'tables': return 'Data tables with sorting, filtering, pagination, and responsive layouts.';
      case 'accordions': return 'Collapsible content sections for organizing information hierarchically.';
      case 'navigation': return 'Navigation menus, breadcrumbs, tabs, and other wayfinding components.';
      default: return 'Additional components and patterns for building comprehensive interfaces.';
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col items-center justify-center min-h-96 text-center">
        <div className="w-20 h-20 bg-surface-300 rounded-full flex items-center justify-center mb-8">
          <Construction className="w-10 h-10 text-navy-500" />
        </div>
        
        <h1 className="text-h1 text-navy-900 mb-4">
          {getSectionTitle(sectionName)}
        </h1>
        
        <p className="text-body-copy-large text-navy-600 max-w-2xl mb-8">
          {getSectionDescription(sectionName)} This section is currently under development 
          and will be available in a future release of the Clear Design System.
        </p>
        
        <div className="flex items-center space-x-4">
          <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            Coming Soon
          </span>
          <span className="text-navy-500 text-sm">
            Expected in v1.1.0
          </span>
        </div>
      </div>

      {/* Placeholder Structure */}
      <div className="mt-16 space-y-8">
        <div className="bg-white border border-surface-300 rounded-lg p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-navy-300 rounded w-1/4 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-navy-300 rounded w-3/4"></div>
              <div className="h-4 bg-navy-300 rounded w-1/2"></div>
              <div className="h-4 bg-navy-300 rounded w-5/8"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white border border-surface-300 rounded-lg p-6">
              <div className="animate-pulse">
                <div className="h-6 bg-navy-200 rounded w-3/4 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-navy-200 rounded w-full"></div>
                  <div className="h-3 bg-navy-200 rounded w-4/5"></div>
                  <div className="h-3 bg-navy-200 rounded w-3/5"></div>
                  <div className="h-4 bg-navy-200 rounded w-1/2"></div>
                </div>
                <div className="mt-6 h-10 bg-navy-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;