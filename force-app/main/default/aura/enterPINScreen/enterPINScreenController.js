({
    returnCard : function(component, event, helper) {
        var config = component.get("{!v.lconfig}");
        config.card_No__c = '';
        config.card_inside__c = false;
        config.enteredPIN__c = '';
        config.sessionValidated__c = false;
        component.set("{!v.lconfig}", config);
        component.set("{!v.client}", null);
    },
    checkPIN : function(component, event, helper) {
        var validItem = component.find('pin'), valid;
        validItem.showHelpMessageIfInvalid();
        valid = validItem.get("v.validity").valid;
        if(valid){
            var comp = component.get("v.lconfig");
            console.log("component: " + JSON.stringify(comp));
            console.log("found pin: " + comp.EnteredPIN__c);
            helper.getCard(component, comp.card_No__c);
        }
    },
})
