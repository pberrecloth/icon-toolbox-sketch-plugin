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
    //log(selection);

    // before batch process begins
    var processCount = 0;

    // layers that will be processed separately
    var darkChannel = [];
    var lightChannel = [];

    // group the selection
    // select the group
    // loop within group, process.

    /*
    // convert borders to fills
    batchProcess(selection, flattenCombinedShape);
    batchProcess(selection, outline);

    // bug: selection is not updating
    var selection = context.selection;
    log(selection);
    */

    // if something is selected loop through
    for(var i = 0; i < selection.count(); i++){
        var layer = selection[i];

        var fill = layer.style().fills().firstObject();
        var fillColor = fill.color().hexValue();
        var fillChannel = checkChannel(fillColor);

        var border = layer.style().borders().firstObject();
        if (border){
          var borderColor = border.color().hexValue();
          var borderChannel = checkChannel(borderColor);
        }

        if (border && fill){
            //clone layer, remove border on clone, becomes the counter
            var clonedLayer = clone(layer);
            toggleBorder(clonedLayer);

            //outline original layer
            flattenCombinedShape(layer);
            outline(layer);

            //layer and clonedLayer will be batch processed as channels

        }

        if (border){
          var bordered = border.isEnabled();

          if (bordered){
            flattenCombinedShape(layer);
            outline(layer);
            groupLayersByChannel(borderChannel);
          }
        }

        if (fill){
          var filled = fill.isEnabled();

          if (filled){
            groupLayersByChannel(fillChannel);
          }
      }
        // Count the layers just for kicks
        processCount++;
  }


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
