sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";

    return Controller.extend("rroot.controller.App", {
        logOut: function() {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sMsg = oBundle.getText("logOutClick");
            // show message
            MessageToast.show(sMsg);
        }

    });
});