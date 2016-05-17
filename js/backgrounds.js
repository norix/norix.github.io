$(document).ready(function(){
var header = $('body.landing');

var backgrounds = new Array(
    'url("#{$baseurl}/landscape-640617.jpg")'
  , 'url("#{$baseurl}/rome-1066035.jpg")'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    console.log(header.css)
    header.css("@include vendor('background-image',  ('linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5))', backgrounds[current]))");
}
setInterval(nextBackground, 1000);

header.css('background-image', backgrounds[0]);
});
