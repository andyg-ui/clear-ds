import React, { useState } from 'react';
import ListBoxSection from '../forms/ListBoxSection';
import InputTextSection from '../forms/InputTextSection';
import DatePickerSection from '../forms/DatePickerSection';
import CheckboxSection from '../forms/CheckboxSection';
import MultiSelectSection from '../forms/MultiSelectSection';
import RadioButtonSection from '../forms/RadioButtonSection';
import SelectSection from '../forms/SelectSection';
import ToggleSwitchSection from '../forms/ToggleSwitchSection';
import ComingSoon from './ComingSoon';

export default function Forms() {
  const [activeTab, setActiveTab] = useState('checkbox');

  const formSections = [
    { id: 'checkbox', name: 'Checkbox', component: CheckboxSection },
    { id: 'datepicker', name: 'DatePicker', component: DatePickerSection },
    { id: 'inputtext', name: 'InputText', component: InputTextSection },
    { id: 'listbox', name: 'Listbox', component: ListBoxSection },
    { id: 'multiselect', name: 'MultiSelect', component: MultiSelectSection },
    { id: 'password', name: 'Password', component: null },
    { id: 'radiobutton', name: 'RadioButton', component: RadioButtonSection },
    { id: 'select', name: 'Select', component: SelectSection },
    { id: 'slider', name: 'Slider', component: null },
    { id: 'textarea', name: 'TextArea', component: null },
    { id: 'togglebutton', name: 'ToggleButton', component: null },
    { id: 'toggleswitch', name: 'ToggleSwitch', component: ToggleSwitchSection },
  ];

  const renderActiveSection = () => {
    const activeSection = formSections.find(section => section.id === activeTab);
    
    if (activeSection?.component) {
      const Component = activeSection.component;
      return <Component />;
    } else {
      return <ComingSoon sectionName={activeSection?.name || activeTab} />;
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>
          <div>
            <h1 className="text-h1 text-navy-900">Forms</h1>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl">
          Form components provide the building blocks for collecting user input. Each component 
          includes multiple variants, states, and comprehensive usage examples to ensure consistent 
          implementation across your application.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="border-b border-surface-300">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {formSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                  ${activeTab === section.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-navy-600 hover:text-navy-800 hover:border-surface-400'
                  }
                `}
              >
                {section.name}
                {!section.component && (
                  <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">
                    Soon
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Active Section Content */}
      <div>
        {renderActiveSection()}
      </div>
    </div>
  );
}