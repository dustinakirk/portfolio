import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Activity, Server, BarChart3, Shield, Clock, Users, Settings, Eye, Gauge } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const FLEET_HEALTH_DASHBOARD_SEO = {
  title: "Fleet Health Dashboard - AI Trust Pattern",
  description: "A centralized, real-time operations view that surfaces the health, performance, and governance status of an AI agent fleet, enabling proactive oversight, faster recovery, and transparent communication to end-users.",
  keywords: ["AI fleet", "agent dashboard", "AI monitoring", "AI governance", "AI operations", "fleet health", "AI trust", "agentic UX", "AI observability", "agent management"],
  canonicalPath: "/agentic_ai_patterns/fleet-health-dashboard"
};

// Placeholder demo component - Fleet Health Dashboard
function FleetHealthDashboardDemo() {
  const styles = {
    demoWrapper: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      maxWidth: '800px',
      width: '100%',
      overflow: 'hidden',
      border: '1px solid #e5e7eb',
      margin: '0 auto',
    },
    demoHeader: {
      padding: '24px',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: '#f9fafb',
    },
    demoTitle: {
      margin: '0 0 8px 0',
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#111827',
    },
    demoDescription: {
      margin: 0,
      color: '#6b7280',
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    placeholderArea: {
      padding: '48px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px',
      backgroundColor: '#fafafa',
    },
    placeholderIcon: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      backgroundColor: '#dbeafe',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px',
    },
    placeholderText: {
      color: '#6b7280',
      fontSize: '1rem',
      textAlign: 'center',
      maxWidth: '400px',
      lineHeight: 1.6,
    },
    placeholderTitle: {
      color: '#374151',
      fontSize: '1.125rem',
      fontWeight: 600,
      marginBottom: '8px',
    },
  };

  return (
    <div style={styles.demoWrapper} role="region" aria-label="Fleet Health Dashboard demo">
      <div style={styles.demoHeader}>
        <h2 style={styles.demoTitle}>Example: Fleet Health Dashboard</h2>
        <p style={styles.demoDescription}>
          This example would demonstrate a centralized operations view showing agent health status,
          performance metrics, and governance controls for a multi-agent AI fleet.
        </p>
      </div>
      <div style={styles.placeholderArea}>
        <div style={styles.placeholderIcon}>
          <Activity size={32} color="#2563eb" />
        </div>
        <p style={styles.placeholderTitle}>Interactive Demo Coming Soon</p>
        <p style={styles.placeholderText}>
          This space will feature an interactive demonstration of a Fleet Health Dashboard
          showing real-time agent status, performance metrics, incident alerts,
          and operational controls for managing AI agent fleets at scale.
        </p>
      </div>
    </div>
  );
}

