({
    doInit : function(component, event, helper) {
        var action = component.get("c.getCard");
        var comp = component.get("v.lconfig");
        console.log("component " + JSON.stringify(comp));
        console.log("Send number to controller: " + comp.card_No__c);
        action.setParams({
            "num": comp.card_No__c
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            var balance;
            if (state === "SUCCESS") {
                var card = response.getReturnValue();
                balance = card.cardCredit__c + card.Balance__c;
                component.set("v.lconfig.currentBalance__c", balance);
                component.set("v.client", card);
            }
            else {
                component.set("v.lconfig.Unknown_Card__c", true);
                console.log("Failed with state: " + state);
            }
            component.set("v.lconfig.waiting__c", false);
        });
        $A.enqueueAction(action);
    },
    returnCard : function(component, event, helper) {
        var config = component.get("{!v.lconfig}");
        config.card_No__c = '';
        config.card_inside__c = false;
        config.EnteredPIN__c = '';
        config.sessionValidated__c = false;
        config.Unknown_Card__c = false;
        component.set("{!v.lconfig}", config);
        component.set("{!v.client}", null);
    },
    checkPIN : function(component, event, helper) {
        var validItem = component.find('pin'), valid;
        validItem.showHelpMessageIfInvalid();
        valid = validItem.get("v.validity").valid;
        if(valid){
            var comp = component.get("v.lconfig");
            var client = component.get("v.client");
            console.log("found pin: " + comp.EnteredPIN__c);
            if (comp.EnteredPIN__c == client.cardPIN__c){
                console.log("Correct pin");
                component.set("v.lconfig.sessionValidated__c", true);
            }
            else{
                component.set("v.lconfig.IncorrectPIN__c", true);
                console.log("Wrong pin");
            }
        }
    },
    closeErrPin: function(component, event, helper) {
        component.set("v.lconfig.IncorrectPIN__c", false);
        component.set("v.lconfig.EnteredPIN__c", '');
    },
})
