$(document).ready(function(){

  //hamburger icon
  var click = 1;
  $("#show-me-menu").on("click", clickHamb);
  function clickHamb() {
      if ( click == 1 ) {
          $(this).addClass('is-active');
          $('.mobile-nav').slideToggle(300);
          click = 2;
      } else {
      $(this).removeClass('is-active');
      $('.mobile-nav').hide();
          click = 1;
      }
  }

  $('.mobile-nav-list > li > a').click(function(e){
		if($(this).closest("li").children("ul").length) {
			e.preventDefault();
			$(this).closest('li').find('ul').toggleClass('active');
		}
	});

  // Fake dynamics
  ////////////////

  $('.sidebar__nav__list').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active');
    //.closest('div.calculator__form__insurance').find('div.calculator__form__insurance__tabs').removeClass('active').eq($(this).index()).addClass('active');
  });

  //site config show/hide
  $('.sites__table__item').on('click', function(e) {
    if (e.target !== this){
      console.log('trigger');
      e.stopPropagation();
      return false
    }
    $('.site-config').addClass('active');
  })
  $('.sites__table__item__controls a[name=back]').on('click', function() {
    $('.site-config').removeClass('active');
  })
  $('.site-config__controls__close').on('click', function() {
    $('.site-config').removeClass('active');
  })
  $('.sites__table__item__controls a[name=delete]').on('click', function() {
    Dialog.show(document.querySelector('#dialog-delete'));
  })

  // filter loader
  $("#filterStatus i").click(function() {
    startLoading();
    setTimeout(finnishLoading, 2000);
  })

  function startLoading(){
    $('.sites__wrapper').addClass('loading');
  }

  function finnishLoading(){
    $('.sites__wrapper').removeClass('loading');
  }

  // Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

  // change theme-swticher
  $('.theme-swticher .switch').click(function(){
    if ( $('#switch').attr('checked') != 'checked' ){
      $('.dashboard').addClass('dark');
    } else {
      $('.dashboard').removeClass('dark');
    }

  });
	// smoth scroll
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
	});

  //This will initialize all Material modules
  var md = new Material();

});
