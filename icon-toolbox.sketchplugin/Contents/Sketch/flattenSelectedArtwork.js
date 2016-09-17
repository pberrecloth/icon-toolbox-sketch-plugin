var flattenSelectedArtwork = function(context) {

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

    // layers that will be processed separately
    var darkChannel = [];
    var lightChannel = [];
    var outlinedLayers = [];

    // if something is selected loop through
    for(var i = 0; i < selection.count(); i++){
        var layer = selection[i];

        // get layer properties
        var fill = layer.style().fills().firstObject();
        var fillColor = fill.color().hexValue();
        var filled = fill.isEnabled();
        //var fillChannel = checkChannel(fillColor);
        var border = layer.style().borders().firstObject();
        if (border){
          var bordered = border.isEnabled();
          var borderColor = border.color().hexValue();
        } else {
          var bordered = false;
        }

        if (bordered && filled){
          //log('processing borderd && filled: ' + layer);
            //outline(layer);
            if (fillColor == borderColor){
            //1. in resulting layerGroup, set child layers to Union
            //2. flatten the combined shape again - results in one shape
            }
        } else {
          if (bordered){
            //log('processing bordered: ' + layer);
              var channel = checkChannel(borderColor);
              outline(layer);
              //addLayerToChannelBatch(channel);
              outlinedLayers.push(layer);
          } else if (filled){
            //log('processing filled: ' + layer);
              var channel = checkChannel(fillColor);
              addLayerToChannelBatch(channel);
          }
        }
      // Count the layers just for kicks
      processCount++;
  }

  // Unify outlined layers
  batchProcess(outlinedLayers, union);

  // Unify dark and light channels separately
  batchProcess(darkChannel, union);
  batchProcess(lightChannel, union);

  // Subtract the two channels
  var bothChannels = darkChannel.concat(lightChannel); // Selects both channels
  batchProcess(bothChannels, subtract);

  // Flatten combined shape irreducibly
  batchProcess(selection, flattenCombinedShape);


  // Done!
  notify("Processed " + processCount + " layers");
  }
};
