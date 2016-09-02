// contains actions from Sketch menus

/*
//will one day simplify these to one function
action(actionName){
  var action = doc.actionsController().actionWithID("MS" + actionName + "Action");
  if (action.validate()) {
      action.actionName(nil)
  }
}
 */
 function flattenCombinedShape(layer) {
        if(!layer.isKindOfClass(MSShapeGroup)) return;
        // `flatten` method available only for MSShapeGroup class instances.
       layer.flatten();
  }
 function outline() {
    var action = doc.actionsController().actionWithID("MSConvertToOutlinesAction");
    if (action.validate()) {
        action.convertToOutlines(nil)
    }
  }
 function slice() {
    var action = doc.actionsController().actionWithID("MSInsertSliceAction");
    if (action.validate()) {
        action.insertSlice(nil)
    }
  }
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
