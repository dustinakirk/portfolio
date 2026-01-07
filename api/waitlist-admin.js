import { list, put } from '@vercel/blob';

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

async function saveWaitlistData(data) {
  await put(BLOB_FILENAME, JSON.stringify(data), {
    access: 'public',
    addRandomSuffix: false,
  });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { password } = req.body;

  if (!password || password !== ADMIN_PASSWORD) {
    return res.status(401).json({
      success: false,
      message: 'Invalid password',
    });
  }

  // DELETE: Remove an email from the waitlist
  if (req.method === 'DELETE') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
      });
    }

    try {
      const data = await getWaitlistData();
      const originalLength = data.emails.length;

      data.emails = data.emails.filter(
        (entry) => entry.email !== email.toLowerCase()
      );

      if (data.emails.length === originalLength) {
        return res.status(404).json({
          success: false,
          message: 'Email not found',
        });
      }

      await saveWaitlistData(data);

      const sortedEmails = data.emails.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      return res.status(200).json({
        success: true,
        message: 'Email deleted',
        emails: sortedEmails,
      });
    } catch (error) {
      console.error('Delete error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to delete email',
      });
    }
  }

  // POST: Fetch waitlist data
  if (req.method === 'POST') {
    try {
      const data = await getWaitlistData();

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

  return res.status(405).json({
    success: false,
    message: 'Method not allowed',
  });
}
