import React, { useState } from 'react';
import { navigationRegistry } from './registry';
import { Menu, BookOpen, Layers, MonitorPlay } from 'lucide-react';
import './index.css';

export default function App() {
  const [selectedWeek, setSelectedWeek] = useState("Week 1");
  const [selectedTab, setSelectedTab] = useState("Unit");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // If a week changes, reset tab to 'Unit' or whatever is available
  const handleWeekSelect = (week: string) => {
    setSelectedWeek(week);
    const availableTabs = Object.keys(navigationRegistry[week]);
    if (!availableTabs.includes(selectedTab)) {
      setSelectedTab(availableTabs[0]);
    }
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  const currentTabs = navigationRegistry[selectedWeek] || {};
  const ActiveComponent = currentTabs[selectedTab];

  const weeks = Object.keys(navigationRegistry);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>CodePath Mobile AI</h2>
        </div>
        <nav className="sidebar-nav">
          {weeks.map(week => (
            <button
              key={week}
              className={`sidebar-link ${selectedWeek === week ? 'active' : ''}`}
              onClick={() => handleWeekSelect(week)}
            >
              {week === "Prework" ? <BookOpen size={18} /> : <Layers size={18} />}
              <span>{week}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <div className="top-bar">
          <button className="menu-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu size={24} />
          </button>
          <div className="tab-container">
            {Object.keys(currentTabs).map(tab => (
              <button
                key={tab}
                className={`tab-link ${selectedTab === tab ? 'active' : ''}`}
                onClick={() => setSelectedTab(tab)}
              >
                <MonitorPlay size={16} />
                <span>{tab}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="content-area">
          {ActiveComponent ? <ActiveComponent /> : <div className="empty-state">No content found for {selectedWeek} - {selectedTab}</div>}
        </div>
      </div>
    </div>
  );
}
