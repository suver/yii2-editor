Ext.data.JsonP.CKEDITOR_ui_dialog_button({"tagname":"class","name":"CKEDITOR.ui.dialog.button","autodetected":{},"files":[{"filename":"plugin.js","href":"plugin22.html#CKEDITOR-ui-dialog-button"},{"filename":"plugin.js","href":"plugin22.html#CKEDITOR-ui-dialog-button"}],"extends":"CKEDITOR.ui.dialog.uiElement","members":[{"name":"eventProcessors","tagname":"property","owner":"CKEDITOR.ui.dialog.button","id":"property-eventProcessors","meta":{}},{"name":"constructor","tagname":"method","owner":"CKEDITOR.ui.dialog.button","id":"method-constructor","meta":{}},{"name":"accessKeyDown","tagname":"method","owner":"CKEDITOR.ui.dialog.button","id":"method-accessKeyDown","meta":{}},{"name":"accessKeyUp","tagname":"method","owner":"CKEDITOR.ui.dialog.button","id":"method-accessKeyUp","meta":{}},{"name":"click","tagname":"method","owner":"CKEDITOR.ui.dialog.button","id":"method-click","meta":{}},{"name":"disable","tagname":"method","owner":"CKEDITOR.ui.dialog.button","id":"method-disable","meta":{}},{"name":"enable","tagname":"method","owner":"CKEDITOR.ui.dialog.button","id":"method-enable","meta":{}},{"name":"focus","tagname":"method","owner":"CKEDITOR.ui.dialog.uiElement","id":"method-focus","meta":{"chainable":true}},{"name":"getDialog","tagname":"method","owner":"CKEDITOR.ui.dialog.uiElement","id":"method-getDialog","meta":{}},{"name":"getElement","tagname":"method","owner":"CKEDITOR.ui.dialog.uiElement","id":"method-getElement","meta":{}},{"name":"getInputElement","tagname":"method","owner":"CKEDITOR.ui.dialog.uiElement","id":"method-getInputElement","meta":{}},{"name":"getValue","tagname":"method","owner":"CKEDITOR.ui.dialog.uiElement","id":"method-getValue","meta":{}},{"name":"isChanged","tagname":"method","owner":"CKEDITOR.ui.dialog.uiElement","id":"method-isChanged","meta":{}},{"name":"isEnabled","tagname":"method","owner":"CKEDITOR.ui.dialog.button","id":"method-isEnabled","meta":{}},{"name":"isFocusable","tagname":"method","owner":"CKEDITOR.ui.dialog.uiElement","id":"method-isFocusable","meta":{}},{"name":"isVisible","tagname":"method","owner":"CKEDITOR.ui.dialog.button","id":"method-isVisible","meta":{}},{"name":"registerEvents","tagname":"method","owner":"CKEDITOR.ui.dialog.uiElement","id":"method-registerEvents","meta":{"chainable":true}},{"name":"selectParentTab","tagname":"method","owner":"CKEDITOR.ui.dialog.uiElement","id":"method-selectParentTab","meta":{"chainable":true}},{"name":"setValue","tagname":"method","owner":"CKEDITOR.ui.dialog.uiElement","id":"method-setValue","meta":{"chainable":true}},{"name":"change","tagname":"event","owner":"CKEDITOR.ui.dialog.uiElement","id":"event-change","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-CKEDITOR.ui.dialog.button","singleton":null,"private":null,"mixins":[],"requires":[],"uses":[],"component":false,"superclasses":["CKEDITOR.ui.dialog.uiElement"],"subclasses":["CKEDITOR.ui.dialog.fileButton"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/CKEDITOR.ui.dialog.uiElement' rel='CKEDITOR.ui.dialog.uiElement' class='docClass'>CKEDITOR.ui.dialog.uiElement</a><div class='subclass '><strong>CKEDITOR.ui.dialog.button</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/CKEDITOR.ui.dialog.fileButton' rel='CKEDITOR.ui.dialog.fileButton' class='docClass'>CKEDITOR.ui.dialog.fileButton</a></div><h4>Files</h4><div class='dependency'><a href='source/plugin22.html#CKEDITOR-ui-dialog-button' target='_blank'>plugin.js</a></div><div class='dependency'><a href='source/plugin22.html#CKEDITOR-ui-dialog-button' target='_blank'>plugin.js</a></div></pre><div class='doc-contents'><p>A button with a label inside.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-eventProcessors' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.ui.dialog.button'>CKEDITOR.ui.dialog.button</span><br/><a href='source/plugin22.html#CKEDITOR-ui-dialog-button-property-eventProcessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.button-property-eventProcessors' class='name expandable'>eventProcessors</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Defines the <code>onChange</code> event and <code>onClick</code> for button element definitions.</p>\n</div><div class='long'><p>Defines the <code>onChange</code> event and <code>onClick</code> for button element definitions.</p>\n<p>Overrides: <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement-property-eventProcessors\" rel=\"CKEDITOR.ui.dialog.uiElement-property-eventProcessors\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement.eventProcessors</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.ui.dialog.button'>CKEDITOR.ui.dialog.button</span><br/><a href='source/plugin22.html#CKEDITOR-ui-dialog-button-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CKEDITOR.ui.dialog.button-method-constructor' class='name expandable'>CKEDITOR.ui.dialog.button</a>( <span class='pre'>dialog, elementDefinition, htmlList</span> ) : <a href=\"#!/api/CKEDITOR.ui.dialog.button\" rel=\"CKEDITOR.ui.dialog.button\" class=\"docClass\">CKEDITOR.ui.dialog.button</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a button class instance. ...</div><div class='long'><p>Creates a button class instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dialog</span> : <a href=\"#!/api/CKEDITOR.dialog\" rel=\"CKEDITOR.dialog\" class=\"docClass\">CKEDITOR.dialog</a><div class='sub-desc'><p>Parent dialog window object.</p>\n</div></li><li><span class='pre'>elementDefinition</span> : <a href=\"#!/api/CKEDITOR.dialog.definition.uiElement\" rel=\"CKEDITOR.dialog.definition.uiElement\" class=\"docClass\">CKEDITOR.dialog.definition.uiElement</a><div class='sub-desc'><p>The element definition. Accepted fields:</p>\n\n<ul>\n<li><code>label</code> (Required) The button label.</li>\n<li><code>disabled</code> (Optional) Set to <code>true</code> if you want the\n  button to appear in the disabled state.</li>\n</ul>\n\n</div></li><li><span class='pre'>htmlList</span> : Array<div class='sub-desc'><p>List of HTML code to output to.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.ui.dialog.button\" rel=\"CKEDITOR.ui.dialog.button\" class=\"docClass\">CKEDITOR.ui.dialog.button</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement-method-constructor\" rel=\"CKEDITOR.ui.dialog.uiElement-method-constructor\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement.constructor</a></p></div></div></div><div id='method-accessKeyDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.ui.dialog.button'>CKEDITOR.ui.dialog.button</span><br/><a href='source/plugin22.html#CKEDITOR-ui-dialog-button-method-accessKeyDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.button-method-accessKeyDown' class='name expandable'>accessKeyDown</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handler for the element's access key down event. ...</div><div class='long'><p>Handler for the element's access key down event. Simulates a mouse\ndown to the button.</p>\n<p>Overrides: <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement-method-accessKeyDown\" rel=\"CKEDITOR.ui.dialog.uiElement-method-accessKeyDown\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement.accessKeyDown</a></p></div></div></div><div id='method-accessKeyUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.ui.dialog.button'>CKEDITOR.ui.dialog.button</span><br/><a href='source/plugin22.html#CKEDITOR-ui-dialog-button-method-accessKeyUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.button-method-accessKeyUp' class='name expandable'>accessKeyUp</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handler for the element's access key up event. ...</div><div class='long'><p>Handler for the element's access key up event. Simulates a click to\nthe button.</p>\n<p>Overrides: <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement-method-accessKeyUp\" rel=\"CKEDITOR.ui.dialog.uiElement-method-accessKeyUp\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement.accessKeyUp</a></p></div></div></div><div id='method-click' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.ui.dialog.button'>CKEDITOR.ui.dialog.button</span><br/><a href='source/plugin22.html#CKEDITOR-ui-dialog-button-method-click' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.button-method-click' class='name expandable'>click</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Simulates a click to the button. ...</div><div class='long'><p>Simulates a click to the button.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Return value of the <code>click</code> event.</p>\n</div></li></ul></div></div></div><div id='method-disable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.ui.dialog.button'>CKEDITOR.ui.dialog.button</span><br/><a href='source/plugin22.html#CKEDITOR-ui-dialog-button-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.button-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disables the button. ...</div><div class='long'><p>Disables the button.</p>\n<p>Overrides: <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement-method-disable\" rel=\"CKEDITOR.ui.dialog.uiElement-method-disable\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement.disable</a></p></div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.ui.dialog.button'>CKEDITOR.ui.dialog.button</span><br/><a href='source/plugin22.html#CKEDITOR-ui-dialog-button-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.button-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Enables the button. ...</div><div class='long'><p>Enables the button.</p>\n<p>Overrides: <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement-method-enable\" rel=\"CKEDITOR.ui.dialog.uiElement-method-enable\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement.enable</a></p></div></div></div><div id='method-focus' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CKEDITOR.ui.dialog.uiElement' rel='CKEDITOR.ui.dialog.uiElement' class='defined-in docClass'>CKEDITOR.ui.dialog.uiElement</a><br/><a href='source/plugin20.html#CKEDITOR-ui-dialog-uiElement-method-focus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.uiElement-method-focus' class='name expandable'>focus</a>( <span class='pre'></span> ) : <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement\" rel=\"CKEDITOR.ui.dialog.uiElement\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Puts the focus to the UI object. ...</div><div class='long'><p>Puts the focus to the UI object. Switches tabs if the UI object isn't in the active tab page.</p>\n\n<pre><code>uiElement.focus();\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.ui.dialog.uiElement\" rel=\"CKEDITOR.ui.dialog.uiElement\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-getDialog' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CKEDITOR.ui.dialog.uiElement' rel='CKEDITOR.ui.dialog.uiElement' class='defined-in docClass'>CKEDITOR.ui.dialog.uiElement</a><br/><a href='source/plugin20.html#CKEDITOR-ui-dialog-uiElement-method-getDialog' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.uiElement-method-getDialog' class='name expandable'>getDialog</a>( <span class='pre'></span> ) : <a href=\"#!/api/CKEDITOR.dialog\" rel=\"CKEDITOR.dialog\" class=\"docClass\">CKEDITOR.dialog</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the parent dialog object containing this UI element. ...</div><div class='long'><p>Gets the parent dialog object containing this UI element.</p>\n\n<pre><code>var dialog = uiElement.getDialog();\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.dialog\" rel=\"CKEDITOR.dialog\" class=\"docClass\">CKEDITOR.dialog</a></span><div class='sub-desc'><p>Parent dialog object.</p>\n</div></li></ul></div></div></div><div id='method-getElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CKEDITOR.ui.dialog.uiElement' rel='CKEDITOR.ui.dialog.uiElement' class='defined-in docClass'>CKEDITOR.ui.dialog.uiElement</a><br/><a href='source/plugin20.html#CKEDITOR-ui-dialog-uiElement-method-getElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.uiElement-method-getElement' class='name expandable'>getElement</a>( <span class='pre'></span> ) : <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the root DOM element of this dialog UI object. ...</div><div class='long'><p>Gets the root DOM element of this dialog UI object.</p>\n\n<pre><code>uiElement.getElement().hide();\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a></span><div class='sub-desc'><p>Root DOM element of UI object.</p>\n</div></li></ul></div></div></div><div id='method-getInputElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CKEDITOR.ui.dialog.uiElement' rel='CKEDITOR.ui.dialog.uiElement' class='defined-in docClass'>CKEDITOR.ui.dialog.uiElement</a><br/><a href='source/plugin20.html#CKEDITOR-ui-dialog-uiElement-method-getInputElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.uiElement-method-getInputElement' class='name expandable'>getInputElement</a>( <span class='pre'></span> ) : <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the DOM element that the user inputs values. ...</div><div class='long'><p>Gets the DOM element that the user inputs values.</p>\n\n<p>This function is used by <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement-method-setValue\" rel=\"CKEDITOR.ui.dialog.uiElement-method-setValue\" class=\"docClass\">setValue</a>, <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement-method-getValue\" rel=\"CKEDITOR.ui.dialog.uiElement-method-getValue\" class=\"docClass\">getValue</a> and <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement-method-focus\" rel=\"CKEDITOR.ui.dialog.uiElement-method-focus\" class=\"docClass\">focus</a>. It should\nbe overrided in child classes where the input element isn't the root\nelement.</p>\n\n<pre><code>var rawValue = textInput.getInputElement().$.value;\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a></span><div class='sub-desc'><p>The element where the user input values.</p>\n</div></li></ul></div></div></div><div id='method-getValue' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CKEDITOR.ui.dialog.uiElement' rel='CKEDITOR.ui.dialog.uiElement' class='defined-in docClass'>CKEDITOR.ui.dialog.uiElement</a><br/><a href='source/plugin20.html#CKEDITOR-ui-dialog-uiElement-method-getValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.uiElement-method-getValue' class='name expandable'>getValue</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the current value of this dialog UI object. ...</div><div class='long'><p>Gets the current value of this dialog UI object.</p>\n\n<pre><code>var myValue = uiElement.getValue();\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The current value.</p>\n</div></li></ul></div></div></div><div id='method-isChanged' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CKEDITOR.ui.dialog.uiElement' rel='CKEDITOR.ui.dialog.uiElement' class='defined-in docClass'>CKEDITOR.ui.dialog.uiElement</a><br/><a href='source/plugin20.html#CKEDITOR-ui-dialog-uiElement-method-isChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.uiElement-method-isChanged' class='name expandable'>isChanged</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Tells whether the UI object's value has changed. ...</div><div class='long'><p>Tells whether the UI object's value has changed.</p>\n\n<pre><code>if ( uiElement.isChanged() )\n    confirm( 'Value changed! Continue?' );\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if changed, <code>false</code> if not changed.</p>\n</div></li></ul></div></div></div><div id='method-isEnabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.ui.dialog.button'>CKEDITOR.ui.dialog.button</span><br/><a href='source/plugin22.html#CKEDITOR-ui-dialog-button-method-isEnabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.button-method-isEnabled' class='name expandable'>isEnabled</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks whether a field is enabled. ...</div><div class='long'><p>Checks whether a field is enabled. Fields can be disabled by using the\n<a href=\"#!/api/CKEDITOR.ui.dialog.button-method-disable\" rel=\"CKEDITOR.ui.dialog.button-method-disable\" class=\"docClass\">disable</a> method and enabled by using the <a href=\"#!/api/CKEDITOR.ui.dialog.button-method-enable\" rel=\"CKEDITOR.ui.dialog.button-method-enable\" class=\"docClass\">enable</a> method.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement-method-isEnabled\" rel=\"CKEDITOR.ui.dialog.uiElement-method-isEnabled\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement.isEnabled</a></p></div></div></div><div id='method-isFocusable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CKEDITOR.ui.dialog.uiElement' rel='CKEDITOR.ui.dialog.uiElement' class='defined-in docClass'>CKEDITOR.ui.dialog.uiElement</a><br/><a href='source/plugin20.html#CKEDITOR-ui-dialog-uiElement-method-isFocusable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.uiElement-method-isFocusable' class='name expandable'>isFocusable</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Determines whether an UI element is focus-able or not. ...</div><div class='long'><p>Determines whether an UI element is focus-able or not.\nFocus-able is defined as being both visible and enabled.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the UI element can be focused.</p>\n</div></li></ul></div></div></div><div id='method-isVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.ui.dialog.button'>CKEDITOR.ui.dialog.button</span><br/><a href='source/plugin22.html#CKEDITOR-ui-dialog-button-method-isVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.button-method-isVisible' class='name expandable'>isVisible</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks whether a field is visible. ...</div><div class='long'><p>Checks whether a field is visible.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement-method-isVisible\" rel=\"CKEDITOR.ui.dialog.uiElement-method-isVisible\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement.isVisible</a></p></div></div></div><div id='method-registerEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CKEDITOR.ui.dialog.uiElement' rel='CKEDITOR.ui.dialog.uiElement' class='defined-in docClass'>CKEDITOR.ui.dialog.uiElement</a><br/><a href='source/plugin20.html#CKEDITOR-ui-dialog-uiElement-method-registerEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.uiElement-method-registerEvents' class='name expandable'>registerEvents</a>( <span class='pre'>definition</span> ) : <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement\" rel=\"CKEDITOR.ui.dialog.uiElement\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Registers the on* event handlers defined in the element definition. ...</div><div class='long'><p>Registers the <code>on*</code> event handlers defined in the element definition.</p>\n\n<p>The default behavior of this function is:</p>\n\n<ol>\n<li>If the on* event is defined in the class's eventProcesors list,\n then the registration is delegated to the corresponding function\n in the eventProcessors list.</li>\n<li>If the on* event is not defined in the eventProcessors list, then\n register the event handler under the corresponding DOM event of\n the UI element's input DOM element (as defined by the return value\n of <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement-method-getInputElement\" rel=\"CKEDITOR.ui.dialog.uiElement-method-getInputElement\" class=\"docClass\">getInputElement</a>).</li>\n</ol>\n\n\n<p>This function is only called at UI element instantiation, but can\nbe overridded in child classes if they require more flexibility.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>definition</span> : <a href=\"#!/api/CKEDITOR.dialog.definition.uiElement\" rel=\"CKEDITOR.dialog.definition.uiElement\" class=\"docClass\">CKEDITOR.dialog.definition.uiElement</a><div class='sub-desc'><p>The UI element\ndefinition.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.ui.dialog.uiElement\" rel=\"CKEDITOR.ui.dialog.uiElement\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-selectParentTab' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CKEDITOR.ui.dialog.uiElement' rel='CKEDITOR.ui.dialog.uiElement' class='defined-in docClass'>CKEDITOR.ui.dialog.uiElement</a><br/><a href='source/plugin20.html#CKEDITOR-ui-dialog-uiElement-method-selectParentTab' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.uiElement-method-selectParentTab' class='name expandable'>selectParentTab</a>( <span class='pre'></span> ) : <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement\" rel=\"CKEDITOR.ui.dialog.uiElement\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Selects the parent tab of this element. ...</div><div class='long'><p>Selects the parent tab of this element. Usually called by focus() or overridden focus() methods.</p>\n\n<pre><code>focus : function() {\n    this.selectParentTab();\n    // do something else.\n}\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.ui.dialog.uiElement\" rel=\"CKEDITOR.ui.dialog.uiElement\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setValue' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CKEDITOR.ui.dialog.uiElement' rel='CKEDITOR.ui.dialog.uiElement' class='defined-in docClass'>CKEDITOR.ui.dialog.uiElement</a><br/><a href='source/plugin20.html#CKEDITOR-ui-dialog-uiElement-method-setValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.uiElement-method-setValue' class='name expandable'>setValue</a>( <span class='pre'>value, noChangeEvent</span> ) : <a href=\"#!/api/CKEDITOR.ui.dialog.uiElement\" rel=\"CKEDITOR.ui.dialog.uiElement\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets the value of this dialog UI object. ...</div><div class='long'><p>Sets the value of this dialog UI object.</p>\n\n<pre><code>uiElement.setValue( 'Dingo' );\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li><li><span class='pre'>noChangeEvent</span> : Boolean<div class='sub-desc'><p>Internal commit, to supress <code>change</code> event on this element.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.ui.dialog.uiElement\" rel=\"CKEDITOR.ui.dialog.uiElement\" class=\"docClass\">CKEDITOR.ui.dialog.uiElement</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-change' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CKEDITOR.ui.dialog.uiElement' rel='CKEDITOR.ui.dialog.uiElement' class='defined-in docClass'>CKEDITOR.ui.dialog.uiElement</a><br/><a href='source/plugin22.html#CKEDITOR-ui-dialog-uiElement-event-change' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.ui.dialog.uiElement-event-change' class='name expandable'>change</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the value of the uiElement is changed. ...</div><div class='long'><p>Fired when the value of the uiElement is changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/CKEDITOR.eventInfo\" rel=\"CKEDITOR.eventInfo\" class=\"docClass\">CKEDITOR.eventInfo</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});