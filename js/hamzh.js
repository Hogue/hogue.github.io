/* ----------------- Start JS Document ----------------- */
var $ = jQuery.noConflict();
$(function($) {
'use strict';

//-------------- toggle top Search --------------//

  $(document).ready(function(){
    $(".fa-search").on("click",function(){
        $("#search_toggle_top").toggle();
    });
});

// breaking_news_slider
  $(window).load(function () {
    $(".breaking_news_slider").show();
});

$('.breaking_news_slider').bxSlider({
  mode: 'vertical',
  slideMargin: 5,
  auto: true
});

// tweet_slid
  $(window).load(function () {
    $(".tweet_slid").show();
});

$('.tweet_slid').bxSlider({
  mode: 'vertical',
  slideMargin: 5,
  auto: true,
  controls: false,
});



$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();
    
});


$('.vcard_slider').bxSlider({
  mode: 'vertical',
  slideMargin: 5,
  nextText: '<i class="fa fa-arrow-down"></i>',
  prevText: '<i class="fa fa-arrow-up"></i>',
  hideControlOnEnd: true
});


/* ◄------ SET BACKGROUND IMAGE  -------------------------------► */
  jQuery('.img-section').each( function() {
    var section = jQuery(this);
    var bg = jQuery(this).attr("data-bg-img");
    section.css('background-image', 'url('+ bg +')');
  });

    jQuery('.progress-section').each( function() {
    var section = jQuery(this);
    var progress = jQuery(this).attr("data-progress");
    section.css('width', ''+ progress +'');
  });
//-----------------------------------------------------------------

// hmztop
  jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 1) {
      jQuery('.hmztop').css({bottom:"14px"});
    } else {
      jQuery('.hmztop').css({bottom:"-100px"});
    }
  });
  jQuery('.hmztop').on("click",function(){
    jQuery('html, body').animate({scrollTop: '0px'}, 800);
    return false;
  });

// Share Toggle
$(document).ready(function(){
  $('.share_toggle').on("click",function(){
  $(this).next().toggleClass('share_active');
  });
});

// big-slid-post
        $(window).load(function () {
          $("#big-slid-post").show();
      });

    	$(document).ready(function() {
     
      $("#big-slid-post").owlCarousel({

          autoPlay: true, //Set AutoPlay to 3 seconds

          navigation : true, // Show next and prev buttons
          slideSpeed : 1000,
          paginationSpeed : 1000,
          singleItem:true
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
      });
     
    });

$(document).ready(function() {
 
  $("#featured_post").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      navigation : true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });
 
});


$(document).ready(function() {
 
  $("#featured_cat_post").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      navigation : true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });
 
});

// big-slid-post
      $(window).load(function () {
          $("#post-slid-post").show();
      });

      $(document).ready(function() {
     
      $("#post-slid-post").owlCarousel({

          autoPlay: true, //Set AutoPlay to 3 seconds

          navigation : true, // Show next and prev buttons
          slideSpeed : 1000,
          paginationSpeed : 1000,
          singleItem:true
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
      });
     
    });

//  Related Posts
$(window).load(function () {
    $("#post_related_block").show();
});
$(document).ready(function() {
  $("#post_related_block").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation : true, // Show next and prev buttons
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

  /* Dribbble */
$(document).ready(function() {
  jQuery.jribbble.getShotsByPlayerId('ashmawisami', function (playerShots) {
    var html = [];
    jQuery.each(playerShots.shots, function (i, shot) {
      html.push('<li><a target="_blank" href="' + shot.url + '"><img src="' + shot.image_url + '" alt="' + shot.title + '"></a></li>');      
    });
    jQuery('.slid_widget_dribbble').html(html.join(''));
    jQuery(".slid_widget_dribbble").bxSlider({easing: "linear",tickerHover: true,slideWidth: 1000,adaptiveHeightSpeed: 1500,moveSlides: 1,maxSlides: 1,auto: true});
  },{page: 1, per_page: 4});

});

// masonry layout
$(window).load(function(){
  $( function() {
    
    $('.grid_layout').isotope({
      itemSelector: '.grid_post',
        masonry: {
        gutter: 20
        }
    });
  });
});


// masonry layout
$(window).load(function(){
  $( function() {
    
    $('.portfolio_layout').isotope({
      itemSelector: '.portfolio_post',
        masonry: {
        gutter: 20
        }
    });
  });
});




/*!
 * animsition v3.5.2
 * http://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
!function(a){"use strict";var b="animsition",c={init:function(d){d=a.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"},d);var e=c.supportCheck.call(this,d);if(!e)return"console"in window||(window.console={},window.console.log=function(a){return a}),console.log("Animsition does not support this browser."),c.destroy.call(this);var f=c.optionCheck.call(this,d);return f&&c.addOverlay.call(this,d),d.loading&&c.addLoading.call(this,d),this.each(function(){var e=this,f=a(this),g=a(window),h=f.data(b);h||(d=a.extend({},d),f.data(b,{options:d}),g.on("load."+b+" pageshow."+b,function(){c.pageIn.call(e)}),g.on("unload."+b,function(){}),a(d.linkElement).on("click."+b,function(b){b.preventDefault();var d=a(this),f=d.attr("href");2===b.which||b.metaKey||b.shiftKey||-1!==navigator.platform.toUpperCase().indexOf("WIN")&&b.ctrlKey?window.open(f,"_blank"):c.pageOut.call(e,d,f)}))})},addOverlay:function(b){a(b.overlayParentElement).prepend('<div class="'+b.overlayClass+'"></div>')},addLoading:function(b){a(b.loadingParentElement).append('<div class="'+b.loadingClass+'"></div>')},removeLoading:function(){var c=a(this),d=c.data(b).options,e=a(d.loadingParentElement).children("."+d.loadingClass);e.fadeOut().remove()},supportCheck:function(b){var c=a(this),d=b.unSupportCss,e=d.length,f=!1;0===e&&(f=!0);for(var g=0;e>g;g++)if("string"==typeof c.css(d[g])){f=!0;break}return f},optionCheck:function(b){var c,d=a(this);return c=b.overlay||d.data("animsition-overlay")?!0:!1},animationCheck:function(c,d,e){var f=a(this),g=f.data(b).options,h=typeof c,i=!d&&"number"===h,j=d&&"string"===h&&c.length>0;return i||j?c=c:d&&e?c=g.inClass:!d&&e?c=g.inDuration:d&&!e?c=g.outClass:d||e||(c=g.outDuration),c},pageIn:function(){var d=this,e=a(this),f=e.data(b).options,g=e.data("animsition-in-duration"),h=e.data("animsition-in"),i=c.animationCheck.call(d,g,!1,!0),j=c.animationCheck.call(d,h,!0,!0),k=c.optionCheck.call(d,f);f.loading&&c.removeLoading.call(d),k?c.pageInOverlay.call(d,j,i):c.pageInBasic.call(d,j,i)},pageInBasic:function(b,c){var d=a(this);d.trigger("animsition.start").css({"animation-duration":c/1e3+"s"}).addClass(b).animateCallback(function(){d.removeClass(b).css({opacity:1}).trigger("animsition.end")})},pageInOverlay:function(c,d){var e=a(this),f=e.data(b).options;e.trigger("animsition.start").css({opacity:1}),a(f.overlayParentElement).children("."+f.overlayClass).css({"animation-duration":d/1e3+"s"}).addClass(c).animateCallback(function(){e.trigger("animsition.end")})},pageOut:function(d,e){var f=this,g=a(this),h=g.data(b).options,i=d.data("animsition-out"),j=g.data("animsition-out"),k=d.data("animsition-out-duration"),l=g.data("animsition-out-duration"),m=i?i:j,n=k?k:l,o=c.animationCheck.call(f,m,!0,!1),p=c.animationCheck.call(f,n,!1,!1),q=c.optionCheck.call(f,h);q?c.pageOutOverlay.call(f,o,p,e):c.pageOutBasic.call(f,o,p,e)},pageOutBasic:function(b,c,d){var e=a(this);e.css({"animation-duration":c/1e3+"s"}).addClass(b).animateCallback(function(){location.href=d})},pageOutOverlay:function(d,e,f){var g=this,h=a(this),i=h.data(b).options,j=h.data("animsition-in"),k=c.animationCheck.call(g,j,!0,!0);a(i.overlayParentElement).children("."+i.overlayClass).css({"animation-duration":e/1e3+"s"}).removeClass(k).addClass(d).animateCallback(function(){location.href=f})},destroy:function(){return this.each(function(){var c=a(this);a(window).unbind("."+b),c.css({opacity:1}).removeData(b)})}};a.fn.animateCallback=function(b){var c="animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";return this.each(function(){a(this).bind(c,function(){return a(this).unbind(c),b.call(this)})})},a.fn.animsition=function(d){return c[d]?c[d].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof d&&d?void a.error("Method "+d+" does not exist on jQuery."+b):c.init.apply(this,arguments)}}(jQuery);


$(document).ready(function() {
  
  $(".animsition").animsition({
  
    inClass               :   'fade-in',
    outClass              :   'fade-out',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :   false,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });
});


/**
 * Lightbox v2.7.1
 * by Lokesh Dhakar - http://lokeshdhakar.com/projects/lightbox2/
 *
 * @license http://creativecommons.org/licenses/by/2.5/
 * - Free for use in both personal and commercial projects
 * - Attribution requires leaving author name, author link, and the license info intact
 */
(function(){var a=jQuery,b=function(){function a(){this.fadeDuration=500,this.fitImagesInViewport=!0,this.resizeDuration=700,this.positionFromTop=50,this.showImageNumberLabel=!0,this.alwaysShowNavOnTouchDevices=!1,this.wrapAround=!1}return a.prototype.albumLabel=function(a,b){return"Image "+a+" of "+b},a}(),c=function(){function b(a){this.options=a,this.album=[],this.currentImageIndex=void 0,this.init()}return b.prototype.init=function(){this.enable(),this.build()},b.prototype.enable=function(){var b=this;a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(c){return b.start(a(c.currentTarget)),!1})},b.prototype.build=function(){var b=this;a("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(a("body")),this.$lightbox=a("#lightbox"),this.$overlay=a("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.containerTopPadding=parseInt(this.$container.css("padding-top"),10),this.containerRightPadding=parseInt(this.$container.css("padding-right"),10),this.containerBottomPadding=parseInt(this.$container.css("padding-bottom"),10),this.containerLeftPadding=parseInt(this.$container.css("padding-left"),10),this.$overlay.hide().on("click",function(){return b.end(),!1}),this.$lightbox.hide().on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$outerContainer.on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return b.changeImage(0===b.currentImageIndex?b.album.length-1:b.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return b.changeImage(b.currentImageIndex===b.album.length-1?0:b.currentImageIndex+1),!1}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return b.end(),!1})},b.prototype.start=function(b){function c(a){d.album.push({link:a.attr("href"),title:a.attr("data-title")||a.attr("title")})}var d=this,e=a(window);e.on("resize",a.proxy(this.sizeOverlay,this)),a("select, object, embed").css({visibility:"hidden"}),this.sizeOverlay(),this.album=[];var f,g=0,h=b.attr("data-lightbox");if(h){f=a(b.prop("tagName")+'[data-lightbox="'+h+'"]');for(var i=0;i<f.length;i=++i)c(a(f[i])),f[i]===b[0]&&(g=i)}else if("lightbox"===b.attr("rel"))c(b);else{f=a(b.prop("tagName")+'[rel="'+b.attr("rel")+'"]');for(var j=0;j<f.length;j=++j)c(a(f[j])),f[j]===b[0]&&(g=j)}var k=e.scrollTop()+this.options.positionFromTop,l=e.scrollLeft();this.$lightbox.css({top:k+"px",left:l+"px"}).fadeIn(this.options.fadeDuration),this.changeImage(g)},b.prototype.changeImage=function(b){var c=this;this.disableKeyboardNav();var d=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration),a(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var e=new Image;e.onload=function(){var f,g,h,i,j,k,l;d.attr("src",c.album[b].link),f=a(e),d.width(e.width),d.height(e.height),c.options.fitImagesInViewport&&(l=a(window).width(),k=a(window).height(),j=l-c.containerLeftPadding-c.containerRightPadding-20,i=k-c.containerTopPadding-c.containerBottomPadding-120,(e.width>j||e.height>i)&&(e.width/j>e.height/i?(h=j,g=parseInt(e.height/(e.width/h),10),d.width(h),d.height(g)):(g=i,h=parseInt(e.width/(e.height/g),10),d.width(h),d.height(g)))),c.sizeContainer(d.width(),d.height())},e.src=this.album[b].link,this.currentImageIndex=b},b.prototype.sizeOverlay=function(){this.$overlay.width(a(window).width()).height(a(document).height())},b.prototype.sizeContainer=function(a,b){function c(){d.$lightbox.find(".lb-dataContainer").width(g),d.$lightbox.find(".lb-prevLink").height(h),d.$lightbox.find(".lb-nextLink").height(h),d.showImage()}var d=this,e=this.$outerContainer.outerWidth(),f=this.$outerContainer.outerHeight(),g=a+this.containerLeftPadding+this.containerRightPadding,h=b+this.containerTopPadding+this.containerBottomPadding;e!==g||f!==h?this.$outerContainer.animate({width:g,height:h},this.options.resizeDuration,"swing",function(){c()}):c()},b.prototype.showImage=function(){this.$lightbox.find(".lb-loader").hide(),this.$lightbox.find(".lb-image").fadeIn("slow"),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},b.prototype.updateNav=function(){var a=!1;try{document.createEvent("TouchEvent"),a=this.options.alwaysShowNavOnTouchDevices?!0:!1}catch(b){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(a&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),a&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),a&&this.$lightbox.find(".lb-next").css("opacity","1"))))},b.prototype.updateDetails=function(){var b=this;"undefined"!=typeof this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title&&this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click",function(){location.href=a(this).attr("href")}),this.album.length>1&&this.options.showImageNumberLabel?this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex+1,this.album.length)).fadeIn("fast"):this.$lightbox.find(".lb-number").hide(),this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return b.sizeOverlay()})},b.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var a=new Image;a.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){var b=new Image;b.src=this.album[this.currentImageIndex-1].link}},b.prototype.enableKeyboardNav=function(){a(document).on("keyup.keyboard",a.proxy(this.keyboardAction,this))},b.prototype.disableKeyboardNav=function(){a(document).off(".keyboard")},b.prototype.keyboardAction=function(a){var b=27,c=37,d=39,e=a.keyCode,f=String.fromCharCode(e).toLowerCase();e===b||f.match(/x|o|c/)?this.end():"p"===f||e===c?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):("n"===f||e===d)&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},b.prototype.end=function(){this.disableKeyboardNav(),a(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),a("select, object, embed").css({visibility:"visible"})},b}();a(function(){{var a=new b;new c(a)}})}).call(this);
//# sourceMappingURL=lightbox.min.map




/**
 * jquery.dlmenu.js v1.0.1
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {

  'use strict';

  // global
  var Modernizr = window.Modernizr, $body = $( 'body' );

  $.DLMenu = function( options, element ) {
    this.$el = $( element );
    this._init( options );
  };

  // the options
  $.DLMenu.defaults = {
    // classes for the animation effects
    animationClasses : { classin : 'dl-animate-in-1', classout : 'dl-animate-out-1' },
    // callback: click a link that has a sub menu
    // el is the link element (li); name is the level name
    onLevelClick : function( el, name ) { return false; },
    // callback: click a link that does not have a sub menu
    // el is the link element (li); ev is the event obj
    onLinkClick : function( el, ev ) { return false; }
  };

  $.DLMenu.prototype = {
    _init : function( options ) {

      // options
      this.options = $.extend( true, {}, $.DLMenu.defaults, options );
      // cache some elements and initialize some variables
      this._config();
      
      var animEndEventNames = {
          'WebkitAnimation' : 'webkitAnimationEnd',
          'OAnimation' : 'oAnimationEnd',
          'msAnimation' : 'MSAnimationEnd',
          'animation' : 'animationend'
        },
        transEndEventNames = {
          'WebkitTransition' : 'webkitTransitionEnd',
          'MozTransition' : 'transitionend',
          'OTransition' : 'oTransitionEnd',
          'msTransition' : 'MSTransitionEnd',
          'transition' : 'transitionend'
        };
      // animation end event name
      this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ] + '.dlmenu';
      // transition end event name
      this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ] + '.dlmenu',
      // support for css animations and css transitions
      this.supportAnimations = Modernizr.cssanimations,
      this.supportTransitions = Modernizr.csstransitions;

      this._initEvents();

    },
    _config : function() {
      this.open = false;
      this.$trigger = this.$el.children( '.dl-trigger' );
      this.$menu = this.$el.children( 'ul.dl-menu' );
      this.$menuitems = this.$menu.find( 'li:not(.dl-back)' );
      this.$el.find( 'ul.dl-submenu' ).prepend( '<li class="dl-back"><a href="#">back</a></li>' );
      this.$back = this.$menu.find( 'li.dl-back' );
    },
    _initEvents : function() {

      var self = this;

      this.$trigger.on( 'click.dlmenu', function() {
        
        if( self.open ) {
          self._closeMenu();
        } 
        else {
          self._openMenu();
        }
        return false;

      } );

      this.$menuitems.on( 'click.dlmenu', function( event ) {
        
        event.stopPropagation();

        var $item = $(this),
          $submenu = $item.children( 'ul.dl-submenu' );

        if( $submenu.length > 0 ) {

          var $flyin = $submenu.clone().css( 'opacity', 0 ).insertAfter( self.$menu ),
            onAnimationEndFn = function() {
              self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classout ).addClass( 'dl-subview' );
              $item.addClass( 'dl-subviewopen' ).parents( '.dl-subviewopen:first' ).removeClass( 'dl-subviewopen' ).addClass( 'dl-subview' );
              $flyin.remove();
            };

          setTimeout( function() {
            $flyin.addClass( self.options.animationClasses.classin );
            self.$menu.addClass( self.options.animationClasses.classout );
            if( self.supportAnimations ) {
              self.$menu.on( self.animEndEventName, onAnimationEndFn );
            }
            else {
              onAnimationEndFn.call();
            }

            self.options.onLevelClick( $item, $item.children( 'a:first' ).text() );
          } );

          return false;

        }
        else {
          self.options.onLinkClick( $item, event );
        }

      } );

      this.$back.on( 'click.dlmenu', function( event ) {
        
        var $this = $( this ),
          $submenu = $this.parents( 'ul.dl-submenu:first' ),
          $item = $submenu.parent(),

          $flyin = $submenu.clone().insertAfter( self.$menu );

        var onAnimationEndFn = function() {
          self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classin );
          $flyin.remove();
        };

        setTimeout( function() {
          $flyin.addClass( self.options.animationClasses.classout );
          self.$menu.addClass( self.options.animationClasses.classin );
          if( self.supportAnimations ) {
            self.$menu.on( self.animEndEventName, onAnimationEndFn );
          }
          else {
            onAnimationEndFn.call();
          }

          $item.removeClass( 'dl-subviewopen' );
          
          var $subview = $this.parents( '.dl-subview:first' );
          if( $subview.is( 'li' ) ) {
            $subview.addClass( 'dl-subviewopen' );
          }
          $subview.removeClass( 'dl-subview' );
        } );

        return false;

      } );
      
    },
    closeMenu : function() {
      if( this.open ) {
        this._closeMenu();
      }
    },
    _closeMenu : function() {
      var self = this,
        onTransitionEndFn = function() {
          self.$menu.off( self.transEndEventName );
          self._resetMenu();
        };
      
      this.$menu.removeClass( 'dl-menuopen' );
      this.$menu.addClass( 'dl-menu-toggle' );
      this.$trigger.removeClass( 'dl-active' );
      
      if( this.supportTransitions ) {
        this.$menu.on( this.transEndEventName, onTransitionEndFn );
      }
      else {
        onTransitionEndFn.call();
      }

      this.open = false;
    },
    openMenu : function() {
      if( !this.open ) {
        this._openMenu();
      }
    },
    _openMenu : function() {
      var self = this;
      // clicking somewhere else makes the menu close
      $body.off( 'click' ).on( 'click.dlmenu', function() {
        self._closeMenu() ;
      } );
      this.$menu.addClass( 'dl-menuopen dl-menu-toggle' ).on( this.transEndEventName, function() {
        $( this ).removeClass( 'dl-menu-toggle' );
      } );
      this.$trigger.addClass( 'dl-active' );
      this.open = true;
    },
    // resets the menu to its original state (first level of options)
    _resetMenu : function() {
      this.$menu.removeClass( 'dl-subview' );
      this.$menuitems.removeClass( 'dl-subview dl-subviewopen' );
    }
  };

  var logError = function( message ) {
    if ( window.console ) {
      window.console.error( message );
    }
  };

  $.fn.dlmenu = function( options ) {
    if ( typeof options === 'string' ) {
      var args = Array.prototype.slice.call( arguments, 1 );
      this.each(function() {
        var instance = $.data( this, 'dlmenu' );
        if ( !instance ) {
          logError( "cannot call methods on dlmenu prior to initialization; " +
          "attempted to call method '" + options + "'" );
          return;
        }
        if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
          logError( "no such method '" + options + "' for dlmenu instance" );
          return;
        }
        instance[ options ].apply( instance, args );
      });
    } 
    else {
      this.each(function() {  
        var instance = $.data( this, 'dlmenu' );
        if ( instance ) {
          instance._init();
        }
        else {
          instance = $.data( this, 'dlmenu', new $.DLMenu( options, this ) );
        }
      });
    }
    return this;
  };

    $(function() {
      $( '#dl-menu' ).dlmenu({
        animationClasses : { classin : 'dl-animate-in-5', classout : 'dl-animate-out-5' }
      });
    });


} )( jQuery, window );


});