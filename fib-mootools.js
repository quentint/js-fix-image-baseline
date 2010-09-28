/* Quentin T - http://toki-woki.net - Originally coded for Boks (http://toki-woki.net/p/Boks/) */
var fibDocumentBaseline;
function fixImageBaselines(selector) {
	window.addEvent('load', function() {
		var sbl=$(document.body).getStyle('line-height');
		if (Browser.Engine.trident) fibDocumentBaseline=16*($(document.body).getStyle('font-size').toInt()/100)*sbl;
		else fibDocumentBaseline=sbl.toInt();
		$$(selector).each(function(item) {
			var d=new Element('div');
			d.setStyle('line-height', 0);
			d.wraps(item);
		});
		doFixImageBaselines(selector);
		window.addEvent('resize', function() {doFixImageBaselines(selector)});
	});
}
function doFixImageBaselines(selector) {
	setTimeout(function() {
		$$(selector).each(function(item) {
			fibSetHolderHeight(item.getParent());
		});
	}, Browser.Platform.ipod ? 100 : 5);
}