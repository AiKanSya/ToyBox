# FORMATTER

## [webapp/model/formatter.js]()

```js
sap.ui.define(["sap/ui/core/MessageType"], function (MessageType) {
  "use strict";

  return {
    // Functions
  };
});
```

## [webapp/controller/Home.controller.js]()

```js
sap.ui.define(
  [
    "com/aikansya/toybox/controller/BaseController",
    "com/aikansya/toybox/model/Formatter",
  ],
  function (BaseController, Formatter) {
    "use strict";

    return BaseController.extend("com.aikansya.toybox.controller.Home", {
      formatter: Formatter,

      onInit: function () {},

      // Functions
    });
  }
);
```
