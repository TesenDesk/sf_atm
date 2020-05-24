({
    getCard : function(component, number) {
        var comp = component.get("v.client");
        if (comp) {
            return(comp);
        }

        var action = component.get("c.getCard");
        console.log("Send number to controller: " + number);
        action.setParams({
            "num": number
        });
        action.setCallback(this, function(response) {
            var comp = component.get("v.config");
            var state = response.getState();
            if (state === "SUCCESS") {
                var card = response.getReturnValue();
                component.set("v.client", card);
                if (card.cardPIN__c = 1234){
                    comp.sessionValidated__c = true;
                }
                else {
                    comp.IncorrectPIN__c = true;
                }
            }
            else {
                console.log("Failed with state: " + state);
            }
            
            //component.set("v.lconfig", comp);
        });
        $A.enqueueAction(action);
    }
})

        
