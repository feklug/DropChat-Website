// Store-Links der App. Hier eintragen, sobald die App im Store ist – dann gilt es für die Startseite
// und für /app (den Link, den die Einladungen aus der App verschicken).
//   iOS:     'https://apps.apple.com/app/id<apple-id>'
//   Android: 'https://play.google.com/store/apps/details?id=com.feklug.dropchat'
// Solange beides null ist, zeigen beide Seiten „Bald verfügbar“; fehlt nur einer, steht dort „bald“.
var STORE = { ios: 'https://apps.apple.com/app/id6799634479', android: null };

// Nur auf /app: auf dem iPhone bzw. Android direkt in den passenden Store springen.
function storeWeiterleiten() {
  var ua = navigator.userAgent;
  var istIos = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var ziel = istIos ? STORE.ios : /Android/.test(ua) ? STORE.android : null;
  if (ziel) location.replace(ziel);
}

// Sobald es mindestens einen Store-Link gibt: statt „Bald verfügbar“ die Knöpfe zeigen,
// ein Store ohne Link erscheint als ausgegrauter Knopf mit „bald“.
function storeZeigen() {
  if (!STORE.ios && !STORE.android) return;
  document.getElementById('titel').textContent = 'DropChat laden';
  document.getElementById('text').textContent = 'Geld unter Freunden, direkt im Chat.';
  var knoepfe = document.getElementById('knoepfe');
  [['Laden im App Store', 'iPhone – bald verfügbar', STORE.ios],
   ['Jetzt bei Google Play', 'Android – bald verfügbar', STORE.android]].forEach(function (e) {
    var k = document.createElement(e[2] ? 'a' : 'span');
    if (e[2]) k.href = e[2];
    else k.className = 'bald';
    k.textContent = e[2] ? e[0] : e[1];
    knoepfe.appendChild(k);
  });
}
