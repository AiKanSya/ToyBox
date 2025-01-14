# TOOLKIT

## [webapp/libs/ToolKit.js]()

```js
sap.ui.define(
  ["com/aikansya/toybox/controller/BaseController"],
  function (BaseController) {
    "use strict";

    return {
      // Functions
    };
  }
);
```

## [webapp/controller/Home.controller.js]()

```js
sap.ui.define(
  [
    "com/aikansya/toybox/controller/BaseController",
    "com/aikansya/toybox/model/formatter",
    "com/aikansya/toybox/libs/ToolKit",
  ],
  function (BaseController, formatter, ToolKit) {
    "use strict";

    return BaseController.extend("com.aikansya.toybox.controller.Home", {
      formatter: formatter,

      onInit: function () {},

      // Functions
    });
  }
);
```
