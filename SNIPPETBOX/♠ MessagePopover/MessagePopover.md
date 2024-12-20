# MESSAGEPOPOVER

## [webapp/controller/BaseController.js]()

```js
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessagePopover",
	"sap/m/MessageItem"
],
function (
	BaseController,
	JSONModel,
	MessagePopover,
	MessageItem
) {
    	"use strict";

    	return Controller.extend("com.aikansya.toybox.controller.BaseController", {

		onInit: function () {

		},

          /**
           * Update Calendar model on view mode changes 
           */
		_msgInit: function () {
			this.oMessageManager = sap.ui.getCore()._getMessageManager();
			this.oMessageManager.registerObject(this.getView(), true);
			this.getView().setModel(
				this.oMessageManager.getMessageModel(),
				"message"
			);
			this._createMessagePopover();
		},

		_createMessagePopover: function () {
			this.oMessagePopover = new MessagePopover({
				activeTitlePress: function (oEvent) {
					const oItem = oEvent.getParameter("item");
					const oMessage = oItem.getBindingContext("message").getObject();
					const oControl = sap.ui.getCore().byId(oMessage.getControlId());
					if (oControl) {
						setTimeout(function () {
							oControl.focus();
							// oControl.selectText(0, 99);
						}, 300);
					}
				},
				items: {
					path: "message>/",
					template: new MessageItem({
						title: "{message>message}",
						subtitle: "{message>additionalText}",
						activeTitle: {
							parts: [
								{
									path: "message>controlIds",
								},
							],
							formatter: this._isPositionable,
						},
						type: "{message>type}",
						description: "{message>message}",
					}),
				},
			});

			if (this.getView().byId("messagePopoverBtnHome")) {
				this.getView()
					.byId("messagePopoverBtnHome")
					.addDependent(this.oMessagePopover);
			}

			if (this.getView().byId("messagePopoverBtnTheme")) {
				this.getView()
					.byId("messagePopoverBtnTheme")
					.addDependent(this.oMessagePopover);
			}
		},

		_onPopoverPress: function (oEvent) {
			if (!this.oMessageManager) {
				this._createMessagePopover();
			}
			this.oMessageManager.toggle(oEvent.getSource());
		},

		_fillMessagePopover: function (oError) {
			var aMessages = JSON.parse(oError.responseText).error.innererror.errordetails;
			// Filter message with code /IWBEP/CX_MGW_BUSI_EXCEPTION
			aMessages = aMessages.filter(function (value, ind, arr) {
				return (value.code !== "/IWBEP/CX_MGW_BUSI_EXCEPTION" && value.severity === "error");
			});
			var oMsg = {
				length: aMessages.length,
				Messages: aMessages
			};
			this.getView().getModel("messages").setData(oMsg);
		},

		_addMessagePopover: function (sError, sType) {
			var oMessage = new sap.ui.core.message.Message({
				message: sError,
				persistent: true,
				type: sType
			});
			//"Messaging" required from module "sap/ui/core/Messaging";
			this.oMessageManager.addMessages(oMessage);
		},

		_isPositionable: function (sControlIds) {
			if (sControlIds && sControlIds.length > 0) {
				return true;
			}
			return false;
		},

		_getMessageManager: function () {
			return this.oMessageManager;
		},

		_removeAllMessages: function () {
			this._getMessageManager().removeAllMessages();
		},

		_handleMessagePopoverPress: function (oEvent) {
			if (!this.oMessagePopover) {
				this._createMessagePopover();
			}
			this.oMessagePopover.toggle(oEvent.getSource());
		},

		_openMessagePopover: function () {
			if (!this.oMessagePopover) {
				this._createMessagePopover();
			}
			const oControl = this.oMessagePopover.getEventingParent();
			if (oControl.getVisible()) {
				this.oMessagePopover.openBy(oControl);
			}
		},

		_closeMessagePopover: function () {
			if (this.oMessagePopover) {
				this.oMessagePopover.close();
			}
		}

    	});
});
```

## [webapp/controller/BaseController.js]()

```js
sap.ui.define([
    	"com/aikansya/toybox/controller/BaseController",
    	"com/aikansya/toybox/model/formatter",
    	"com/aikansya/toybox/libs/ToolKit",
],
function (BaseController, formatter, ToolKit) {
    	"use strict";

    	return BaseController.extend("com.aikansya.toybox.controller.Home", {

        	formatter: formatter,

        	onInit: function () {

               this._msgInit();
               this._removeAllMessages();

        	},

    	});
});
```

