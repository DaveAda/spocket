$(document).ready(function(){

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

  var $body = $('body');
  var $headerfixed = $('.header-fixed');
  var $headerlinks = $('.header-links');
  var $headerorange = $('.header-orange');
  var $headertoggle = $('.header-toggle');
  var $starbackground = $('.star-background');
  var $rivetbackground = $('.rivetbackground');
  var $skybackground = $('.skybackground')
  var $teaserfixed = $('.teaser-fixed');
  var $teaservideo = $('.teaservideo');


  $headertoggle.waypoint(function(){
    $headerlinks.toggle();
    $headerfixed.toggle();
    $body.toggleClass('skybackground');
    $skybackground.toggle();
    $starbackground.toggle();
    $teaservideo.toggleClass('teaser-fixed');
  })
  /*$headerorange.waypoint(function(){
    $headerlinks.toggleClass('fixedheader');
    $headerlinkslogo.toggleClass('orange-header-logo');
    $teaservideo.toggleClass('fixedvideo');
    $starbackground.toggle();
    $body.toggleClass('bodygradient');
    $body.toggleClass('bodyship');
  });*/

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

});
