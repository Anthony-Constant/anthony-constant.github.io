if (window.VANTA) window.VANTA.NET({    el: "html",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3fddff,
    backgroundColor: 0x212529,
    points: 5.00,
    maxDistance: 15.00,
    spacing: 20.00
  })
  
  _strk.push(function() {
    setVanta()
    window.edit_page.Event.subscribe( "Page.beforeNewOneFadeIn", setVanta )
  })
