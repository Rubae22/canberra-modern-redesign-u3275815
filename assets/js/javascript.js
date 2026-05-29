/* =============================================================================
   CANBERRA MODERN — javascript.js
   ============================================================================= */

/* -----------------------------------------------------------------------------
   1. MOBILE NAVIGATION — DROPDOWN WITH DARK BACKDROP
   ----------------------------------------------------------------------------- */
(function () {
  var nav    = document.querySelector('.site-nav');
  var toggle = document.querySelector('.site-nav__toggle');
  var links  = document.querySelector('.site-nav__links');

  if (!toggle || !links) return;

  function openMenu() {
    links.classList.add('is-open');
    nav.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    links.classList.remove('is-open');
    nav.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    links.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
})();

/* -----------------------------------------------------------------------------
   2. HERO IMAGE CAROUSEL
   ----------------------------------------------------------------------------- */
(function () {
  var slidesContainer = document.querySelector('.hero__slides');
  var prevBtn         = document.querySelector('.hero__btn--prev');
  var nextBtn         = document.querySelector('.hero__btn--next');

  if (!slidesContainer) return;

  var slides  = slidesContainer.querySelectorAll('.hero__slide');
  var total   = slides.length;
  var current = 0;
  var timer   = null;

  function goTo(index) {
    current = (index + total) % total;
    slidesContainer.style.transform = 'translateX(-' + current * 100 + '%)';
  }

  function startAuto() {
    timer = setInterval(function () { goTo(current + 1); }, 5000);
  }

  function stopAuto() { clearInterval(timer); }

  if (prevBtn) prevBtn.addEventListener('click', function () { stopAuto(); goTo(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { stopAuto(); goTo(current + 1); startAuto(); });

  startAuto();
})();

/* -----------------------------------------------------------------------------
   3. MEDIA PAGE — TAB SWITCHING
   ----------------------------------------------------------------------------- */
(function () {
  var tabBtns   = document.querySelectorAll('.media-tab-btn');
  var tabPanels = document.querySelectorAll('.media-tab-panel');

  if (!tabBtns.length) return;

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');
      tabBtns.forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
      tabPanels.forEach(function (p) { p.setAttribute('aria-hidden', 'true'); });
      btn.setAttribute('aria-selected', 'true');
      var panel = document.getElementById(target);
      if (panel) panel.setAttribute('aria-hidden', 'false');
    });
  });
})();

/* -----------------------------------------------------------------------------
   4. TEXTAREA AUTO-RESIZE
   Grows textarea to fit content. Enter adds a new line (not submit).
   ----------------------------------------------------------------------------- */
(function () {
  function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  }

  document.querySelectorAll('textarea').forEach(function (ta) {
    ta.addEventListener('input', function () { autoResize(this); });
    autoResize(ta);
  });
})();

/* -----------------------------------------------------------------------------
   5. FORM SUBMISSION
   Enter key on input fields does NOT submit the form.
   Only clicking the Submit button submits.
   Enter inside a textarea inserts a new line as normal.
   ----------------------------------------------------------------------------- */
(function () {
  /* Block enter-to-submit on text/email/tel inputs only */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
      e.preventDefault();
    }
  });

  var regForm = document.getElementById('event-reg-form');
  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = 'event-register-success.html';
    });
  }

  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = 'contact-success.html';
    });
  }
})();
