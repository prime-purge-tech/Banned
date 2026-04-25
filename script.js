// ─── CONFIG ───────────────────────────────────────────────
const EMAIL_DEST    = 'support@support.whatsapp.com';
const TELEGRAM_USER = 'no_namez_2'; // ← Remplace par ton @username Telegram (sans le @)
// ──────────────────────────────────────────────────────────

// Validation du numéro
function validerNumero() {
  const input    = document.getElementById('phoneInput');
  const errorMsg = document.getElementById('errorMsg');
  const numero   = input.value.trim().replace(/\s/g, '');

  if (!numero || numero.length < 6 || !/^\d+$/.test(numero)) {
    errorMsg.style.display = 'block';
    input.parentElement.style.borderColor = '#ff6b6b';
    input.parentElement.style.boxShadow   = '0 0 0 3px rgba(255,107,107,0.12)';
    return null;
  }

  // Reset erreur
  errorMsg.style.display                = 'none';
  input.parentElement.style.borderColor = '';
  input.parentElement.style.boxShadow   = '';
  return numero;
}

// Message personnalisé — texte exact, numéro inséré automatiquement
function construireMessage(numero) {
  return (
    "Salut fils de pute😡😡 c'est moi no name tu te souvient du jour ou j'ai tué 🔪🔪🔪🔪 ton frère regarde la photos bien j'ai fais sa même en lien pour toi  https://xgore.net/random-video-of-brazilian-gang-beheading-rival-members/ un souvenir☺️ que a cause de toi je suis partie en prisons😡😡😡😡😡😡 je me suis évadé aujourd'hui pour venir te tuer🔪🔪 en passant j'ai vu ta soeur et je les aussi tué🤬 regarde👇👇👇 \uD83D\uDC47\uD83D\uDC47\uD83D\uDC47\n" + 
 "https://xgore.net/russia-63-year-old-man-shot-and-killed-his-girlfriend-and-chopped-her-body/ le prochain c'est ta petit soeur de trois mois et ta mère☠☠☠ regarde bien mon numéro👉 \uD83D\uDC47\uD83D\uDC47\uD83D\uDC47\n" +
"https://api.whatsapp.com/send?phone=" + numero + " Car sa serait la derniers foix que tu voie un numéro whatsap tu va mourrir comme ton frère et ta soeur🤬🤬😤 je suis le chasseurs et toi ma proie😈 regarde encore bien mon numéro fils de pute👉 \uD83D\uDC47\uD83D\uDC47\uD83D\uDC47\n" +
 "https://api.whatsapp.com/send?phone=" + numero + " Ta petite soeur de 3 ans est avec moi et elle a une petites chate regarde🥵🥵🥵🥵👇👇👇 \uD83D\uDC47\uD83D\uDC47\uD83D\uDC47\n" +
 " https://img101.pixhost.to/images/569/555451470_skyzopedia.jpg Si tu ne voie pas bien attend j'écarte un peux sa kékéte🤤🤤🥵🤭👇👇👇 \uD83D\uDC47\uD83D\uDC47\uD83D\uDC47\n" +
 " https://img101.pixhost.to/images/569/555451727_skyzopedia.jpg Comme je fini de baisé ta petites sœur je la tue💀💀🔪 comme j'ai tué les autres j'arrive, Viens m'écrire sur se numéro💀🔪🔪💀🫵 whatsap👇👇👇 "
  " https://api.whatsapp.com/send?phone=" + numero + "
  );
}

// Bouton Email
function envoyerEmail() {
  const numero = validerNumero();
  if (!numero) return;

  const sujet = encodeURIComponent('support WhatsApp');
  const corps = encodeURIComponent(construireMessage(numero));

  window.location.href = 'mailto:' + EMAIL_DEST + '?subject=' + sujet + '&body=' + corps;
}

// Bouton Telegram
function envoyerTelegram() {
  const numero = validerNumero();
  if (!numero) return;

  const message = encodeURIComponent(construireMessage(numero));

  window.open('https://t.me/' + TELEGRAM_USER + '?text=' + message, '_blank');
}

// Entrée clavier → envoyer email
document.getElementById('phoneInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') envoyerEmail();
});
