(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth-reveal on scroll (intersection observer)
  if ('IntersectionObserver' in window) {
    var style = document.createElement('style');
    style.textContent = '.reveal{opacity:0;transform:translateY(20px);transition:opacity .5s ease,transform .5s ease}.reveal.visible{opacity:1;transform:none}';
    document.head.appendChild(style);
    var els = document.querySelectorAll('.card, .feature-item, .review-card, .quote-block');
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { el.classList.add('reveal'); obs.observe(el); });
  }
})();
