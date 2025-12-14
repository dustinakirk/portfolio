import React, { useState, useEffect, useRef } from 'react';
import { User, Bot, Pencil, Send } from 'lucide-react';
import './EditRequestDemo.css';

// --- Demo Data ---
const INITIAL_REQUEST_TEXT = "Create a Q4 pipeline report.";

// Simulates the response to the vague initial request
const INITIAL_RESPONSE_DATA = [
    { region: "North America", value: "$1.2M", status: "Open" },
    { region: "EMEA", value: "$850k", status: "Open" },
    { region: "APAC", value: "$620k", status: "Open" },
];

// Simulates the response after the user clarifies they want EMEA + Closed Won
const UPDATED_RESPONSE_DATA = [
    { region: "EMEA", value: "$850k", status: "Open" },
    { region: "EMEA", value: "$420k", status: "Closed-Won" },
    { region: "EMEA", value: "$150k", status: "Closed-Won" },
];

// --- Sub-Components ---

function ReportVisualization({ data, title }) {
    return (
        <div className="erd-report-table__wrapper">
            <div className="erd-report-table__header">
                {title}
            </div>
            <table className="erd-report-table">
                <thead>
                    <tr>
                        <th>Region</th>
                        <th>Value</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            <td>{row.region}</td>
                            <td>{row.value}</td>
                            <td>
                                <span className={`erd-report-badge erd-report-badge--${row.status === 'Open' ? 'open' : 'won'}`}>
                                    {row.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function MessageItem({ message, isEditing, onEditStart, onEditCancel, onEditSave, isGenerating }) {
    const isUser = message.role === 'user';
    const [editText, setEditText] = useState(message.text);
    const textareaRef = useRef(null);

    // Focus textarea when entering edit mode
    useEffect(() => {
        if (isEditing && textareaRef.current) {
            textareaRef.current.focus();
            textareaRef.current.setSelectionRange(
                textareaRef.current.value.length,
                textareaRef.current.value.length
            );
        }
    }, [isEditing]);

    // Handler for textarea keypress (Enter to save, Shift+Enter for newline)
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onEditSave(message.id, editText);
        } else if (e.key === 'Escape') {
            onEditCancel();
        }
    };

    return (
        <div className={`erd-message erd-message--${message.role}`}>
            {/* Avatar */}
            <div className={`erd-message__avatar erd-message__avatar--${message.role}`}>
                {isUser ? <User size={18} /> : <Bot size={20} />}
            </div>

            {/* Content Body */}
            <div className="erd-message__body">
                {/* Mode: EDITING */}
                {isEditing ? (
                    <div className="erd-edit-area">
                        <textarea
                            ref={textareaRef}
                            className="erd-edit-area__input"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <div className="erd-edit-area__controls">
                            <button className="erd-btn erd-btn--secondary" onClick={onEditCancel}>
                                Cancel
                            </button>
                            <button className="erd-btn erd-btn--primary" onClick={() => onEditSave(message.id, editText)}>
                                Save
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Mode: VIEWING */
                    <div>
                        {/* The Bubble */}
                        <div className={`erd-message__bubble erd-message__bubble--${message.role}`}>
                            {/* Edit Trigger (Only for User, Always Visible Icon) */}
                            {isUser && !isGenerating && (
                                <div className="erd-message__actions">
                                    <button
                                        className="erd-message__action-btn"
                                        onClick={onEditStart}
                                        title="Edit request"
                                    >
                                        <Pencil size={14} />
                                    </button>
                                </div>
                            )}

                            {message.text}

                            {/* Render Report Data if Agent */}
                            {message.data && (
                                <ReportVisualization data={message.data} title={message.title} />
                            )}
                        </div>

                        {/* Meta Info */}
                        <div className="erd-message__meta">
                            {message.isEdited && (
                                <span className="erd-message__edited-label" title="Original request stored in history">
                                    (Edited)
                                </span>
                            )}
                            <span>{message.timestamp}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// --- Main Demo Component ---

export default function EditRequestDemo() {
    const [messages, setMessages] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [version, setVersion] = useState(0); // To force resets

    // Initialize interaction
    useEffect(() => {
        setMessages([
            {
                id: 1,
                role: 'user',
                text: INITIAL_REQUEST_TEXT,
                timestamp: '10:23 AM',
                isEdited: false
            },
            {
                id: 2,
                role: 'agent',
                type: 'report',
                data: INITIAL_RESPONSE_DATA,
                title: 'Pipeline Report (All Regions / Open)',
                text: "Here represents the open pipeline opportunities across all regions for Q4.",
                timestamp: '10:23 AM'
            }
        ]);
    }, [version]);

    const handleReset = () => {
        setEditingId(null);
        setVersion(v => v + 1);
    };

    const handleEditClick = (msgId) => {
        setEditingId(msgId);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    const handleSaveEdit = (msgId, newText) => {
        setEditingId(null);
        setIsGenerating(true);

        // Update the user message immediately so the user sees the new request
        setMessages(prev => prev.map(msg =>
            msg.id === msgId
                ? { ...msg, text: newText, isEdited: true, timestamp: '10:25 AM' }
                : msg
        ));

        // Simulate Agent "Thinking" and updating the response (2 seconds delay)
        setTimeout(() => {
            setMessages(prev => prev.map(msg => {
                if (msg.role === 'agent') {
                    return {
                        ...msg,
                        text: "I've updated the report to filter for EMEA and included Closed-Won deals.",
                        data: UPDATED_RESPONSE_DATA,
                        title: 'Pipeline Report (EMEA / Open & Closed)',
                        timestamp: '10:25 AM'
                    };
                }
                return msg;
            }));
            setIsGenerating(false);
        }, 2000);
    };

    return (
        <div className="erd-demo">
            {/* Header */}
            <header className="pattern-demo__header">
                <h2 className="pattern-demo__title">Interactive Demo</h2>
                <button
                    onClick={handleReset}
                    className="pattern-demo__reset-btn"
                >
                    Reset Demo
                </button>
            </header>

            {/* Chat Thread */}
            <div className="erd-thread">
                {messages.map((msg) => (
                    <MessageItem
                        key={msg.id}
                        message={msg}
                        isEditing={editingId === msg.id}
                        onEditStart={() => handleEditClick(msg.id)}
                        onEditCancel={handleCancelEdit}
                        onEditSave={handleSaveEdit}
                        isGenerating={isGenerating}
                    />
                ))}
                {isGenerating && (
                    <div className="erd-message erd-message--agent">
                        <div className="erd-message__avatar erd-message__avatar--agent">
                            <Bot size={20} />
                        </div>
                        <div className="erd-message__body">
                            <div className="erd-message__bubble erd-message__bubble--agent">
                                <div className="erd-processing">
                                    <div className="erd-dot-flashing"></div>
                                    <span className="erd-processing__text">Processing...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Mock Input Area */}
            <div className="erd-input">
                <div className="erd-input__box">
                    <span>Reply to Sales Copilot...</span>
                    <Send size={16} />
                </div>
            </div>
        </div>
    );
}
