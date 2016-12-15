$(document).ready(function(){

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

  // Fake dynamics
  $('.sidebar__nav__list li').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active');
    //.closest('div.calculator__form__insurance').find('div.calculator__form__insurance__tabs').removeClass('active').eq($(this).index()).addClass('active');
  });


  // This will initialize all Material modules
  // var md = new Material();

});
