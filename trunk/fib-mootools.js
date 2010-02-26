/* Quentin T - http://toki-woki.net - Originally coded for Boks (http://toki-woki.net/p/Boks/) */
function fixImageBaselines(selector) {
	window.addEvent('load', function() {
		var sbl=$(document.body).getStyle('line-height');
		var bl=sbl.toInt();
		if (sbl.indexOf('pt')!=-1) bl=sbl.toFloat()*(20/14.94);	// IE!
		$$(selector).each(function(item) {
			var d=new Element('div');
			d.setStyles({'height': bl*(Math.ceil(item.height/bl))+'px', 'line-height':0});
			d.wraps(item);
		});
	});
}