# DATASERVICE

## [webapp/libs/DataService.js]()

```js
sap.ui.define([
    "sap/ui/base/EventProvider",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter"
], function (EventProvider, JSONModel, FilterOperator, Filter) {
    "use strict";
    return EventProvider.extend("com.aikansya.toybox.controller.DataService", {
        constructor: function (oModel) {
 
            EventProvider.prototype.constructor.apply(this, arguments);
 
            this._oModelUser = new JSONModel();
            this._oModel = oModel;
            this._oModel.sDefaultUpdateMethod = "PUT";
        },

        // Functions
 
    });
})
```

## [webapp/Component.js]()

```js
/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "com/aikansya/toybox/model/models",
    "com/aikansya/toybox/libs/DataService",
    "sap/ui/model/resource/ResourceModel"
],
function (UIComponent, Device, models, DataService, ResourceModel) {
    "use strict";

    return UIComponent.extend("com.aikansya.toybox.Component", {
        metadata: {
            manifest: "json"
        },

        /**
        * The component is initialized by UI5 automatically during the 
        * startup of the app and calls the init method once.
        * @public
        * @override
        */
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // enable routing
            this.getRouter().initialize();

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // get DataService
            this.getDataService();

            // give access to i18n files
            var i18nModel = new ResourceModel({
                bundleName: "com.aikansya.toybox.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        },

        getDataService: function () {
            if (!this.oDataService) {
                this.oDataService = new DataService(this.getModel());
            }
            return this.oDataService;
        }
    });
});
```

## [webapp/manifest.json]()

```json
        "models": {
            "i18n": {
                "type": "sap.ui.model.resource.ResourceModel",
                "settings": {
                    "bundleName": "com.aikansya.toybox.i18n.i18n"
                }
            },
            "": {
                "dataSource": "mainService",
                "preload": true,
                "settings": {
                    "defaultOperationMode": "Server",
                    "defaultBindingMode": "TwoWay",
                    "defaultCountMode": "Inline",
                    "defaultUpdateMethod": "MERGE",
                    "refreshAfterChange": false,
                    "headers": {
                        "Cache-Control": "max-age=0"
                    }
                }
            }
        },
```
