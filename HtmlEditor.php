<?php
/**
 * @link http://www.iisns.com/
 * @copyright Copyright (c) 2015 iiSNS
 * @license http://www.iisns.com/license/
 */

namespace suver\editor;

use suver\settings\Settings;
use yii\bootstrap\Html;
use yii\helpers\ArrayHelper;
use yii\helpers\Inflector;
use yii\helpers\Json;

/**
 * HtmlEditor
 */
class HtmlEditor extends Html
{

    const EDITOR_MANUAL = 1;
    const EDITOR_BOOTSTRAP = 2;
    const EDITOR_ALLOY = 3;
    const EDITOR_CKEDITOR = 4;

    public static function activeElemetn($model, $attribute, $options = [], $editorType = 1)
    {
        if(class_exists('suver\settings\Settings')) {
            $editorType = Settings::get("editor-type")->value(static::EDITOR_ALLOY);
        }

        EditorAsset::register(\Yii::$app->view);
        $name = isset($options['name']) ? $options['name'] : static::getInputName($model, $attribute);
        $value = isset($options['value']) ? $options['value'] : static::getAttributeValue($model, $attribute);
        if (!array_key_exists('id', $options)) {
            $options['id'] = static::getInputId($model, $attribute);
        }
        $options['data-modern-element-id'] = md5(\Yii::$app->security->generateRandomString());
        $options['data-modern-form-element'] = '';
        $options['class'] = isset($options['class']) ? : 'form-modern-control';
        $type = 'div';

        $preHtml = '';
        $afterHtml = '';

        switch($editorType) {

            case self::EDITOR_ALLOY:
                $type = 'textarea';
                \Yii::$app->view->registerJs("
                    suverYii2Editor.initAlloy('[data-modern-element-id={$options['data-modern-element-id']}]');
                ");
                break;

            case self::EDITOR_CKEDITOR:

                $type = 'textarea';
                \Yii::$app->view->registerJs("
                    //$('[data-modern-element-id={$options['data-modern-element-id']}]').append('<textarea data-modern-textarea-id={$options['data-modern-element-id']}></textarea>');
                    suverYii2Editor.initCKEditor('[data-modern-element-id={$options['data-modern-element-id']}]');
                ");
                break;

            case self::EDITOR_BOOTSTRAP:
                \Yii::$app->view->registerJs("
                    suverYii2Editor.initMarkdown('[data-modern-element-id={$options['data-modern-element-id']}]');
                ");
                break;

            case self::EDITOR_MANUAL:
            default:
                \Yii::$app->view->registerJs("
                    suverYii2Editor.initManual('[data-modern-element-id={$options['data-modern-element-id']}]');
                ");
                break;
        }

        return $preHtml . static::tag($type, $value, $options) . $afterHtml;
    }
}
