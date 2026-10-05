$(function(){
var starttime= -1;
var endtime = -1;
var ontime = new Date();
var onTime = new Date(new Date(ontime).toLocaleDateString()).getTime();
if(onTime >= starttime && onTime < endtime){
  $("html *:not(:has(#gh)):not(#gh)").css("filter","grayscale(1)");
  $("html *:not(:has(#gh)):not(#gh)").css("-webkit-filter","grayscale(100%)");
  $("html *:not(:has(#gh)):not(#gh)").css("-moz-filter","grayscale(100%)");
  $("html *:not(:has(#gh)):not(#gh)").css("-ms-filter","grayscale(100%)");
  $("html *:not(:has(#gh)):not(#gh)").css("-o-filter","grayscale(100%)");
  $("html *:not(:has(#gh)):not(#gh)").css("filter","progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)");
  $(".global-header-box-front").parents().css("filter", "");
}
})
