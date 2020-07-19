(function (doc, win) {
  var dpr = window.devicePixelRatio || 1
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 40 * (clientWidth / 375) + 'px'
    // 设置data-dpr属性，留作的css hack之用
    docEl.setAttribute('data-dpr', dpr)
    var delObj = document.getElementById('loading')
    if (delObj) {
      document.getElementById('loading').remove()
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
