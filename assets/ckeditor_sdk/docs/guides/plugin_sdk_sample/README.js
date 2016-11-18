Ext.data.JsonP.plugin_sdk_sample({"guide":"<!--\nCopyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.\nFor licensing, see LICENSE.md.\n-->\n\n\n<h1 id='plugin_sdk_sample-section-creating-a-ckeditor-plugin-in-20-lines-of-code'>Creating a CKEditor Plugin in 20 Lines of Code</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/plugin_sdk_sample-section-developing-a-custom-plugin'>Developing a Custom Plugin</a></li>\n<li>\n<a href='#!/guide/plugin_sdk_sample-section-plugin-files'>Plugin Files</a></li>\n<li>\n<a href='#!/guide/plugin_sdk_sample-section-plugin-source-code'>Plugin Source Code</a></li>\n<li>\n<a href='#!/guide/plugin_sdk_sample-section-creating-an-editor-command'>Creating an Editor Command</a></li>\n<li>\n<a href='#!/guide/plugin_sdk_sample-section-creating-the-toolbar-button'>Creating the Toolbar Button</a></li>\n<li>\n<a href='#!/guide/plugin_sdk_sample-section-plugin-loading'>Plugin Loading</a></li>\n<li>\n<a href='#!/guide/plugin_sdk_sample-section-full-source-code'>Full Source Code</a></li>\n<li>\n<a href='#!/guide/plugin_sdk_sample-section-working-example'>Working Example</a></li>\n<li>\n<a href='#!/guide/plugin_sdk_sample-section-timestamp-plugin-demo'>Timestamp Plugin Demo</a></li>\n<li>\n<a href='#!/guide/plugin_sdk_sample-section-further-reading'>Further Reading</a></li></ol>\n</div>\n\n<p>The aim of this tutorial is to demonstrate how to create a most basic CKEditor plugin.</p>\n\n<h2 id='plugin_sdk_sample-section-developing-a-custom-plugin'>Developing a Custom Plugin</h2>\n\n<p>Learn by coding! We are going to develop a <strong>timestamp</strong> plugin that inserts current date and time into the editing area of CKEditor at the caret position. The timestamp will be added after the user clicks a dedicated toolbar button.</p>\n\n<p>Since the plugin implementation makes use of the <a href=\"#!/api/CKEDITOR.editor-method-insertHtml\" rel=\"CKEDITOR.editor-method-insertHtml\" class=\"docClass\">CKEDITOR.editor.insertHtml</a> function, this\nexample can be easily adjusted to insert any other HTML element.</p>\n\n<p>The plugin will be code-named <code>timestamp</code> and according to CKEditor naming conventions,\nthis name will also be given to the plugin folder.</p>\n\n<h2 id='plugin_sdk_sample-section-plugin-files'>Plugin Files</h2>\n\n<p>Firstly, we will need to create the <code>timestamp</code> folder inside the <code>plugins</code> directory\nof the CKEditor installation.</p>\n\n<p class=\"tip\">\n    Remember that for CKEditor the name of the plugin folder is important and has to\n    be the same as the name of the plugin, otherwise the editor will not be able\n    to recognize it.\n</p>\n\n\n<p>Inside the newly created <code>timestamp</code> folder we are going to place the <code>plugin.js</code> file\nthat will contain the plugin logic. Apart from that, since we will also need a\ntoolbar icon for our plugin, we are going to add the <code>icons</code> folder and subsequently\nplace the <code>timestamp.png</code> file inside.</p>\n\n<p>To sum up, we will need the following file structure for our plugin to work:</p>\n\n<ul>\n<li><code>ckeditor root/</code>\n\n<ul>\n<li><code>plugins/</code>\n\n<ul>\n<li><code>timestamp/</code>\n\n<ul>\n<li><code>icons/</code>\n\n<ul>\n<li><code>timestamp.png</code></li>\n</ul>\n</li>\n<li><code>plugin.js</code></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n\n\n<h2 id='plugin_sdk_sample-section-plugin-source-code'>Plugin Source Code</h2>\n\n<p>With the following structure ready, it is time to open the <code>plugin.js</code> file in a\ntext editor and to start creating the source code of the plugin.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'timestamp', {\n    icons: 'timestamp',\n    init: function( editor ) {\n        //Plugin logic goes here.\n    }\n});\n</code></pre>\n\n<p>All CKEditor plugins are created by using the <a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a> method. This\nmethod should contain the plugin name &mdash; <code>'timestamp'</code> &mdash; and the plugin logic placed\ninside the <a href=\"#!/api/CKEDITOR.pluginDefinition-method-init\" rel=\"CKEDITOR.pluginDefinition-method-init\" class=\"docClass\">init</a> function that is called\nupon the initialization of the editor instance.</p>\n\n<p>Additionally, since we are going to define a toolbar button, the <code>icons</code> property is set, including the name of the icon file (important: matching the <strong>button name</strong>, in lowercase).</p>\n\n<h2 id='plugin_sdk_sample-section-creating-an-editor-command'>Creating an Editor Command</h2>\n\n<p>It is customary for CKEditor plugins to define an editor command that performs an\naction associated with them. The command should be defined inside the <code>init</code> function\nin order to be created upon the initialization of a CKEditor instance.</p>\n\n<p>In this case we are going to use the <a href=\"#!/api/CKEDITOR.editor-method-addCommand\" rel=\"CKEDITOR.editor-method-addCommand\" class=\"docClass\">CKEDITOR.editor.addCommand</a>\nmethod to define the <code>insertTimestamp</code> command that will insert the current date and time into CKEditor:</p>\n\n<pre><code>editor.addCommand( 'insertTimestamp', {\n    exec: function( editor ) {\n        var now = new Date();\n        editor.insertHtml( 'The current date and time is: &lt;em&gt;' + now.toString() + '&lt;/em&gt;' );\n    }\n});\n</code></pre>\n\n<p>The <a href=\"#!/api/CKEDITOR.commandDefinition-method-exec\" rel=\"CKEDITOR.commandDefinition-method-exec\" class=\"docClass\">exec</a> method defines a function that\nwill be fired when the <code>insertTimestamp</code> command is executed.</p>\n\n<p>The most important part of the plugin functionality is to insert the HTML code into the document. To do this,\nwe will use the <a href=\"#!/api/CKEDITOR.editor-method-insertHtml\" rel=\"CKEDITOR.editor-method-insertHtml\" class=\"docClass\">editor.insertHtml</a> method. This method\ncan be used to insert arbitrary HTML code into the document, so with a bit of tweaking\nyou can customize the timestamp plugin code to add other HTML elements into the\nCKEditor editing area.</p>\n\n<h2 id='plugin_sdk_sample-section-creating-the-toolbar-button'>Creating the Toolbar Button</h2>\n\n<p>The simplified timestamp plugin should work through a toolbar button. To this end,\ninside the <code>init</code> function we need to define a button that will be associated with\nthe <code>insertTimestamp</code> command:</p>\n\n<pre><code>editor.ui.addButton( 'Timestamp', {\n    label: 'Insert Timestamp',\n    command: 'insertTimestamp',\n    toolbar: 'insert'\n});\n</code></pre>\n\n<p>The <a href=\"#!/api/CKEDITOR.ui-method-addButton\" rel=\"CKEDITOR.ui-method-addButton\" class=\"docClass\">CKEDITOR.ui.addButton</a> method call above created a button named <code>'Timestamp'</code> with the following properties:</p>\n\n<ul>\n<li><code>label</code> &ndash; the textual part of the button (if visible) and its tooltip.</li>\n<li><code>command</code> &ndash; the command to be executed once the button is activated. This is the command we created in the previous step.</li>\n<li><code>toolbar</code> &ndash; the <a href=\"#!/guide/dev_toolbar-section-toolbar-groups-configuration\">toolbar group</a> into which the button will be added.</li>\n</ul>\n\n\n<p>Please note that you can influence the position of the button in the toolbar group by providing an optional index, for example:</p>\n\n<pre><code>// This could position the button at the beginning of the \"insert\" group.\ntoolbar: 'insert,0'\n\n// This could position the button at the end of the \"insert\" group.\ntoolbar: 'insert,100'\n</code></pre>\n\n<p>Note: The exact position depends on the indexes defined by other buttons available in your toolbar, so it may take some experimenting with index values to create a perfect button sequence within a group.</p>\n\n<h2 id='plugin_sdk_sample-section-plugin-loading'>Plugin Loading</h2>\n\n<p>It is now time to tell CKEditor to load our plugin. To do so we have to add its name to the\n<a href=\"#!/api/CKEDITOR.config-cfg-extraPlugins\" rel=\"CKEDITOR.config-cfg-extraPlugins\" class=\"docClass\">CKEDITOR.config.extraPlugins</a> configuration option:</p>\n\n<pre><code>config.extraPlugins = 'timestamp';\n</code></pre>\n\n<p class=\"tip alert\">\n    Please note that <strong>since CKEditor 4.1 all editor plugins that create content\n    should be integrated with <a href=\"#!/guide/dev_acf\">Advanced Content Filter</a>\n    (ACF)</strong>.\n    <br>\n    In this case the plugin only inserts content that is usually allowed in default editor\n    installations (the <code>&lt;em&gt;</code> element), but if you want to customize it and insert\n    elements that are not allowed by the configuration, you\n    need to either set <code>config.allowedContent = true;</code> in order to disable\n    <a href=\"#!/guide/dev_advanced_content_filter\">content filtering</a> or\n    <a href=\"#!/guide/plugin_sdk_integration_with_acf\">integrate your plugin with ACF</a>.\n    For more information, please refer to the official\n    <a href=\"#!/guide/plugin_sdk_integration_with_acf\">Advanced Content Filter integration guide</a>.\n</p>\n\n\n<p>Now load a CKEditor sample page. You should be able to see the new plugin button in the toolbar. For example:</p>\n\n<p><p><img src=\"guides/plugin_sdk_sample/timestampPluginLoaded.png\" alt=\"Timestamp plugin button available in the editor toolbar\" width=\"657\" height=\"279\"></p></p>\n\n<h2 id='plugin_sdk_sample-section-full-source-code'>Full Source Code</h2>\n\n<p>The complete content of the <code>plugin.js</code> file looks as follows:</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'timestamp', {\n    icons: 'timestamp',\n    init: function( editor ) {\n        editor.addCommand( 'insertTimestamp', {\n            exec: function( editor ) {\n                var now = new Date();\n                editor.insertHtml( 'The current date and time is: &lt;em&gt;' + now.toString() + '&lt;/em&gt;' );\n            }\n        });\n        editor.ui.addButton( 'Timestamp', {\n            label: 'Insert Timestamp',\n            command: 'insertTimestamp',\n            toolbar: 'insert'\n        });\n    }\n});\n</code></pre>\n\n<p class=\"tip\">\n    You can also <a href=\"https://github.com/ckeditor/ckeditor-docs-samples/tree/master/tutorial-timestamp\">download the\n    entire plugin folder</a> including the icon and the fully commented source code.\n</p>\n\n\n<h2 id='plugin_sdk_sample-section-working-example'>Working Example</h2>\n\n<p>The plugin code is now ready. When you click the <strong>Insert Timestamp</strong> toolbar button,\ncurrent date and time will be inserted into the document.</p>\n\n<p>Note that the timestamp format may vary for different platforms and browsers.\nIf you want to have more control over the display of the date and time, use the\n<a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date\"><code>Date</code></a> object's\nproperties and methods.</p>\n\n<p><p><img src=\"guides/plugin_sdk_sample/timestampPluginWorkingExample.png\" alt=\"Date and time added to the document in CKEditor\" width=\"658\" height=\"281\"></p></p>\n\n<p>Congratulations! You have just created a valid CKEditor plugin in under 20 lines\nof code! Since the <code>editor.insertHtml</code> method can be used to add arbitrary HTML code to\nthe document, you can replace the timestamp logic with your own customized code in\norder to insert other types of content into your document.</p>\n\n<h2 id='plugin_sdk_sample-section-timestamp-plugin-demo'>Timestamp Plugin Demo</h2>\n\n<p>See the <a href=\"../samples/timestamp.html\">working \"Timestamp (Creating a Most Basic CKEditor Plugin)\" sample</a> that shows the Timestamp plugin integrated with an editor instance.</p>\n\n<h2 id='plugin_sdk_sample-section-further-reading'>Further Reading</h2>\n\n<p>Refer to the following resources for more information about creating CKEditor plugins:</p>\n\n<ul>\n<li><a href=\"#!/guide/plugin_sdk_sample_1\">Simple Plugin, Part 1</a> &ndash; Develop a basic Abbreviation plugin with a dialog window that lets the user insert a an abbreviation element into the document.</li>\n<li><a href=\"#!/guide/plugin_sdk_sample_2\">Simple Plugin, Part 2</a> &ndash; Modify the Abbreviation plugin by adding a custom context menu and abbreviation editing capabilities.</li>\n<li><a href=\"#!/guide/plugin_sdk_integration_with_acf\">Integrating Plugins with Advanced Content Filter</a> &ndash; Learn how to implement Advanced Content Filter support in your plugins.</li>\n<li><a href=\"#!/guide/plugin_sdk_styles\">Plugin Stylesheets</a> &ndash; Tips on how to integrate custom plugin stylesheets with CKEditor.</li>\n</ul>\n\n","title":"Creating a Basic Plugin","meta_description":"Creating a CKEditor Plugin in 20 Lines of Code.","meta_keywords":"ckeditor, editor, wysiwyg, plugin, plugins, addon, add-on, timestamp, sdk, custom, development, tutorial, example, sample"});