# BASECONTROLLER

## [webapp/controller/BaseController.js]()

```js
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (
    Controller
) {
    "use strict";

    return Controller.extend("com.aikansya.toybox.controller.BaseController", {

        onInit: function () {

        },

        // Functions

    });
});
```

## [webapp/controller/Home.controller.js]()

```js
sap.ui.define([
    "com/aikansya/toybox/controller/BaseController"
],
function (BaseController) {
    "use strict";

    return BaseController.extend("com.aikansya.toybox.controller.Home", {
        onInit: function () {

        },

        // Functions
        
    });
});
```
