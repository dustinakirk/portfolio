import { Mail } from 'lucide-react';

export default function FeedbackLink({ patternIndex, patternTitle }) {
  const subject = encodeURIComponent(`Feedback: Pattern ${patternIndex} - ${patternTitle}`);
  const body = encodeURIComponent(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Pattern: ${patternIndex} – ${patternTitle}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your suggested edit:
─────────────────────────────────
[Enter your suggestion here]
─────────────────────────────────

Additional context (optional):

`);

  const mailto = `mailto:dustin@dustinkirk.com?subject=${subject}&body=${body}`;

  return (
    <a
      href={mailto}
      className="pattern-header__feedback"
    >
      <Mail className="pattern-header__feedback-icon" />
      Suggest an edit
    </a>
  );
}
