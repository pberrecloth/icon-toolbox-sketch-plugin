function toggleFill(){
  var action = doc.actionsController().actionWithID("MSToggleFillAction");
  if (action.validate()) {
      action.toggleFill(nil)
  }
}
function toggleBorder(){
  var action = doc.actionsController().actionWithID("MSToggleBorderAction");
  if (action.validate()) {
      action.toggleBorder(nil)
  }
}

// Remove styles
// layer.style().removeAllStyleFills()
// layer.style().removeAllStyleBorders()
// layer.style().removeAllStyleShadows()
// layer.style().removeAllStyleInnerShadows()

// Add styles
// layer.style().addStylePartOfType(0) // To add a new fill
// layer.style().addStylePartOfType(1) // To add a new border
// layer.style().addStylePartOfType(2) // To add a new shadow
// layer.style().addStylePartOfType(3) // To add a new inner shadow
