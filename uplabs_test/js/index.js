/*predefined states*/
var current_tab = "about";

$(document).ready(function(){
  M.AutoInit();
  var height =$( window ).height();
  // alert(height);
  $("."+current_tab).addClass("active1");
  $("."+current_tab+"_div").addClass("animated");
  $("."+current_tab+"_div").addClass("zoomInRight");
  $("."+current_tab+"_div").removeClass("hide");
  $(".full_height").css("height",height);
});

function change_content(tab){
  current_tab = tab;
  $(".about").removeClass("active1");
  $(".work").removeClass("active1");
  $(".labs").removeClass("active1");
  $(".contact").removeClass("active1");
  $("."+current_tab).addClass("active1");

  $(".about_div").addClass("hide");
  $(".work_div").addClass("hide");
  $(".labs_div").addClass("hide");
  $(".contact_div").addClass("hide");
  // $(".about_div").removeClass("zoomInRight");
  // $(".work_div").removeClass("zoomInRight");
  // $(".labs_div").removeClass("zoomInRight");
  // $(".contact_div").removeClass("zoomInRight");
  $("."+current_tab+"_div").addClass("zoomInRight");
  $("."+current_tab+"_div").removeClass("hide");
  setTimeout(function(){
        $("."+current_tab+"_div").removeClass("zoomInRight");
      }, 1000);
}