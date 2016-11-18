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

        var textSelection;

        for (var i = 0; i < AlloyEditor.Selections.length; i++) {
            textSelection = AlloyEditor.Selections[i];

            if (textSelection.name === 'text') {
                break;
            }
        }

        textSelection.buttons = ['Font', 'FontSize'].concat(textSelection.buttons);


        AlloyEditor.editable($(selector).get(0), {
            extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value + ',ae_richcombobridge,font'
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
