"use strict";

if (!Object.create) {

    Object.create = function (proto) {
        function F() {
        }

        F.prototype = proto;
        return new F;
    };

}


/**
 * SuverYii2Editor
 *
 * Singleton object for SimpleFS Core
 */
var SuverYii2Editor = (function () {

    var SuverYii2Editor = function (settings) {


        if (settings == undefined) {
            settings = {
                key: undefined,
                name: undefined,
            }
        }

        this.element = settings.element || undefined;
        this.settings = settings.settings || {};

        if (settings.methods != undefined) {
            this.methods(settings.methods);
        }

        this.init(this.element);
    };

    /**
     * setMessage
     *
     * @param message
     *
     * @returns {*}
     */
    SuverYii2Editor.prototype.init = function (settings) {
        this.settings = settings;
        var self = this;

    };

    /**
     * setMessage
     *
     * @param message
     *
     * @returns {*}
     */
    SuverYii2Editor.prototype.initManual = function (selector) {
        var self = this;

        console.log('*1-initManual');
        $(document).off("click.data-modern-form-element", selector);
        $(document).on("click.data-modern-form-element", selector, function () {
            if(!$(this).is('[contenteditable=true]')) {
                var el = $(this);

                el.attr('contenteditable', true);

                console.log('*2+', el.html());
            }
        });

        $(document).off("focusout.data-modern-form-element", selector);
        $(document).on("focusout.data-modern-form-element", selector, function () {
            if($(this).is('[contenteditable=true]')) {
                var el = $(this);

                var fl = $(this).attr('contenteditable', false);

                console.log('*2-', el.html());
            }
        });
    };

    /**
     * setMessage
     *
     * @param message
     *
     * @returns {*}
     */
    SuverYii2Editor.prototype.initMarkdown = function (selector) {
        var self = this;

        var options = {hideable:true,resize:'vertical'};

        $(selector).markdown(options);

        console.log('*1-initMarkdown');

        $(document).off("click.data-modern-form-element", selector);
        $(document).on("click.data-modern-form-element", selector, function () {
            var el = $(this);

            el.markdown(options).showEditor();

            console.log('*2+', el.html());
        });

        $(document).off("focusout.data-modern-form-element", selector);
        $(document).on("focusout.data-modern-form-element", selector, function () {
            var el = $(this);

            el.markdown(options).showEditor();

            console.log('*2-', el.html());
        });
    };

    /**
     * setMessage
     *
     * @param message
     *
     * @returns {*}
     */
    SuverYii2Editor.prototype.initCKEditor = function (selector) {
        var self = this;

        var options = {hideable:true,resize:'vertical'};

        CKEDITOR.replace( $(selector).get(0) );

        console.log('*1-initCKEditor');

        $(document).off("click.data-modern-form-element", selector);
        $(document).on("click.data-modern-form-element", selector, function () {
            if(!$(this).is('[contenteditable=true]')) {
                var el = $(this);

                console.log('*2+', el.html());
            }
        });

        $(document).off("focusout.data-modern-form-element", selector);
        $(document).on("focusout.data-modern-form-element", selector, function () {
            if($(this).is('[contenteditable=true]')) {
                var el = $(this);

                console.log('*2-', el.html());
            }
        });
    };

    /**
     * setMessage
     *
     * @param message
     *
     * @returns {*}
     */
    SuverYii2Editor.prototype.initAlloy = function (selector) {
        var self = this;

        console.log('*1-initAlloy');

        console.log(AlloyEditor.Toolbars);
        console.log('2',AlloyEditor);
        console.log('AlloyEditor.Selections', AlloyEditor.Selections);

        var Selections = [
            {
                name: 'embed',
                buttons: ['embedEdit', 'embedRemove'],
                test: AlloyEditor.SelectionTest.embed
            },
            {
                name: 'link',
                buttons: ['linkEdit'],
                test: AlloyEditor.SelectionTest.link
            },
            {
                name: 'image',
                buttons: ['imageLeft', 'imageCenter', 'imageRight'],
                test: AlloyEditor.SelectionTest.image
            },
            {
                name: 'text',
                buttons: ['styles', 'Font', 'FontSize','indentBlock', 'outdentBlock','ul','ol','quote', 'bold', 'italic','strike', 'underline', 'subscript','superscript',
                    'underline', 'link', 'code', 'removeFormat', 'paragraphCenter', 'paragraphJustify', 'paragraphLeft', 'paragraphRight'],
                test: AlloyEditor.SelectionTest.text
            },
            {
                name: 'table',
                buttons: ['tableHeading', 'tableRow', 'tableColumn', 'tableCell', 'tableRemove'],
                getArrowBoxClasses: AlloyEditor.SelectionGetArrowBoxClasses.table,
                setPosition: AlloyEditor.SelectionSetPosition.table,
                test: AlloyEditor.SelectionTest.table
            }
        ];

        var alloyEditor = AlloyEditor.editable($(selector).get(0), {
            position: 1,
            clientRect: {
                left: 500
            },
            extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value + ',ae_richcombobridge,font',
            toolbars: {
                addElement: {
                    buttons: ['image', 'embed', 'hline', 'table'],
                    tabIndex: 2
                },
                stylesSelected: {
                    selections: Selections,
                    tabIndex: 1
                }
            }
        });

        $(document).off("click.data-modern-form-element", selector);
        $(document).on("click.data-modern-form-element", selector, function () {
            if(!$(this).is('[contenteditable=true]')) {
                var el = $(this);

                console.log('*2+', el.html());
            }
        });

        $(document).off("focusout.data-modern-form-element", selector);
        $(document).on("focusout.data-modern-form-element", selector, function () {
            if($(this).is('[contenteditable=true]')) {
                var el = $(this);

                console.log('*2-', el.html());
            }
        });

        //alloyEditor.get('nativeEditor').off("change.data-modern-form-element");
        alloyEditor.get('nativeEditor').on("change", function () {
            console.log(11);
            var htmlData = alloyEditor.get('nativeEditor').getData();
            console.log(11, selector, htmlData);
            console.log(11, $(selector).html());
            $(selector).html(htmlData);
            console.log(12, $(selector).html());
        });
    };

    /**
     * methods
     *
     * @param methods
     * @returns {SimpleFS_Module}
     */
    SuverYii2Editor.prototype.methods = function (methods) {
        for (var i in methods) {
            this[i] = methods[i];
        }
        return this;
    };

    return SuverYii2Editor;

})();


