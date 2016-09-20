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

function setBlackOrWhite(target){

  var r = target.color().red()
  var g = target.color().green()
  var b = target.color().blue()
  var brightness = r+g+b

  var lightColor = 'ffffff';
  var darkColor = '000000';

  if (brightness>1.5){
    target.color = MSColor.colorWithSVGString('#'+lightColor);
  } else {
    target.color = MSColor.colorWithSVGString('#'+darkColor);
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
