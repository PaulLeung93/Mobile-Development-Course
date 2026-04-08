import React, { useState, useEffect } from 'react';
import { navigationRegistry } from './registry';
import { Menu, BookOpen, Layers, MonitorPlay, Moon, Sun } from 'lucide-react';
import './index.css';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Curriculum component error:', error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '40px 32px', color: '#b91c1c', background: '#fff5f5', borderRadius: 12, margin: 24 }}>
          <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>⚠️ This page crashed</p>
          <p style={{ fontSize: 13, fontFamily: 'monospace', color: '#7f1d1d', whiteSpace: 'pre-wrap' }}>
            {this.state.error.message}
          </p>
          <button
            onClick={() => this.setState({ error: null })}
            style={{ marginTop: 16, padding: '6px 16px', background: '#1f2937', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 13 }}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [selectedWeek, setSelectedWeek] = useState("Week 1");
  const [selectedTab, setSelectedTab] = useState("Unit");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

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
          <button className="theme-toggle" onClick={() => setIsDark(d => !d)} title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="content-area">
          <ErrorBoundary key={`${selectedWeek}-${selectedTab}`}>
            {ActiveComponent ? <ActiveComponent /> : <div className="empty-state">No content found for {selectedWeek} - {selectedTab}</div>}
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