var suverYii2Editor = new SuverYii2Editor({
    settings: {},
});




(function () {
    'use strict';

    var React = AlloyEditor.React;

    var ReactDOM = AlloyEditor.ReactDOM;

    var POSITION_LEFT = 1;
    var POSITION_RIGHT = 2;

    var ToolbarAddElement = React.createClass({
        displayName: 'ToolbarAddElement',

        mixins: [AlloyEditor.WidgetDropdown, AlloyEditor.WidgetExclusive, AlloyEditor.WidgetFocusManager,
            AlloyEditor.ToolbarButtons, AlloyEditor.WidgetPosition, AlloyEditor.WidgetArrowBox],

        propTypes: {
            config: React.PropTypes.object,
            editor: React.PropTypes.object.isRequired,
            editorEvent: React.PropTypes.object,
            gutterExclusive: React.PropTypes.object,
            label: React.PropTypes.string,
            onDismiss: React.PropTypes.func,
            position: React.PropTypes.oneOf([POSITION_LEFT, POSITION_RIGHT]),
            selectionData: React.PropTypes.object
        },
        statics: {
            key: 'addElement',
            left: POSITION_LEFT,
            right: POSITION_RIGHT
        },
        getDefaultProps: function getDefaultProps() {
            return {
                circular: true,
                descendants: '.ae-button',
                gutterExclusive: {
                    left: 10,
                    top: 0
                },
                keys: {
                    dismiss: [27],
                    next: [39, 40],
                    prev: [37, 38]
                },
                position: POSITION_LEFT
            };
        },
        componentDidMount: function componentDidMount() {
            this._updatePosition();
        },
        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
            this._updatePosition();
            if (this.props.renderExclusive) {
                this.focus();
            }
        },
        render: function render() {
            if (!this.state.itemExclusive && this.props.editorEvent && this.props.editorEvent.data.nativeEvent.target &&
                !this.props.editorEvent.data.nativeEvent.target.isContentEditable) {
                return null;
            }

            var buttons = this._getButtons();
            var className = this._getToolbarClassName();

            return React.createElement(
                'div',
                { 'aria-label': AlloyEditor.Strings.add, className: className, 'data-tabindex': this.props.config.tabIndex || 0,
                    onFocus: this.focus, onKeyDown: this.handleKey, role: 'toolbar', tabIndex: '-1' },
                React.createElement(
                    'div',
                    { className: 'ae-container' },
                    buttons
                )
            );
        },
        _getButtons: function _getButtons() {
            var buttons;

            if (this.props.renderExclusive) {
                buttons = this.getToolbarButtons(this.props.config.buttons);
            } else {
                if (this.props.selectionData && this.props.selectionData.region) {
                    buttons = React.createElement(
                        'button',
                        {
                            'aria-label': AlloyEditor.Strings.add,
                            className: 'ae-button ae-button-add',
                            onClick: this.props.requestExclusive.bind(this, ToolbarAddElement.key),
                            title: AlloyEditor.Strings.add
                        },
                        React.createElement('span', { className: 'ae-icon-add' })
                    );
                }
            }

            return buttons;
        },
        _getToolbarClassName: function _getToolbarClassName() {
            var cssClass = 'ae-toolbar-add';

            if (this.props.renderExclusive) {
                cssClass = 'ae-toolbar ' + this.getArrowBoxClasses();
            }

            return cssClass;
        },
        _updatePosition: function _updatePosition() {
            var region;

            // If component is not mounted, there is nothing to do
            if (!ReactDOM.findDOMNode(this)) {
                return;
            }

            if (this.props.renderExclusive) {
                var interactionPoint = this.getInteractionPoint();

                var domNode = ReactDOM.findDOMNode(this);

                if (interactionPoint && domNode) {
                    var xy = this.getWidgetXYPoint(interactionPoint.x, interactionPoint.y, interactionPoint.direction);

                    var xLeft = xy[0];
                    if(xLeft < $(".main-sidebar").width()) {
                        xLeft = $(".main-sidebar").width();
                    }

                    new CKEDITOR.dom.element(domNode).setStyles({
                        left: xLeft + 'px',
                        top: xy[1] + 'px'
                    });
                }
                this.show();
            } else {
                if (this.props.selectionData) {
                    region = this.props.selectionData.region;
                }

                if (region) {
                    var domNode = ReactDOM.findDOMNode(this);

                    var domElement = new CKEDITOR.dom.element(domNode);

                    var startRect = region.startRect || region;

                    var nativeEditor = this.props.editor.get('nativeEditor');

                    var clientRect = nativeEditor.editable().getClientRect();

                    var offsetLeft;

                    var position = this.props.config.position || this.props.position;

                    if (position === POSITION_LEFT) {
                        offsetLeft = clientRect.left - domNode.offsetWidth - this.props.gutterExclusive.left + 'px';
                    } else {
                        offsetLeft = clientRect.right + this.props.gutterExclusive.left + 'px';
                    }

                    domNode.style.left = offsetLeft;

                    domNode.style.top = Math.floor((region.bottom + region.top) / 2) + 'px';

                    if (nativeEditor.element.getStyle('overflow') !== 'auto') {
                        domNode.style.top = Math.floor(region.top - domNode.offsetHeight / 2 + startRect.height / 2) + 'px';
                    } else {
                        domNode.style.top = Math.floor(nativeEditor.element.$.offsetTop + startRect.height / 2 - domNode.offsetHeight / 2) + 'px';
                    }

                    domNode.style.opacity = 1;

                    domElement.removeClass('ae-arrow-box');

                    this.cancelAnimation();
                }
            }
        }
    });

    AlloyEditor.Toolbars[ToolbarAddElement.key] = AlloyEditor.ToolbarAddElement = ToolbarAddElement;


    var ToolbarStylesSelected = React.createClass({
        displayName: 'ToolbarStylesSelected',

        mixins: [AlloyEditor.WidgetDropdown, AlloyEditor.WidgetExclusive, AlloyEditor.WidgetFocusManager,
                    AlloyEditor.ToolbarButtons, AlloyEditor.WidgetPosition, AlloyEditor.WidgetArrowBox],

        propTypes: {
            config: React.PropTypes.object,
            editor: React.PropTypes.object.isRequired,
            editorEvent: React.PropTypes.object,
            label: React.PropTypes.string,
            onDismiss: React.PropTypes.func,
            selectionData: React.PropTypes.object
        },

        statics: {
            key: 'stylesSelected'
        },
        componentDidMount: function componentDidMount() {
            this._updatePosition();
        },
        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
            this._updatePosition();
        },
        getDefaultProps: function getDefaultProps() {
            return {
                circular: true,
                descendants: '.ae-input, .ae-button:not([disabled]), .ae-toolbar-element',
                keys: {
                    dismiss: [27],
                    next: [39, 40],
                    prev: [37, 38]
                }
            };
        },
        render: function render() {
            var currentSelection = this._getCurrentSelection();

            if (currentSelection) {
                var getArrowBoxClassesFn = this._getSelectionFunction(currentSelection.getArrowBoxClasses);
                var arrowBoxClasses;

                if (getArrowBoxClassesFn) {
                    arrowBoxClasses = getArrowBoxClassesFn();
                } else {
                    arrowBoxClasses = this.getArrowBoxClasses();
                }

                var cssClasses = 'ae-toolbar-styles ' + arrowBoxClasses;

                var buttons = this.getToolbarButtons(currentSelection.buttons, {
                    manualSelection: this.props.editorEvent ? this.props.editorEvent.data.manualSelection : null,
                    selectionType: currentSelection.name
                });

                return React.createElement(
                    'div',
                    {
                        'aria-label': AlloyEditor.Strings.styles,
                        className: cssClasses,
                        'data-tabindex': this.props.config.tabIndex || 0,
                        onFocus: this.focus,
                        onKeyDown: this.handleKey,
                        role: 'toolbar',
                        tabIndex: '-1'
                    },
                    React.createElement(
                        'div',
                        { className: 'ae-container' },
                        buttons
                    )
                );
            }

            return null;
        },
        _getSelectionFunction: function _getSelectionFunction(selectionFn) {
            var Lang = AlloyEditor.Lang;
            var selectionFunction;

            if (Lang.isFunction(selectionFn)) {
                selectionFunction = selectionFn;
            } else if (Lang.isString(selectionFn)) {
                var parts = selectionFn.split('.');
                var currentMember = window;
                var property = parts.shift();

                while (property && Lang.isObject(currentMember) && Lang.isObject(currentMember[property])) {
                    currentMember = currentMember[property];
                    property = parts.shift();
                }

                if (Lang.isFunction(currentMember)) {
                    selectionFunction = currentMember;
                }
            }

            return selectionFunction;
        },
        _getCurrentSelection: function _getCurrentSelection() {
            var eventPayload = this.props.editorEvent ? this.props.editorEvent.data : null;
            var selection;

            if (eventPayload) {
                this.props.config.selections.some(function (item) {
                    var testFn = this._getSelectionFunction(item.test);
                    var result;

                    if (testFn) {
                        result = eventPayload.manualSelection === item.name || testFn({
                                data: eventPayload,
                                editor: this.props.editor
                            });
                    }

                    if (result) {
                        selection = item;
                    }

                    return result;
                }, this);
            }

            return selection;
        },
        _updatePosition: function _updatePosition() {
            // If component is not mounted, there is nothing to do
            if (!ReactDOM.findDOMNode(this)) {
                return;
            }

            var currentSelection = this._getCurrentSelection();
            var result;

            if (currentSelection) {
                var setPositionFn = this._getSelectionFunction(currentSelection.setPosition);

                if (setPositionFn) {
                    result = setPositionFn.call(this, {
                        editor: this.props.editor,
                        editorEvent: this.props.editorEvent,
                        selectionData: this.props.selectionData
                    });
                }
            }

            if (!result) {
                var interactionPoint = this.getInteractionPoint();

                var domNode = ReactDOM.findDOMNode(this);

                if (interactionPoint && domNode) {
                    var xy = this.getWidgetXYPoint(interactionPoint.x, interactionPoint.y, interactionPoint.direction);

                    var xLeft = xy[0];
                    if(xLeft < $(".main-sidebar").width()) {
                        xLeft = $(".main-sidebar").width();
                    }

                    new CKEDITOR.dom.element(domNode).setStyles({
                        left: xLeft + 'px',
                        top: xy[1] + 'px'
                    });
                }
                this.show();
            }
        }
    });

    AlloyEditor.Toolbars[ToolbarStylesSelected.key] = AlloyEditor.ToolbarStylesSelected = ToolbarStylesSelected;

    console.log('1',AlloyEditor);
})();
