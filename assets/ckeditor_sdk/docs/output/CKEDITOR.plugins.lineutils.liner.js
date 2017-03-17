Ext.data.JsonP.CKEDITOR_plugins_lineutils_liner({"tagname":"class","name":"CKEDITOR.plugins.lineutils.liner","autodetected":{},"files":[{"filename":"plugin.js","href":"plugin53.html#CKEDITOR-plugins-lineutils-liner"}],"private":true,"members":[{"name":"constructor","tagname":"method","owner":"CKEDITOR.plugins.lineutils.liner","id":"method-constructor","meta":{}},{"name":"addLine","tagname":"method","owner":"CKEDITOR.plugins.lineutils.liner","id":"method-addLine","meta":{}},{"name":"cleanup","tagname":"method","owner":"CKEDITOR.plugins.lineutils.liner","id":"method-cleanup","meta":{}},{"name":"getClientRect","tagname":"method","owner":"CKEDITOR.plugins.lineutils.liner","id":"method-getClientRect","meta":{}},{"name":"getStyle","tagname":"method","owner":"CKEDITOR.plugins.lineutils.liner","id":"method-getStyle","meta":{}},{"name":"hideLine","tagname":"method","owner":"CKEDITOR.plugins.lineutils.liner","id":"method-hideLine","meta":{}},{"name":"hideVisible","tagname":"method","owner":"CKEDITOR.plugins.lineutils.liner","id":"method-hideVisible","meta":{}},{"name":"placeLine","tagname":"method","owner":"CKEDITOR.plugins.lineutils.liner","id":"method-placeLine","meta":{}},{"name":"prepare","tagname":"method","owner":"CKEDITOR.plugins.lineutils.liner","id":"method-prepare","meta":{}},{"name":"queryViewport","tagname":"method","owner":"CKEDITOR.plugins.lineutils.liner","id":"method-queryViewport","meta":{}},{"name":"removeAll","tagname":"method","owner":"CKEDITOR.plugins.lineutils.liner","id":"method-removeAll","meta":{}},{"name":"showLine","tagname":"method","owner":"CKEDITOR.plugins.lineutils.liner","id":"method-showLine","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-CKEDITOR.plugins.lineutils.liner","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner' target='_blank'>plugin.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>A utility that draws horizontal lines in DOM according to locations\nreturned by <a href=\"#!/api/CKEDITOR.plugins.lineutils.locator\" rel=\"CKEDITOR.plugins.lineutils.locator\" class=\"docClass\">CKEDITOR.plugins.lineutils.locator</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.lineutils.liner'>CKEDITOR.plugins.lineutils.liner</span><br/><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CKEDITOR.plugins.lineutils.liner-method-constructor' class='name expandable'>CKEDITOR.plugins.lineutils.liner</a>( <span class='pre'>editor, def</span> ) : <a href=\"#!/api/CKEDITOR.plugins.lineutils.liner\" rel=\"CKEDITOR.plugins.lineutils.liner\" class=\"docClass\">CKEDITOR.plugins.lineutils.liner</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a Liner class instance. ...</div><div class='long'><p>Creates a Liner class instance.</p>\n        <p>Available since: <b>4.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : <a href=\"#!/api/CKEDITOR.editor\" rel=\"CKEDITOR.editor\" class=\"docClass\">CKEDITOR.editor</a><div class='sub-desc'><p>Editor instance that Liner belongs to.</p>\n</div></li><li><span class='pre'>def</span> : Object<div class='sub-desc'><p>Liner's definition.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.plugins.lineutils.liner\" rel=\"CKEDITOR.plugins.lineutils.liner\" class=\"docClass\">CKEDITOR.plugins.lineutils.liner</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addLine' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.lineutils.liner'>CKEDITOR.plugins.lineutils.liner</span><br/><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner-method-addLine' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.lineutils.liner-method-addLine' class='name expandable'>addLine</a>( <span class='pre'></span> ) : <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a new line to DOM. ...</div><div class='long'><p>Adds a new line to DOM.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a></span><div class='sub-desc'><p>A brand-new line.</p>\n</div></li></ul></div></div></div><div id='method-cleanup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.lineutils.liner'>CKEDITOR.plugins.lineutils.liner</span><br/><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner-method-cleanup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.lineutils.liner-method-cleanup' class='name expandable'>cleanup</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Hides all visible lines that do not belong to current hash\nand no longer represent relations (locations). ...</div><div class='long'><p>Hides all visible lines that do not belong to current hash\nand no longer represent relations (locations).</p>\n\n<p>See also: <a href=\"#!/api/CKEDITOR.plugins.lineutils.liner-method-prepare\" rel=\"CKEDITOR.plugins.lineutils.liner-method-prepare\" class=\"docClass\">prepare</a>.</p>\n</div></div></div><div id='method-getClientRect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.lineutils.liner'>CKEDITOR.plugins.lineutils.liner</span><br/><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner-method-getClientRect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.lineutils.liner-method-getClientRect' class='name expandable'>getClientRect</a>( <span class='pre'>el</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns boundingClientRect of an element, shifted by the position\nof container when the container is not static (#131...</div><div class='long'><p>Returns <code>boundingClientRect</code> of an element, shifted by the position\nof <code>container</code> when the container is not <code>static</code> (#13155).</p>\n\n<p>See also: <a href=\"#!/api/CKEDITOR.dom.element-method-getClientRect\" rel=\"CKEDITOR.dom.element-method-getClientRect\" class=\"docClass\">CKEDITOR.dom.element.getClientRect</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a><div class='sub-desc'><p>A DOM element.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>A shifted rect, extended by <code>relativeY</code> and <code>relativeX</code> properties.</p>\n</div></li></ul></div></div></div><div id='method-getStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.lineutils.liner'>CKEDITOR.plugins.lineutils.liner</span><br/><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner-method-getStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.lineutils.liner-method-getStyle' class='name expandable'>getStyle</a>( <span class='pre'>uid, type</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a style set to be used by the line, representing a particular\nrelation (location). ...</div><div class='long'><p>Creates a style set to be used by the line, representing a particular\nrelation (location).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uid</span> : Number<div class='sub-desc'><p>Unique identifier of the relation.</p>\n</div></li><li><span class='pre'>type</span> : Number<div class='sub-desc'><p>Type of the relation.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing styles.</p>\n</div></li></ul></div></div></div><div id='method-hideLine' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.lineutils.liner'>CKEDITOR.plugins.lineutils.liner</span><br/><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner-method-hideLine' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.lineutils.liner-method-hideLine' class='name expandable'>hideLine</a>( <span class='pre'>line</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Hides a given line. ...</div><div class='long'><p>Hides a given line.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>line</span> : <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a><div class='sub-desc'><p>The line to be hidden.</p>\n</div></li></ul></div></div></div><div id='method-hideVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.lineutils.liner'>CKEDITOR.plugins.lineutils.liner</span><br/><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner-method-hideVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.lineutils.liner-method-hideVisible' class='name expandable'>hideVisible</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Hides all visible lines. ...</div><div class='long'><p>Hides all visible lines.</p>\n</div></div></div><div id='method-placeLine' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.lineutils.liner'>CKEDITOR.plugins.lineutils.liner</span><br/><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner-method-placeLine' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.lineutils.liner-method-placeLine' class='name expandable'>placeLine</a>( <span class='pre'>location, [callback]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Shows a line at given location. ...</div><div class='long'><p>Shows a line at given location.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>location</span> : Object<div class='sub-desc'><p>Location object containing the unique identifier of the relation\nand its type. Usually returned by <a href=\"#!/api/CKEDITOR.plugins.lineutils.locator-method-sort\" rel=\"CKEDITOR.plugins.lineutils.locator-method-sort\" class=\"docClass\">CKEDITOR.plugins.lineutils.locator.sort</a>.</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>A callback to be called once the line is shown.</p>\n</div></li></ul></div></div></div><div id='method-prepare' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.lineutils.liner'>CKEDITOR.plugins.lineutils.liner</span><br/><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner-method-prepare' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.lineutils.liner-method-prepare' class='name expandable'>prepare</a>( <span class='pre'>relations, locations</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Assigns a unique hash to the instance that is later used\nto tell unwanted lines from new ones. ...</div><div class='long'><p>Assigns a unique hash to the instance that is later used\nto tell unwanted lines from new ones. This method <strong>must</strong> be called\nbefore a new set of relations is to be visualized so <a href=\"#!/api/CKEDITOR.plugins.lineutils.liner-method-cleanup\" rel=\"CKEDITOR.plugins.lineutils.liner-method-cleanup\" class=\"docClass\">cleanup</a>\neventually hides obsolete lines. This is because lines\nare re-used between <a href=\"#!/api/CKEDITOR.plugins.lineutils.liner-method-placeLine\" rel=\"CKEDITOR.plugins.lineutils.liner-method-placeLine\" class=\"docClass\">placeLine</a> calls and the number of\nnecessary ones may vary depending on the number of relations.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>relations</span> : Object<div class='sub-desc'><p><a href=\"#!/api/CKEDITOR.plugins.lineutils.finder-property-relations\" rel=\"CKEDITOR.plugins.lineutils.finder-property-relations\" class=\"docClass\">CKEDITOR.plugins.lineutils.finder.relations</a>.</p>\n</div></li><li><span class='pre'>locations</span> : Object<div class='sub-desc'><p><a href=\"#!/api/CKEDITOR.plugins.lineutils.locator-property-locations\" rel=\"CKEDITOR.plugins.lineutils.locator-property-locations\" class=\"docClass\">CKEDITOR.plugins.lineutils.locator.locations</a>.</p>\n</div></li></ul></div></div></div><div id='method-queryViewport' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.lineutils.liner'>CKEDITOR.plugins.lineutils.liner</span><br/><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner-method-queryViewport' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.lineutils.liner-method-queryViewport' class='name expandable'>queryViewport</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Queries dimensions of the viewport, editable, frame etc. ...</div><div class='long'><p>Queries dimensions of the viewport, editable, frame etc.\nthat are used for correct positioning of the line.</p>\n</div></div></div><div id='method-removeAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.lineutils.liner'>CKEDITOR.plugins.lineutils.liner</span><br/><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner-method-removeAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.lineutils.liner-method-removeAll' class='name expandable'>removeAll</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Permanently removes all lines (both hidden and visible) from DOM. ...</div><div class='long'><p>Permanently removes all lines (both hidden and visible) from DOM.</p>\n</div></div></div><div id='method-showLine' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.lineutils.liner'>CKEDITOR.plugins.lineutils.liner</span><br/><a href='source/plugin53.html#CKEDITOR-plugins-lineutils-liner-method-showLine' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.lineutils.liner-method-showLine' class='name expandable'>showLine</a>( <span class='pre'>line</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Shows a given line. ...</div><div class='long'><p>Shows a given line.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>line</span> : <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a><div class='sub-desc'><p>The line to be shown.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});