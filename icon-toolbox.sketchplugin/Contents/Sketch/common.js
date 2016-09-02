//functions
function alert(title, message) {
  var app = [NSApplication sharedApplication];
  [app displayDialog:message withTitle:title];
}
function notify(message) {
  doc.showMessage(message);
}
function clone(layer){
  // Clone layer
  var clone = [layer duplicate];
  var copyFrame = [clone frame];

  log("cloned " + layer + " as " + clone);
  return clone;

}
function cloneAndOffset(layer){
  // Get layer properties
  var layerFrame = layer.frame();
  var layerWidth = layerFrame.width();
  var layerHeight = layerFrame.height();
  var layerX = layerFrame.x();
  var layerY = layerFrame.y();

  // Clone layer
  var clone = [layer duplicate];
  var copyFrame = [clone frame];
  //[copyFrame setY:[layerFrame y]];

  log("cloned " + layer + " as " + clone);
  return clone;
  //var clonedlayerY = layerY + layerHeight + offsetAmount;
  //layerFrame.setX(newlayerX);
  //layerFrame.setY(clonedlayerY);
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
function batchProcess(selection, functionName){
  page.selectLayers(selection);
  for(var i = 0; i < selection.length; i++){
    var layer = selection[i];
    // repeats given function for each layer in selection
    functionName(layer);
  }
}
function groupLayersByChannel(channel){
  // group layers into dark and light channels
  if (channel == 'dark'){
    darkChannel.push(layer);
  } else if (channel == 'light'){
    lightChannel.push(layer);
  } else {
    alert("Icon Toolbox says:\nYour artwork contains mixed colors!", "All layers must be black or white in color. Your artwork will still be flattened, but non-black or white layers will be ignored.");
  }
}
