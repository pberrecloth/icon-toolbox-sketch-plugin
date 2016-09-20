function flattenCombinedShape(layer) {
  if(!layer.isKindOfClass(MSShapeGroup)) return;
  var action = doc.actionsController().actionWithID("MSFlattenAction");
  if (action.validate()) {
      action.flattenIgnoringWarning() // suppresses the warning dialog that appears when flattening
  }
}
function outline() {
    var action = doc.actionsController().actionWithID("MSConvertToOutlinesAction");
    if (action.validate()) {
      action.convertToOutlines(nil);
    }
  }
  function union(){
    // MSUnionAction will only union layers currently selected
    var action = doc.actionsController().actionWithID("MSUnionAction");
    if (action.validate()) {
        action.booleanUnion(nil)
    }
  }
  function subtract(){
    // MSSubtractAction will only union layers currently selected
    var action = doc.actionsController().actionWithID("MSSubtractAction");
    if (action.validate()) {
        action.booleanSubtract(nil)
    }
  }
  function convertTextToOutlines(layer) {
      if(!layer.isKindOfClass(MSTextLayer)) return;

      var path=layer.bezierPathWithTransforms(); // Get text layers' outline as NSBezierPath.

      var parent=layer.parentGroup();
      var shape=MSShapeGroup.shapeWithBezierPath(path); // Create a vector shape with the outline.

      // Set the style previously used in text layer.
      shape.style = layer.style();

      // If text layer doesn't have a fill style, we create it with the color used for the text.
      var style=shape.style();
      if(!style.fill()) {
          var fill=style.fills()//.addNewStylePart(); //bug
          fill.color = MSColor.colorWithNSColor(layer.style().textStyle().attributes().NSColor);
      }

      // Copy name and selection status.
      var isSelected=layer.isSelected();
      shape.name = layer.name();
      shape.setIsSelected(isSelected);

      // Remove text layer.
      parent.removeLayer(layer);

      // Add a newly created shape to the text layers' parent group.
      parent.addLayers([shape]);

      return shape;
  }
  function outlineBorders(layer) {

      // if(!layer.isKindOfClass(MSTextLayer)) return;
      log(layer)
      var path = layer.bezierPathWithTransforms(); // Get text layers' outline as NSBezierPath.
      log(path)
      var parent = layer.parentGroup();
      var shape = MSShapeGroup.shapeWithBezierPath(path); // Create a vector shape with the outline.

      // Set the style previously used in text layer.
      shape.style = layer.style();

      // // If text layer doesn't have a fill style, we create it with the color used for the text.
      // var style=shape.style();
      // if(!style.fill()) {
      //     var fill=style.fills()//.addNewStylePart(); //bug
      //     fill.color = MSColor.colorWithNSColor(layer.style().textStyle().attributes().NSColor);
      // }

      // Copy name and selection status.
      var isSelected=layer.isSelected();
      shape.name = layer.name();
      shape.setIsSelected(isSelected);

      // Remove text layer.
      parent.removeLayer(layer);

      // Add a newly created shape to the text layers' parent group.
      parent.addLayers([shape]);

      return shape;
  }
