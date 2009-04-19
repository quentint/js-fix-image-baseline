/* Quentin T - http://toki-woki.net - Originally coded for Boks (http://toki-woki.net/p/Boks/) */
function fixImageBaselines(selector) {
  window.addEvent('load', function() {
    var sbl=$(document.body).getStyle('line-height');
    var bl=sbl.toInt();
    if (sbl.indexOf('pt')!=-1) bl=sbl.toFloat()*(20/14.94);	// IE!
    $$(selector).each(function(item) {
      if (item.height%bl!=0) {
        var d=new Element('div');
        d.setStyles({
          'padding-bottom':(bl*(Math.ceil(item.height/bl))-item.height)+'px',
          'background': 'transparent url('+item.src+') no-repeat 0 0',
          'width':item.width,
          'height':item.height
        });
        d.replaces(item);
      }
    });
  });
}