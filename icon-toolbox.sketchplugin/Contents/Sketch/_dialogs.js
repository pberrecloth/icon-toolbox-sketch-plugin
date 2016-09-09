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
