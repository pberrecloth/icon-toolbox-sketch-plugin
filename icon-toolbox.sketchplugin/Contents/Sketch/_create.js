// Functions that create new objects and layers

function createNewArtboard(X, Y, width, height){
  var layer = MSArtboardGroup.alloc().initWithFrame_(NSMakeRect(X, Y, width, height));
  page.addLayers_([layer]);
  //doc.currentView().centerRect_(layer.rect());
}
function createNewBounds(X, Y, width, height, selection){
  if(selection) {
    // would be nice if the selection is an artboard then the bounds go inside it
    //if (selection.type == 'MSArtboardGroup') { var parent = selection; } else {  var parent = selection.parentGroup(); }
    var parent = selection.parentGroup();
  } else { var parent = page; }

  var rect = MSRectangleShape.alloc().initWithFrame_(NSMakeRect(X, Y, width, height));
  var layer = MSShapeGroup.shapeWithPath(rect);
  layer.style().addStylePartOfType(0);
  parent.addLayers_([layer]);

  layer.style().removeAllStyleFills();

  var name = "bounds";
  [layer setName:name];
  // TODO: Once created, move the bounds layer below the selected layer

}
function createNewSlice(X, Y, width, height, selection){
  if(selection) {
    var parent = selection.parentGroup();
  } else {
    var parent = page;
  }

  var layer = MSSliceLayer.alloc().initWithFrame_(NSMakeRect(X, Y, width, height));
  //layer.AddExportFormat('svg'); //doesn't work
  parent.addLayers_([layer]);
}
function createNewGroup(layers){
  container = MSLayerGroup.new();
  container.addLayers(layers);
  container.resizeToFitChildrenWithOption(0);
  page.addLayers_([container]);

  page.removeLayer(layers);

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
function createBoundsIndividually(){
  for(var i = 0; i < selection.count(); i++){
      var layer = selection[i];

      // Get layer properties
      var layerFrame = layer.frame();
      var layerWidth = layerFrame.width();
      var layerHeight = layerFrame.height();
      var layerX = layerFrame.x();
      var layerY = layerFrame.y();

      // Make slice around layer
      createNewBounds(layerX, layerY, layerWidth, layerHeight, layer);

      processCount++;
  }
}
