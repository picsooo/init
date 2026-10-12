// Relais : le navigateur poste sur /api/contact (même domaine) -> service d'envoi ia-formulaires (Netlify + Resend)
module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store'); res.setHeader('Content-Type', 'application/json');
  if (req.method !== 'POST') { res.statusCode = 405; return res.end('{"success":false}'); }
  let data = req.body;
  if (typeof data === 'string') { try { data = JSON.parse(data); } catch (e) { data = null; } }
  if (!data || typeof data !== 'object') { res.statusCode = 400; return res.end('{"success":false}'); }
  try {
    const r = await fetch('https://ia-formulaires.netlify.app/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    const t = await r.text(); res.statusCode = r.status; return res.end(t);
  } catch (e) { res.statusCode = 502; return res.end('{"success":false}'); }
};
