export default async function handler(req, res) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_KEY;
  if (!url || !key) return res.status(500).json({ error: 'Supabase not configured' });

  try {
    // Get all unique sessions with their first message time
    const response = await fetch(
      `${url}/rest/v1/chats?select=session_id,created_at&order=created_at.asc`,
      { headers: { 'apikey': key, 'Authorization': `Bearer ${key}` } }
    );
    const data = await response.json();

    // Group by session
    const sessions = {};
    data.forEach(row => {
      if (!sessions[row.session_id]) {
        sessions[row.session_id] = { session_id: row.session_id, started: row.created_at, messages: 0 };
      }
      sessions[row.session_id].messages++;
    });

    return res.status(200).json(Object.values(sessions).reverse());
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
