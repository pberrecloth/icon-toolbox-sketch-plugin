var convertToBlackAndWhite = function(context) {

  // Global variables and functions
  initContext(context)
  @import '_includes.js';

  // get what's selected
  var selection = context.selection;

  // check something is selected
  if (selection.count() == 0){
    notify("Please select something");
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
        var border = layer.style().borders().firstObject();
        if (border){
          var bordered = border.isEnabled();
          var borderColor = border.color().hexValue();
        } else {
          var bordered = false;
        }

        // set black or white
        if (bordered){
          setBlackOrWhite(border)
        }
        if (filled){
          setBlackOrWhite(fill)
        }
    }
    // Count the layers just for kicks
    doc.reloadInspector()
    processCount++;
    notify("Processed " + processCount + " layers");
  }
};
