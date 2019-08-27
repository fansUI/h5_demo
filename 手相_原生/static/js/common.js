(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 600) {
          clientWidth = 600;
        } 
        docEl.style.fontSize = 16 * (clientWidth / 320) + 'px';
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);


  function tabChange(a){
    a == 1 && (location.href = './index.html')
    a == 2 && (location.href = 'http://y1y.me')
    a == 3 && (location.href = './upload.html')
    a == 4 && (location.href = './gg.html')
    a == 5 && (location.href = './my.html')
  }