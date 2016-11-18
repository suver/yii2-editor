Ext.data.JsonP.dev_uicolor({"guide":"<!--\nCopyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.\nFor licensing, see LICENSE.md.\n-->\n\n\n<h1 id='dev_uicolor-section-setting-editor-user-interface-color'>Setting Editor User Interface Color</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/dev_uicolor-section-user-interface-color-demo'>User Interface Color Demo</a></li>\n<li>\n<a href='#!/guide/dev_uicolor-section-related-features'>Related Features</a></li></ol>\n</div>\n\n<p>The editor UI color can be easily adjusted by the developer to match the look and feel of a website or an application where CKEditor is embedded in.</p>\n\n<p class=\"requirements\">\n    Please note that this feature can only be used for editor skins that are compatible with the so-called <a href=\"#!/guide/skin_sdk_chameleon\">\"chameleon\" feature</a>. The skins created by CKSource, i.e. <a href=\"http://ckeditor.com/addon/moono\">Moono</a> and <a href=\"http://ckeditor.com/addon/kama\">Kama</a>, already support it. If you are using a custom skin, you will need to define the <a href=\"#!/api/CKEDITOR.skin-method-chameleon\">CKEDITOR.skin.chameleon</a> function in your <code>skin.js</code> file.\n</p>\n\n\n<p>If you want to change the default UI color, you need to define the <a href=\"#!/api/CKEDITOR.config-cfg-uiColor\" rel=\"CKEDITOR.config-cfg-uiColor\" class=\"docClass\">CKEDITOR.config.uiColor</a> configuration setting which accepts an RGB color code.</p>\n\n<p>For example, to change the CKEditor UI to the joyful green color that would match this article's header, you could set the following <a href=\"#!/guide/dev_configuration\">editor configuration</a>:</p>\n\n<pre><code>config.uiColor = #66AB16;\n</code></pre>\n\n<p>This will cause the editor UI to assume the provided color, as visible below.</p>\n\n<p><p><img src=\"guides/dev_uicolor/uicolor_01.png\" alt=\"\" width=\"923\" height=\"311\"></p></p>\n\n<h2 id='dev_uicolor-section-user-interface-color-demo'>User Interface Color Demo</h2>\n\n<p>The <a href=\"../samples/uicolor.html\">\"Setting Editor UI Color\" sample</a> shows how the editor user interface color can be changed by using the configuration option.</p>\n\n<h2 id='dev_uicolor-section-related-features'>Related Features</h2>\n\n<p>Read more about changing the UI color by using the color picker tool in the <a href=\"#!/guide/dev_uicolorpicker\">Using the UI Color Picker</a> article.</p>\n","title":"UI Color","meta_description":"Adjusting editor user interface color.","meta_keywords":"ckeditor, editor, wysiwyg, color, colour, ui, interface, skin, configure, configuration, setup, settings, options, customization, customize, customise, customisation, config, modification, modify, change"});