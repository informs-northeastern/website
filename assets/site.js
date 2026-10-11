// INFORMS at Northeastern: the page's three small behaviours. Content editors never need this file.

// 0. Finished events hide themselves: an event disappears from the list the day after its date (or its
//    data-end date, for events that run several days), so the page never shows an old event as upcoming.
(function () {
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var items = document.querySelectorAll('.cal li[data-date]');
  for (var i = 0; i < items.length; i++) {
    var p = (items[i].getAttribute('data-end') || items[i].getAttribute('data-date')).split('-');
    if (new Date(+p[0], +p[1] - 1, +p[2]) < today) items[i].hidden = true;
  }
})();

// 1. Next-event line in the opening: reads data-date on the event list; hides itself when no dated event is ahead.
(function () {
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var items = document.querySelectorAll('.cal li[data-date]');
  for (var i = 0; i < items.length; i++) {
    var p = items[i].getAttribute('data-date').split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    var days = Math.round((d - today) / 86400000);
    if (days >= 0) {
      document.getElementById('next-name').textContent = items[i].querySelector('h3').firstChild.textContent.trim();
      document.getElementById('next-when').textContent = days === 0 ? 'today' : days === 1 ? 'tomorrow' : 'in ' + days + ' days';
      document.getElementById('next-event').hidden = false;
      break;
    }
  }
})();

// 2. Board layout: splits the cards into even, centred rows (9 cards = 3+3+3, 10 = 4+3+3) at the column limit set in
//    site.css for each screen size (--max). Add or remove officers freely; nothing to change here.
(function () {
  function balance() {
    document.querySelectorAll('.people').forEach(function (grid) {
      grid.querySelectorAll('.row-break').forEach(function (b) { b.remove(); });
      var cards = grid.querySelectorAll(':scope > .person'), n = cards.length;
      var max = parseInt(getComputedStyle(grid).getPropertyValue('--max'), 10) || 4;
      if (n <= max) return;
      var rows = Math.ceil(n / max), base = Math.floor(n / rows), extra = n % rows, at = 0;
      for (var r = 0; r < rows - 1; r++) {
        at += base + (r < extra ? 1 : 0);
        var br = document.createElement('span'); br.className = 'row-break'; br.setAttribute('aria-hidden', 'true');
        cards[at - 1].after(br);
      }
    });
  }
  balance();
  var t; addEventListener('resize', function () { clearTimeout(t); t = setTimeout(balance, 120); });
})();

// 3. Motion: plays the opening drawing once (again on hover or tap) and the awards line once it scrolls into view.
//    Skipped for visitors who ask for reduced motion. Safe to remove.
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var fig = document.querySelector('.route'), busy = false;
  function play() {
    if (busy) return; busy = true;
    fig.classList.remove('play'); void fig.offsetWidth; fig.classList.add('play');
    setTimeout(function () { busy = false; }, 4200);
  }
  if (fig) { play(); fig.addEventListener('mouseenter', play); fig.addEventListener('click', play); }
  var years = document.querySelector('.years');
  if (!years || !('IntersectionObserver' in window)) return;
  var lis = years.querySelectorAll('li');
  for (var k = 0; k < lis.length; k++) lis[k].style.setProperty('--k', lis.length - 1 - k);
  document.documentElement.classList.add('anim');
  var io = new IntersectionObserver(function (es) {
    if (es[0].isIntersecting) { years.classList.add('in'); io.disconnect(); }
  }, { threshold: 0.4 });
  io.observe(years);
})();
