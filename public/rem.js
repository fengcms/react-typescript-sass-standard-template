!(function () {
  function isMobile () {
    return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) != null
  }
  function htmlFontSize () {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var width = w > 750 ? 750 : w
    var fz = ~~(width * 100000 / 37.5) / 10000
    var html = document.getElementsByTagName('html')[0]
    html.style.cssText = 'font-size: ' + fz + 'px'
    var realfz = ~~(+window.getComputedStyle(html).fontSize.replace('px', '') * 10000) / 10000
    if (fz !== realfz) {
      html.style.cssText = 'font-size: ' + fz * (fz / realfz) + 'px'
    }
  }
  var parts = location.pathname.replace(/(^\/|\/$)/g, '').split('/')
  if (isMobile()) {
    if (parts[0] !== 'm') {
      location.href = ['', 'm'].concat(parts).join('/')
    }
    // rem for mobile
    window.addEventListener(
      'resize',
      (function () {
        htmlFontSize()
        return arguments.callee
      })(),
      false
    )
  } else {
    if (parts[0] === 'm') {
      location.href = '/' + parts.slice(1).join('/')
    }
  }
})()
