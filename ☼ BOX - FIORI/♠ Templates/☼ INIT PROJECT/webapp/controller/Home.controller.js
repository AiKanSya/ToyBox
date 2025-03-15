sap.ui.define([
    "com/aikansya/toybox/controller/BaseController",
    "com/aikansya/toybox/model/Formatter",
    "com/aikansya/toybox/libs/ToolKit",
], function (BaseController, Formatter, ToolKit) {
    "use strict";

    return BaseController.extend("com.aikansya.toybox.controller.Home", {

        formatter: Formatter,

        onInit: function () {

        },

    });
});
