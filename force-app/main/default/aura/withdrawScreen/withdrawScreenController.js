({
    closeWithdraw: function(component, event, helper) {
        var comp = component.get("v.lconfig");
        comp.currentPage__c = 'Main';
        component.set("v.lconfig", comp);
     },
})
