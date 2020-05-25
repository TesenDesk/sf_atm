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
})
