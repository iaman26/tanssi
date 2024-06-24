wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
  });
  wow.init();
  
  let text = document.getElementById('copytext').innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  
  if ($(window).width() <= 500) {
    let text = $('section.calc .calc__block .block__value p').html();
  
    text = text.substring(0, 20);
    console.log(text);
  
    text = text + '...';
    $('section.calc .calc__block .block__value p').html(text);
  }
  $(window).on('resize', function () {
    let text = $('section.calc .calc__block .block__value p').html();
  
    text = text.substring(0, 20);
    console.log(text);
  
    text = text + '...';
    $('section.calc .calc__block .block__value p').html(text);
  });
  
  $('header .mobile-btn').click(function () {
    $('header .header__links').toggleClass('active');
    $('header .mobile-btn').toggleClass('active');
  });
  
  $('header .header__links .links__link').click(function () {
    $('header .header__links').removeClass('active');
    $('header .mobile-btn').removeClass('active');
  });
  
  $(document).ready(function () {
    $("a[href*='#']").on('click', function (e) {
      var anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr('href')).offset().top,
          },
          777
        );
      e.preventDefault();
      return false;
    });
  });
  
  if ($('section.faq').length > 0) {
    $('section.faq .faq__list .list__block').click(function () {
      $(this).toggleClass('active');
  
      $(this).find('.block__content').slideToggle();
    });
  }
  