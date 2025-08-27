import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import CodeBlock from '../CodeBlock';

const DatePickerSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('copy-me');
  
  // Interactive DatePicker state
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2024, 3, 15)); // April 15, 2024
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 3, 1)); // April 2024
  const [currentView, setCurrentView] = useState<'day' | 'month' | 'year'>('day');
  const [yearRangeStart, setYearRangeStart] = useState(2020); // Start of 12-year block
  
  // Month Picker state
  const [selectedMonth, setSelectedMonth] = useState<number>(3); // April (0-indexed)
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);
  
  // Year Picker state
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [isYearPickerOpen, setIsYearPickerOpen] = useState(false);
  
  // Date of Birth example state
  const [dobDate, setDobDate] = useState<Date | null>(new Date(2024, 6, 1)); // July 1, 2024
  const [isDobCalendarOpen, setIsDobCalendarOpen] = useState(false);
  const [dobCurrentMonth, setDobCurrentMonth] = useState(new Date(2024, 6, 1)); // July 2024
  const [dobCurrentView, setDobCurrentView] = useState<'day' | 'month' | 'year'>('day');
  const [dobYearRangeStart, setDobYearRangeStart] = useState(2020); // Start of 12-year block for DOB

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  const formatMonthYear = (month: number, year: number) => {
    const date = new Date(year, month, 1);
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date, selectedDate: Date | null) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
    setCurrentView('day');
  };

  const handleDobDateSelect = (date: Date) => {
    setDobDate(date);
    setIsDobCalendarOpen(false);
    setDobCurrentView('day');
  };

  const navigateCalendar = (direction: 'prev' | 'next', view: 'day' | 'month' | 'year') => {
    if (view === 'year') {
      setYearRangeStart(prev => direction === 'prev' ? prev - 12 : prev + 12);
    } else {
      setCurrentMonth(prev => {
        const newMonth = new Date(prev);
        if (direction === 'prev') {
          newMonth.setMonth(prev.getMonth() - 1);
        } else {
          newMonth.setMonth(prev.getMonth() + 1);
        }
        return newMonth;
      });
    }
  };

  const handleMonthYearClick = (type: 'month' | 'year') => {
    setCurrentView(type);
  };

  const handleDobMonthYearClick = (type: 'month' | 'year') => {
    setDobCurrentView(type);
  };

  const handleCalendarMonthSelect = (monthIndex: number) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(monthIndex);
    setCurrentMonth(newMonth);
    setCurrentView('day');
  };

  const handleCalendarYearSelect = (year: number) => {
    const newMonth = new Date(currentMonth);
    newMonth.setFullYear(year);
    setCurrentMonth(newMonth);
    setCurrentView('day');
  };

  const handleDobCalendarMonthSelect = (monthIndex: number) => {
    const newMonth = new Date(dobCurrentMonth);
    newMonth.setMonth(monthIndex);
    setDobCurrentMonth(newMonth);
    setDobCurrentView('day');
  };

  const handleDobCalendarYearSelect = (year: number) => {
    const newMonth = new Date(dobCurrentMonth);
    newMonth.setFullYear(year);
    setDobCurrentMonth(newMonth);
    setDobCurrentView('day');
  };

  const navigateDobCalendar = (direction: 'prev' | 'next', view: 'day' | 'month' | 'year') => {
    if (view === 'year') {
      setDobYearRangeStart(prev => direction === 'prev' ? prev - 12 : prev + 12);
    } else {
      setDobCurrentMonth(prev => {
        const newMonth = new Date(prev);
        if (direction === 'prev') {
          newMonth.setMonth(prev.getMonth() - 1);
        } else {
          newMonth.setMonth(prev.getMonth() + 1);
        }
        return newMonth;
      });
    }
  };

  const handleMonthSelect = (monthIndex: number) => {
    setSelectedMonth(monthIndex);
    setIsMonthPickerOpen(false);
  };

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
    setIsYearPickerOpen(false);
  };

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const getYearsForRange = (startYear: number) => {
    return Array.from({ length: 12 }, (_, i) => startYear + i);
  };

  const getYearRangeDisplay = (startYear: number) => {
    const endYear = startYear + 11;
    return `${startYear} - ${endYear}`;
  };

  const datePickerCode = `<!-- Basic DatePicker -->
<div class="datepicker-container">
  <input 
    type="text" 
    placeholder="mm/dd/yyyy"
    class="datepicker-input"
    readonly
  />
  <button class="datepicker-trigger">
    <i class="pi pi-calendar"></i>
  </button>
</div>

<!-- DatePicker Calendar -->
<div class="datepicker-calendar">
  <div class="datepicker-header">
    <button class="datepicker-nav-btn">
      <i class="pi pi-chevron-left"></i>
    </button>
    <div class="datepicker-month-year">April 2024</div>
    <button class="datepicker-nav-btn">
      <i class="pi pi-chevron-right"></i>
    </button>
  </div>
  
  <div class="datepicker-weekdays">
    <div class="datepicker-weekday">Su</div>
    <div class="datepicker-weekday">Mo</div>
    <!-- ... other weekdays ... -->
  </div>
  
  <div class="datepicker-days">
    <button class="datepicker-day">1</button>
    <button class="datepicker-day datepicker-day-selected">15</button>
    <button class="datepicker-day datepicker-day-today">22</button>
    <!-- ... other days ... -->
  </div>
  
  <div class="datepicker-footer">
    <button class="datepicker-button">Button Label</button>
    <button class="datepicker-button">Button Label</button>
  </div>
</div>`;

  const reactDatePickerCode = `// React DatePicker Component
const DatePicker = ({ 
  value,
  onChange,
  placeholder = "mm/dd/yyyy",
  disabled = false,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit', 
      year: 'numeric'
    });
  };
  
  const handleDateSelect = (date) => {
    onChange?.(date);
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <div className={\`datepicker-container \${disabled ? 'datepicker-disabled' : ''}\`}>
        <input
          type="text"
          value={formatDate(value)}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          className="datepicker-input"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          {...props}
        />
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={\`datepicker-trigger \${disabled ? 'datepicker-trigger-disabled' : ''}\`}
        >
          <Calendar className="w-4 h-4" />
        </button>
      </div>
      
      {isOpen && !disabled && (
        <div className="datepicker-calendar">
          <div className="datepicker-header">
            <button onClick={() => navigateMonth('prev')} className="datepicker-nav-btn">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="datepicker-month-year">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
            <button onClick={() => navigateMonth('next')} className="datepicker-nav-btn">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="datepicker-weekdays">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="datepicker-weekday">{day}</div>
            ))}
          </div>
          
          <div className="datepicker-days">
            {getDaysInMonth(currentMonth).map((date, index) => (
              <div key={index} className="datepicker-day-cell">
                {date && (
                  <button
                    onClick={() => handleDateSelect(date)}
                    className={\`datepicker-day \${isSelected(date) ? 'datepicker-day-selected' : ''} \${isToday(date) ? 'datepicker-day-today' : ''}\`}
                  >
                    {date.getDate()}
                  </button>
                )}
              </div>
            ))}
          </div>
          
          <div className="datepicker-footer">
            <button className="datepicker-button">Button Label</button>
            <button className="datepicker-button">Button Label</button>
          </div>
        </div>
      )}
    </div>
  );
};`;

  const renderCopyMeTab = () => (
    <div>
      {/* Interactive Date Picker */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Date Picker</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className={`datepicker-container ${isCalendarOpen ? 'datepicker-focus' : ''}`}>
                <input
                  type="text"
                  value={formatDate(selectedDate)}
                  placeholder="mm/dd/yyyy"
                  readOnly
                  className="datepicker-input"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                />
                <div
                  type="button"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  className="datepicker-trigger"
                >
                  <Calendar className="w-4 h-4 text-primary-500" />
                </div>
              </div>
              
              {isCalendarOpen && (
                <div className="datepicker-calendar">
                  {/* Calendar Header */}
                  <div className="datepicker-header">
                    <button
                      onClick={() => navigateCalendar('prev', currentView)}
                      className="datepicker-nav-btn"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    {currentView === 'year' ? (
                      <div className="datepicker-month-year">
                        {getYearRangeDisplay(yearRangeStart)}
                      </div>
                    ) : (
                      <div className="datepicker-month-year flex items-center space-x-2">
                        <button
                          onClick={() => handleMonthYearClick('month')}
                          className="hover:text-primary-700 transition-colors"
                        >
                          {currentMonth.toLocaleDateString('en-US', { month: 'long' })}
                        </button>
                        <button
                          onClick={() => handleMonthYearClick('year')}
                          className="hover:text-primary-700 transition-colors"
                        >
                          {currentMonth.getFullYear()}
                        </button>
                      </div>
                    )}
                    <button
                      onClick={() => navigateCalendar('next', currentView)}
                      className="datepicker-nav-btn"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Conditional Content Based on Current View */}
                  {currentView === 'day' && (
                    <>
                      {/* Weekday Headers */}
                      <div className="datepicker-weekdays">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                          <div key={day} className="datepicker-weekday">
                            {day}
                          </div>
                        ))}
                      </div>
                      
                      {/* Calendar Days */}
                      <div className="datepicker-days">
                        {getDaysInMonth(currentMonth).map((date, index) => (
                          <div key={index} className="datepicker-day-cell">
                            {date && (
                              <button
                                onClick={() => handleDateSelect(date)}
                                className={`
                                  datepicker-day
                                  ${isSelected(date, selectedDate) ? 'datepicker-day-selected' : ''}
                                  ${isToday(date) ? 'datepicker-day-today' : ''}
                                `}
                              >
                                {date.getDate()}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {currentView === 'month' && (
                    <div className="datepicker-month-picker-inline">
                      <div className="datepicker-month-grid">
                        {months.map((month, index) => (
                          <button
                            key={month}
                            onClick={() => handleCalendarMonthSelect(index)}
                            className={`datepicker-month-item ${index === currentMonth.getMonth() ? 'datepicker-month-selected' : ''}`}
                          >
                            {month}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentView === 'year' && (
                    <div className="datepicker-year-picker-inline">
                      <div className="datepicker-year-grid">
                        {getYearsForRange(yearRangeStart).map((year) => (
                          <button
                            key={year}
                            onClick={() => handleCalendarYearSelect(year)}
                            className={`datepicker-year-item ${year === currentMonth.getFullYear() ? 'datepicker-year-selected' : ''}`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Calendar Footer */}
                  <div className="datepicker-footer">
                    <button className="datepicker-footer-link-button text-body-xsmall-semibold">
                      Button Label
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                    <button className="datepicker-footer-primary-button text-body-xsmall-semibold">
                      Button Label
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Month Picker */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Month</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className={`datepicker-container ${isMonthPickerOpen ? 'datepicker-focus' : ''}`}>
                <input
                  type="text"
                  value={formatMonthYear(selectedMonth, selectedYear)}
                  placeholder="mm/yyyy"
                  readOnly
                  className="datepicker-input"
                  onClick={() => setIsMonthPickerOpen(!isMonthPickerOpen)}
                />
                <div
                  type="button"
                  onClick={() => setIsMonthPickerOpen(!isMonthPickerOpen)}
                  className="datepicker-trigger"
                >
                  <Calendar className="w-4 h-4 text-primary-500" />
                </div>
              </div>
              
              {isMonthPickerOpen && (
                <div className="datepicker-month-picker">
                  <div className="datepicker-month-grid">
                    {months.map((month, index) => (
                      <button
                        key={month}
                        onClick={() => handleMonthSelect(index)}
                        className={`datepicker-month-item ${index === selectedMonth ? 'datepicker-month-selected' : ''}`}
                      >
                        {month}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Year Picker */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Year</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className={`datepicker-container ${isYearPickerOpen ? 'datepicker-focus' : ''}`}>
                <input
                  type="text"
                  value={selectedYear.toString()}
                  placeholder="yyyy"
                  readOnly
                  className="datepicker-input"
                  onClick={() => setIsYearPickerOpen(!isYearPickerOpen)}
                />
                <div
                  type="button"
                  onClick={() => setIsYearPickerOpen(!isYearPickerOpen)}
                  className="datepicker-trigger"
                >
                  <Calendar className="w-4 h-4 text-primary-500" />
                </div>
              </div>
              
              {isYearPickerOpen && (
                <div className="datepicker-year-picker">
                  <div className="datepicker-year-grid">
                    {getYearsForRange(2020).map((year) => (
                      <button
                        key={year}
                        onClick={() => handleYearSelect(year)}
                        className={`datepicker-year-item ${year === selectedYear ? 'datepicker-year-selected' : ''}`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Date of Birth Example */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Date of Birth</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className={`datepicker-container ${isDobCalendarOpen ? 'datepicker-focus' : ''}`}>
                <input
                  type="text"
                  value={formatDate(dobDate)}
                  placeholder="mm/dd/yyyy"
                  readOnly
                  className="datepicker-input"
                  onClick={() => setIsDobCalendarOpen(!isDobCalendarOpen)}
                />
                <div
                  type="button"
                  onClick={() => setIsDobCalendarOpen(!isDobCalendarOpen)}
                  className="datepicker-trigger"
                >
                  <Calendar className="w-4 h-4 text-primary-500" />
                </div>
              </div>
              
              {isDobCalendarOpen && (
                <div className="datepicker-calendar">
                  {/* Calendar Header */}
                  <div className="datepicker-header">
                    <button
                      onClick={() => navigateDobCalendar('prev', dobCurrentView)}
                      className="datepicker-nav-btn"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    {dobCurrentView === 'year' ? (
                      <div className="datepicker-month-year">
                        {getYearRangeDisplay(dobYearRangeStart)}
                      </div>
                    ) : (
                      <div className="datepicker-month-year flex items-center space-x-2">
                        <button
                          onClick={() => handleDobMonthYearClick('month')}
                          className="hover:text-primary-700 transition-colors"
                        >
                          {dobCurrentMonth.toLocaleDateString('en-US', { month: 'long' })}
                        </button>
                        <button
                          onClick={() => handleDobMonthYearClick('year')}
                          className="hover:text-primary-700 transition-colors"
                        >
                          {dobCurrentMonth.getFullYear()}
                        </button>
                      </div>
                    )}
                    <button
                      onClick={() => navigateDobCalendar('next', dobCurrentView)}
                      className="datepicker-nav-btn"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Conditional Content Based on DOB Current View */}
                  {dobCurrentView === 'day' && (
                    <>
                      {/* Weekday Headers */}
                      <div className="datepicker-weekdays">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                          <div key={day} className="datepicker-weekday">
                            {day}
                          </div>
                        ))}
                      </div>
                      
                      {/* Calendar Days */}
                      <div className="datepicker-days">
                        {getDaysInMonth(dobCurrentMonth).map((date, index) => (
                          <div key={index} className="datepicker-day-cell">
                            {date && (
                              <button
                                onClick={() => handleDobDateSelect(date)}
                                className={`
                                  datepicker-day
                                  ${isSelected(date, dobDate) ? 'datepicker-day-selected' : ''}
                                  ${isToday(date) ? 'datepicker-day-today' : ''}
                                `}
                              >
                                {date.getDate()}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {dobCurrentView === 'month' && (
                    <div className="datepicker-month-picker-inline">
                      <div className="datepicker-month-grid">
                        {months.map((month, index) => (
                          <button
                            key={month}
                            onClick={() => handleDobCalendarMonthSelect(index)}
                            className={`datepicker-month-item ${index === dobCurrentMonth.getMonth() ? 'datepicker-month-selected' : ''}`}
                          >
                            {month}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {dobCurrentView === 'year' && (
                    <div className="datepicker-year-picker-inline">
                      <div className="datepicker-year-grid">
                        {getYearsForRange(dobYearRangeStart).map((year) => (
                          <button
                            key={year}
                            onClick={() => handleDobCalendarYearSelect(year)}
                            className={`datepicker-year-item ${year === dobCurrentMonth.getFullYear() ? 'datepicker-year-selected' : ''}`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Calendar Footer */}
                  <div className="datepicker-footer">
                    <button className="datepicker-footer-link-button text-body-xsmall-semibold">
                      Button Label
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                    <button className="datepicker-footer-primary-button text-body-xsmall-semibold">
                      Button Label
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuidanceTab = () => (
    <div>
      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">When to Use Date Picker</h3>
        <p className="text-body-copy-medium text-navy-600 mb-6">
          Use a date picker when you need users to select a specific date from a calendar. 
          This component requires more interaction than a simple text input but provides 
          better user experience and validation.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Labeling</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Clearly label what date is being selected</li>
          <li>• Use helper text to clarify date format or requirements</li>
          <li>• Indicate if the field is required or optional</li>
          <li>• Provide context about date ranges or restrictions</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Keyboard Support</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• <strong>Tab:</strong> Move focus to the next focusable element</li>
          <li>• <strong>Shift + Tab:</strong> Move focus to the previous focusable element</li>
          <li>• <strong>Enter/Space:</strong> Open the calendar popup</li>
          <li>• <strong>Escape:</strong> Close the calendar popup</li>
          <li>• <strong>Arrow Keys:</strong> Navigate between dates in the calendar</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Optional Actions</h3>
        <p className="text-body-copy-medium text-navy-600 mb-4">
          Consider adding these features based on your use case:
        </p>
        <ul className="space-y-2 text-navy-600">
          <li>• <strong>Clear button:</strong> Allow users to clear the selected date</li>
          <li>• <strong>Today button:</strong> Quick selection of current date</li>
          <li>• <strong>Date range:</strong> Allow selection of start and end dates</li>
          <li>• <strong>Disabled dates:</strong> Prevent selection of invalid dates</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-h3 text-navy-900 mb-4">Accessibility</h3>
        <ul className="space-y-2 text-navy-600">
          <li>• Ensure proper ARIA labels and roles</li>
          <li>• Provide keyboard navigation support</li>
          <li>• Use sufficient color contrast for all states</li>
          <li>• Announce date changes to screen readers</li>
        </ul>
      </div>
    </div>
  );

  const renderComponentTab = () => (
    <div>
      {/* DatePicker States */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">DatePicker States</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Default</span>
              <div className="flex justify-center">
                <div className="datepicker-container">
                  <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    readOnly
                    className="datepicker-input"
                  />
                  <div className="datepicker-trigger">
                    <Calendar className="w-4 h-4 text-primary-500" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Filled</span>
              <div className="flex justify-center">
                <div className="datepicker-container">
                  <input
                    type="text"
                    value="04/15/2024"
                    readOnly
                    className="datepicker-input"
                  />
                  <div className="datepicker-trigger">
                    <Calendar className="w-4 h-4 text-primary-500" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Focus</span>
              <div className="flex justify-center">
                <div className="datepicker-container datepicker-focus">
                  <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    readOnly
                    className="datepicker-input"
                  />
                  <div className="datepicker-trigger">
                    <Calendar className="w-4 h-4 text-primary-500" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Disabled</span>
              <div className="flex justify-center">
                <div className="datepicker-container datepicker-disabled">
                  <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    disabled
                    readOnly
                    className="datepicker-input"
                  />
                  <div className="datepicker-trigger datepicker-trigger-disabled">
                    <Calendar className="w-4 h-4 text-primary-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Variations */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Calendar Variations</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Default Calendar</span>
              <div className="datepicker-calendar relative mx-auto">
                <div className="datepicker-header">
                  <button className="datepicker-nav-btn">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="datepicker-month-year">April 2024</div>
                  <button className="datepicker-nav-btn">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="datepicker-weekdays">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                    <div key={day} className="datepicker-weekday">{day}</div>
                  ))}
                </div>
                <div className="datepicker-days">
                  {[null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((day, index) => (
                    <div key={index} className="datepicker-day-cell">
                      {day && (
                        <button className={`datepicker-day ${day === 15 ? 'datepicker-day-selected' : ''}`}>
                          {day}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="datepicker-footer">
                  <button className="datepicker-footer-link-button text-body-xsmall-semibold">
                    Button Label
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                  <button className="datepicker-footer-primary-button text-body-xsmall-semibold">
                    Button Label
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">With Today Highlight</span>
              <div className="datepicker-calendar relative mx-auto">
                <div className="datepicker-header">
                  <button className="datepicker-nav-btn">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="datepicker-month-year">April 2024</div>
                  <button className="datepicker-nav-btn">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="datepicker-weekdays">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                    <div key={day} className="datepicker-weekday">{day}</div>
                  ))}
                </div>
                <div className="datepicker-days">
                  {[null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((day, index) => (
                    <div key={index} className="datepicker-day-cell">
                      {day && (
                        <button className={`datepicker-day ${day === 22 ? 'datepicker-day-today' : ''}`}>
                          {day}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="datepicker-footer">
                  <button className="datepicker-footer-link-button text-body-xsmall-semibold">
                    Button Label
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                  <button className="datepicker-footer-primary-button text-body-xsmall-semibold">
                    Button Label
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <span className="text-body-small-semibold text-navy-500 uppercase tracking-wide">Multiple Selection</span>
              <div className="datepicker-calendar relative mx-auto">
                <div className="datepicker-header">
                  <button className="datepicker-nav-btn">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="datepicker-month-year">April 2024</div>
                  <button className="datepicker-nav-btn">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="datepicker-weekdays">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                    <div key={day} className="datepicker-weekday">{day}</div>
                  ))}
                </div>
                <div className="datepicker-days">
                  {[null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((day, index) => (
                    <div key={index} className="datepicker-day-cell">
                      {day && (
                        <button className={`datepicker-day ${[5, 12, 19, 26].includes(day) ? 'datepicker-day-selected' : ''}`}>
                          {day}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="datepicker-footer">
                  <button className="datepicker-footer-link-button text-body-xsmall-semibold">
                    Button Label
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                  <button className="datepicker-footer-primary-button text-body-xsmall-semibold">
                    Button Label
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Month Picker Component View */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Month Picker</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="flex justify-center">
            <div className="datepicker-month-picker">
              <div className="datepicker-month-grid">
                {months.map((month, index) => (
                  <button
                    key={month}
                    className={`datepicker-month-item ${index === 3 ? 'datepicker-month-selected' : ''}`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Year Picker Component View */}
      <div className="mb-12">
        <h3 className="text-h3 text-navy-900 mb-6">Year Picker</h3>
        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <div className="flex justify-center">
            <div className="datepicker-year-picker">
              <div className="datepicker-year-grid">
                {getYearsForRange(2020).map((year) => (
                  <button
                    key={year}
                    className={`datepicker-year-item ${year === 2024 ? 'datepicker-year-selected' : ''}`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTokensTab = () => {
    const tokens = [
      { token: 'datepicker-border-radius', type: 'Border Radius', color: '', value: '6px', rawValue: '0.375rem' },
      { token: 'datepicker-border-color', type: 'Border Color', color: '#cbd5e1', value: '#cbd5e1', rawValue: 'surface.300' },
      { token: 'datepicker-border-focus', type: 'Border Color', color: '#14b8a6', value: '#14b8a6', rawValue: 'primary.500' },
      { token: 'datepicker-bg-color', type: 'Background Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'datepicker-text-color', type: 'Text Color', color: '#0f172a', value: '#0f172a', rawValue: 'surface.900' },
      { token: 'datepicker-placeholder-color', type: 'Text Color', color: '#94a3b8', value: '#94a3b8', rawValue: 'surface.400' },
      { token: 'datepicker-disabled-bg', type: 'Background Color', color: '#f1f5f9', value: '#f1f5f9', rawValue: 'surface.100' },
      { token: 'datepicker-disabled-text', type: 'Text Color', color: '#94a3b8', value: '#94a3b8', rawValue: 'surface.400' },
      { token: 'datepicker-trigger-bg', type: 'Background Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface.50' },
      { token: 'datepicker-trigger-hover', type: 'Background Color', color: '#f1f5f9', value: '#f1f5f9', rawValue: 'surface.100' },
      { token: 'datepicker-calendar-shadow', type: 'Box Shadow', color: '', value: '0 10px 15px -3px rgb(0 0 0 / 0.1)', rawValue: 'shadow.lg' },
      { token: 'datepicker-day-selected-bg', type: 'Background Color', color: '#14b8a6', value: '#14b8a6', rawValue: 'primary.500' },
      { token: 'datepicker-day-selected-text', type: 'Text Color', color: '#ffffff', value: '#ffffff', rawValue: 'white' },
      { token: 'datepicker-day-today-bg', type: 'Background Color', color: '#f0fdfa', value: '#f0fdfa', rawValue: 'primary.50' },
      { token: 'datepicker-day-today-text', type: 'Text Color', color: '#0f766e', value: '#0f766e', rawValue: 'primary.700' },
      { token: 'datepicker-day-hover-bg', type: 'Background Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface.50' },
      { token: 'datepicker-weekday-text', type: 'Text Color', color: '#64748b', value: '#64748b', rawValue: 'surface.500' },
      { token: 'datepicker-nav-hover-bg', type: 'Background Color', color: '#f8fafc', value: '#f8fafc', rawValue: 'surface.50' },
      { token: 'datepicker-panel-padding', type: 'Spacing', color: '', value: '12px', rawValue: '0.75rem' },
      { token: 'datepicker-date-padding', type: 'Spacing', color: '', value: '4px', rawValue: '0.25rem' },
      { token: 'datepicker-date-width', type: 'Size', color: '', value: '28px', rawValue: '1.75rem' },
      { token: 'datepicker-date-height', type: 'Size', color: '', value: '28px', rawValue: '1.75rem' },
    ];

    return (
      <div>
        <div className="mb-8">
          <h3 className="text-h3 text-navy-900 mb-6">DatePicker Token Documentation</h3>
          <p className="text-body-copy-medium text-navy-600 mb-6">
            These design tokens define the visual properties of the DatePicker component.
          </p>
        </div>

        <div className="bg-white border border-surface-200 rounded-lg overflow-hidden">
          <div className="bg-surface-800 text-white px-6 py-4">
            <div className="grid grid-cols-5 gap-4">
              <div className="text-sm font-semibold">Token</div>
              <div className="text-sm font-semibold">Type</div>
              <div className="text-sm font-semibold">Color</div>
              <div className="text-sm font-semibold">Value</div>
              <div className="text-sm font-semibold">Raw Value</div>
            </div>
          </div>
          
          <div className="divide-y divide-surface-200">
            {tokens.map((item, index) => (
              <div key={index} className="grid grid-cols-5 gap-4 px-6 py-4 items-center">
                <div className="text-body-small-regular text-navy-900 font-mono">
                  {item.token}
                </div>
                <div className="text-body-small-regular text-navy-600">
                  {item.type}
                </div>
                <div className="flex items-center">
                  {item.color && (
                    <div 
                      className="w-4 h-4 rounded border border-surface-200 mr-2"
                      style={{ backgroundColor: item.color }}
                    ></div>
                  )}
                  <span className="text-body-small-regular text-navy-600 font-mono">
                    {item.color}
                  </span>
                </div>
                <div className="text-body-small-regular text-navy-600 font-mono">
                  {item.value}
                </div>
                <div className="text-body-small-regular text-navy-500 font-mono">
                  {item.rawValue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-16">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-h2 text-navy-900">Date Picker</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                COMPLETED
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-body-copy-large text-navy-600 max-w-4xl mb-4">
          A date picker is a design element used to select a specific date from a calendar. Use this component when you require more interaction than a simple text input but provides better user experience and validation.
        </p>
        
        <a 
          href="https://primeng.org/calendar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600 transition-colors text-body-normal-regular underline"
        >
          View PrimeNG Documentation
        </a>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-surface-100 p-1 rounded-lg">
          <button 
            onClick={() => setActiveTab('copy-me')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'copy-me' 
                ? 'bg-surface-800 text-white' 
                : 'text-navy-600 hover:bg-surface-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-sm ${activeTab === 'copy-me' ? 'bg-white' : 'bg-surface-400'}`}></div>
            <span>Copy Me</span>
          </button>
          <button 
            onClick={() => setActiveTab('guidance')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'guidance' 
                ? 'bg-surface-800 text-white' 
                : 'text-navy-600 hover:bg-surface-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-sm ${activeTab === 'guidance' ? 'bg-white' : 'bg-surface-400'}`}></div>
            <span>Guidance</span>
          </button>
          <button 
            onClick={() => setActiveTab('component')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'component' 
                ? 'bg-surface-800 text-white' 
                : 'text-navy-600 hover:bg-surface-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-sm ${activeTab === 'component' ? 'bg-white' : 'bg-surface-400'}`}></div>
            <span>Component</span>
          </button>
          <button 
            onClick={() => setActiveTab('tokens')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'tokens' 
                ? 'bg-surface-800 text-white' 
                : 'text-navy-600 hover:bg-surface-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-sm ${activeTab === 'tokens' ? 'bg-white' : 'bg-surface-400'}`}></div>
            <span>Tokens</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'copy-me' && renderCopyMeTab()}
        {activeTab === 'guidance' && renderGuidanceTab()}
        {activeTab === 'component' && renderComponentTab()}
        {activeTab === 'tokens' && renderTokensTab()}
      </div>

      {/* Usage Examples - Only show in Copy Me tab */}
      {activeTab === 'copy-me' && (
        <div className="mb-12">
          <h3 className="text-h3 text-navy-900 mb-6">Validation Examples</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-surface-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-4">HTML/CSS</h4>
              <CodeBlock
                language="html"
                code={datePickerCode}
              />
            </div>
            
            <div className="bg-white border border-surface-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-4">React Component</h4>
              <CodeBlock
                language="jsx"
                code={reactDatePickerCode}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePickerSection;