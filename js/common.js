"use strict";function wrapcheck(){$(window).width()<751?0==$(".mobile-content").html().length&&($(".main-window").prependTo(".mobile-content"),$(".callback-link").insertBefore(".doc-mail-link")):($(".main-window").prependTo(".desctop-content"),$(".callback-link").insertAfter(".doc-mail-link"))}function catalogopen(){$(".catalog-main-body").css("display","block").css("z-index","1000").addClass("animated fadeInLeft active-catalog-body")}function catalogclose(){$(".catalog-main-body").removeClass("fadeInLeft").addClass("fadeOutLeft mobile-hide"),$(".catalog-main-title-mobile").css("margin-right","0px"),setTimeout((function(){$(".catalog-main-body").removeClass("animated fadeOutLeft").css("display","none")}),500),$(".catalog-main-body").removeClass("active-catalog-body")}function adressopen(){$(".adress-main-body").css("display","block").addClass("animated fadeInRight active-adress-body")}function adressclose(){$(".adress-main-title-mobile").css({background:"linear-gradient(to top, #2e3094, #3539a9)","margin-left":"0px"}),$(".adress-main-body").removeClass("fadeInRight").addClass("fadeOutRight mobile-hide"),setTimeout((function(){$(".adress-main-body").removeClass("animated fadeOutRight").css("display","none")}),500),$(".adress-main-body").removeClass("active-adress-body")}function close_accordion_section_quest(){$(".accordion-quest-title").removeClass("accordion-quest-active"),$(".accordion-shadow").removeClass("accordion-shadow-active"),$(".accordion-section-quest .accordion-section-content").slideUp(300).removeClass("open"),$(".accordion-quest-title").find(".read").html("Читать")}function initialize(){var e=new google.maps.LatLng(55.758032,37.509154),a={zoom:15,center:e},o=new google.maps.Map(document.getElementById("map"),a),s=new google.maps.InfoWindow({content:'<div id="content" style="text-align:center;"><h4 id="firstHeading" class="firstHeading" style="text-align:center;padding-left:15px;">ТРЦ "Алатырь", ул. Малышева 5</h4></div>'}),i=new google.maps.Marker({position:e,map:o,title:'ТРЦ "Алатырь", ул. Малышева 5',icon:{url:"images/map-marker.png",anchor:new google.maps.Point(16,16)}});google.maps.event.addListener(i,"mouseover",(function(){$(".gm-style-iw").next("div").remove(),s.open(o,i)})),google.maps.event.addListener(i,"mouseout",(function(){s.close(o,i)})),google.maps.event.addListener(s,"domready",(function(){$(".gm-style-iw").next("div").hide()}))}window.console||(window.console={}),window.console.memory||(window.console.memory=function(){}),window.console.debug||(window.console.debug=function(){}),window.console.error||(window.console.error=function(){}),window.console.info||(window.console.info=function(){}),window.console.log||(window.console.log=function(){}),Modernizr.flexbox||function(){var e=$("#page-wrapper"),a=$("#page-body");$(window).on("load resize",(function(){a.height("auto"),a.height()+$("#header").outerHeight()+$("#footer").outerHeight()<$(window).height()?a.height($(window).height()-$("#header").outerHeight()-$("#footer").outerHeight()):e.height("auto")}))}(),10!=ieDetector.ieVersion&&11!=ieDetector.ieVersion||function(){var e=$("#page-wrapper"),a=$("#page-body"),o=function(){a.addClass("flex-none").height()+$("#header").outerHeight()+$("#footer").outerHeight()<$(window).height()?(e.height($(window).height()),a.removeClass("flex-none")):e.height("auto")};o(),$(window).on("load resize",o)}(),$((function(){$("input[placeholder], textarea[placeholder]").placeholder(),$("#file_upload").uploadify({swf:"js/uploadify.swf",uploader:"uploadify.php"})})),$(window).resize((function(){wrapcheck(),$(window).width()>751&&($(".catalog-main-body").hasClass("active-catalog-body")&&($(".overlay").fadeToggle(),$(".catalog-main-body").css("display","block").removeClass("active-catalog-body")),$(".adress-main-body").hasClass("active-adress-body")&&($(".overlay").fadeToggle(),$(".adress-main-body").css("display","block").removeClass("active-adress-body")),$(".adress-main-body").hasClass("mobile-hide")&&$(this).css("display","block"),$(".catalog-main-body").hasClass("mobile-hide")&&$(this).css("display","block")),$(window).width()<751&&($(".adress-main-body").hasClass("mobile-hide")&&$(this).css("display","none"),$(".catalog-main-body").hasClass("mobile-hide")&&$(this).css("display","none"))})),$((function(){function e(){$(".adress-title").removeClass("adress-title-active"),$(".adress  .accordion-adress-content").slideUp(300).removeClass("open")}$(".reset-filter").click((function(){return $(".search-name form").find("input").val(""),!1})),$(".show-filter-option a").click((function(){return $(this).toggleClass("active"),!1})),$(".inputselect").selectric({maxHeight:200,disableOnMobile:!1}),$(".carousel").slick({dots:!0,autoplay:!0,autoplaySpeed:15e3,variableWidth:!0}),$(".salon-slider").slick({dots:!0,autoplay:!0,autoplaySpeed:15e3,variableWidth:!0}),$(".special-offer-slider").slick({infinite:!1,autoplay:!0,autoplaySpeed:15e3,variableWidth:!0}),wrapcheck(),$(".overlay").click((function(){$(this).fadeToggle(),$(".catalog-main-body").hasClass("animated")&&catalogclose(),$(".adress-main-body").hasClass("animated")&&($(".adress-main-title-mobile").css({"margin-left":"0px",background:"linear-gradient(to top, #2e3094, #3539a9)"}),$(".fa-angle-double-right").css("transform","rotatez(0deg)").removeClass("cross-active-left"),$(".adress-main-body").removeClass("fadeInRight").addClass("fadeOutRight"),setTimeout((function(){$(".adress-main-body").removeClass("animated fadeOutRight").css("display","none")}),500)),$(".adress-main-title-mobile").find("img").hasClass("cross-active-right")&&($(".catalog").css("z-index","100"),$(".adress-main-title-mobile img").css("transform","rotatez(180deg)").removeClass("cross-active-right")),$(".navbar-toggle").hasClass("open-menu")&&($(".navbar-toggle").removeClass("open-menu"),$(".navbar-nav ul li").slideUp("fast"),$(".navbar-nav ul").css("z-index","99"),setTimeout((function(){$("nav").css("z-index","99")}),500))})),$(".search").click((function(e){e.preventDefault(),$(".search-form-header").fadeToggle("fast")})),$(".search-form-header img").click((function(){$(".search-form-header").fadeToggle("fast")})),$(".navbar-toggle").click((function(){$(this).hasClass("open-menu")?($(".overlay").fadeToggle(),$(this).removeClass("open-menu"),$(".navbar-nav ul li").slideUp("fast"),$(".navbar-nav ul").css("z-index","99"),setTimeout((function(){$("nav").css("z-index","99")}),350)):($("nav").css("z-index","515"),$(".overlay").fadeToggle(),$(this).addClass("open-menu"),$(".navbar-nav ul").css("z-index","515"),$(".navbar-nav ul li").slideDown("fast"))})),$(".catalog-main-title-mobile").click((function(e){e.preventDefault(),$("html, body").animate({scrollTop:$("#catalog").offset().top},1e3),$(".overlay").fadeToggle(),$(".fa-angle-double-right").hasClass("cross-active-left")?$(".fa-angle-double-right").removeClass("cross-active-left"):$(".fa-angle-double-right").addClass("cross-active-left"),$(".catalog-main-body").hasClass("animated")||catalogopen()})),$(".catalog-main-title-mobile-body").click((function(){$(".overlay").fadeToggle(),catalogclose()})),$(".adress-main-title-mobile-body").click((function(){adressclose()})),$(".adress-main-title-mobile").click((function(e){e.preventDefault(),$("html, body").animate({scrollTop:$("#catalog").offset().top},1e3),$(".fa-angle-double-left").hasClass("cross-active-right")?$(".fa-angle-double-left").removeClass("cross-active-right"):$(".fa-angle-double-left").addClass("cross-active-right"),$(".adress-main-body").hasClass("animated")?adressclose():adressopen()})),$(".adress-title").click((function(a){if($(".adress-main-body").hasClass("adress-main-body-salons"))return!1;var o=$(this).attr("href");$(a.target).is(".adress-title-active")?e():(e(),$(this).addClass("adress-title-active"),$(".adress "+o).slideDown(300).addClass("open")),a.preventDefault()})),$(".accordion-quest-title").click((function(e){var a=$(this).attr("href");$(this).hasClass("accordion-quest-active")?close_accordion_section_quest():(close_accordion_section_quest(),$(this).find(".read").html("Закрыть"),$(this).addClass("accordion-quest-active"),$(this).parent().addClass("accordion-shadow-active"),$(".accordion-section-quest "+a).slideDown(300).addClass("open")),e.preventDefault()})),$("tbody tr[data-href]").addClass("clickable").click((function(){window.location=$(this).attr("data-href")})).find("a").hover((function(){$(this).parents("tr").unbind("click")}),(function(){$(this).parents("tr").click((function(){window.location=$(this).attr("data-href")}))})),$(".test-form-style").validate({rules:{testmail:{required:!0,email:!0}},messages:{testmail:{required:"Вы не подтвердили Е-mail",email:"Вы не подтвердили Е-mail"}}})}));