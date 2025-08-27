import React from 'react';
import { Package, AlertTriangle, CheckCircle, Clock, XCircle } from 'lucide-react';

const Inventory: React.FC = () => {
  const componentData = [
    // FOUNDATIONS
    {
      category: 'FOUNDATIONS',
      components: [
        {
          name: 'Layout',
          productionUpdate: 'WIP',
          designer: 'COMPLETED',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: ''
        },
        {
          name: 'Typography',
          productionUpdate: 'WIP',
          designer: 'COMPLETED',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: ''
        },
        {
          name: 'Colors',
          productionUpdate: 'NEEDS UPDATE',
          designer: 'WIP',
          designStatus: 'NEEDS UPDATE',
          docStatus: 'COMPLETED',
          notes: ''
        },
        {
          name: 'Spacing',
          productionUpdate: '',
          designer: 'WIP',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: 'Add more spacing variants and a divider split tokens to all spacing variables.'
        },
        {
          name: 'Elevation',
          productionUpdate: 'NEEDS UPDATE',
          designer: 'WIP',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: ''
        },
        {
          name: 'Iconography',
          productionUpdate: '',
          designer: 'WIP',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: ''
        }
      ]
    },
    // FORM
    {
      category: 'FORM',
      components: [
        {
          name: 'Checkbox',
          productionUpdate: '',
          designer: 'TIFFANY',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: ''
        },
        {
          name: 'Date Picker',
          productionUpdate: '',
          designer: 'TIFFANY',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: ''
        },
        {
          name: 'Input Text',
          productionUpdate: '',
          designer: 'WIP / TIFFANY',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: 'Stylistic changes may occur if so, the component will need to be updated.'
        },
        {
          name: 'Listbox',
          productionUpdate: '',
          designer: 'MEHER',
          designStatus: 'IN PROGRESS',
          docStatus: 'IN PROGRESS',
          notes: ''
        },
        {
          name: 'Multi Select',
          productionUpdate: '',
          designer: 'TIFFANY',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: 'Stylistic changes may occur if so, the component will need to be updated.'
        },
        {
          name: 'Password',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Radio Button',
          productionUpdate: '',
          designer: 'TIFFANY',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: ''
        },
        {
          name: 'Select',
          productionUpdate: '',
          designer: 'TIFFANY',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: ''
        },
        {
          name: 'Slider',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Text Area',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Toggle Button',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Toggle Switch',
          productionUpdate: '',
          designer: 'WIP',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: ''
        }
      ]
    },
    // BUTTON
    {
      category: 'BUTTON',
      components: [
        {
          name: 'Button',
          productionUpdate: 'NEEDS UPDATE',
          designer: 'WIP / BIANCA',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: ''
        },
        {
          name: 'Split Button',
          productionUpdate: '',
          designer: 'WIP',
          designStatus: 'IN PROGRESS',
          docStatus: 'BACKLOG',
          notes: ''
        }
      ]
    },
    // DATA
    {
      category: 'DATA',
      components: [
        {
          name: 'Data Table',
          productionUpdate: '',
          designer: 'MEHER',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: 'Needs team review, tokens will be updated once colors are finalized.'
        },
        {
          name: 'Paginator',
          productionUpdate: '',
          designer: 'MEHER',
          designStatus: 'IN PROGRESS',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Pick List',
          productionUpdate: '',
          designer: 'MEHER',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        }
      ]
    },
    // PANEL
    {
      category: 'PANEL',
      components: [
        {
          name: 'Accordion',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Card',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Tabs',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        }
      ]
    },
    // OVERLAY
    {
      category: 'OVERLAY',
      components: [
        {
          name: 'Confirm Dialog',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Dialog',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Drawer',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Tool Tip',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        }
      ]
    },
    // MENU
    {
      category: 'MENU',
      components: [
        {
          name: 'Breadcrumbs',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Menu',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Menu Bar',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        }
      ]
    },
    // MESSAGES
    {
      category: 'MESSAGES',
      components: [
        {
          name: 'Toast',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        }
      ]
    },
    // MISC
    {
      category: 'MISC',
      components: [
        {
          name: 'Badge',
          productionUpdate: '',
          designer: 'WIP',
          designStatus: 'COMPLETED',
          docStatus: 'COMPLETED',
          notes: ''
        },
        {
          name: 'ScrollBar',
          productionUpdate: '',
          designer: 'BIANCA',
          designStatus: 'COMPLETED',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Chip',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Progress Bar',
          productionUpdate: '',
          designer: 'TIFFANY',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Progress Spinner',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        },
        {
          name: 'Tag',
          productionUpdate: '',
          designer: '',
          designStatus: 'BACKLOG',
          docStatus: 'BACKLOG',
          notes: ''
        }
      ]
    }
  ];

  const getStatusBadge = (status: string, type: 'design' | 'doc' | 'production') => {
    const baseClasses = 'px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide';
    
    switch (status) {
      case 'COMPLETED':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'IN PROGRESS':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'BACKLOG':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'NEEDS UPDATE':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-surface-100 text-surface-600`;
    }
  };

  const getDesignerBadge = (designer: string) => {
    const baseClasses = 'px-2 py-1 rounded text-xs font-medium uppercase tracking-wide';
    
    if (!designer) return null;
    
    if (designer.includes('WIP')) {
      return `${baseClasses} bg-surface-800 text-white`;
    } else if (designer.includes('TIFFANY')) {
      return `${baseClasses} bg-surface-800 text-white`;
    } else if (designer.includes('MEHER')) {
      return `${baseClasses} bg-surface-800 text-white`;
    } else if (designer.includes('BIANCA')) {
      return `${baseClasses} bg-surface-800 text-white`;
    }
    
    return `${baseClasses} bg-surface-800 text-white`;
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-h1 text-navy-900">Component Tracker</h1>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl">
          This document is an inventory of all Clear components highlighting updates needed and the status of each component from a design, development and governance stand-point.
        </p>
      </div>

      {/* Component Table */}
      <div className="bg-white border border-surface-300 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="bg-surface-800 text-white">
          <div className="grid grid-cols-12 gap-6 px-6 py-4 text-sm font-semibold uppercase tracking-wide">
            <div className="col-span-2">Component</div>
            <div className="col-span-2">Production Update</div>
            <div className="col-span-1">Designer</div>
            <div className="col-span-2">Design Status</div>
            <div className="col-span-2">Doc Status</div>
            <div className="col-span-3">Notes</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-surface-300">
          {componentData.map((category) => (
            <div key={category.category}>
              {/* Category Header */}
              <div className="bg-surface-100 px-6 py-3">
                <h3 className="text-sm font-semibold text-navy-800 uppercase tracking-wide">
                  {category.category}
                </h3>
              </div>
              
              {/* Category Components */}
              {category.components.map((component, index) => (
                <div 
                  key={`${category.category}-${component.name}`}
                  className="grid grid-cols-12 gap-6 px-6 py-4 text-sm hover:bg-surface-50 transition-colors"
                >
                  <div className="col-span-2 font-medium text-navy-900 min-w-0">
                    {component.name}
                  </div>
                  
                  <div className="col-span-2 min-w-0">
                    {component.productionUpdate && (
                      <span className={getStatusBadge(component.productionUpdate, 'production')}>
                        {component.productionUpdate}
                      </span>
                    )}
                  </div>
                  
                  <div className="col-span-1 min-w-0">
                    {component.designer && (
                      <span className={getDesignerBadge(component.designer)}>
                        {component.designer}
                      </span>
                    )}
                  </div>
                  
                  <div className="col-span-2 min-w-0">
                    <span className={getStatusBadge(component.designStatus, 'design')}>
                      {component.designStatus}
                    </span>
                  </div>
                  
                  <div className="col-span-2 min-w-0">
                    <span className={getStatusBadge(component.docStatus, 'doc')}>
                      {component.docStatus}
                    </span>
                  </div>
                  
                  <div className="col-span-3 text-navy-600 text-xs leading-relaxed">
                    {component.notes}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 bg-white border border-surface-300 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-navy-900 mb-4">Status Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <div>
              <div className="font-medium text-navy-900">Completed</div>
              <div className="text-sm text-navy-600">Ready for use</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-blue-500" />
            <div>
              <div className="font-medium text-navy-900">In Progress</div>
              <div className="text-sm text-navy-600">Currently being worked on</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Package className="w-5 h-5 text-yellow-500" />
            <div>
              <div className="font-medium text-navy-900">Backlog</div>
              <div className="text-sm text-navy-600">Planned for future</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <div>
              <div className="font-medium text-navy-900">Needs Update</div>
              <div className="text-sm text-navy-600">Requires attention</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;