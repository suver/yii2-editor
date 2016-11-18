Ext.data.JsonP.CKEDITOR_commandDefinition({"tagname":"class","name":"CKEDITOR.commandDefinition","autodetected":{},"files":[{"filename":"commanddefinition.js","href":"commanddefinition.html#CKEDITOR-commandDefinition"}],"abstract":true,"members":[{"name":"async","tagname":"property","owner":"CKEDITOR.commandDefinition","id":"property-async","meta":{}},{"name":"canUndo","tagname":"property","owner":"CKEDITOR.commandDefinition","id":"property-canUndo","meta":{}},{"name":"context","tagname":"property","owner":"CKEDITOR.commandDefinition","id":"property-context","meta":{}},{"name":"contextSensitive","tagname":"property","owner":"CKEDITOR.commandDefinition","id":"property-contextSensitive","meta":{}},{"name":"editorFocus","tagname":"property","owner":"CKEDITOR.commandDefinition","id":"property-editorFocus","meta":{}},{"name":"modes","tagname":"property","owner":"CKEDITOR.commandDefinition","id":"property-modes","meta":{}},{"name":"readOnly","tagname":"property","owner":"CKEDITOR.commandDefinition","id":"property-readOnly","meta":{}},{"name":"startDisabled","tagname":"property","owner":"CKEDITOR.commandDefinition","id":"property-startDisabled","meta":{}},{"name":"exec","tagname":"method","owner":"CKEDITOR.commandDefinition","id":"method-exec","meta":{}},{"name":"refresh","tagname":"method","owner":"CKEDITOR.commandDefinition","id":"method-refresh","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-CKEDITOR.commandDefinition","component":false,"superclasses":[],"subclasses":["CKEDITOR.command","CKEDITOR.plugins.indent.genericDefinition"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/CKEDITOR.command' rel='CKEDITOR.command' class='docClass'>CKEDITOR.command</a></div><div class='dependency'><a href='#!/api/CKEDITOR.plugins.indent.genericDefinition' rel='CKEDITOR.plugins.indent.genericDefinition' class='docClass'>CKEDITOR.plugins.indent.genericDefinition</a></div><h4>Files</h4><div class='dependency'><a href='source/commanddefinition.html#CKEDITOR-commandDefinition' target='_blank'>commanddefinition.js</a></div></pre><div class='doc-contents'><p>Virtual class that illustrates the features of command objects to be\npassed to the <a href=\"#!/api/CKEDITOR.editor-method-addCommand\" rel=\"CKEDITOR.editor-method-addCommand\" class=\"docClass\">CKEDITOR.editor.addCommand</a> function.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-async' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.commandDefinition'>CKEDITOR.commandDefinition</span><br/><a href='source/commanddefinition.html#CKEDITOR-commandDefinition-property-async' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.commandDefinition-property-async' class='name expandable'>async</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether the command is asynchronous, which means that the\nCKEDITOR.editor.afterCommandExec event will be fired by the...</div><div class='long'><p>Whether the command is asynchronous, which means that the\n<a href=\"#!/api/CKEDITOR.editor-event-afterCommandExec\" rel=\"CKEDITOR.editor-event-afterCommandExec\" class=\"docClass\">CKEDITOR.editor.afterCommandExec</a> event will be fired by the\ncommand itself manually, and that the return value of this command is not to\nbe returned by the <a href=\"#!/api/CKEDITOR.commandDefinition-method-exec\" rel=\"CKEDITOR.commandDefinition-method-exec\" class=\"docClass\">exec</a> function.</p>\n\n<pre><code>    editorInstance.addCommand( 'loadOptions', {\n        exec: function( editor ) {\n            // Asynchronous operation below.\n            <a href=\"#!/api/CKEDITOR.ajax-method-loadXml\" rel=\"CKEDITOR.ajax-method-loadXml\" class=\"docClass\">CKEDITOR.ajax.loadXml</a>( 'data.xml', function() {\n                editor.fire( 'afterCommandExec' );\n            } );\n        },\n        async: true // The command need some time to complete after exec function returns.\n    } );\n</code></pre>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-canUndo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.commandDefinition'>CKEDITOR.commandDefinition</span><br/><a href='source/commanddefinition.html#CKEDITOR-commandDefinition-property-canUndo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.commandDefinition-property-canUndo' class='name expandable'>canUndo</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether the command need to be hooked into the redo/undo system. ...</div><div class='long'><p>Whether the command need to be hooked into the redo/undo system.</p>\n\n<pre><code>editorInstance.addCommand( 'alertName', {\n    exec: function( editor ) {\n        alert( editor.name );\n    },\n    canUndo: false // No support for undo/redo.\n} );\n</code></pre>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-context' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.commandDefinition'>CKEDITOR.commandDefinition</span><br/><a href='source/commanddefinition.html#CKEDITOR-commandDefinition-property-context' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.commandDefinition-property-context' class='name expandable'>context</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the element name used to reflect the command state on selection changes. ...</div><div class='long'><p>Sets the element name used to reflect the command state on selection changes.\nIf the selection is in a place where the element is not allowed, the command\nwill be disabled.\nSetting this property overrides <a href=\"#!/api/CKEDITOR.commandDefinition-property-contextSensitive\" rel=\"CKEDITOR.commandDefinition-property-contextSensitive\" class=\"docClass\">contextSensitive</a> to <code>true</code>.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-contextSensitive' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.commandDefinition'>CKEDITOR.commandDefinition</span><br/><a href='source/commanddefinition.html#CKEDITOR-commandDefinition-property-contextSensitive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.commandDefinition-property-contextSensitive' class='name expandable'>contextSensitive</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates that this command is sensible to the selection context. ...</div><div class='long'><p>Indicates that this command is sensible to the selection context.\nIf <code>true</code>, the <a href=\"#!/api/CKEDITOR.command-method-refresh\" rel=\"CKEDITOR.command-method-refresh\" class=\"docClass\">CKEDITOR.command.refresh</a> method will be\ncalled for this command on selection changes, with a single parameter\nrepresenting the current elements path.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-editorFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.commandDefinition'>CKEDITOR.commandDefinition</span><br/><a href='source/commanddefinition.html#CKEDITOR-commandDefinition-property-editorFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.commandDefinition-property-editorFocus' class='name expandable'>editorFocus</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether the command should give focus to the editor before execution. ...</div><div class='long'><p>Whether the command should give focus to the editor before execution.</p>\n\n<pre><code>editorInstance.addCommand( 'maximize', {\n        exec: function( editor ) {\n        // ...\n    },\n    editorFocus: false // The command doesn't require focusing the editing document.\n} );\n</code></pre>\n\n<p>See also <a href=\"#!/api/CKEDITOR.command-property-editorFocus\" rel=\"CKEDITOR.command-property-editorFocus\" class=\"docClass\">CKEDITOR.command.editorFocus</a>.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-modes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.commandDefinition'>CKEDITOR.commandDefinition</span><br/><a href='source/commanddefinition.html#CKEDITOR-commandDefinition-property-modes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.commandDefinition-property-modes' class='name expandable'>modes</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The editor modes within which the command can be executed. ...</div><div class='long'><p>The editor modes within which the command can be executed. The execution\nwill have no action if the current mode is not listed in this property.</p>\n\n<pre><code>editorInstance.addCommand( 'link', {\n    exec: function( editor ) {\n        // ...\n    },\n    modes: { wysiwyg:1 } // Command is available in wysiwyg mode only.\n} );\n</code></pre>\n\n<p>See also <a href=\"#!/api/CKEDITOR.command-property-modes\" rel=\"CKEDITOR.command-property-modes\" class=\"docClass\">CKEDITOR.command.modes</a>.</p>\n<p>Defaults to: <code>{ wysiwyg:1 }</code></p></div></div></div><div id='property-readOnly' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.commandDefinition'>CKEDITOR.commandDefinition</span><br/><a href='source/commanddefinition.html#CKEDITOR-commandDefinition-property-readOnly' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.commandDefinition-property-readOnly' class='name expandable'>readOnly</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether the command should be enabled in the read-only mode. ...</div><div class='long'><p>Whether the command should be enabled in the <a href=\"#!/api/CKEDITOR.editor-method-setReadOnly\" rel=\"CKEDITOR.editor-method-setReadOnly\" class=\"docClass\">read-only mode</a>.</p>\n<p>Defaults to: <code>false</code></p>        <p>Available since: <b>4.0</b></p>\n</div></div></div><div id='property-startDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.commandDefinition'>CKEDITOR.commandDefinition</span><br/><a href='source/commanddefinition.html#CKEDITOR-commandDefinition-property-startDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.commandDefinition-property-startDisabled' class='name expandable'>startDisabled</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether the command state should be set to CKEDITOR.TRISTATE_DISABLED on startup. ...</div><div class='long'><p>Whether the command state should be set to <a href=\"#!/api/CKEDITOR-property-TRISTATE_DISABLED\" rel=\"CKEDITOR-property-TRISTATE_DISABLED\" class=\"docClass\">CKEDITOR.TRISTATE_DISABLED</a> on startup.</p>\n\n<pre><code>editorInstance.addCommand( 'unlink', {\n    exec: function( editor ) {\n        // ...\n    },\n    startDisabled: true // Command is unavailable until selection is inside a link.\n} );\n</code></pre>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-exec' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.commandDefinition'>CKEDITOR.commandDefinition</span><br/><a href='source/commanddefinition.html#CKEDITOR-commandDefinition-method-exec' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.commandDefinition-method-exec' class='name expandable'>exec</a>( <span class='pre'>editor, [data]</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>The function to be fired when the commend is executed. ...</div><div class='long'><p>The function to be fired when the commend is executed.</p>\n\n<pre><code>editorInstance.addCommand( 'sample', {\n    exec: function( editor ) {\n        alert( 'Executing a command for the editor name \"' + editor.name + '\"!' );\n    }\n} );\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : <a href=\"#!/api/CKEDITOR.editor\" rel=\"CKEDITOR.editor\" class=\"docClass\">CKEDITOR.editor</a><div class='sub-desc'><p>The editor within which run the command.</p>\n</div></li><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'><p>Additional data to be used to execute the command.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the command has been successfully executed.\nDefaults to <code>true</code>, if nothing is returned.</p>\n</div></li></ul></div></div></div><div id='method-refresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.commandDefinition'>CKEDITOR.commandDefinition</span><br/><a href='source/commanddefinition.html#CKEDITOR-commandDefinition-method-refresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.commandDefinition-method-refresh' class='name expandable'>refresh</a>( <span class='pre'>editor, path</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defined by command definition a function to determinate the command state, it will be invoked\nwhen editor has it's st...</div><div class='long'><p>Defined by command definition a function to determinate the command state, it will be invoked\nwhen editor has it's <code>states</code> or <code>selection</code> changed.</p>\n\n<p><strong>Note:</strong> The function provided must be calling <a href=\"#!/api/CKEDITOR.command-method-setState\" rel=\"CKEDITOR.command-method-setState\" class=\"docClass\">CKEDITOR.command.setState</a> in all circumstance,\nif it is intended to update the command state.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : <a href=\"#!/api/CKEDITOR.editor\" rel=\"CKEDITOR.editor\" class=\"docClass\">CKEDITOR.editor</a><div class='sub-desc'>\n</div></li><li><span class='pre'>path</span> : <a href=\"#!/api/CKEDITOR.dom.elementPath\" rel=\"CKEDITOR.dom.elementPath\" class=\"docClass\">CKEDITOR.dom.elementPath</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"abstract":true}});