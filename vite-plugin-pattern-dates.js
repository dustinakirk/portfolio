import { execSync } from 'child_process';

/**
 * Formats a date as "Month Dayth, Year" (e.g., "December 5th, 2025")
 */
function formatDateWithOrdinal(date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Add ordinal suffix (st, nd, rd, th)
  const getOrdinalSuffix = (d) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
}

/**
 * Gets the last git commit date for a file
 * @param {string} filePath - Absolute path to the file
 * @returns {Date|null} - Date of last commit, or null if not tracked
 */
function getGitLastModified(filePath) {
  try {
    // Get Unix timestamp of last commit touching this file
    const timestamp = execSync(
      `git log -1 --format=%ct -- "${filePath}"`,
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] }
    ).trim();

    if (!timestamp) return null;
    return new Date(parseInt(timestamp) * 1000);
  } catch {
    return null;
  }
}

/**
 * Vite plugin to inject file modification dates into pattern components
 * Uses git commit history for accurate, persistent dates
 */
export default function patternDatesPlugin() {
  // Pattern to match the timestamp placeholder
  // Matches: <span className="pattern-header__timestamp">Last updated [ANY TEXT]</span>
  const timestampRegex = /(<span\s+className="pattern-header__timestamp">Last updated\s+)[^<]+((?:<\/span>|<\/span>))/g;

  return {
    name: 'vite-plugin-pattern-dates',

    // Run during both dev and build
    enforce: 'pre',

    transform(code, id) {
      // Only process pattern files in the aitrustpatterns/patterns directory
      if (!id.includes('src/components/aitrustpatterns/patterns/') || !id.endsWith('.jsx')) {
        return null;
      }

      // Check if file has the timestamp pattern
      if (!timestampRegex.test(code)) {
        return null;
      }

      // Reset regex lastIndex after test
      timestampRegex.lastIndex = 0;

      // Get git last modified date for this file
      const gitDate = getGitLastModified(id);

      if (!gitDate) {
        // File not yet committed or git not available - keep original text
        console.log(`[pattern-dates] No git history for ${id}, keeping original date`);
        return null;
      }

      const formattedDate = formatDateWithOrdinal(gitDate);

      // Replace the timestamp placeholder
      const transformedCode = code.replace(
        timestampRegex,
        `$1${formattedDate}$2`
      );

      return {
        code: transformedCode,
        map: null // No source map needed for this simple replacement
      };
    }
  };
}
