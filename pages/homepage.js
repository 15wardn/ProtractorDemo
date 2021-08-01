let homepage = function(){

    let firstnumber_input = element(by.model('first'));
    let secondnumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.enterFirstNumber = function(){
        firstnumber_input.sendKeys(firstNo)
    };

    this.enterSecondNumber = function(){
        secondnumber_input.sendKeys(secondNo);
    };

    this.clickGo = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingTest('.ng-binding', result));
        expect(result.getText()).toEqual(firstnumber_input + secondnumber_input);
    }
};

modules.export = new homepage();