var sliceSelection = function(context) {

  // Global variables and functions
  initContext(context)
  @import '_includes.js';

  // get what's selected
  var selection = context.selection;

  // check something is selected
  if (selection.count() == 0){
    notify("Please select something.");
  } else {
    // before batch process begins
    var processCount = 0;

    // if something is selected loop through
    for(var i = 0; i < selection.count(); i++){
        var layer = selection[i];

        // Get layer properties
        var layerFrame = layer.frame();
        var layerWidth = layerFrame.width();
        var layerHeight = layerFrame.height();
        var layerX = layerFrame.x();
        var layerY = layerFrame.y();

        // Make slice around layer
        createNewSlice(layerX, layerY, layerWidth, layerHeight, layer);

        processCount++;
    }
    // Done!
    notify("Sliced " + processCount + " layers");
  }
};
