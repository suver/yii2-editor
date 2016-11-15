<?php
/**
 * @link http://www.iisns.com/
 * @copyright Copyright (c) 2015 iiSNS
 * @license http://www.iisns.com/license/
 */

namespace suver\editor;

use yii\helpers\Html;
use yii\helpers\Inflector;
use yii\helpers\Json;
use yii\web\JsExpression;
use yii\widgets\InputWidget;

/**
 * Editor
 */
class Editor extends InputWidget
{
    /**
     * Editor options you want to override
     * See https://github.com/NextStepWebs/simplemde-markdown-editor
     * @var array
     */
    public $mdeOptions = [
        'resize' =>  'vertical',
    ];
    /**
     * ID of Textarea where editor will be placed
     * @var string
     */
    protected $id;

    protected static $countEditors=1;

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
        if (empty($this->id)) {
            $this->id = $this->hasModel() ? Html::getInputId($this->model, $this->attribute) : $this->getId();
        }
        //if (empty($this->mdeOptions['element'])) {
            //$this->mdeOptions['element'] = new JsExpression('$("#' . $this->id . '")[0]');
        //}
    }

    /**
     * @inheritdoc
     */
    public function run()
    {
        static::$countEditors++;
        EditorAsset::register($this->view);
        $this->registerScripts();
        $this->options['id'] = $this->id;
        $this->options['data']['provide'] = 'markdown';
        $this->options['data']['provide-id'] = static::$countEditors;
        if ($this->hasModel()) {
            echo Html::activeTextArea($this->model, $this->attribute, $this->options);
        } else {
            echo Html::textArea($this->name, $this->value, $this->options);
        }
    }

    /**
     * Registers simplemde markdown assets
     */
    public function registerScripts()
    {
        //$this->mdeOptions['element'] = new JsExpression("$('[data-editor-index=" . static::$countEditors . "]')[0]");
        //$this->mdeOptions['forceSync'] = true;
        $jsonOptions = Json::encode($this->mdeOptions);
        $varName = Inflector::classify('editor' . $this->id . '-' . static::$countEditors);
        $script = "var {$varName} = $('[data-provide-id=" . static::$countEditors . "]').markdown({$jsonOptions})";
        $this->view->registerJs($script);
    }
}
