public with sharing class ATMController {
    @AuraEnabled
    public static Bank_Config__c getConfig() {
        
        // Check to make sure all fields are accessible to this user
        String[] fieldsToCheck = new String[] {
            'BankName__c', 'BYNRate__c', 'DepositPrc__c', 'OtherBankPrc__c', 'USDRate__c'
        };
        
        Map<String,Schema.SObjectField> fieldDescribeTokens = Schema.SObjectType.Bank_Config__c.fields.getMap();
        
        for(String field : fieldsToCheck) {
            if( ! fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
                throw new System.NoAccessException();
            }
        }
        
        List <Bank_Config__c>       configs;

        configs = [SELECT BankName__c, BYNRate__c, DepositPrc__c, OtherBankPrc__c, USDRate__c 
        FROM Bank_Config__c LIMIT 1];
        return configs[0];
    }
    /*
    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
        // Perform isUpdateable() checking first, then
        upsert expense;
        return expense;
    }*/
}