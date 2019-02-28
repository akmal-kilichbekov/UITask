sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/DialogHelper"
], function(UIComponent, JSONModel, DialogHelper) {
    "use strict";

    return UIComponent.extend("rroot.Component", {

        metadata: {
            manifest: "json"
        },

        init: function() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
        }

    });

});