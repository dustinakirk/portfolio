import React, { useState, useEffect, useCallback } from 'react';
import {
  MessageSquare,
  CheckSquare,
  User,
  Settings,
  Pause,
  Play,
  AlertTriangle,
  AlertCircle,
  RefreshCw,
  Check,
} from 'lucide-react';
import './AssignmentBoardDemo.css';

// Initial task data
const initialTasks = [
  {
    id: 1,
    title: 'Weekly revenue anomaly detection',
    agent: 'Revenue Analyst',
    action: 'Configure detection thresholds',
    status: 'blocked',
    initial: 'R',
    time: '2h 14m',
    cost: '$0.12',
    warning: 'Awaiting clarification on threshold parameters',
  },
  {
    id: 2,
    title: 'Checkout failure investigation',
    agent: 'Atlas',
    action: 'Correlating error patterns',
    status: 'active',
    initial: 'A',
    time: '8m 22s',
    cost: '$0.09',
    progress: 73,
    paused: false,
  },
  {
    id: 3,
    title: 'Optimize search relevance scoring',
    agent: 'Search Optimizer',
    action: 'Analyzing click-through rates',
    status: 'active',
    initial: 'S',
    time: '19m 14s',
    cost: '$0.06',
    progress: 45,
    paused: false,
  },
  {
    id: 4,
    title: 'Performance audit: homepage load times',
    agent: 'Performance Scout',
    action: '2 hours ago',
    status: 'recent',
    initial: 'P',
    time: '12m 45s',
    cost: '$0.15',
  },
];

// Blocked Task Card Component
function BlockedTaskCard({ task }) {
  return (
    <div className="abd-task-card abd-task-card--blocked">
      <div className="abd-avatar abd-avatar--blocked">{task.initial}</div>
      <div className="abd-card-content">
        <h3 className="abd-card-title">{task.title}</h3>
        <div className="abd-card-meta">
          {task.agent} <span className="abd-dot" /> {task.action}
        </div>
        <div className="abd-alert-box">
          <AlertTriangle size={16} />
          {task.warning}
        </div>
      </div>
      <div className="abd-card-right">
        <div className="abd-stat-time">{task.time}</div>
        <div className="abd-stat-cost">{task.cost}</div>
        <div className="abd-action-row">
          <button className="abd-btn-chat-primary">
            <MessageSquare size={14} /> Go to Chat
          </button>
        </div>
      </div>
    </div>
  );
}

