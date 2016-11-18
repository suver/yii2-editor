Ext.data.JsonP.dev_format({"guide":"<!--\nCopyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.\nFor licensing, see LICENSE.md.\n-->\n\n\n<h1 id='dev_format-section-applying-block-level-text-formats'>Applying Block-Level Text Formats</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/dev_format-section-enabling-all-block-level-text-formats'>Enabling All Block-Level Text Formats</a><ol>\n<li>\n<a href='#!/guide/dev_format-section-enable-all-block-level-text-format-globally'>Enable All Block-Level Text Format Globally</a></li>\n<li>\n<a href='#!/guide/dev_format-section-enable-all-block-level-text-formats-for-a-single-editor-instance'>Enable All Block-Level Text Formats for a Single Editor Instance</a></li>\n</ol>\n<li>\n<a href='#!/guide/dev_format-section-custom-block-level-text-formats-definition'>Custom Block-Level Text Formats Definition</a></li>\n<li>\n<a href='#!/guide/dev_format-section-block-level-text-formats-demo'>Block-Level Text Formats Demo</a></li>\n<li>\n<a href='#!/guide/dev_format-section-related-features'>Related Features</a></li></ol>\n</div>\n\n<p class=\"requirements\">\n    This feature is provided through a plugin that is included in the Standard and Full presets available from the official CKEditor <a href=\"http://ckeditor.com/download\">Download</a> site, although some text formats are disabled in the Standard preset.\n</p>\n\n\n<p>The <a href=\"http://ckeditor.com/addon/format\">Format</a> plugin provides the ability to add block-level text formatting to your document. When enabled, it introduces the <img class=\"inline\" src=\"guides/dev_format/format_01.png\" alt=\"Paragraph Format\" title=\"Paragraph Format\"> toolbar button that applies these text formats. The formats work on block level which means that you do not need to select any text in order to apply them and entire blocks will be affected by your choice.</p>\n\n<p><p><img src=\"guides/dev_format/format_02.png\" alt=\"Format drop-down available in CKEditor toolbar\" width=\"681\" height=\"257\"></p></p>\n\n<p>If you want to apply inline styles on selected text fragments, read about <a href=\"#!/guide/dev_basicstyles\">basic text styles</a> and the <a href=\"#!/guide/dev_styles\"><strong>Styles</strong> drop-down list</a>.</p>\n\n<h2 id='dev_format-section-enabling-all-block-level-text-formats'>Enabling All Block-Level Text Formats</h2>\n\n<p>By default, some of these formats are not included in the Standard preset due to the <a href=\"#!/api/CKEDITOR.config-cfg-format_tags\" rel=\"CKEDITOR.config-cfg-format_tags\" class=\"docClass\">CKEDITOR.config.format_tags</a> settings available in the <code>config.js</code> file, but you can easily enable them by using one of the following solutions. The same procedure also applies to limiting the number of text format options available in the editor.</p>\n\n<h3 id='dev_format-section-enable-all-block-level-text-format-globally'>Enable All Block-Level Text Format Globally</h3>\n\n<p>Open the <code>config.js</code> file available in your <code>ckeditor</code> directory, and edit the <code>config.format_tags</code> entry in the following way:</p>\n\n<pre><code>// Enable all default text formats:\nconfig.format_tags = 'p;h1;h2;h3;h4;h5;h6;pre;address;div';\n\n// Enable a limited set of text formats:\nconfig.format_tags = 'p;h1;h2;pre;div';\n</code></pre>\n\n<p><strong>Advantages</strong></p>\n\n<p>This will apply to all CKEditor instances that you create, so you will not need to remember to change it for each one separately.</p>\n\n<p><strong>Disadvantages</strong></p>\n\n<p>You will need to remember not to overwrite this file when <a href=\"#!/guide/dev_upgrade\">upgrading</a> to a newer CKEditor version. <strong>Solution</strong>: Provide a <a href=\"#!/guide/dev_configuration-section-using-a-custom-configuration-file\">custom configuration file</a> overriding the default configuration.</p>\n\n<h3 id='dev_format-section-enable-all-block-level-text-formats-for-a-single-editor-instance'>Enable All Block-Level Text Formats for a Single Editor Instance</h3>\n\n<p>If you want to change the default settings for a particular editor instance, provide the modified <code>config.format_tags</code> value in the <a href=\"#!/guide/dev_configuration-section-defining-configuration-in-page\">in-page configuration</a> when creating a CKEditor instance, for example:</p>\n\n<pre><code>// Enable all default text formats:\n<a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>( 'editor1', {\n    format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div'\n});\n\n// Enable a limited set of text formats:\n<a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>( 'editor1', {\n    format_tags: 'p;h1;h2;pre;div'\n});\n</code></pre>\n\n<p><strong>Advantages</strong></p>\n\n<p>This will only apply to a selected CKEditor instance that you create, without affecting your global configuration.</p>\n\n<p><strong>Disadvantages</strong></p>\n\n<p>You will need to provide the in-page configuration for all other CKEditor instances that you want to use it with.</p>\n\n<h2 id='dev_format-section-custom-block-level-text-formats-definition'>Custom Block-Level Text Formats Definition</h2>\n\n<p>The text format feature is customizable &mdash; you can easily adjust format definitions, for example by adding a custom class.</p>\n\n<p>Each entry from the <a href=\"#!/api/CKEDITOR.config-cfg-format_tags\" rel=\"CKEDITOR.config-cfg-format_tags\" class=\"docClass\">CKEDITOR.config.format_tags</a> setting must have a corresponding definition in a configuration option named <code>config.format_(tagName)</code>, for example the <code>&lt;h1&gt;</code> tag is defined in <a href=\"#!/api/CKEDITOR.config-cfg-format_h1\" rel=\"CKEDITOR.config-cfg-format_h1\" class=\"docClass\">CKEDITOR.config.format_h1</a>.</p>\n\n<p>If you want to, for example, add CSS classes to format definitions, you can do it in the following way:</p>\n\n<pre><code>config.format_h1 = { element: 'h1', attributes: { 'class': 'editorTitle1' } };\nconfig.format_h2 = { element: 'h2', attributes: { 'class': 'editorTitle2' } };\nconfig.format_pre = { element: 'pre', attributes: { 'class': 'editorCode' } };\n</code></pre>\n\n<p>Remember that depending on your use case, the CSS classes for text formats need to be defined accordingly. For <a href=\"#!/guide/dev_framed\">classic editor</a> they should be defined in an external CSS file added to the editor configuration with the <a href=\"#!/api/CKEDITOR.config-cfg-contentsCss\" rel=\"CKEDITOR.config-cfg-contentsCss\" class=\"docClass\">CKEDITOR.config.contentsCss</a> option. For <a href=\"#!/guide/dev_inline\">inline editor</a> they need to be added directly to the page stylesheet.</p>\n\n<p class=\"tip\">\n    The block-level text format feature is automatically integrated with <a href=\"#!/guide/dev_acf\">Advanced Content Filter</a>, so all custom format definitions are treated as allowed by the editor content filtering mechanism.\n</p>\n\n\n<h2 id='dev_format-section-block-level-text-formats-demo'>Block-Level Text Formats Demo</h2>\n\n<p>See the <a href=\"../samples/format.html\">working \"Applying Block-Level Text Formats\" sample</a> that showcases the usage and customization of basic text formatting.</p>\n\n<h2 id='dev_format-section-related-features'>Related Features</h2>\n\n<p>Refer to the following resources for more information about text styling:</p>\n\n<ul>\n<li>The <a href=\"#!/guide/dev_basicstyles\">Basic Text Styles: Bold, Italic and More</a> article explains how to apply bold, italic, underline, strikethrough, subscript and superscript formatting to text selections.</li>\n<li>The <a href=\"#!/guide/dev_styles\">Applying Styles to Editor Content</a> article discusses creating more semantically correct text styles.</li>\n<li>The <a href=\"#!/guide/dev_colorbutton\">Setting Text and Background Color</a> article explains how to use and customize the <strong>Text Color</strong> and <strong>Background Color</strong> features.</li>\n</ul>\n\n","title":"Text Formats","meta_description":"Applying block-level text formats to editor content.","meta_keywords":"ckeditor, editor, wysiwyg, format, block, paragraph, heading, header, text, configuration, configure, modify, modification, change, customize, customization, customise, customisation"});