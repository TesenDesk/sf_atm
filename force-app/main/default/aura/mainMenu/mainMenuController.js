({
    openBalance: function(component, event, helper) {
        var comp = component.get("v.lconfig");
        comp.currentPage__c = 'Balance';
        //comp.HeaderText__c = comp.language.label_balance_header;
        component.set("v.lconfig", comp);
     },
     openWithdraw: function(component, event, helper) {
        var comp = component.get("v.lconfig");
        comp.currentPage__c = 'Withdraw';
        //comp.HeaderText__c = comp.language.label_withdraw;
        component.set("v.lconfig", comp);
     },
})
