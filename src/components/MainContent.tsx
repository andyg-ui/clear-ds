import React from 'react';
import Overview from './sections/Overview';
import Inventory from './sections/Inventory';
import Layouts from './sections/Layouts';
import Elevation from './sections/Elevation';
import Colors from './sections/Colors';
import Typography from './sections/Typography';
import Iconography from './sections/Iconography';
import Buttons from './sections/Buttons';
import Forms from './sections/Forms';
import Tables from './sections/Tables';
import PickList from './sections/PickList';
import Paginator from './sections/Paginator';
import ComingSoon from './sections/ComingSoon';

interface MainContentProps {
  activeSection: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'inventory':
        return <Inventory />;
      case 'layouts':
        return <Layouts />;
      case 'elevation':
        return <Elevation />;
      case 'colors':
        return <Colors />;
      case 'typography':
        return <Typography />;
      case 'iconography':
        return <Iconography />;
      case 'elevation':
        return <Elevation />;
      case 'buttons':
        return <Buttons />;
      case 'forms':
        return <Forms />;
      case 'tables':
        return <Tables />;
      case 'paginator':
        return <Paginator />;
      case 'picklist':
        return <PickList />;
      case 'accordions':
      case 'navigation':
        return <ComingSoon sectionName={activeSection} />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {renderSection()}
    </div>
  );
};

export default MainContent;