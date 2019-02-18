$(document).ready(function(){
	$(window).scroll(function(){
	    if ($(this).scrollTop() > 360) {
	       $('header').addClass('fixedheader');
	       $('.header-animation').css('display', 'none' );
	       $('body').addClass('bodygradient');
	       $('.teaservideo').addClass('teaserclass');
	    }
	       else {
	       $('header').removeClass('fixedheader');
	       $('.header-animation').css('display', 'block');
	       $('body').removeClass('bodygradient');
	       $('.teaservideo').removeClass('teaserclass');
	    }
	});
});
//Youtube Config for homepage


  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('teaservideo', {
      height: '390',
      width: '640',
      videoId: 'CE2l3BntKXw',
      playerVars: {
        autoplay: 0, 
        autohide: 1, 
        modestbranding: 0, 
        rel: 0, 
        showinfo: 0, 
        controls: 0, 
        disablekb: 1, 
        enablejsapi: 0, 
        iv_load_policy: 3,
        mute : true,
        loop : 1,
        playsinline : 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();

    $(document).on("click", "#video-bg p", function(){
      toggleMute();
    });

    $(document).on("click", ".player-controls button .icon-cross", function(){
      toggleMute();
    });
  }

  function toggleMute(event){
    var vbg = $("#video-bg");

    if(player.isMuted()){
      player.unMute();
      vbg.addClass("playing");
    }else{
      player.mute();
      vbg.removeClass("playing");
    }
  }

  function setUpInfo(){
    $(".video-track").text(playlist[currentVid].track)
    $(".video-link").attr("href", playlist[currentVid].link).text(playlist[currentVid].label)
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    

    if(event.data == YT.PlayerState.ENDED){
      currentVid = Math.floor(Math.random() * playlist.length);

      player.loadVideoById({'videoId':  playlist[currentVid].id});
      setUpInfo();
    }

  }
  function stopVideo() {
    player.stopVideo();
  }

  $(document).ready(function(){
    setUpInfo();
  })