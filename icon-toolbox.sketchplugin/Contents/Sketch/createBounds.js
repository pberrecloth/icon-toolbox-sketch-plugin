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
          createNewBounds(layerX, layerY, layerWidth, layerHeight);

          processCount++;
      }
    }

    // Done!
    notify("Created " + processCount + " bounding box(es)");
  };
