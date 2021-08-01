
let homepage = require('../pages/homepage')
const { browser, element } = require("protractor");

describe('Calculator Tests', function(){

    it('additionTests', function(){
        
        browser.get('http://juliemr.github.io/protractor-demo/')
        element(by.model('first')).sendKeys('2')
        element(by.model('second')).sendKeys('5')
        element(by.css('[ng-click="doAddition()"]')).click();

        let result = element(by.cssContainingText('.ng-binding', '7'));
            expect(result.getText()).toEqual('7');

        browser.sleep(2000)

        
        
    });

    it('subtractionTests', function(){


    })

});


/*
Most common locators
-----------------------
element(by.model)
element(by.css)
element(by.id)
element(by.bindingname)



*/