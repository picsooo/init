<?php
// Envoi des formulaires du site vers contact@initiativeacademy.dz (mail() du serveur cPanel)
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo '{"success":false}'; exit; }

$TO   = 'contact@initiativeacademy.dz';
$FROM = 'site@initiativeacademy.dz';

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) $data = $_POST;
if (!is_array($data) || !$data) { http_response_code(400); echo '{"success":false}'; exit; }

// Anti-spam : champ piège rempli = robot
if (!empty($data['_hp'])) { echo '{"success":true}'; exit; }

$clean = function ($s) { return trim(str_replace(["\r", "\n"], ' ', strip_tags((string)$s))); };
$subject = $clean($data['_subject'] ?? 'Nouvelle demande — site initiativeacademy.dz');
$reply   = filter_var($data['_replyto'] ?? '', FILTER_VALIDATE_EMAIL);

$rows = '';
$text = '';
foreach ($data as $k => $v) {
  if ($k === '' || $k[0] === '_') continue;
  $k = htmlspecialchars($clean($k), ENT_QUOTES, 'UTF-8');
  $vv = htmlspecialchars(trim(strip_tags((string)$v)), ENT_QUOTES, 'UTF-8');
  $rows .= '<tr><td style="padding:8px 12px;background:#f2f6fb;font-weight:bold;vertical-align:top;white-space:nowrap">'.$k.'</td><td style="padding:8px 12px">'.nl2br($vv).'</td></tr>';
  $text .= $k.' : '.trim(strip_tags((string)$v))."\n";
}
if ($rows === '') { http_response_code(400); echo '{"success":false}'; exit; }

$html = '<div style="font-family:Arial,sans-serif;font-size:14px;color:#06122b"><h2 style="color:#239bd2;margin:0 0 12px">'.htmlspecialchars($subject, ENT_QUOTES, 'UTF-8').'</h2><table style="border-collapse:collapse;border:1px solid #dde5ef">'.$rows.'</table><p style="color:#5f6b82;font-size:12px;margin-top:14px">Reçu le '.date('d/m/Y à H:i').' via le site initiativeacademy.dz</p></div>';

$b = md5(uniqid('', true));
$headers  = "From: Site Initiative Academy <$FROM>\r\n";
if ($reply) $headers .= "Reply-To: $reply\r\n";
$headers .= "MIME-Version: 1.0\r\nContent-Type: multipart/alternative; boundary=\"$b\"\r\n";
$body  = "--$b\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n$text\r\n";
$body .= "--$b\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n$html\r\n--$b--";

$ok = mail($TO, '=?UTF-8?B?'.base64_encode($subject).'?=', $body, $headers, '-f'.$FROM);
echo json_encode(['success' => (bool)$ok]);
