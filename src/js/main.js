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
  $('.sidebar__nav__list').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active');
    //.closest('div.calculator__form__insurance').find('div.calculator__form__insurance__tabs').removeClass('active').eq($(this).index()).addClass('active');
  });

  $('.sites__table__item').on('click', function() {

    $('.site-config').fadeIn();

  })

  // Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// smoth scroll
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
	});

  // This will initialize all Material modules
  // var md = new Material();

});
