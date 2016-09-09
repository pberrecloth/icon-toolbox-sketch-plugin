// Functions that create new objects and layers

function createNewArtboard(X, Y, size){
  var layer = MSArtboardGroup.alloc().initWithFrame_(NSMakeRect(X, Y, size, size));
  page.addLayers_([layer]);
  doc.currentView().centerRect_(layer.rect());
}
function createNewSlice(X, Y, size){
  var layer = MSSliceLayer.alloc().initWithFrame_(NSMakeRect(X, Y, size, size));
  page.addLayers_([layer]);
}
function createNewGroup(layers){
  //delete layers first (quite buggy)
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
