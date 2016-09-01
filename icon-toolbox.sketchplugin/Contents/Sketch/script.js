var onRun = function(context) {

  //reference the Sketch Document
  var sketch = context.api();
  var doc = context.document;
  var page = doc.currentPage();

  //put within the main function so they can use variables
  @import 'common.js'

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


    // if something is selected loop through
    for(var i = 0; i < selection.count(); i++){
        var artwork = selection[i];

        // clone the artwork
        //var newArtwork = cloneArtwork(artwork);

        // convert to outlines
        outlines(artwork);

        // group layers into dark and light channels
        var layerFillColor = checkChannel();

        if (layerFillColor == 'dark'){
          darkChannel.push(artwork);
        } else if (layerFillColor == 'light'){
          lightChannel.push(artwork);
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



  //slice(artwork);
  //makeBounds();
  //var boundingBox = selection.frame();


    /*// Make rectangle
    var rect = MSRectangleShape.alloc().init();
    rect.frame = MSRect.rectWithRect(NSMakeRect(48, 48, 48, 48));
    var shapeGroup = MSShapeGroup.shapeWithPath(rect);
    var fill = shapeGroup.style().addStylePartOfType(0);
    fill.color = MSColor.colorWithSVGString("#FF0000");

    container = MSLayerGroup.new();
    container.addLayers([shapeGroup]);
    container.resizeToFitChildrenWithOption(0);
    page.addLayers_([container]);
*/

  // Done!
  //notify("Processed " + processCount + " objects");
  }
};
