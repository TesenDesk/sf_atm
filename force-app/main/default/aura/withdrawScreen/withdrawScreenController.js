({
    closeWithdraw: function(component, event, helper) {
        var comp = component.get("v.lconfig");
        comp.currentPage__c = 'Main';
        //comp.HeaderText__c = comp.language.label_main_menu;
        component.set("v.lconfig", comp);
     },
})
