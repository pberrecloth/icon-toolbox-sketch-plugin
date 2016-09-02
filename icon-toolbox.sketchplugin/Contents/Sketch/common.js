//functions
function alert(title, message) {
  var app = [NSApplication sharedApplication];
  [app displayDialog:message withTitle:title];
}
function notify(message) {
  doc.showMessage(message);
}
function clone(layer){
  // Get layer properties
  var layerFrame = layer.frame();
  var layerWidth = layerFrame.width();
  var layerHeight = layerFrame.height();
  var layerX = layerFrame.x();
  var layerY = layerFrame.y();

  // Clone layer
  var clone = [layer duplicate];
  var copyFrame = [clone frame];
  [copyFrame setY:[layerFrame y]];

  log("cloned" + layer);
  return clone;
  //var clonedlayerY = layerY + layerHeight + offsetAmount;
  //layerFrame.setX(newlayerX);
  //layerFrame.setY(clonedlayerY);
}
function flattenCombinedShape(layer) {
       if(!layer.isKindOfClass(MSShapeGroup)) return;
       // `flatten` method available only for MSShapeGroup class instances.
      layer.flatten();
 }
function outline() {
       var outlineAction = doc.actionsController().actionWithID("MSConvertToOutlinesAction");
       if (outlineAction.validate()) {
           outlineAction.convertToOutlines(nil)
       }
 }

function slice() {
       var sliceAction = doc.actionsController().actionWithID("MSInsertSliceAction");
       if (sliceAction.validate()) {
           sliceAction.insertSlice(nil)
       }
 }
 function union(){
   // MSUnionAction will only union layers currently selected
   var unionAction = doc.actionsController().actionWithID("MSUnionAction");
   if (unionAction.validate()) {
       unionAction.booleanUnion(nil)
   }
 }
 function subtract(){
   // MSUnionAction will only union layers currently selected
   var subtractAction = doc.actionsController().actionWithID("MSSubtractAction");
   if (subtractAction.validate()) {
       subtractAction.booleanSubtract(nil)
   }
 }
function checkChannel(color){
    if (color == "000000") {
      return 'dark';
    } else if (color == "FFFFFF"){
      return 'light';
    } else {
      return null;
    }
}
function getBorderColor(layer){
   var border = layer.style().borders().firstObject();
   var borderColor = border.color().hexValue();
   log(borderColor);
   return borderColor;
 }
 function convertBordersToFills(layer){
    var bordered = layer.style().border().isEnabled();
    var filled = layer.style().fill().isEnabled();
    if (bordered && filled) {
      //clone layer, outline original, remove border on clone
      //clone(layer);
      //flattenCombinedShape(layer);
      //outline(layer);
      //toggleBorder(layerClone);
    } else if (bordered){
      flattenCombinedShape(layer);
      outline(layer);
    }
  }
function batchProcess(selection, functionName){
  page.selectLayers(selection);
  for(var i = 0; i < selection.length; i++){
    var layer = selection[i];
    // repeats given function for each layer in selection
    functionName(layer);
  }
}
