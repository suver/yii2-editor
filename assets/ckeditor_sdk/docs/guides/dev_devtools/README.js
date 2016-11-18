Ext.data.JsonP.dev_devtools({"guide":"<!--\nCopyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.\nFor licensing, see LICENSE.md.\n-->\n\n\n<h1 id='dev_devtools-section-using-developer-tools-plugin-to-customize-dialog-windows'>Using Developer Tools Plugin to Customize Dialog Windows</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/dev_devtools-section-customization-options'>Customization Options</a></li>\n<li>\n<a href='#!/guide/dev_devtools-section-developer-tools-demo'>Developer Tools Demo</a></li>\n<li>\n<a href='#!/guide/dev_devtools-section-related-features'>Related Features</a></li></ol>\n</div>\n\n<p class=\"requirements\">\n    This feature is provided through an optional plugin that is not included in the CKEditor distribution packages available from the <a href=\"http://ckeditor.com/download\">Download</a> site and <a href=\"#!/guide/dev_plugins\">needs to be added to your custom build</a> with <a href=\"http://ckeditor.com/builder\">CKBuilder</a>.\n</p>\n\n\n<p>An optional CKEditor plugin called <a href=\"http://ckeditor.com/addon/devtools\">Developer Tools</a> displays tooltips with information about editor dialog windows, such as:</p>\n\n<ul>\n<li>dialog window name,</li>\n<li>dialog window tab name,</li>\n<li>dialog window element ID,</li>\n<li>dialog window element type with a link to an appropriate entry in the <a href=\"#!/api\">CKEditor API</a>.</li>\n</ul>\n\n\n<p><p><img src=\"guides/dev_devtools/devtools_01.png\" alt=\"\" width=\"378\" height=\"358\"></p></p>\n\n<p>This feature is aimed at developers who would like to <a href=\"#!/guide/dev_howtos_dialog_windows\">customize their CKEditor instances</a> or <a href=\"#!/guide/plugin_sdk_intro\">create their own plugins</a>. It is only useful in the development phase and makes no sense in a production environment, so do remember to get rid of it before you upload CKEditor to your production server!</p>\n\n<p class=\"tip\">\n    This feature works with all CKEditor dialog windows, including the ones that were created by custom plugins.\n</p>\n\n\n<h2 id='dev_devtools-section-customization-options'>Customization Options</h2>\n\n<p>The Developer Tools plugin provides two configuration options:</p>\n\n<ul>\n<li><a href=\"#!/api/CKEDITOR.config-cfg-devtools_styles\" rel=\"CKEDITOR.config-cfg-devtools_styles\" class=\"docClass\">CKEDITOR.config.devtools_styles</a> &ndash; sets the CSS styles applied to the tooltip.</li>\n<li><a href=\"#!/api/CKEDITOR.config-cfg-devtools_textCallback\" rel=\"CKEDITOR.config-cfg-devtools_textCallback\" class=\"docClass\">CKEDITOR.config.devtools_textCallback</a> &ndash; contains a function that returns the text displayed in the tooltip.</li>\n</ul>\n\n\n<h2 id='dev_devtools-section-developer-tools-demo'>Developer Tools Demo</h2>\n\n<p>See the <a href=\"../samples/devtools.html\">working \"Developer Tools\" sample</a> that showcases how easy it can be to get information about editor dialog windows and their elements.</p>\n\n<h2 id='dev_devtools-section-related-features'>Related Features</h2>\n\n<p>Read more about customizing CKEditor dialog windows in the <a href=\"#!/guide/dev_howtos_dialog_windows\">Dialog Windows</a> HOWTO article. It explains how to set default values for dialog window fields or configure dialog window properties with some help from the Developer Tools plugin.</p>\n","title":"Developer Tools","meta_description":"Using Developer Tools plugin to customize dialog dindows.","meta_keywords":"ckeditor, editor, wysiwyg, developer, tools, helper, help, dialog, dialogs, window, windows, tab, field, customization, customize, customisation, customise"});