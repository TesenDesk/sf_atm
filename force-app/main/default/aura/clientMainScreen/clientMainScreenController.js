({
   doInit: function(component, event, helper) {

        var action = component.get("c.getConfig");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var lconfig = component.get("v.lconfig");
                var bankconfig = response.getReturnValue();
                lconfig.language = component.get("v.langRU");
                lconfig.BankName__c = bankconfig.BankName__c;
                console.log("Initialize complited. Now I have some data: " + JSON.stringify(bankconfig));
                component.set("v.lconfig", lconfig);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },
})
