
$(document).ready(function(){
		
var sample = 'A->C: Uno \n B->C: Dos';
var diagram = Diagram.parse(sample);
diagram.drawSVG('diagram', {
theme: 'hand'
// o 'simple'
});
var sample = 'D-->>E: Línea \n B->D: azucar';
var diagram1 = Diagram.parse(sample);
diagram1.drawSVG('diagram1', {
theme: 'simple'
});
});