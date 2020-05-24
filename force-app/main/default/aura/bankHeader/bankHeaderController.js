({
    changeLanguage: function(component, event, helper) {
        
        var config = component.get("v.lconfig");
        var lang_RU = component.get("v.langRU");
        if (config.language == lang_RU) {
            config.language = component.get("v.langUS");
        }
        else {
            config.language = lang_RU;
        }
        component.set("v.lconfig", config);
    },
    cardinit: function(component, event, helper) {
        var config = component.get("v.lconfig");

        if (config.cardEmuEnabled__c && !config.card_inside__c){
            config.cardEmuOpened__c = true;
            component.set("v.lconfig", config);
        }
    }
})
