Ext.data.JsonP.dev_installation({"guide":"<!--\nCopyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.\nFor licensing, see LICENSE.md.\n-->\n\n\n<h1 id='dev_installation-section-ckeditor-quick-start-guide'>CKEditor Quick Start Guide</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/dev_installation-section-download'>Download</a></li>\n<li>\n<a href='#!/guide/dev_installation-section-unpacking'>Unpacking</a></li>\n<li>\n<a href='#!/guide/dev_installation-section-trying-out'>Trying Out</a></li>\n<li>\n<a href='#!/guide/dev_installation-section-adding-ckeditor-to-your-page'>Adding CKEditor to Your Page</a></li>\n<li>\n<a href='#!/guide/dev_installation-section-using-the-cdn'>Using the CDN</a></li>\n<li>\n<a href='#!/guide/dev_installation-section-next-steps'>Next Steps</a></li></ol>\n</div>\n\n<p>The aim of this article is to get you up and running with CKEditor in two minutes.</p>\n\n<h2 id='dev_installation-section-download'>Download</h2>\n\n<p>Visit the official <a href=\"http://ckeditor.com/download\">CKEditor Download</a> site. For a production site we recommend you choose the default <strong>Standard Package</strong> and click the <strong>Download CKEditor</strong> button to get the <code>.zip</code> installation file. If you want to try out more editor features, you can download the <strong>Full Package</strong> instead.</p>\n\n<p><a href=\"http://ckeditor.com/download\"><img src=\"guides/dev_installation/ckeditor_quick_start_download.png\" alt=\"CKEditor Download site\" width=\"696\" height=\"321\"></a></p>\n\n<h2 id='dev_installation-section-unpacking'>Unpacking</h2>\n\n<p>Unpack (extract) the downloaded <code>.zip</code> archive to the <code>ckeditor</code> directory in the root of your website.</p>\n\n<h2 id='dev_installation-section-trying-out'>Trying Out</h2>\n\n<p>CKEditor comes with a sample that you can check to verify if the installation was successful as well as a few \"next steps\" ideas and references to further resources.</p>\n\n<p>Open the following page in the browser to see the sample:\n<code>http://&lt;your site&gt;/ckeditor/samples/index.html</code></p>\n\n<p><p><img src=\"guides/dev_installation/ckeditor_sample.png\" alt=\"CKEditor sample available in each installation package\" width=\"1002\" height=\"668\"></p></p>\n\n<p>Additionally, you can click the Toolbar Configurator button on the editor sample page to open a handy tool that will let you <a href=\"#!/guide/dev_toolbar\">adjust the toolbar</a> to your needs.</p>\n\n<h2 id='dev_installation-section-adding-ckeditor-to-your-page'>Adding CKEditor to Your Page</h2>\n\n<p>If the sample works correctly, you are ready to build your own site with CKEditor included.</p>\n\n<p>To start, create a simple HTML page with a <code>&lt;textarea&gt;</code> element in it. You will then need to do two things:</p>\n\n<ol>\n<li>Add a call to the CKEditor script in the <code>&lt;script&gt;</code> element of your page.</li>\n<li>Use the <a href=\"#!/api/CKEDITOR-method-replace\"><code>CKEDITOR.replace()</code></a> method to replace the existing <code>&lt;textarea&gt;</code> element with CKEditor.</li>\n</ol>\n\n\n<p>See the following example:</p>\n\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n    &lt;head&gt;\n        &lt;meta charset=\"utf-8\"&gt;\n        &lt;title&gt;A Simple Page with CKEditor&lt;/title&gt;\n        &lt;!-- Make sure the path to CKEditor is correct. --&gt;\n        &lt;script src=\"../ckeditor.js\"&gt;&lt;/script&gt;\n    &lt;/head&gt;\n    &lt;body&gt;\n        &lt;form&gt;\n            &lt;textarea name=\"editor1\" id=\"editor1\" rows=\"10\" cols=\"80\"&gt;\n                This is my textarea to be replaced with CKEditor.\n            &lt;/textarea&gt;\n            &lt;script&gt;\n                // Replace the &lt;textarea id=\"editor1\"&gt; with a CKEditor\n                // instance, using default configuration.\n                <a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>( 'editor1' );\n            &lt;/script&gt;\n        &lt;/form&gt;\n    &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<p>When you are done, open your test page in the browser.</p>\n\n<p><strong>Congratulations! You have just installed and used CKEditor on your own page in virtually no time!</strong></p>\n\n<p><p><img src=\"guides/dev_installation/ckeditor_on_page.png\" alt=\"CKEditor added to your sample page\" width=\"604\" height=\"315\"></p></p>\n\n<h2 id='dev_installation-section-using-the-cdn'>Using the CDN</h2>\n\n<p>Instead of downloading CKEditor to your server and hosting it you can also use the CDN version. Go to the <a href=\"http://cdn.ckeditor.com/\">official CKEditor CDN</a> page for more details.</p>\n\n<h2 id='dev_installation-section-next-steps'>Next Steps</h2>\n\n<p>Go ahead and play a bit more with the sample; try to change your configuration as suggested to customize it. And when you are ready to dive a bit deeper into CKEditor, you can try the following:</p>\n\n<ol>\n<li>Check the <a href=\"#!/guide/dev_configuration\">Setting Configuration</a> article to see how to adjust the editor to your needs.</li>\n<li>Get familiar with <a href=\"#!/guide/dev_acf\">Advanced Content Filter</a>. This is a useful tool that adjusts the content inserted into CKEditor to the features that are enabled and filters out disallowed content.</li>\n<li><a href=\"#!/guide/dev_toolbar\">Modify your toolbar</a> to only include the features that you need. You can find the useful visual toolbar configurator directly in your editor sample.</li>\n<li>Learn about CKEditor features in the <a href=\"#!/guide/dev_features\">Functionality Overview</a> section.</li>\n<li>Visit the <a href=\"..\">CKEditor SDK</a> to see the <strong>huge collection of working editor samples</strong> showcasing its features, with source code readily available to see and download.</li>\n<li>Browse the <a href=\"http://ckeditor.com/addons/plugins/all\">Add-ons Repository</a> for some additional plugins or skins.</li>\n<li>Use <a href=\"http://ckeditor.com/builder\">CKBuilder</a> to create your custom CKEditor build.</li>\n<li>Browse the <a href=\"#!/guide\">Developer's Guide</a> for some further ideas on what to do with CKEditor and join the CKEditor community at <a href=\"http://stackoverflow.com/questions/tagged/ckeditors\">Stack Overflow</a> to discuss all things CKEditor with fellow developers!</li>\n</ol>\n\n","title":"Quick Start Guide","meta_description":"How to download, install, and use CKEditor.","meta_keywords":"ckeditor, editor, wysiwyg, online, download, downloading, install, installation, sample, example"});