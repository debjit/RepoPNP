function SearchBGOverlay(){if(document.getElementById("BG_overlay")===null&&document.getElementById("BG_overlay_asresults")===null){$("body").append("<div id='BG_overlay'></div>");$("#BG_overlay").on("click",function(){$("#BG_overlay").remove()})}if(tb_detectMacXFF()){$("#BG_overlay").addClass("BG_overlayMacFFBGHack")}else{$("#BG_overlay").addClass("BG_overlay")}}function RemoveBGOverlay(){$("#BG_overlay").remove()}function tb_detectMacXFF(){var a=navigator.userAgent.toLowerCase();if(a.indexOf("mac")!=-1&&a.indexOf("firefox")!=-1){return true
}return false}$(".header-component").on("click",function(a){if(!($(a.target).is("li a")||$(a.target).is("li i"))){if(document.getElementById("BG_overlay")!=null){$("#BG_overlay").remove()}if(document.getElementById("BG_overlay_asresults")!=null){$("#BG_overlay_asresults").remove()}}});$("#gab-container").on("click",function(a){if(document.getElementById("BG_overlay")!=null){$("#BG_overlay").remove()}if(document.getElementById("BG_overlay_asresults")!=null){$("#BG_overlay_asresults").remove()}});$("#scopeOptionDiv").on("click",function(){if(!$("#scopeOptionDiv").hasClass("open")){SearchBGOverlay()
}else{RemoveBGOverlay()}});$(".desktop-nav a.dropdown-toggle").on("click",function(){if(!$(".desktop-nav li").hasClass("open")){SearchBGOverlay()}else{RemoveBGOverlay()}});