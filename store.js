// Store-Links der App. Hier eintragen, sobald die App im Store ist – dann gilt es für die Startseite
// und für /app (den Link, den die Einladungen aus der App verschicken).
//   iOS:     'https://apps.apple.com/app/id<apple-id>'
//   Android: 'https://play.google.com/store/apps/details?id=com.feklug.dropchat'
// Solange beides null ist, zeigen beide Seiten „Bald verfügbar“.
var STORE = { ios: null, android: null };

// Nur auf /app: auf dem iPhone bzw. Android direkt in den passenden Store springen.
function storeWeiterleiten() {
  var ua = navigator.userAgent;
  var istIos = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var ziel = istIos ? STORE.ios : /Android/.test(ua) ? STORE.android : null;
  if (ziel) location.replace(ziel);
}

// Sobald es mindestens einen Store-Link gibt: statt „Bald verfügbar“ die Knöpfe zeigen.
function storeZeigen() {
  var eintraege = [['App Store', STORE.ios], ['Google Play', STORE.android]].filter(function (e) {
    return e[1];
  });
  if (eintraege.length === 0) return;
  document.getElementById('titel').textContent = 'DropChat laden';
  document.getElementById('text').textContent = 'Geld unter Freunden, direkt im Chat.';
  var knoepfe = document.getElementById('knoepfe');
  eintraege.forEach(function (e) {
    var a = document.createElement('a');
    a.href = e[1];
    a.textContent = e[0];
    knoepfe.appendChild(a);
  });
}
