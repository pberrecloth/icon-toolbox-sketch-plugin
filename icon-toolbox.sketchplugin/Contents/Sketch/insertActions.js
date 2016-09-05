// Mostly functions used to create new objects and layers

function createNewArtboard(){
  var doc = context.document;
  var page = [doc currentPage];

  var layer = MSArtboardGroup.alloc().initWithFrame_(NSMakeRect(0, 0, 100, 100));
  page.addLayers_([layer])
  doc.currentView().centerRect_(layer.rect())
}
function createNewGroup(layers){
  //delete layers first
  page.removeLayer(layers);

  container = MSLayerGroup.new();
  container.addLayers(layers);
  container.resizeToFitChildrenWithOption(0);
  page.addLayers_([container]);
}
function createNewTextLayer(){
  // create new text layer
  var doc = context.document;
  var page = [doc currentPage];

  var layer = MSTextLayer.alloc().initWithFrame_(NSMakeRect(0, 0, 100, 100));
  layer.font = NSFont.systemFontOfSize_(36.0)
  layer.stringValue = "Hello World!"
  layer.adjustFrameToFit()
  page.addLayers_([layer])
  doc.currentView().centerRect_(layer.rect())
}
