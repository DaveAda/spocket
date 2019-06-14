$(document).ready(function(){
	$(window).scroll(function(){
	    if ($(this).scrollTop() > 355) {
	       $('header').addClass('fixedheader textlogofixed');
         $('.textlogo').css({'color': '#fff', 'font-size': '60px', 'padding': '0 20px 0 0'});
         $('.animationlink').css('font-size', '15px');
         $('.headerlinks').css('padding-left', '15px');
	       $('.header-animation').css('display', 'none' );
         $('.textlogo').css('padding', '0 20px 0 10px');
	       $('body').addClass('bodygradient');
	       $('.teaservideo').addClass('teaserclass');
         $('.star-background').css('display', 'block');
	    }
	       else {
	       $('header').removeClass('fixedheader textlogofixed')
         $('.textlogo').css({'color': '#104568', 'font-size': '70px', 'padding': '0 20px'});;
	       $('.header-animation').css('display', 'block');
         $('.animationlink').css('font-size', '20px');
         $('.textlogo').css('padding', '0 20px 0 20px');
         $('.headerlinks').css('padding-left', '0');
	       $('body').removeClass('bodygradient');
	       $('.teaservideo').removeClass('teaserclass');
         $('.star-background').css('display', 'none');
	    }
	});
});

$(document).ready(function(){

  var $biotextbox = $('.biotextbox');
  var $colinbandphoto = $('#colinbandphoto');
  var $colinbiophoto = $('#colinbiophoto')
  var $colinbiotext = $('.colinbiotext');
  var $colinbuttons = $('#colinbuttons');
  var $gordonbandphoto = $('#gordonbandphoto');
  var $gordonbiophoto = $('#gordonbiophoto');
  var $gordonbiotext = $('.gordonbiotext');
  var $gordonbuttons = $('#gordonbuttons');
  var $kenbandphoto = $('#kenbandphoto');
  var $kenbiophoto = $('#kenbiophoto');
  var $kenbiotext = $('.kenbiotext');
  var $kenbuttons = $('#kenbuttons');
  var $lukebandphoto = $('#lukebandphoto');
  var $lukebuttons = $('#lukebuttons');
  var $lukebiophoto = $('#lukebiophoto');
  var $lukebiotext = $('.lukebiotext');
  var $mainbandphoto = $('#mainbandphoto');

  var $biotextimg = $('.biotextimg');
  var $biotextbioa = $('.biotextbioa');
  var $biotextbiob = $('.biotextbiob');
  var $biotextbioc = $('.biotextbioc');
  var $biotextbiod = $('.biotextbiod');
  var $biotextbioe = $('.biotextbioe');
  var $biotextbiof = $('.biotextbiof');
  var $biotextbiog = $('.biotextbiog');
  var $biotextbioh = $('.biotextbioh');
  var $biotextbioi = $('.biotextbioi');
  var $biotextbioj = $('.biotextbioj');
  var $biotextbiok = $('.biotextbiok');
  var $biotextbiol = $('.biotextbiol');
  var $biotextbiom = $('.biotextbiom');
  var $biotextbion = $('.biotextbion');
  var $biotextbioo = $('.biotextbioo');
  var $biotextbiop = $('.biotextbiop');
  var $biotextbioq = $('.biotextbioq');
  var $biotextbior = $('.biotextbior');
  var $biotextbios = $('.biotextbios');
  var $biotextbiot = $('.biotextbiot');
  var $biotextbioiu = $('.biotextbiou');

  $biotextimg.waypoint(function(){
    $biotextimg.toggleClass('biofader');
    },{offset:'60%'});
  $biotextbioa.waypoint(function(){
    $biotextbioa.toggleClass('biofader');
    },{offset:'80%'});
  $biotextbiob.waypoint(function(){
    $biotextbiob.toggleClass('biofader');
    },{offset:'79.5%'});
  $biotextbioc.waypoint(function(){
    $biotextbioc.toggleClass('biofader');
    },{offset:'79%'});
  $biotextbiod.waypoint(function(){
    $biotextbiod.toggleClass('biofader');
    },{offset:'78.5%'});
  $biotextbioe.waypoint(function(){
    $biotextbioe.toggleClass('biofader');
    },{offset:'78%'});
  $biotextbiof.waypoint(function(){
    $biotextbiof.toggleClass('biofader');
    },{offset:'77.5%'});
  $biotextbiog.waypoint(function(){
    $biotextbiog.toggleClass('biofader');
    },{offset:'77%'});
  $biotextbioh.waypoint(function(){
    $biotextbioh.toggleClass('biofader');
    },{offset:'76.5%'});
  $biotextbioi.waypoint(function(){
    $biotextbioi.toggleClass('biofader');
    },{offset:'76%'});
  $biotextbioj.waypoint(function(){
    $biotextbioj.toggleClass('biofader');
    },{offset:'75.5%'});
  $biotextbiok.waypoint(function(){
    $biotextbiok.toggleClass('biofader');
    },{offset:'75%'});
  $biotextbiol.waypoint(function(){
    $biotextbiol.toggleClass('biofader');
    },{offset:'74.5%'});
  $biotextbiom.waypoint(function(){
    $biotextbiom.toggleClass('biofader');
    },{offset:'74%'});
  $biotextbion.waypoint(function(){
    $biotextbion.toggleClass('biofader');
    },{offset:'73.5%'});
  $biotextbioo.waypoint(function(){
    $biotextbioo.toggleClass('biofader');
    },{offset:'73%'});
  $biotextbiop.waypoint(function(){
    $biotextbiop.toggleClass('biofader');
    },{offset:'72.5%'});
  $biotextbioq.waypoint(function(){
    $biotextbioq.toggleClass('biofader');
    },{offset:'72%'});
  $biotextbior.waypoint(function(){
    $biotextbior.toggleClass('biofader');
    },{offset:'71.5%'});
  $biotextbios.waypoint(function(){
    $biotextbios.toggleClass('biofader');
    },{offset:'71%'});
  $biotextbiot.waypoint(function(){
    $biotextbiot.toggleClass('biofader');
    },{offset:'70.5%'});
  $biotextbiou.waypoint(function(){
    $biotextbiou.toggleClass('biofader');
    },{offset:'70%'});

  $kenbiophoto.click(function(){
    $kenbiotext.toggle();
    $biotextbox.toggle();
    $mainbandphoto.toggle();
    $kenbandphoto.toggle();
    $lukebiophoto.toggle();
    $gordonbiophoto.toggle();
    $colinbiophoto.toggle();
    $kenbuttons.toggle();
  });
  $lukebiophoto.click(function(){
    $lukebiotext.toggle();
    $biotextbox.toggle();
    $mainbandphoto.toggle();
    $lukebandphoto.toggle();
    $kenbiophoto.toggle();
    $gordonbiophoto.toggle();
    $colinbiophoto.toggle();
    $lukebuttons.toggle();
  });
  $gordonbiophoto.click(function(){
    $gordonbiotext.toggle();
    $biotextbox.toggle();
    $mainbandphoto.toggle();
    $gordonbandphoto.toggle();
    $lukebiophoto.toggle();
    $kenbiophoto.toggle();
    $colinbiophoto.toggle();
    $gordonbuttons.toggle();
  });
  $colinbiophoto.click(function(){
    $colinbiotext.toggle();
    $biotextbox.toggle();
    $mainbandphoto.toggle();
    $colinbandphoto.toggle();
    $lukebiophoto.toggle();
    $kenbiophoto.toggle();
    $gordonbiophoto.toggle();
    $colinbuttons.toggle();
  });
});
