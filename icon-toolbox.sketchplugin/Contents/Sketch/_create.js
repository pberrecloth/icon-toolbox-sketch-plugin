// Functions that create new objects and layers

function createNewArtboard(X, Y, width, height){
  var layer = MSArtboardGroup.alloc().initWithFrame_(NSMakeRect(X, Y, width, height));
  page.addLayers_([layer]);
  //doc.currentView().centerRect_(layer.rect());
}
function createNewBounds(X, Y, width, height){
  var rect = MSRectangleShape.alloc().initWithFrame_(NSMakeRect(X, Y, width, height));
  var layer = MSShapeGroup.shapeWithPath(rect);
  layer.style().addStylePartOfType(0);
  page.addLayers_([layer]);

  layer.style().removeAllStyleFills();

  var name = "bounds";
  [layer setName:name];

}
function createNewSlice(X, Y, width, height, selection){
  if(selection) {
    var parent=selection.parentGroup();
  } else {
    var parent = page;
  }

  var layer = MSSliceLayer.alloc().initWithFrame_(NSMakeRect(X, Y, width, height));
  //layer.AddExportFormat('svg'); //doesn't work
  parent.addLayers_([layer]);
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
