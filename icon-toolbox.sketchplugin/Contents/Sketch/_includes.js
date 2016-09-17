// Include using @import '_includes.js';

// Context
var app = NSApplication.sharedApplication(),
    selection,
    plugin,
    command,
    doc,
    page,
    artboard

function initContext(context) {
  sketch = context.api(),
    doc = context.document,
        plugin = context.plugin,
        command = context.command,
        page = doc.currentPage(),
        artboard = page.currentArtboard(),
        selection = context.selection
}


// All dependencies are included here

@import '_variables.js';
@import '_common.js';
@import '_booleans.js';
@import '_create.js';
@import '_dialogs.js';
@import '_style.js';
@import '_view.js';
