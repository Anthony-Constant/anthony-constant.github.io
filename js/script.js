if (window.VANTA) window.VANTA.DOTS({
    el: "html",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    showLines: false,
    color: 0x3fddff,
    color2: 0xff8820,
    backgroundColor: 0x101820
  })
  
  _strk.push(function() {
    setVanta()
    window.edit_page.Event.subscribe( "Page.beforeNewOneFadeIn", setVanta )
  })
