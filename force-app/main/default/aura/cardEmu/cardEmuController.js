({
    cardEmuClose: function(component, event, helper) {
        var comp = component.get("v.lconfig");
        comp.cardEmuOpened__c = false;
        component.set("v.lconfig", comp);
     },
     cardEmuAccept: function(component, event, helper) {

        var validItem = component.find('cardno'), valid;
        validItem.showHelpMessageIfInvalid();
        valid = validItem.get("v.validity").valid;

        if(valid){
            var comp = component.get("v.lconfig");
            comp.card_inside__c = true;
            comp.cardEmuOpened__c = false;
            component.set("v.lconfig", comp);
        }
     },
})
