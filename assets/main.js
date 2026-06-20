/* Brand Up Consulting — interactions */
(function(){
  // Sticky header shadow
  var header = document.querySelector('.site-header');
  var onScroll = function(){
    if(window.scrollY > 8){ header.classList.add('scrolled'); }
    else { header.classList.remove('scrolled'); }
  };
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', function(){
      toggle.classList.toggle('open');
      links.classList.toggle('open');
      var exp = toggle.classList.contains('open');
      toggle.setAttribute('aria-expanded', exp);
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click', function(){
      var item = q.closest('.faq-item');
      var ans = item.querySelector('.faq-a');
      var open = item.classList.contains('open');
      item.classList.toggle('open');
      q.setAttribute('aria-expanded', !open);
      ans.style.maxHeight = open ? null : ans.scrollHeight + 'px';
    });
  });

  // Scroll reveal
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }

  // Contact form (front-end only, no backend wired)
  document.querySelectorAll('form[data-contact]').forEach(function(form){
    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      var ok = form.querySelector('.form-success');
      if(ok){ ok.classList.add('show'); }
      form.querySelectorAll('input,textarea,select').forEach(function(f){ f.value=''; });
    });
  });
})();
