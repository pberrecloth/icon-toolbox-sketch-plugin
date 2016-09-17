// Run
var createBounds = function(context) {

    // Global variables and functions
    initContext(context)
    @import '_includes.js';

    // get what's selected
    var selection = context.selection;
    var processCount = 0;

    // check something is selected
    if (selection.count() == 0){
      var options = [24, 48]
      var userInput = createSelect('Set bounds size', options, 0)
      var responseCode = userInput.responseCode;

      if (responseCode == NSAlertFirstButtonReturn) {
        var size = userInput.value;
        createNewBounds(30, 30, size, size);
        processCount++;
      }

    } else {

      // If more than one layer is selected give the option of bounding individually or collectively
      if (selection.count() >= 2){
        var userInput = createDialogYesNo(
          'You have more than one layer selected. Create bounds for individual layers or as a group?',

          'Create Bounds As Group',
          'Create Bounds Individually'
        );

        var responseCode = userInput.responseCode;

        if (responseCode == NSAlertFirstButtonReturn) {
          // Bounds layers as a group
          var bounds = MSLayerGroup.groupBoundsForLayers(selection);
          createNewBounds(bounds.origin.x, bounds.origin.y, bounds.size.width, bounds.size.height, selection[0]);
          processCount++;
        } else {
          // Bound layers individually
          createBoundsIndividually();
        }
      } else {
        createBoundsIndividually();
      }
    }

    // Done!
    notify("Created " + processCount + " bounding box(es)");
  };
