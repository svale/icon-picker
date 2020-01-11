<?php
namespace verbb\iconpicker\controllers;

use verbb\iconpicker\IconPicker;
use verbb\iconpicker\migrations\SvgIconsPlugin;

use Craft;
use craft\web\Controller;

use yii\web\Response;

class IconsController extends Controller
{
    // Public Methods
    // =========================================================================

    public function actionIconsForField()
    {
        $request = Craft::$app->getRequest();

        $fieldId = $request->getRequiredParam('fieldId');
        $field = Craft::$app->getFields()->getFieldById($fieldId);

        $enabledIconSets = IconPicker::$plugin->getService()->getEnabledIconSets($field);
        $json = IconPicker::$plugin->getService()->getIcons($enabledIconSets, $field->remoteSets);

        return $this->asJson($json);
    }

}
