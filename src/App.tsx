import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Toaster } from 'react-hot-toast';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-100 flex">
      <Toaster position="top-right" />
      
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          setSidebarOpen={setSidebarOpen}
          activeSection={activeSection}
        />
        
        <main className="flex-1">
          <MainContent activeSection={activeSection} />
        </main>
      </div>
    </div>
  );
}

export default App;