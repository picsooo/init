// Relais serveur : le navigateur poste sur /api/contact (même domaine), Vercel transmet à FormSubmit.
// Évite les blocages réseau/navigateur mobiles vers formsubmit.co.
const TO = 'contact@initiativeacademy.dz';
module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.statusCode = 405; return res.end('{"success":false}'); }
  let data = req.body;
  if (typeof data === 'string') { try { data = JSON.parse(data); } catch (e) { data = null; } }
  if (!data || typeof data !== 'object' || !Object.keys(data).length) { res.statusCode = 400; return res.end('{"success":false}'); }
  if (data._hp) { res.setHeader('Content-Type','application/json'); return res.end('{"success":true}'); }
  try {
    const r = await fetch('https://formsubmit.co/ajax/' + TO, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json',
        Origin: 'https://initiativeacademy.dz', Referer: data.Page || 'https://initiativeacademy.dz/' },
      body: JSON.stringify(data)
    });
    const txt = await r.text(); let j = {}; try { j = JSON.parse(txt); } catch (e) {}
    const ok = r.ok && (j.success === true || j.success === 'true');
    res.statusCode = ok ? 200 : 502; res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ success: ok, message: j.message || '' }));
  } catch (e) {
    res.statusCode = 502; res.setHeader('Content-Type', 'application/json');
    return res.end('{"success":false}');
  }
};
