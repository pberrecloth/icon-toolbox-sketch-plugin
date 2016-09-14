// Run
var createBounds = function(context) {

    //reference the Sketch Document
    var sketch = context.api();
    var doc = context.document;
    var page = doc.currentPage();

    // Include dependencies
    @import 'includes.js';

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
          var bounds = MSLayerGroup.groupBoundsForLayers(selection);
          createNewBounds(bounds.origin.x, bounds.origin.y, bounds.size.width, bounds.size.height);
          processCount++;
        } else {
          createBoundsIndividually();
        }
      } else {
        createBoundsIndividually();
      }
    }

    // Done!
    notify("Created " + processCount + " bounding box(es)");
  };
