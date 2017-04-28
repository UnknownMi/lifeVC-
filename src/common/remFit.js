(function () {
  var width = window.screen.width
  console.log(width)
  var styleNode = document.createElement('style')
  styleNode.innerHTML = 'html{font-size:' + width / 31.25 + 'px}'
  document.head.appendChild(styleNode)
})()