// Active Task Card Component
function ActiveTaskCard({ task, onTogglePause }) {
  return (
    <div
      className={`abd-task-card abd-task-card--active ${task.paused ? 'abd-task-card--paused' : ''}`}
    >
      <div className="abd-avatar abd-avatar--active">{task.initial}</div>
      <div className="abd-card-content">
        <h3 className="abd-card-title">{task.title}</h3>
        <div className="abd-card-meta">
          {task.agent} <span className="abd-dot" /> {task.paused ? 'Paused' : task.action}
        </div>
        <div className="abd-progress-track">
          <div className="abd-progress-fill" style={{ width: `${task.progress}%` }} />
        </div>
      </div>
      <div className="abd-card-right">
        <div className="abd-stat-time">{task.time}</div>
        <div className="abd-stat-cost">{task.cost}</div>
        <div className="abd-percentage-label">{Math.floor(task.progress)}%</div>
        <div className="abd-action-row">
          <button className="abd-btn-icon" onClick={() => onTogglePause(task.id)}>
            {task.paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
          <button className="abd-btn-icon">
            <MessageSquare size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Recent Task Card Component
function RecentTaskCard({ task }) {
  return (
    <div className="abd-task-card abd-task-card--recent">
      <div className="abd-avatar abd-avatar--recent">{task.initial}</div>
      <div className="abd-card-content">
        <h3 className="abd-card-title">{task.title}</h3>
        <div className="abd-card-meta">
          {task.agent} <span className="abd-dot" /> {task.action}
        </div>
      </div>
      <div className="abd-card-right">
        <div className="abd-stat-time">{task.time}</div>
        <div className="abd-stat-cost">{task.cost}</div>
        <div className="abd-action-row">
          <button className="abd-btn-icon">
            <MessageSquare size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Sidebar Component
function Sidebar({ blockedCount, activeCount }) {
  return (
    <nav className="abd-sidebar">
      <div className="abd-sidebar__section-title">Workspace</div>
      <button className="abd-nav-item">
        <span className="abd-nav-item__icon">
          <MessageSquare size={18} />
        </span>
        Chats
        <span className="abd-nav-item__badge-group">
          <span className="abd-nav-badge abd-nav-badge--blue">3</span>
        </span>
      </button>
      <button className="abd-nav-item abd-nav-item--active">
        <span className="abd-nav-item__icon">
          <CheckSquare size={18} />
        </span>
        Tasks
        <span className="abd-nav-item__badge-group">
          {blockedCount > 0 && (
            <span className="abd-nav-badge abd-nav-badge--blocked">
              <AlertTriangle size={10} /> {blockedCount}
            </span>
          )}
          <span className="abd-nav-badge abd-nav-badge--active-count">{activeCount}</span>
        </span>
      </button>
      <button className="abd-nav-item">
        <span className="abd-nav-item__icon">
          <User size={18} />
        </span>
        Agents
      </button>
      <button className="abd-nav-item">
        <span className="abd-nav-item__icon">
          <Settings size={18} />
        </span>
        Settings
      </button>

      <div className="abd-sidebar__section-title">Recent Chats</div>
      <div className="abd-recent-chat">
        <div className="abd-status-dot abd-status-dot--green" />
        Q4 Sales Analysis
      </div>
      <div className="abd-recent-chat">
        <div className="abd-status-dot abd-status-dot--gray" />
        Marketing Report
      </div>
      <div className="abd-recent-chat">
        <div className="abd-status-dot abd-status-dot--gray" />
        Code Review
      </div>
    </nav>
  );
}

export default function AssignmentBoardDemo() {
  const [tasks, setTasks] = useState(() => JSON.parse(JSON.stringify(initialTasks)));

  // Reset demo to initial state
  const handleReset = useCallback(() => {
    setTasks(JSON.parse(JSON.stringify(initialTasks)));
  }, []);

  // Toggle pause state for a task
  const togglePause = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, paused: !task.paused } : task))
    );
  }, []);

  // Progress animation for active non-paused tasks
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.status === 'active' && !task.paused && task.progress < 100) {
            return { ...task, progress: Math.min(task.progress + 0.2, 100) };
          }
          return task;
        })
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Filter tasks by status
  const blockedTasks = tasks.filter((t) => t.status === 'blocked');
  const activeTasks = tasks.filter((t) => t.status === 'active');
  const recentTasks = tasks.filter((t) => t.status === 'recent');

  return (
    <div className="abd-showcase">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="abd-app">
        <Sidebar blockedCount={blockedTasks.length} activeCount={activeTasks.length} />

        <main className="abd-main">
          <div className="abd-page-header">
            <h2 className="abd-page-title">
              <CheckSquare size={22} /> Tasks
            </h2>
            <button className="abd-btn-pause-all">
              <Pause size={16} /> Pause All Tasks
            </button>
          </div>

          {/* Blocked Section */}
          <div className="abd-section-header abd-section-header--blocked">
            <AlertCircle size={16} /> Blocked Tasks
            <span className="abd-count-badge">{blockedTasks.length}</span>
          </div>
          <div className="abd-task-list">
            {blockedTasks.map((task) => (
              <BlockedTaskCard key={task.id} task={task} />
            ))}
          </div>

          {/* Active Section */}
          <div className="abd-section-header abd-section-header--active">
            <RefreshCw size={16} /> Active Tasks
            <span className="abd-count-badge">{activeTasks.length}</span>
          </div>
          <div className="abd-task-list">
            {activeTasks.map((task) => (
              <ActiveTaskCard key={task.id} task={task} onTogglePause={togglePause} />
            ))}
          </div>

          {/* Recent Section */}
          <div className="abd-section-header">
            <Check size={16} /> Recent Tasks
            <span className="abd-count-badge">{recentTasks.length}</span>
          </div>
          <div className="abd-task-list">
            {recentTasks.map((task) => (
              <RecentTaskCard key={task.id} task={task} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