export default function FleetHealthDashboardPattern() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="pattern-page"
    >
      <header className="pattern-header">
        <div className="pattern-header__inner">
          <div className="pattern-header__title-group">
            <span className="pattern-header__index">10.1</span>
            <div>
              <h1 className="pattern-header__title">Fleet Health Dashboard</h1>
              <p className="pattern-header__subtitle">
                A centralized, real-time operations view that surfaces the health, performance, and governance status of an AI agent fleet, enabling proactive oversight, faster recovery, and transparent communication to end-users.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="10.1" patternTitle="Fleet Health Dashboard" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              A Fleet Health Dashboard is the primary operations surface for monitoring and governing a distributed set of AI agents running across an application or platform.
            </p>
            <p className="pattern-body">
              It consolidates signals from many agents into an interpretable, actionable view: which agents are healthy, which are failing, where latency and costs are spiking, and where safety or compliance issues may be emerging.
            </p>
            <p className="pattern-body">
              In B2B and B2C web applications, the dashboard typically lives in an <span className="pattern-body--bold">&quot;AI Ops,&quot; &quot;Admin,&quot; or &quot;Observability&quot;</span> area. It is consulted by operators, SREs, product managers, and compliance teams during both normal operation and incident response. A well-designed dashboard establishes that AI systems are being actively supervised, which is critical for trust in agentic workflows that operate autonomously on behalf of users.
            </p>
            <p className="pattern-body">
              This pattern is not only an operations tool. It also underpins end-user trust by making it possible to show simplified AI status indicators inside the product (for example, &quot;AI services currently degraded – some responses may be slower&quot;).
            </p>
          </div>
        </section>

        {/* Example Scenario */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Example Scenario</p>
            <p className="pattern-body--bold">Fleet Health Full-Page View</p>
            <p className="pattern-body">
              A &quot;Fleet Health&quot; full-page view shows:
            </p>
            <ul className="pattern-list">
              <li>A <span className="pattern-body--bold">global status banner</span> (&quot;Fleet health: 96% – Minor degradation in &apos;Summarization Agents&apos;&quot;).</li>
              <li><span className="pattern-body--bold">Tiles for each agent type</span> (e.g., &quot;Sales Outreach Agent,&quot; &quot;Fraud Detection Agent,&quot; &quot;Support Triage Agent&quot;) with key metrics: error rate, p95 latency, anomaly flags, and current rollout version.</li>
              <li>A <span className="pattern-body--bold">time-series panel</span> allowing operators to scrub over the past 24 hours to see when incidents occurred.</li>
              <li>A <span className="pattern-body--bold">side panel</span> that, when an agent tile is selected, exposes live logs, recent conversations, configuration, and pause/rollback controls.</li>
              <li>A toggle between <span className="pattern-body--bold">&quot;Fleet-wide&quot; and &quot;Per-tenant&quot;</span> views, showing which customers are affected.</li>
            </ul>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Fleet health dashboard example">
          <FleetHealthDashboardDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a fleet-level health dashboard, AI agents often behave as a &quot;black box&quot;:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Limited visibility into failures and regressions</span> – Agents may silently degrade after model changes, data drift, or third-party outages. Teams often discover issues only after customers complain or business KPIs drop.
              </li>
              <li>
                <span className="pattern-body--bold">Slow, manual incident triage</span> – Operators lack a consolidated place to see which agents are failing, which users are affected, and what changed recently. Investigation requires jumping between logs, monitoring tools, and experiment platforms.
              </li>
              <li>
                <span className="pattern-body--bold">Weak governance and compliance posture</span> – Changes to AI behavior (prompt updates, model swaps, policy changes) can be hard to trace and audit later. Escalations from agents to humans are often opaque and undocumented.
              </li>
              <li>
                <span className="pattern-body--bold">End-user anxiety about autonomy</span> – When autonomous agents run on critical workflows (e.g., billing, security, customer communication), end-users may worry: &quot;Is this being monitored?&quot; or &quot;What happens if it goes wrong?&quot; With no visible oversight, errors feel arbitrary and unaccountable.
              </li>
            </ul>
            <p className="pattern-body">
              A Fleet Health Dashboard addresses these issues by making AI systems observable, controllable, and auditable at scale, which in turn supports higher trust from both internal operators and end-users.
            </p>
          </div>

          <aside className="pattern-section__aside">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Use this pattern when…
              </h3>
              <ul className="pattern-card__list">
                <li>
                  An application relies on <span className="pattern-body--bold">multiple AI agents</span> or agent types running in production (e.g., triage, routing, summarization, recommendations, automation bots).
                </li>
                <li>
                  Agents <span className="pattern-body--bold">execute high-stakes or irreversible actions</span> (e.g., payments, access management, compliance decisions, outbound communications).
                </li>
                <li>
                  Multiple teams (Ops, Product, Data Science, Compliance, Support) require a <span className="pattern-body--bold">shared operational picture</span> of AI behavior to coordinate incident response and change management.
                </li>
                <li>
                  The AI feature set is evolving quickly and <span className="pattern-body--bold">frequent experimentation or configuration changes</span> increase the risk of regressions.
                </li>
                <li>
                  Customers or regulators expect <span className="pattern-body--bold">evidence of monitoring, auditability, and control</span> over AI-driven decisions.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>A product has a <span className="pattern-body--bold">single, low-risk AI feature</span> (e.g., optional copy suggestions) where a simple service-status check is sufficient.</li>
                <li>The agent is <span className="pattern-body--bold">strictly assistive</span>, never acting autonomously or changing system state, and is already covered by standard application monitoring.</li>
                <li>The scale is small (e.g., one internal agent for a single team), where a <span className="pattern-body--bold">lightweight log viewer or simple status page</span> meets all monitoring needs.</li>
                <li>AI usage is <span className="pattern-body--bold">experimental and not yet in production</span>, where tracing individual runs via notebooks or simple logs is more important than fleet-wide aggregation.</li>
              </ul>
            </div>
          </aside>
        </section>

        {/* Pattern Anatomy */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Pattern anatomy</p>
              <p className="pattern-body pattern-body--narrow">
                At its core, the Fleet Health Dashboard is a multi-level overview: a high-level fleet summary that can be progressively drilled down to agent types, instances, tenants, and individual runs or conversations.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Navigation
              </h3>
              <p className="pattern-card__intro">
                Dedicated &quot;AI Ops,&quot; &quot;AI Fleet,&quot; or &quot;Observability&quot; section in the main admin or settings navigation.
              </p>
              <ul className="pattern-card__list">
                <li>Often organized under a broader &quot;Admin&quot; or &quot;Platform&quot; area</li>
                <li>Direct access from main navigation for operators and admins</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Alerts & Logs</h3>
              <p className="pattern-card__intro">
                Links from incident notifications and error details.
              </p>
              <ul className="pattern-card__list">
                <li>Links in incident notifications (email, chat, pager) that open the dashboard filtered to the relevant agent or time window</li>
                <li>Links from error details (e.g., &quot;View in Fleet Health Dashboard&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline: Agent Configuration</h3>
              <p className="pattern-card__intro">
                Inline entries inside agent configuration pages.
              </p>
              <ul className="pattern-card__list">
                <li>Inline &quot;View health&quot; links next to each agent definition in the configuration UI</li>
                <li>Small embedded chart or status indicator that deep-links to full diagnostics</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Embedded: Mini-Panels</h3>
              <p className="pattern-card__intro">
                Lightweight renditions embedded in other surfaces.
              </p>
              <ul className="pattern-card__list">
                <li>Embedded in agent configuration pages or run-history views</li>
                <li>Compact status indicators that expand to full dashboard</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Agent Entity</h3>
            <p className="pattern-card__intro">
              The primary repeated unit is typically an &quot;Agent Entity&quot; (or agent type), sometimes nested by environment or tenant.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <ul className="pattern-card__list">
                  <li>Human-readable name (e.g., &quot;Task Assignment Agent,&quot; &quot;Billing Adjustment Agent&quot;)</li>
                  <li>Optional secondary label: environment (&quot;Production,&quot; &quot;Staging&quot;), segment (region, tenant), or version tag</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <ul className="pattern-card__list">
                  <li>Clear statement of purpose (e.g., &quot;Automatically routes incoming tickets to the right team&quot;)</li>
                  <li>At-a-glance health statement (e.g., &quot;Healthy, slight latency increase in EU region&quot;)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Enable/disable or pause/resume actions</li>
                  <li>Rollout controls (canary, percentage-based rollout, rollback)</li>
                  <li>Deep-link actions: &quot;View logs,&quot; &quot;Replay recent runs,&quot; &quot;Open configuration&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Metadata</p>
                <ul className="pattern-card__list">
                  <li>Status badge (Healthy / Warning / Critical / Paused / Read-only)</li>
                  <li>Key metrics: error rate, p95 latency, token or cost per request, escalation rate</li>
                  <li>Governance metadata: owner team, on-call group, last change timestamp</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Behavior & Lifecycle */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Behavior & lifecycle</p>
              <p className="pattern-body pattern-body--narrow">
                The Fleet Health Dashboard follows a lifecycle that mirrors the lifecycle of the agent fleet itself.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial Setup & Registration</h3>
              <ul className="pattern-card__list">
                <li>Each agent or agent type is registered with a unique ID, name, owner, and environment.</li>
                <li>Baseline metrics and acceptable thresholds are configured (e.g., target error rate &lt;1%, p95 latency &lt;500ms).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Instrumentation & Data Ingestion</h3>
              <ul className="pattern-card__list">
                <li>Agents emit structured events for every run: start/end times, outcome, latency, key inputs/outputs.</li>
                <li>Data pipelines aggregate events into timeseries metrics and derived health scores.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Normal Operation & Health Scoring</h3>
              <ul className="pattern-card__list">
                <li>Dashboard continuously aggregates metrics and computes health statuses per agent, environment, and tenant.</li>
                <li>Health statuses are represented visually (traffic-light colors) and numerically.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Detection of Anomalies</h3>
              <ul className="pattern-card__list">
                <li>Configured thresholds, anomaly detectors, and rules trigger warnings or critical alerts.</li>
                <li>Dashboard highlights affected agents and surfaces potential root-cause signals.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Alerting & Escalation</h3>
              <ul className="pattern-card__list">
                <li>When critical thresholds are crossed, alerts are sent via email, chat, PagerDuty, or in-app notifications.</li>
                <li>Alert payloads link directly into the dashboard with filters applied.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Investigation & Drilldown</h3>
              <ul className="pattern-card__list">
                <li>Operators apply filters and inspect time-series graphs and error distributions.</li>
                <li>Drilldown actions reveal sample runs, conversation transcripts, and safety policy hits.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Remediation & Control Actions</h3>
              <ul className="pattern-card__list">
                <li>Operators pause or partially throttle affected agents, route tasks to backup agents or human workflows.</li>
                <li>Roll back recent configuration or model changes via dashboard controls.</li>
                <li>Rolling updates or hotfixes are deployed, often via configuration changes that propagate through the fleet.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. End-User Impact Communication</h3>
              <ul className="pattern-card__list">
                <li>Fleet health status propagates to a simplified end-user view (banners or badges indicating degradation).</li>
                <li>Fallback behaviors are triggered automatically for affected flows.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">9. Post-Incident Review & Governance</h3>
              <ul className="pattern-card__list">
                <li>Dashboard supports retrospective analysis by providing an audit trail of metrics, configuration changes, alerts, and operator actions.</li>
                <li>Annotations can be attached to timelines (e.g., &quot;Database maintenance,&quot; &quot;Model v3.4 rollout&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">10. Continuous Improvement</h3>
              <ul className="pattern-card__list">
                <li>Insights from incidents and trends feed into new thresholds, better anomaly rules, and improved safety filters.</li>
                <li>The fleet becomes more robust, with the dashboard acting as the living memory of operational history.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data & Telemetry */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Data & telemetry</p>
              <p className="pattern-body pattern-body--narrow">
                A Fleet Health Dashboard is only as useful as the signals it exposes. Typical categories include:
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <BarChart3 size={16} className="pattern-icon--neutral" />
                Traffic & Load
              </h3>
              <ul className="pattern-card__list">
                <li>Request throughput, concurrent sessions, queue depth</li>
                <li>Distribution by agent type, region, tenant, or channel (web, API, chat)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <Gauge size={16} className="pattern-icon--neutral" />
                Performance
              </h3>
              <ul className="pattern-card__list">
                <li>Latency percentiles (p50/p95/p99) per agent and per route</li>
                <li>Time spent in external dependencies (vector store, database, third-party APIs)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Quality & Resolution
              </h3>
              <ul className="pattern-card__list">
                <li>Success rates and failure categories (validation errors, timeouts, safety blocks)</li>
                <li>Escalation rates to humans or fallbacks</li>
                <li>User satisfaction signals (thumbs-up/down, CSAT)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <Shield size={16} className="pattern-icon--neutral" />
                Safety & Compliance
              </h3>
              <ul className="pattern-card__list">
                <li>Content-filter triggers (harmful content, PII exposure, policy violations)</li>
                <li>Rate of blocked or redacted responses</li>
                <li>Compliance rule checks (cross-border data use, retention policies)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <Server size={16} className="pattern-icon--neutral" />
                Cost & Resource Usage
              </h3>
              <ul className="pattern-card__list">
                <li>Token usage per agent, per tenant, and over time</li>
                <li>CPU/GPU consumption, memory utilization, storage used</li>
                <li>Derived metrics like cost per successful outcome</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <Clock size={16} className="pattern-icon--neutral" />
                Change & Configuration History
              </h3>
              <ul className="pattern-card__list">
                <li>Version tracking for prompts, models, tools, and routing policies</li>
                <li>Deployments, rollbacks, and experiment toggles with timestamps</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-card--secondary pattern-grid--mt-md">
            <h3 className="pattern-card__title">Data Privacy Considerations</h3>
            <p className="pattern-card__intro">
              Data should be <span className="pattern-body--bold">aggregated and anonymized where possible</span>, particularly in B2B contexts where multi-tenant isolation and privacy are critical. For deeper debugging, gated access to pseudonymized transcripts or logs may be provided under strict RBAC and auditing.
            </p>
          </div>
        </section>

        {/* Controls & Governance */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Controls & governance</p>
              <p className="pattern-body pattern-body--narrow">
                The Fleet Health Dashboard is also a control plane for AI agents.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Operational Controls</h3>
              <p className="pattern-body--bold pattern-body--mb-sm">Agent Lifecycle</p>
              <ul className="pattern-card__list">
                <li>Enable/disable or pause/resume an agent globally or by environment</li>
                <li>Configure rollout strategies (canary, gradual rollout by percentage or tenant segment)</li>
              </ul>
              <p className="pattern-body--bold pattern-body--mb-sm" style={{ marginTop: '16px' }}>Routing & Load Management</p>
              <ul className="pattern-card__list">
                <li>Adjust concurrency limits, max parallel tasks, or queue prioritization</li>
                <li>Shift traffic between model variants or regions</li>
              </ul>
              <p className="pattern-body--bold pattern-body--mb-sm" style={{ marginTop: '16px' }}>Automation Rules</p>
              <ul className="pattern-card__list">
                <li>Define rules like &quot;Auto-pause agent if error rate &gt;3% for 5 minutes&quot;</li>
                <li>&quot;Route to human review when safety score drops below threshold&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Governance & Compliance Controls</h3>
              <p className="pattern-body--bold pattern-body--mb-sm">Audit Logs</p>
              <ul className="pattern-card__list">
                <li>Comprehensive logging of changes: who modified prompts or policies, when, and how</li>
                <li>Historical views to reconstruct the configuration and status at any point in time</li>
              </ul>
              <p className="pattern-body--bold pattern-body--mb-sm" style={{ marginTop: '16px' }}>Access Control (RBAC)</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">View-only</span> for stakeholders who need to monitor but not change behavior</li>
                <li><span className="pattern-body--bold">Operator</span> roles with limited controls (pause, resume, reroute)</li>
                <li><span className="pattern-body--bold">Admin</span> roles for configuration, rollout, and experiment management</li>
              </ul>
              <p className="pattern-body--bold pattern-body--mb-sm" style={{ marginTop: '16px' }}>Data Protection</p>
              <ul className="pattern-card__list">
                <li>Controls to mask or anonymize user data in logs and dashboards</li>
                <li>Retention policies for sensitive logs and transcripts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trust & Transparency */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Trust & transparency considerations</p>
              <p className="pattern-body pattern-body--narrow">
                A Fleet Health Dashboard contributes to trust in two directions: <span className="pattern-body--bold">internal trust</span> (between teams operating the system) and <span className="pattern-body--bold">external trust</span> (with end-users and customers).
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <Users size={16} className="pattern-icon--neutral" />
                For Internal Teams
              </h3>
              <p className="pattern-body--bold pattern-body--mb-sm">Clear Ownership and Accountability</p>
              <ul className="pattern-card__list">
                <li>Every agent entity shows an owning team, primary contact, and on-call group</li>
                <li>Change history makes it clear when and why behavior changed</li>
              </ul>
              <p className="pattern-body--bold pattern-body--mb-sm" style={{ marginTop: '16px' }}>Explainable Agent Behavior at Scale</p>
              <ul className="pattern-card__list">
                <li>High-level metrics are connected to concrete examples: sample runs, transcripts, or decision traces</li>
                <li>For critical decisions, operators can inspect why an agent reached a conclusion</li>
              </ul>
              <p className="pattern-body--bold pattern-body--mb-sm" style={{ marginTop: '16px' }}>Shared Situational Awareness</p>
              <ul className="pattern-card__list">
                <li>A single source of truth for AI fleet health reduces conflicting interpretations</li>
                <li>During incidents, teams can coordinate using the same view and annotations</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <Eye size={16} className="pattern-icon--neutral" />
                For End-Users and Customers
              </h3>
              <p className="pattern-body--bold pattern-body--mb-sm">Simplified Status and Incident Communication</p>
              <ul className="pattern-card__list">
                <li>Surface a minimal &quot;AI status&quot; indicator in the product (e.g., &quot;AI services: Operational / Degraded / Paused&quot;)</li>
                <li>On degradation, provide brief explanations and known impact</li>
              </ul>
              <p className="pattern-body--bold pattern-body--mb-sm" style={{ marginTop: '16px' }}>Visible Guardrails and Fallbacks</p>
              <ul className="pattern-card__list">
                <li>Indicate when AI outputs are being double-checked, when manual review is required, or when AI has been temporarily disabled</li>
                <li>Make it clear that the system is monitored and that humans remain in the loop</li>
              </ul>
              <p className="pattern-body--bold pattern-body--mb-sm" style={{ marginTop: '16px' }}>Access to AI Decision Context</p>
              <ul className="pattern-card__list">
                <li>For high-stakes decisions, allow end-users to see a high-level &quot;AI decision log&quot; or explanation</li>
                <li>Provide paths to dispute or request review of AI-driven outcomes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* UX Design Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">UX design guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                While visual specifics depend on the product&apos;s design system, consistent patterns strengthen trust and usability.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Information Architecture</h3>
              <ul className="pattern-card__list">
                <li>Start with a <span className="pattern-body--bold">fleet-level summary</span>: overall health, number of agents affected, key incidents</li>
                <li>Hierarchically organize by <span className="pattern-body--bold">agent type, environment, and tenant</span></li>
                <li>Provide a persistent <span className="pattern-body--bold">time-range selector</span> (last 1 hour, 24 hours, 7 days)</li>
                <li>Maintain consistent navigation for switching between &quot;Overview&quot;, &quot;Agent Details&quot;, &quot;Experiments&quot;, and &quot;Audit Logs&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Visual Hierarchy & Affordances</h3>
              <ul className="pattern-card__list">
                <li>Use <span className="pattern-body--bold">status indicators and typography</span> to prioritize attention</li>
                <li>Fleet status banner at the top; agent cards sorted by severity</li>
                <li>Combine <span className="pattern-body--bold">aggregated and detailed views</span>: heatmaps, time-series charts, tabular views</li>
                <li>Provide <span className="pattern-body--bold">interactive elements</span>: hover tooltips, clickable drilldown</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Interaction & Workflows</h3>
              <ul className="pattern-card__list">
                <li>Optimize for <span className="pattern-body--bold">incident triage</span>: fast identification of what is broken, who is affected, and what changed</li>
                <li>Support <span className="pattern-body--bold">trend analysis</span>: detecting slow drifts in quality, cost, or safety</li>
                <li>Enable <span className="pattern-body--bold">change validation</span>: verifying that a new model, prompt, or tool did not regress key metrics</li>
                <li>Support <span className="pattern-body--bold">saved views and filters</span></li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Notes and Annotations</h3>
              <ul className="pattern-card__list">
                <li>Ability to mark events on graphs (deploys, external outages, experiments)</li>
                <li>Text annotations on incidents to document hypotheses and resolutions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Accessibility</h3>
              <ul className="pattern-card__list">
                <li>Ensure the dashboard works with <span className="pattern-body--bold">keyboard-only navigation</span> and <span className="pattern-body--bold">screen readers</span></li>
                <li>Avoid encoding critical information in color alone; pair color with icons and labels</li>
                <li>Offer <span className="pattern-body--bold">high-contrast</span> and <span className="pattern-body--bold">dark mode</span> options</li>
                <li>Use concise, descriptive labels and alt text for charts and controls</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Technical implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Implementation details vary by stack, but several recurring patterns support robust dashboard behavior.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Data & Architecture</h3>
              <ul className="pattern-card__list">
                <li>Implement a <span className="pattern-body--bold">structured event schema</span> for agent runs that covers inputs, outputs, status, timings, and metadata</li>
                <li>Use a <span className="pattern-body--bold">streaming or batching pipeline</span> (event bus → processing → time-series store) to avoid performance impact on runtime agents</li>
                <li>Apply <span className="pattern-body--bold">sampling strategies</span> where full data capture is too expensive, while preserving enough detail for debugging</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance & Scalability</h3>
              <ul className="pattern-card__list">
                <li>Use <span className="pattern-body--bold">aggregated metrics and caching</span> to keep dashboard interactions responsive even at high scale</li>
                <li>Provide pagination and server-side filtering for large fleets or multi-tenant environments</li>
                <li>Ensure the dashboard itself is resilient; degradation of telemetry should not further degrade operational visibility</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security & Privacy</h3>
              <ul className="pattern-card__list">
                <li>Enforce <span className="pattern-body--bold">strict RBAC</span> and tenant isolation at the query layer, not just the UI</li>
                <li>Mask or tokenize sensitive identifiers by default, with explicit justifications for any de-anonymization</li>
                <li>Provide configuration for <span className="pattern-body--bold">data retention windows</span> and ensure deletion workflows propagate to telemetry storage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Risks & anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Certain implementations of fleet health dashboards can unintentionally undermine trust and usability.
              </p>
            </div>
          </div>

          <div className="antipattern-container">
            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Metric Soup with No Narrative</h3>
                  <p className="antipattern-subtitle">Overloading the interface with charts and numbers but no clear status or recommended actions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Dashboards that present raw metrics without context or prioritization leave operators overwhelmed and uncertain about what needs attention first.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Lead with a clear status summary and prioritized alerts; provide metrics as supporting detail.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">No Drilldown Path</h3>
                  <p className="antipattern-subtitle">Showing that something is broken without a way to get to specific runs, logs, or configuration changes.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Operators need to investigate incidents quickly. Without clear paths from aggregate views to specific runs and logs, triage becomes slow and frustrating.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always provide clickable paths from summary views to detailed run-level diagnostics.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Controls or Opaque Actions</h3>
                  <p className="antipattern-subtitle">Burying pause/rollback actions or failing to record them in an audit log.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When operational controls are hard to find or when actions are not logged, it introduces risk and reduces trust in the system&apos;s governance.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Make controls visible and accessible; log all actions with actor, timestamp, and rationale.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Leaking Sensitive Data in Logs</h3>
                  <p className="antipattern-subtitle">Surfacing raw end-user inputs, confidential content, or PII in clear text within the dashboard.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Exposing sensitive data creates compliance risks and erodes trust, particularly in multi-tenant environments where data isolation is expected.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Mask or anonymize sensitive data by default; require explicit justification and auditing for access to raw data.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">End-User Status Disconnected from Reality</h3>
                  <p className="antipattern-subtitle">Showing &quot;All systems operational&quot; to end-users while internal telemetry clearly indicates an incident.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Inconsistency between internal knowledge and external communication destroys trust when customers discover the discrepancy.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Ensure end-user status indicators are automatically derived from actual fleet health data.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Example Use Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example use cases</p>
              <p className="pattern-body pattern-body--narrow">
                How fleet health dashboards apply across different contexts and industries.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Enterprise Monitoring: Collaborative Tool</h3>
              <p className="pattern-card__intro">
                In a project management platform, a &quot;Task Assignment Agent&quot; routes new tasks to the right team. After a database schema change, the Fleet Health Dashboard shows a sudden spike in assignment failures.
              </p>
              <ul className="pattern-card__list">
                <li>The ops lead filters the dashboard to the affected agent and sees error rate spiking to 12% in the last hour</li>
                <li>Recent deployment notes indicate the database change</li>
                <li>Sample failed runs show query errors in the logs</li>
                <li>The lead uses dashboard controls to pause the agent in production while keeping it active in staging</li>
                <li>End-users see a brief banner explaining that AI-based assignment is temporarily disabled</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Agent Orchestration: E-commerce</h3>
              <p className="pattern-card__intro">
                In an e-commerce platform, a chain of agents handles the buyer journey: Inventory Checker → Recommendation Engine → Checkout Optimizer.
              </p>
              <ul className="pattern-card__list">
                <li>The Fleet Health Dashboard reveals normal inventory checks but increased latency on the recommendation agent</li>
                <li>A correlation between latency spikes and a recent vector search configuration change is identified</li>
                <li>Operators adjust load distribution to route more traffic to a backup recommendation model</li>
                <li>End-users see stable performance and, in edge cases, a clear fallback message</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Compliance Auditing: Regulated Sectors</h3>
              <p className="pattern-card__intro">
                In a banking application, a Fraud Detection Agent flags suspicious transactions for review. Auditors need assurance that the system behaves consistently with policies.
              </p>
              <ul className="pattern-card__list">
                <li>Auditors filter to &quot;Fraud Detection Agent – Production – High-Risk Transactions&quot;</li>
                <li>They review specific escalated transactions with anonymized context</li>
                <li>Audit logs show every configuration change, including who updated thresholds and when</li>
                <li>For customers, transaction histories can include a &quot;View automated review details&quot; entry</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Scalability Testing: SaaS Beta Rollouts</h3>
              <p className="pattern-card__intro">
                A B2B SaaS platform introduces a &quot;Smart Workflow Builder Agent&quot; that can create and edit automations for customers.
              </p>
              <ul className="pattern-card__list">
                <li>During load testing and beta rollout, the dashboard tracks resource usage and escalation rates</li>
                <li>Product teams run A/B tests where some tenants receive the new agent and others remain on manual configuration</li>
                <li>Metrics are compared side-by-side in the dashboard</li>
                <li>End-users in the beta cohort see an explicit &quot;Beta AI Mode&quot; label and safe fallback options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variants</p>
              <p className="pattern-body pattern-body--narrow">
                The Fleet Health Dashboard pattern can be adapted for different contexts and audiences.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Operator-Only vs. Shared View</h3>
              <p className="pattern-card__intro">
                Some products keep the full Fleet Health Dashboard internal while exposing a simplified status summary to customers (e.g., per-tenant AI status on an admin page).
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Per-Tenant Dashboards</h3>
              <p className="pattern-card__intro">
                B2B platforms often provide a tenant-scoped view so customer admins can monitor the AI agents operating in their own environment.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Embedded Mini-Panels</h3>
              <p className="pattern-card__intro">
                A lightweight rendition of the Fleet Health Dashboard embedded in other surfaces, such as agent configuration pages or run-history views.
              </p>
            </div>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Implementation checklist</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Agent Registration & Setup</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Agent entities are registered with clear names, owners, environments, and risk tiers.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Telemetry covers traffic, performance, quality, safety, cost, and change history.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Health & Alerting</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Health statuses and thresholds are defined and visible (Healthy / Warning / Critical).</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Alerting paths are configured and integrated with incident management tools.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Investigation & Control</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Drilldown views expose sample runs, logs, and configuration changes without violating privacy.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Operational controls (pause, rollout, rollback) are available and fully audited.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Security & Governance</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>RBAC and tenant isolation are enforced at both UI and data layers.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>A simplified AI status indicator is available for end-user surfaces where appropriate.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Usability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Accessibility and usability have been validated for day-to-day operator workflows.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
