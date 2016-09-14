function alert(title, message) {
  var app = [NSApplication sharedApplication];
  [app displayDialog:message withTitle:title];
}
function notify(message) {
  doc.showMessage(message);
}
function askForUserInput(message, initialValue) {
  // A simple pop-up with a message and text field. A intialValue can be passed to the field.
  if (!initialValue){ initialValue = "" }
  var value = doc.askForUserInput_initialValue(message, initialValue);
  return value;
}
function createSelect(msg, items, selectedItemIndex){
  selectedItemIndex = selectedItemIndex || 0

  var accessory = NSComboBox.alloc().initWithFrame(NSMakeRect(0,0,200,25))
  accessory.addItemsWithObjectValues(items)
  accessory.selectItemAtIndex(selectedItemIndex)

  var alert = NSAlert.alloc().init()
  alert.setMessageText(msg)
  alert.addButtonWithTitle('OK')
  alert.addButtonWithTitle('Cancel')
  alert.setAccessoryView(accessory)

  var responseCode = alert.runModal()
  var sel = accessory.indexOfSelectedItem()
  var value = accessory.objectValueOfSelectedItem();
  if (!value) { value = accessory.stringValue(); }

  return {
    responseCode: responseCode,
    sel: sel,
    value: value
  };
}
function createDialogYesNo(msg, button1Text, button2Text ){
  var alert = NSAlert.alloc().init()
  alert.setMessageText(msg)
  alert.addButtonWithTitle(button1Text)
  alert.addButtonWithTitle(button2Text)

  var responseCode = alert.runModal()
  return {
    responseCode: responseCode
  };
}
