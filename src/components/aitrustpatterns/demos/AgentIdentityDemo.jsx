import React from 'react';
import './AgentIdentityDemo.css';

export default function AgentIdentityDemo() {
  return (
    <section className="aid-chat" aria-label="AI agent chat with role contract example">
      <div className="aid-chat__body">
        <div className="aid-chat-thread" aria-label="Chat with Revenue Ops Agent">
          <div className="aid-chat-thread__message aid-chat-thread__message--user">
            <div className="aid-chat-thread__avatar aid-chat-thread__avatar--user" aria-hidden="true">DK</div>
            <div className="aid-chat-thread__bubble">
              <div className="aid-chat-thread__sender">You</div>
              <div className="aid-chat-thread__text">
                Clean up open leads for Acme Corp and suggest an SDR cadence for high-intent prospects.
              </div>
            </div>
          </div>

          <div className="aid-chat-thread__message aid-chat-thread__message--agent">
            <div className="aid-chat-thread__avatar" aria-hidden="true">RO</div>
            <div className="aid-chat-thread__bubble">
              <div className="aid-chat-thread__sender">Revenue Ops Agent</div>
              <div className="aid-chat-thread__text">
                I can review your Salesforce leads for Acme Corp, propose field updates, and prepare a merge list. I can&apos;t delete
                records or send emails, but I&apos;ll hand everything back to you for approval.
              </div>
              <div className="aid-chat-thread__hint">
                This response follows <span className="aid-chat-thread__link-role-contract">my current role &amp; access contract</span>.
              </div>
            </div>
          </div>
        </div>

        <aside className="aid-role-contract" aria-label="Agent role and access">
          <header className="aid-role-contract__header">
            <div className="aid-role-contract__header-main">
              <h2 className="aid-role-contract__title">Role &amp; access</h2>
              <p className="aid-role-contract__subtitle">Configured for your account by RevOps Admin.</p>
            </div>
            <button className="aid-role-contract__close" type="button" aria-label="Close role &amp; access panel">&times;</button>
          </header>

          <section className="aid-role-contract__section">
            <h3 className="aid-role-contract__label">Who I am</h3>
            <p className="aid-role-contract__body">
              I&apos;m an AI Revenue Ops agent that helps keep your CRM data clean and prepares SDR cadences.
            </p>
          </section>

          <section className="aid-role-contract__section">
            <h3 className="aid-role-contract__label">What I can do</h3>
            <ul className="aid-role-contract__list">
              <li className="aid-role-contract__item">Create and update leads and contacts in Salesforce.</li>
              <li className="aid-role-contract__item">Identify likely duplicates and prepare a merge list for your review.</li>
              <li className="aid-role-contract__item">Draft SDR tasks and outreach sequences (not send).</li>
            </ul>
          </section>

          <section className="aid-role-contract__section">
            <h3 className="aid-role-contract__label">What I will not do</h3>
            <ul className="aid-role-contract__list">
              <li className="aid-role-contract__item">Delete any records.</li>
              <li className="aid-role-contract__item">Send emails or sequences without your approval.</li>
              <li className="aid-role-contract__item">Change opportunity stages or quotas.</li>
            </ul>
          </section>

          <section className="aid-role-contract__section">
            <h3 className="aid-role-contract__label">Data &amp; tools</h3>
            <dl className="aid-role-contract__definition-list">
              <div className="aid-role-contract__definition-item">
                <dt className="aid-role-contract__definition-term">Salesforce</dt>
                <dd className="aid-role-contract__definition-description">Read/write on leads &amp; contacts; no delete permissions.</dd>
              </div>
              <div className="aid-role-contract__definition-item">
                <dt className="aid-role-contract__definition-term">Outreach</dt>
                <dd className="aid-role-contract__definition-description">Draft-only sequences and tasks; cannot send.</dd>
              </div>
              <div className="aid-role-contract__definition-item">
                <dt className="aid-role-contract__definition-term">HubSpot</dt>
                <dd className="aid-role-contract__definition-description">Read-only campaign analytics.</dd>
              </div>
            </dl>
          </section>

          <footer className="aid-role-contract__footer">
            <span className="aid-role-contract__mode-indicator aid-role-contract__mode-indicator--draft">
              Draft-only · All changes require your approval
            </span>
          </footer>
        </aside>
      </div>
    </section>
  );
}
