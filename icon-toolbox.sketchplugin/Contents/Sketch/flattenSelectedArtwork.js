// Run
var FlattenSelectedArtwork = function(context) {

  //reference the Sketch Document
  var sketch = context.api();
  var doc = context.document;
  var page = doc.currentPage();

  //put within the main function so they can use variables
  @import 'common.js';

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
        var border = layer.style().borders().firstObject();

        if (border && fill){
            //clone layer, outline original, remove border on clone, add both to channelizer

            clone(layer);
            flattenCombinedShape(layer);
            outline(layer);            
            //toggleBorder(layerClone);
        }

        if (border){
          var bordered = border.isEnabled();
          var borderColor = border.color().hexValue();

          if (bordered){
            flattenCombinedShape(layer);
            outline(layer);
          }
        }

        if (fill){
          var filled = fill.isEnabled();
          var fillColor = fill.color().hexValue();

            if (filled){
              // group layers into dark and light channels
              var channel = checkChannel(fillColor);

              if (channel == 'dark'){
                darkChannel.push(layer);
              } else if (channel == 'light'){
                lightChannel.push(layer);
              } else {
                alert("Icon Toolbox says:\nYour artwork contains mixed colors!", "All layers must be black or white in color. Your artwork will still be flattened, but non-black or white layers will be ignored.");
              }
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
