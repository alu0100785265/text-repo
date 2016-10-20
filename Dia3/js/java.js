$(document).ready(function(){
		
		var data = {
series: [20, 35, 25, 25]
}
var options = {
 donut: true,
 donutWidth: 90,
 startAngle: 270,
 total: 100
}
new Chartist.Pie('.chart', data, options);
});