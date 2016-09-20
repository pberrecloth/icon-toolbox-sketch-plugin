

Done!
==================================

Clone artwork and offset DONE

Flattening automation DONE:
1. select all black shapes
2. union
3. select all white shapes
4. union
5. select all shapes
6. subtract

Works on simple fill shapes only, next up is bordered objects.


To do!
==================================



**Version 1 features**

Workflow steps to do:

Group artwork and create name
clone and move to new artboard
size clone to artboard
Run selection loops within the group to assess layers and separate contents into dark/light channels
Check if layers are enabled or visible for each, create ignore list?
Round colors to #000 or #FFF based on hex value, add to channels
Outline and flatten any bordered objects
Union the white channels
Union the black channels
Subtract white from black
Combined shape
Flatten shape
Add a bounding box
Add a slice object
Specify slice output settings
OPTIONAL Convert artboards to Symbols


**Version 2 features**

Options dialog
- Artboard size: 24px, 48px, Custom
- Round position to pixel Y/N
- Auto slice Y/N
- Output formats: PNG, SVG, GIF, etc
- Output sizes: 1x, 2x, etc
– Export color: Black, White, Other?
- Others?

**Version 3 features**

Ensure slice names have icon names
A layer named with UNICODES for font to reference?
Set export color
Export all icon slices to folders
Create CSS/index files with icon names, reference SVGs
Employ Grunt and Grunt-webfont to make webfont
Generate spritesheets
Generate spritesheet maps in CSS/SASS/JSON

**Version 4 features**

'Grunt watch' using terminal to watch export folder, then render font
Auto-install of icon font (using a symlink?) then auto-preview in sketch
Icon font browser for Sketch?
Craft integration?



**References**
https://github.com/bouchenoiremarc/Sketch-Constraints/blob/master/Sketch%20Constraints.sketchplugin/Contents/Sketch/utils.js

http://blog.invisionapp.com/how-to-make-custom-icons-in-sketch-using-boolean-operations/

https://github.com/GeertWille/sketch-export-assets/blob/master/sketch-export-assets.sketchplugin/Contents/Sketch/library/common.js
https://medium.com/sketch-app-sources/exploring-ways-to-export-clean-svg-icons-with-sketch-the-correct-way-752e73ec4694#.h3bjlrah8
https://github.com/turbobabr/duplicator/blob/master/Duplicator.sketchplugin/Contents/Sketch/plugin.js
