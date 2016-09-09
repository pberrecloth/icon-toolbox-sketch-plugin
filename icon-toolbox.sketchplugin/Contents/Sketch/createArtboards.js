// Run
var createArtboards = function(context) {

  //reference the Sketch Document
  var sketch = context.api();
  var doc = context.document;
  var page = doc.currentPage();

  // Include dependencies
  @import 'includes.js';

  //sets up two new artboards for now, will have dialog for size/quantity options?
  //will also need auto-placement and sizing if artwork is selected
  createNewArtboard(artboardX, artboardY, artboardSizeLg);
  createNewArtboard(artboardX, artboardY + artboardSizeLg, artboardSizeSm);

  // Done!
  //notify("Processed " + processCount + " layers");

};
