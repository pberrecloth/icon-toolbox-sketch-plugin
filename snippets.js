
/* check what object type is selected */

if(selection[i].class() == "MSArtboardGroup"){
  notify("artboard selected");
}
if (selection[i].class() == "MSTextLayer"){
  notify("text selected");
}
if(selection[i].class() == "MSGroupLayer"){
  notify("group selected");
}
if(selection[i].class() == "MSShapeGroup"){
  notify("shape selected");
}
if(selection[i].class() == "MSBitmapLayer"){
  notify("bitmap selected");
}
if(selection[i].class() == "MSSymbolInstance"){
  notify("symbol instance selected");
}

function getFillColor(layer){
  var fill = layer.style().fills().firstObject();
  var fillColor = fill.color().hexValue();
  //alert("fillColor", fillColor);
}


// get bounds
  print("x: "+bounds.origin.x);
  print("y: "+bounds.origin.y);
  print("width: "+bounds.size.width);
  print("height: "+bounds.size.height);


  var ovalShape = MSOvalShape.alloc().init();
  ovalShape.frame = MSRect.rectWithRect(NSMakeRect(0,0,100,100));

  var shapeGroup=MSShapeGroup.shapeWithPath(ovalShape);
  var fill = shapeGroup.style().fills().addNewStylePart();
  fill.color = MSColor.colorWithSVGString("#dd2020");

  doc.currentPage().addLayers([shapeGroup]);


  // New layer
    var boundingBox = page.InsertTextLayer({alignment: NSTextAlignmentCenter, systemFontSize: 36, text:"Hello World"});
    document.centerOnLayer(boundingBox);



// create text layer and group it
var text = "hello";


var title = MSTextLayer.alloc().initWithFrame_(NSMakeRect(42, 42, 300, 300))
title.font = NSFont.systemFontOfSize_(24.0)
title.stringValue = text
title.adjustFrameToFit()

var rect = MSRectangleShape.alloc().init();
rect.frame = MSRect.rectWithRect(NSMakeRect(24, 42 - 24, title.frame().width() + 42, title.frame().height() + 46));
var shapeGroup = MSShapeGroup.shapeWithPath(rect);
var fill = shapeGroup.style().addStylePartOfType(0);
fill.color = MSColor.colorWithSVGString("#FDF2B6");
var shad = shapeGroup.style().addStylePartOfType(2);

container = MSLayerGroup.new();
container.addLayers([shapeGroup, title]);
container.resizeToFitChildrenWithOption(0);
page.addLayers_([container]);



// obj properties
// Get object properties
var object = objectSelection;
var objectFrame = object.frame();
var objectWidth = objectFrame.width();
var objectHeight = objectFrame.height();
var objectX = objectFrame.x();
var objectY = objectFrame.y();


function createRectangle(x,y) {
    var rectShape = MSRectangleShape.new()
    var baseRect = NSMakeRect(x, y, newSize.width, newSize.height)
    rectShape.frame = MSRect.rectWithRect(baseRect)
    var shapeGroup = MSShapeGroup.shapeWithPath(rectShape)
    shapeGroup.style().fills().addNewStylePart()
    return shapeGroup
}


var artworkGroup = MSLayerGroup.new();

artworkGroup.addLayers([artwork]);
page.addLayers_([artworkGroup]);

//slice(artwork);
//makeBounds();
//var boundingBox = selection.frame();


  // Make rectangle
  var rect = MSRectangleShape.alloc().init();
  rect.frame = MSRect.rectWithRect(NSMakeRect(48, 48, 48, 48));
  var shapeGroup = MSShapeGroup.shapeWithPath(rect);
  var fill = shapeGroup.style().addStylePartOfType(0);
  fill.color = MSColor.colorWithSVGString("#FF0000");

  container = MSLayerGroup.new();
  container.addLayers([shapeGroup]);
  container.resizeToFitChildrenWithOption(0);
  page.addLayers_([container]);


// offsetY
/*
  // Set the offset position
  var offsetMargin = 100;
  var offsetY = objectHeight + offsetMargin;
*/

//[copyFrame setY:[objectFrame y] + offsetY];
/*
var bordered = layer.style().border().isEnabled();
var filled = layer.style().fill().isEnabled();

if (bordered && !filled){
  flattenCombinedShape(layer);
  outline(layer);
} else if (bordered && filled) {
  //clone layer, outline original, remove border on clone
  //clone(layer);
  //flattenCombinedShape(layer);
  //outline(layer);
  //toggleBorder(layerClone);
}*/




// Clone and combined method for bordered && filled shapes - unsatisfctory resultes
if (border && fill){
    //clone layer, remove border on clone, becomes the counter layer
    var clonedLayer = clone(layer);
    log("clonedLayer" + clonedLayer);

    counterLayers.push(clonedLayer); //toggleBorder will be applied;

    //outline original layer
    flattenCombinedShape(layer);
    outline(layer);

    /*
      //Batches
      //outlines will need to be recombined with their counters later to make solid fill shapes
      if (fillChannel == fillColor){
        //group pair in array, add array to a 'subtract' batch
      }


    */
    //layer and clonedLayer will be batch processed as channels

}


/* Old flatten function for reference - this can be applied to my designated layer, not just the selection
function flattenCombinedShape(layer) {
   if(!layer.isKindOfClass(MSShapeGroup)) return;
       // `flatten` method available only for MSShapeGroup class instances.
   layer.flatten();
 }*/

f
