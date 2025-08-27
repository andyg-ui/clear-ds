import React from 'react';
import { X, Palette, Type, ImageIcon, Box, MousePointer, FileText, Table, ChevronDown, Navigation, Eye, ListChecks } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeSection, 
  setActiveSection, 
  isOpen, 
  setIsOpen 
}) => {
  const navigation = [
    {
      name: 'Overview',
      id: 'overview',
      icon: Eye,
    },
    {
      name: 'Inventory',
      id: 'inventory',
      icon: Box,
    },
    {
      name: 'Foundation',
      children: [
        { name: 'Layouts', id: 'layouts', icon: Box },
        { name: 'Colors', id: 'colors', icon: Palette },
        { name: 'Typography', id: 'typography', icon: Type },
        { name: 'Iconography', id: 'iconography', icon: ImageIcon },
        { name: 'Elevation', id: 'elevation', icon: Box },
      ],
    },
    {
      name: 'Components',
      children: [
        { name: 'Buttons', id: 'buttons', icon: MousePointer },
        { name: 'Forms', id: 'forms', icon: FileText },
        { name: 'Tables', id: 'tables', icon: Table },
        { name: 'Paginator', id: 'paginator', icon: ChevronDown },
        { name: 'PickList', id: 'picklist', icon: ListChecks },
        { name: 'Accordions', id: 'accordions', icon: ChevronDown },
        { name: 'Navigation', id: 'navigation', icon: Navigation },
      ],
    },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-surface-600 bg-opacity-75 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-surface-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-surface-300">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg font-semibold text-navy-900">Clear Design System</span>
          </div>
          
          <button
            type="button"
            className="lg:hidden -mr-2 h-10 w-10 inline-flex items-center justify-center rounded-md text-navy-500 hover:text-navy-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <div className="space-y-8">
            {navigation.map((section) => (
              <div key={section.name}>
                {section.id ? (
                  <button
                    onClick={() => handleNavClick(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                        : 'text-navy-600 hover:text-navy-800 hover:bg-surface-50'
                    }`}
                  >
                    <section.icon className="h-5 w-5" />
                    <span>{section.name}</span>
                  </button>
                ) : (
                  <>
                    <h3 className="px-4 text-xs font-semibold text-navy-800 uppercase tracking-wider">
                      {section.name}
                    </h3>
                    {section.children && (
                      <div className="mt-2 space-y-1">
                        {section.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => handleNavClick(child.id)}
                            className={`
                              w-full flex items-center space-x-3 px-4 py-2 text-sm font-medium rounded-md transition-colors
                              ${activeSection === child.id
                                ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                                : 'text-navy-600 hover:text-navy-800 hover:bg-surface-50'
                              }
                            `}
                          >
                            <child.icon className="h-5 w-5" />
                            <span>{child.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-surface-300 bg-surface-50">
          <div className="text-xs text-navy-500">
            <div className="flex items-center justify-between">
              <span>Clear Design System</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                IN PROGRESS
              </span>
            </div>
            <div className="mt-1 text-navy-400">
              Version 1.0.0
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;