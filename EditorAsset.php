<?php
/**
 * @link http://www.iisns.com/
 * @copyright Copyright (c) 2015 iiSNS
 * @license http://www.iisns.com/license/
 */

namespace suver\editor;

use yii\web\AssetBundle;

/**
 * @author Shiyang <dr@shiyang.me>
 */
class EditorAsset extends AssetBundle
{
    public $sourcePath = '@vendor/suver/yii2-editor/assets';
    public $js = [
        //'simplemde.min.js',
        'common-yii2-editor.js',
        'markdown.js',
        'to-markdown.js',
        'bootstrap-markdown/bootstrap-markdown.js',
        'alloy-editor/alloy-editor-all-min.js',
        'ckeditor/ckeditor.js',
    ];
    public $css = [
        //'simplemde.min.css',
        'bootstrap-markdown/bootstrap-markdown.min.css',
        'alloy-editor/assets/alloy-editor-ocean-min.css',
    ];
    public $depends = [
        'yii\web\JqueryAsset',
    ];
}
