({
    doInit: function(component, event, helper) {
        var curr = component.get("v.curr");
        var comp = component.get("v.lconfig");
        var client = component.get("v.client");

        if (comp.BankName__c != client.Card_Bank__c){
            curr.comm = comp.OtherBankPrc__c;
        }
        component.set("v.curr", curr);
     },
    changevalue: function(component, event, helper) {
        var curr = component.get("v.curr");
        var comp = component.get("v.lconfig");
        var client = component.get("v.client");

        if (client.Currency__c == 'RUB') {
            if (curr.selected == 'RUB') {
                curr.sum = curr.entered;
            } else if (curr.selected == 'USD') {
                curr.sum = curr.entered * comp.RateUSD__c;
            } else {
                curr.sum = curr.entered * comp.RateBYN__c;
            }
        }else if (client.Currency__c == 'USD') {
            if (curr.selected == 'RUB') {
                curr.sum = curr.entered / comp.RateUSD__c;
            } else if (curr.selected == 'USD') {
                curr.sum = curr.entered;
            } else {
                curr.sum = curr.entered / comp.RateUSD__c * comp.RateBYN__c;
            }
        } else if (client.Currency__c == 'BYN') {
            if (curr.selected == 'RUB') {
                curr.sum = curr.entered / comp.RateBYN__c;
            } else if (curr.selected == 'USD') {
                curr.sum = curr.entered * comp.RateUSD__c / comp.RateBYN__c;
            } else {
                curr.sum = curr.entered;
            }
        }
        curr.total = curr.sum + (curr.sum * curr.comm);
        component.set("v.curr", curr);
    },
    closeWithdraw: function(component, event, helper) {
        var comp = component.get("v.lconfig");
        comp.currentPage__c = 'Main';
        component.set("v.lconfig", comp);
     },
     acceptWithdraw: function(component, event, helper) {
     },
    changeCurr: function(component, event, helper) {
        var curr = component.get("v.curr");
        if (curr.selected == 'RUB'){
            curr.min = 10;
            curr.max = 15000;
            curr.step = 10;
        } else if (curr.selected == 'USD') {
            curr.min = 1;
            curr.max = 1500;
            curr.step = 1;
        } else {
            curr.min = 1000;
            curr.max = 1500000;
            curr.step = 1000;
        }
        component.set("v.curr", curr);
    },
})
