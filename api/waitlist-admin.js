import { list } from '@vercel/blob';

const BLOB_FILENAME = 'peakactive-waitlist.json';
const ADMIN_PASSWORD = 'peakactivewaitlist5005';

async function getWaitlistData() {
  try {
    const { blobs } = await list({ prefix: BLOB_FILENAME });
    if (blobs.length === 0) {
      return { emails: [] };
    }
    const response = await fetch(blobs[0].url);
    return await response.json();
  } catch (error) {
    console.error('Error reading waitlist:', error);
    return { emails: [] };
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  const { password } = req.body;

  if (!password || password !== ADMIN_PASSWORD) {
    return res.status(401).json({
      success: false,
      message: 'Invalid password',
    });
  }

  try {
    const data = await getWaitlistData();

    // Sort by date descending (newest first)
    const sortedEmails = data.emails.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    return res.status(200).json({
      success: true,
      emails: sortedEmails,
    });
  } catch (error) {
    console.error('Admin API error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch waitlist data',
    });
  }
}
