import React from 'react';
import { Menu, Github, ExternalLink } from 'lucide-react';

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen, activeSection }) => {
  const getSectionTitle = (section: string) => {
    switch (section) {
      case 'overview': return 'Overview';
      case 'inventory': return 'Inventory';
      case 'layouts': return 'Layouts';
      case 'elevation': return 'Elevation';
      case 'colors': return 'Colors';
      case 'typography': return 'Typography';
      case 'iconography': return 'Iconography';
      case 'elevation': return 'Elevation';
      case 'components': return 'Components';
      case 'buttons': return 'Buttons';
      case 'forms': return 'Forms';
      case 'tables': return 'Tables';
      case 'accordions': return 'Accordions';
      case 'modals': return 'Modals';
      case 'navigation': return 'Navigation';
      default: return 'Clear Design System';
    }
  };

  return (
    <header className="bg-white border-b border-surface-300 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <button
            type="button"
            className="lg:hidden btn btn-plain btn-icon-only btn-icon-only-medium"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="lg:ml-0 ml-4">
            <h1 className="text-2xl font-bold text-navy-900">
              {getSectionTitle(activeSection)}
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            className="text-navy-600 hover:text-navy-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-navy-600 hover:text-navy-800 transition-colors"
          >
            <ExternalLink className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;