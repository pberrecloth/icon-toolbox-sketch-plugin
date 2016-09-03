// Run
var FlattenSelectedArtwork = function(context) {

  //reference the Sketch Document
  var sketch = context.api();
  var doc = context.document;
  var page = doc.currentPage();

  //put within the main function so they can use variables
  @import 'common.js';
  @import 'actionSheet.js';

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
          log ('border found');
          var bordered = border.isEnabled();
          var borderColor = border.color().hexValue();
          //var borderChannel = checkChannel(borderColor);
        } else {
          var bordered = false;
        }

        if (bordered && filled){
          log('processing borderd && filled: ' + layer);
            //outline(layer);
            if (fillColor == borderColor){
            //1. in resulting layerGroup, set child layers to Union
            //2. flatten the combined shape again - results in one shape
            }
        } else {
          if (bordered){
            log('processing bordered: ' + layer);
              var channel = checkChannel(borderColor);
              outline(layer);
              addLayerToChannelBatch(channel);
          } else if (filled){
            log('processing filled: ' + layer);
              var channel = checkChannel(fillColor);
              addLayerToChannelBatch(channel);
          }
        }
      // Count the layers just for kicks
      processCount++;
  }


  // Unify dark and light channels separately

  log ('darkChannel: ' + darkChannel);
  log ('lightChannel: ' + lightChannel);
  batchProcess(darkChannel, union);
  batchProcess(lightChannel, union);

  // Subtract the two channels
  var bothChannels = darkChannel.concat(lightChannel); // Selects both channels
  batchProcess(bothChannels, subtract);
  log('selection after subtract: ' + selection);

  // Flatten combined shape irreducibly
  batchProcess(selection, flattenCombinedShape);
  log('selection after flatten: ' + selection);

  // Done!
  notify("Processed " + processCount + " layers");
  }
};
