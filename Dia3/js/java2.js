
$(document).ready(function(){
var sample = 'digraph g {  a -> b [label="1",style=dashed];b -> c -> a -> d -> e -> d;a,c,d [style=bold];d [color=yellow];}';
var options = {
format: 'svg',
engine: 'circo'
// format: 'png-image-element'
}
var image = Viz(sample, options);
var main = document.getElementById('main');
main.innerHTML = image;
//main.appendChild(image);
// SVG
// PNG

});