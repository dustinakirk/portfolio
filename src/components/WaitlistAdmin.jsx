import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2, Lock, Trash2 } from 'lucide-react';
import './WaitlistAdmin.css';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export default function WaitlistAdmin() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [emails, setEmails] = useState([]);
  const [deletingEmail, setDeletingEmail] = useState(null);
  const autoLoginAttempted = useRef(false);

  const attemptLogin = async (pwd) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: pwd }),
      });

      const data = await response.json();

      if (data.success) {
        setPassword(pwd);
        setEmails(data.emails);
        setIsAuthenticated(true);
        return true;
      } else {
        setError(data.message || 'Invalid password');
        return false;
      }
    } catch (err) {
      setError('Failed to authenticate. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-login from query parameter
  useEffect(() => {
    if (autoLoginAttempted.current) return;

    const passwordParam = searchParams.get('password');
    if (passwordParam) {
      autoLoginAttempted.current = true;
      // Clear password from URL for security
      setSearchParams({}, { replace: true });
      attemptLogin(passwordParam);
    }
  }, [searchParams, setSearchParams]);

  const handleDelete = async (emailToDelete) => {
    if (!confirm(`Delete ${emailToDelete} from the waitlist?`)) {
      return;
    }

    setDeletingEmail(emailToDelete);

    try {
      const response = await fetch('/api/waitlist-admin', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, email: emailToDelete }),
      });

      const data = await response.json();

      if (data.success) {
        setEmails(data.emails);
      } else {
        alert(data.message || 'Failed to delete email');
      }
    } catch (err) {
      alert('Failed to delete email. Please try again.');
    } finally {
      setDeletingEmail(null);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    attemptLogin(password);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setEmails([]);
  };

  if (!isAuthenticated) {
    return (
      <div className="waitlist-admin">
        <div className="waitlist-admin__container">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleLogin}
            className="login-form"
          >
            <h1 className="login-form__title">
              <Lock style={{ display: 'inline', width: '1.25rem', height: '1.25rem', marginRight: '0.5rem', verticalAlign: 'middle' }} />
              Waitlist Admin
            </h1>

            <div className="login-form__group">
              <label htmlFor="password" className="login-form__label">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="login-form__input"
                disabled={isLoading}
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="login-form__button"
              disabled={isLoading || !password}
            >
              {isLoading ? (
                <>
                  <Loader2 className="login-form__spinner" />
                  Verifying...
                </>
              ) : (
                'View Waitlist'
              )}
            </button>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="login-form__error"
              >
                {error}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    );
  }

  return (
    <div className="waitlist-admin">
      <div className="waitlist-admin__container">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="waitlist-admin__header"
        >
          <h1 className="waitlist-admin__title">Peak Active Waitlist</h1>
          <p className="waitlist-admin__subtitle">Manage your waitlist subscribers</p>
          <span className="waitlist-admin__count">
            {emails.length} {emails.length === 1 ? 'subscriber' : 'subscribers'}
          </span>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="waitlist-table"
        >
          {emails.length === 0 ? (
            <div className="waitlist-table__empty">
              No subscribers yet. Share your waitlist page to get started!
            </div>
          ) : (
            <div className="waitlist-table__wrapper">
              <table className="waitlist-table__table">
                <thead className="waitlist-table__header">
                  <tr>
                    <th className="waitlist-table__header-cell waitlist-table__header-cell--number">#</th>
                    <th className="waitlist-table__header-cell">Email</th>
                    <th className="waitlist-table__header-cell waitlist-table__header-cell--date">Date Added</th>
                    <th className="waitlist-table__header-cell waitlist-table__header-cell--actions"></th>
                  </tr>
                </thead>
                <tbody>
                  {emails.map((entry, index) => (
                    <tr key={entry.email} className="waitlist-table__row">
                      <td className="waitlist-table__cell waitlist-table__cell--number">
                        {index + 1}
                      </td>
                      <td className="waitlist-table__cell waitlist-table__cell--email">
                        {entry.email}
                      </td>
                      <td className="waitlist-table__cell waitlist-table__cell--date">
                        {formatDate(entry.date)}
                      </td>
                      <td className="waitlist-table__cell waitlist-table__cell--actions">
                        <button
                          onClick={() => handleDelete(entry.email)}
                          disabled={deletingEmail === entry.email}
                          className="waitlist-table__delete-button"
                          title="Delete from waitlist"
                        >
                          {deletingEmail === entry.email ? (
                            <Loader2 className="waitlist-table__delete-spinner" />
                          ) : (
                            <Trash2 className="waitlist-table__delete-icon" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        <div className="logout">
          <button onClick={handleLogout} className="logout__button">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
