Ext.data.JsonP.skin_sdk_browser_hacks({"guide":"<!--\nCopyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.\nFor licensing, see LICENSE.md.\n-->\n\n\n<h1 id='skin_sdk_browser_hacks-section-dedicated-browser-hacks'>Dedicated Browser Hacks</h1>\n\n<p>Skins are basically CSS styling on the DOM structure that represents the editor. Fortunately the world is going into a direction where browsers are aligning their CSS features to standards, which makes it easier to design CSS that works everywhere.</p>\n\n<p>But still the world is not perfect and we have small differences on CSS among browsers. Additionally, CKEditor must support ancient browsers, which are more limited and buggy.</p>\n\n<p>To make it easier to maintain the skin CSS, CKEditor makes it possible to define browser specific files, which hold all \"hacks\" necessary for them. For example, a skin can contain the <code>editor_ie.c s</code> file with all IE hacks or <code>dialog_opera.css</code> for Opera specific stuff.</p>\n\n<p>A skin must instruct CKEditor to load, for example, <code>editor_ie.css</code> instead of <code>editor.css</code> on IE browsers. This must be done by setting the <code>CKEDITOR.skin.ua_editor</code> value to the list of \"browser files\" available. The same can be done for <code>dialog.css</code>. Check out the <code>skin.js</code> file of the <a href=\"#!/guide/skin_sdk_intro-section-2\">Moono skin</a> for a real example.</p>\n","title":"Browser Hacks","meta_description":"Information about working around browser bugs.","meta_keywords":"ckeditor, editor, wysiwyg, skin, skins, tutorial, sample, sdk, example, development, browser, ie, hack, hacking, workaround, css"});