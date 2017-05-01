(function () {
  var width = window.screen.width
  var styleNode = document.createElement('style')
  styleNode.innerHTML = 'html{font-size:' + width / 37.5 + 'px}'
  document.head.appendChild(styleNode)
})()
