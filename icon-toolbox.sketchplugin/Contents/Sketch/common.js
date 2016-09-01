//functions
function alert(title, message) {
  var app = [NSApplication sharedApplication];
  [app displayDialog:message withTitle:title];
}
function notify(message) {
  doc.showMessage(message);
}
function cloneArtwork(objectSelection){
  // Get object properties
  var object = objectSelection;
  var objectFrame = object.frame();
  var objectWidth = objectFrame.width();
  var objectHeight = objectFrame.height();
  var objectX = objectFrame.x();
  var objectY = objectFrame.y();

  // Set the offset position
  var offsetMargin = 100;
  var offsetY = objectHeight + offsetMargin;

  // Clone the object and offset
  var clone = [object duplicate];
  var copyFrame = [clone frame];
  [copyFrame setY:[objectFrame y] + offsetY];
  //log(clone);
  return clone;
  //var clonedobjectY = objectY + objectHeight + offsetAmount;
  //objectFrame.setX(newobjectX);
  //objectFrame.setY(clonedobjectY);
}
function flattenCombinedShape(layer) {
       if(!layer.isKindOfClass(MSShapeGroup)) return;
       // `flatten` method available only for MSShapeGroup class instances.
      layer.flatten();
 }
function outlines() {
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

function checkChannel(){
  var color = getFillColor(artwork);
    if (color == "000000") {
      return 'dark';
    } else if (color == "FFFFFF"){
      return 'light';
    } else {
      alert("Icon Tools says:\nYour artwork contains mixed colors! \n ", "\nAll layers must be black or white in color. \n \n Your artwork will still be flattened, but non-black or white layers will be ignored.");
      return 'mixed';
    }
}

 function getFillColor(layer){
   var fill = layer.style().fills().firstObject();
   var fillColor = fill.color().hexValue();
   return fillColor;
 }
 function getBorderColor(layer){
   var border = layer.style().borders().firstObject();
   var borderColor = border.color().hexValue();
   log(borderColor);
   return borderColor;
 }

function batchProcess(selection, functionName){
  page.selectLayers(selection);
  for(var i = 0; i < selection.length; i++){
    var layer = selection[i];
    // repeats given function for each layer in selection
    functionName(layer);
  }
}
