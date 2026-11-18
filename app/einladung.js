// Persönlicher QR-Link: Nutzer entscheidet zwischen App öffnen und Installieren.
(function () {
  var params = new URLSearchParams(location.search);
  var code = params.get('c');
  var name = params.get('username');
  if (!code || !name) return;
  document.getElementById('titel').textContent = 'Mit ' + name + ' verbinden';
  document.getElementById('text').textContent = 'Öffne den Chat in DropChat. Falls du die App erst installierst, öffne anschließend diesen Link erneut oder scanne den QR-Code noch einmal.';
  var button = document.createElement('a');
  button.textContent = 'In DropChat öffnen';
  button.href = 'dropchat://freund?c=' + encodeURIComponent(code);
  document.getElementById('knoepfe').prepend(button);
  if (!STORE.ios && !STORE.android) {
    var hinweis = document.createElement('p');
    hinweis.textContent = 'Noch keine App? DropChat ist bald im App Store und bei Google Play verfügbar.';
    document.querySelector('main').appendChild(hinweis);
  }
})();
