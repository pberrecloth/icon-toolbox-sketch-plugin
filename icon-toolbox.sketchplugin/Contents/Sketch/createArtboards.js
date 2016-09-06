// Run
var createArtboards = function(context) {

  //reference the Sketch Document
  var sketch = context.api();
  var doc = context.document;
  var page = doc.currentPage();

  //put within the main function so they can use variables
  @import 'common.js';
  @import 'actionSheet.js';
  @import 'insertActions.js';
  @import 'variables.js';

  //sets up two new artboards for now, will have dialog for size/quantity options?
  //will also need auto-placement and sizing if artwork is selected
  createNewArtboard(artboardX, artboardY, artboardSizeLg);
  createNewArtboard(artboardX, artboardY + artboardSizeLg, artboardSizeSm);

  // Done!
  //notify("Processed " + processCount + " layers");

};
