
//--------------------------------------//
//         Dialog UI components         //
//--------------------------------------//

function createLabel(text, fontSize, bold, frame) {
    var label = NSTextField.alloc().initWithFrame(frame)
    label.setStringValue(text)
    label.setFont((bold) ? NSFont.boldSystemFontOfSize(fontSize) : NSFont.systemFontOfSize(fontSize))
    label.setBezeled(false)
    label.setDrawsBackground(false)
    label.setEditable(false)
    label.setSelectable(false)

    return label
}

function createCheckbox(text, checked, frame) {
    checked = (checked == false) ? NSOffState : NSOnState
    var checkbox = NSButton.alloc().initWithFrame(frame)
    checkbox.setButtonType(NSSwitchButton)
    checkbox.setBezelStyle(0)
    checkbox.setTitle(text)
    checkbox.setState(checked)

    return checkbox
}

function createSelectbox(frame, currentValue){
    var combo = NSComboBox.alloc().initWithFrame(frame)
    combo.addItemsWithObjectValues([currentValue])

    return combo
}

//--------------------------------------//
//               Dialogs                //
//--------------------------------------//


// standard notifications banner
function notify(message) {
  doc.showMessage(message);
}
// standard alert box with custom icon
function alert(message, title) {
    var alert = NSAlert.alloc().init();
    if (title) {
      alert.setMessageText(title);
      alert.setInformativeText(message);
    } else {
      alert.setMessageText(message);
    }
    alert.addButtonWithTitle('OK');
    alert.setIcon(NSImage.alloc().initByReferencingFile(plugin.urlForResourceNamed("icon@2x.png").path()));
    var responseCode = alert.runModal();
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
  alert.setIcon(NSImage.alloc().initByReferencingFile(plugin.urlForResourceNamed("icon@2x.png").path()));

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
  alert.setIcon(NSImage.alloc().initByReferencingFile(plugin.urlForResourceNamed("icon@2x.png").path()));

  var responseCode = alert.runModal()
  return {
    responseCode: responseCode
  };
}
