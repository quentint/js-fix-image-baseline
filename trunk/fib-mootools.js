/* Quentin T - http://toki-woki.net - Originally coded for Boks (http://toki-woki.net/p/Boks/) */
var fibDocumentBaseline;
function fixImageBaselines(selector) {
	window.addEvent('load', function() {
		var sbl=$(document.body).getStyle('line-height');
		if (Browser.Engine.trident) fibDocumentBaseline=16*($(document.body).getStyle('font-size').toInt()/100)*sbl;
		else fibDocumentBaseline=sbl.toInt();
		$$(selector).each(function(item) { new Element('div').wraps(item); });
		doFixImageBaselines(selector);
		window.addEvent('resize', function() {doFixImageBaselines(selector)});
	});
}
function doFixImageBaselines(selector) {
	setTimeout(function() {
		var d;
		$$(selector).each(function(item) {
			item.getParent().setStyles({'line-height': 0, 'height': fibDocumentBaseline*(Math.ceil(item.height/fibDocumentBaseline))+'px'});
		});
	}, 5);
}