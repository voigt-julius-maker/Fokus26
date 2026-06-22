export default async function handler(req, res) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_KEY;
  const { id } = req.query;
  if (!url || !key || !id) return res.status(400).json({ error: 'Missing params' });

  try {
    const response = await fetch(
      `${url}/rest/v1/chats?session_id=eq.${id}&order=created_at.asc`,
      { headers: { 'apikey': key, 'Authorization': `Bearer ${key}` } }
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
