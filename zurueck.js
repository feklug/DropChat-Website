// Zurück-Knopf wie in der App (router.back()): kam man von einer Seite dieser Website, geht es im Verlauf
// zurück, sonst zur Startseite (z. B. wenn die Seite direkt aus der App oder per Link geöffnet wurde).
(function () {
  var knopf = document.querySelector('.zurueck');
  if (!knopf) return;
  knopf.addEventListener('click', function (e) {
    var vonDieserSeite = document.referrer.indexOf(location.origin) === 0;
    if (vonDieserSeite && history.length > 1) {
      e.preventDefault();
      history.back();
    }
  });
})();
