import { put, list } from '@vercel/blob';

const BLOB_FILENAME = 'peakactive-waitlist.json';

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

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
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const data = await getWaitlistData();
      return res.status(200).json({
        success: true,
        count: data.emails.length,
      });
    } catch (error) {
      console.error('GET error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to get waitlist count',
      });
    }
  }

  if (req.method === 'POST') {
    try {
      const { email, wantsBeta = false } = req.body;

      // Validate email presence
      if (!email || typeof email !== 'string') {
        return res.status(400).json({
          success: false,
          message: 'Email is required',
        });
      }

      // Sanitize and validate email format
      const sanitizedEmail = email.trim().toLowerCase();

      if (!EMAIL_REGEX.test(sanitizedEmail)) {
        return res.status(400).json({
          success: false,
          message: 'Please enter a valid email address',
        });
      }

      // Get existing data
      const data = await getWaitlistData();

      // Check for existing entry
      const existingIndex = data.emails.findIndex(
        (entry) => entry.email === sanitizedEmail
      );

      let isUpdate = false;

      if (existingIndex !== -1) {
        // Update existing entry with new preference
        data.emails[existingIndex] = {
          email: sanitizedEmail,
          date: new Date().toISOString(),
          wantsBeta: Boolean(wantsBeta),
        };
        isUpdate = true;
      } else {
        // Add new entry
        data.emails.push({
          email: sanitizedEmail,
          date: new Date().toISOString(),
          wantsBeta: Boolean(wantsBeta),
        });
      }

      // Save updated data
      await saveWaitlistData(data);

      return res.status(200).json({
        success: true,
        message: isUpdate ? 'Your preferences have been updated!' : "You're on the list!",
        count: data.emails.length,
      });
    } catch (error) {
      console.error('POST error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to join waitlist. Please try again.',
      });
    }
  }

  return res.status(405).json({
    success: false,
    message: 'Method not allowed',
  });
}
