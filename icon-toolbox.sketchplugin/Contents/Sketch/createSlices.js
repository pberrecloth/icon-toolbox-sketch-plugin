// Run
var createSlices = function(context) {

    // Global variables and functions
    initContext(context)
    @import '_includes.js';

    // get what's selected
    var selection = context.selection;
    var processCount = 0;

    // check something is selected
    if (selection.count() == 0){
      var options = [24, 48]
      var userInput = createSelect('Set slice size', options, 0)
      var responseCode = userInput.responseCode;

      if (responseCode == NSAlertFirstButtonReturn) {
        var size = userInput.value;
        createNewSlice(0, 0, size, size);// TODO - places in arbitary position, would be nice to place in centre of current view - https://github.com/kenmoore/sketch-better-paste/blob/master/Better%20Paste.sketchplugin
        processCount++;
      }

    } else {

      // If more than one layer is selected give the option of bounding individually or collectively
      if (selection.count() >= 2){
        var userInput = createDialogYesNo(
          'You have more than one layer selected. Create slice for individual layers or as a group?',
          'Create Slice As Group',
          'Create Slices Individually'
        );

        var responseCode = userInput.responseCode;

        if (responseCode == NSAlertFirstButtonReturn) {
          // Bounds layers as a group
          var bounds = MSLayerGroup.groupBoundsForLayers(selection);
          createNewSlice(bounds.origin.x, bounds.origin.y, bounds.size.width, bounds.size.height, selection[0]);
          processCount++;
        } else {
          // Bound layers individually
          createSlicesIndividually();
        }
      } else {
        createSlicesIndividually();
      }
    }

    // Done!
    notify("Sliced " + processCount + " layers");
  };
