import React from 'react';

// App Shell component providing the consistent layout for all slides
// Header (48px) + Left Nav (180px) + Body content area

export default function AppShell({ children, activeNav = 'chats' }) {
  const navItems = [
    { id: 'chats', label: 'Chats', icon: 'chat' },
    { id: 'tasks', label: 'Tasks', icon: 'task' },
    { id: 'agents', label: 'Agents', icon: 'agent' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case 'chat':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 3a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1H5l-3 3V3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'task':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'agent':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3 14c0-2.5 2.5-4 5-4s5 1.5 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case 'settings':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 2v2M8 12v2M2 8h2M12 8h2M3.76 3.76l1.41 1.41M10.83 10.83l1.41 1.41M3.76 12.24l1.41-1.41M10.83 5.17l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="td-trust-demo__shell">
      {/* Header */}
      <header className="td-trust-demo__header">
        <div className="td-trust-demo__header-left">
          <div className="td-trust-demo__logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="var(--td-accent)"/>
              <path d="M7 12h10M12 7v10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="td-trust-demo__logo-text">Agent Platform</span>
          </div>
        </div>
        <div className="td-trust-demo__header-right">
          <button className="td-trust-demo__icon-button" title="Help">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 7a2 2 0 113 1.73c-.5.29-1 .77-1 1.27v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="9" cy="13" r="0.5" fill="currentColor"/>
            </svg>
          </button>
          <button className="td-trust-demo__icon-button" title="Settings">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.22 4.22l1.42 1.42M12.36 12.36l1.42 1.42M4.22 13.78l1.42-1.42M12.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="td-trust-demo__avatar" title="User">
            <span>JD</span>
          </div>
        </div>
      </header>

      {/* Layout: Nav + Body */}
      <div className="td-trust-demo__layout">
        {/* Left Navigation */}
        <nav className="td-trust-demo__nav">
          <div className="td-trust-demo__nav-section">
            <div className="td-trust-demo__nav-heading">Workspace</div>
            {navItems.map((item) => (
              <div
                key={item.id}
                className={`td-trust-demo__nav-item ${activeNav === item.id ? 'td-trust-demo__nav-item--active' : ''}`}
              >
                <span className="td-trust-demo__nav-icon">{renderIcon(item.icon)}</span>
                <span className="td-trust-demo__nav-label">{item.label}</span>
                {item.id === 'chats' && <span className="td-trust-demo__nav-badge">3</span>}
                {item.id === 'tasks' && (
                  <div className="td-trust-demo__nav-badges">
                    <span className="td-trust-demo__nav-badge td-trust-demo__nav-badge--error">1</span>
                    <span className="td-trust-demo__nav-badge td-trust-demo__nav-badge--active">2</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="td-trust-demo__nav-section">
            <div className="td-trust-demo__nav-heading">Recent Chats</div>
            <div className="td-trust-demo__nav-item td-trust-demo__nav-item--chat">
              <span className="td-trust-demo__chat-dot"></span>
              <span className="td-trust-demo__nav-label">Q4 Sales Analysis</span>
            </div>
            <div className="td-trust-demo__nav-item td-trust-demo__nav-item--chat">
              <span className="td-trust-demo__chat-dot td-trust-demo__chat-dot--inactive"></span>
              <span className="td-trust-demo__nav-label">Marketing Report</span>
            </div>
            <div className="td-trust-demo__nav-item td-trust-demo__nav-item--chat">
              <span className="td-trust-demo__chat-dot td-trust-demo__chat-dot--inactive"></span>
              <span className="td-trust-demo__nav-label">Code Review</span>
            </div>
          </div>
        </nav>

        {/* Body Content */}
        <main className="td-trust-demo__body">
          {children}
        </main>
      </div>
    </div>
  );
}
