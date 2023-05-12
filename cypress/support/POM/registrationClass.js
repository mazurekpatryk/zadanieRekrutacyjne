class RegistrationClass{
    get baseUrl(){
        return 'http://localhost:3000/registration'
    }

    get inputUsername(){
        return cy.get('input[id="username"]')
    }

    get inputPassword(){
        return cy.get('input[id="password"]')
    }

    get selectOptionCountry(){
        return cy.get('select[id="country"] option')
    }

    get selectCountry(){
        return cy.get('select[id="country"]')
    }

    get selectHobbyOption(){
        return cy.get('select[id="hobby"] option')
    }

    get selectHobby(){
        return cy.get('select[id="hobby"]')
    }

    get inputFile(){
        return cy.get('input[id="photo"]')
    }

    get inputTextarea(){
        return cy.get('textarea[id="info"]')
    }

    get checkbox1(){
        return cy.get('input[id="registration-consent-1"]')
    }

    get checkbox2(){
        return cy.get('input[id="registration-consent-2"]')
    }

    get checkbox3(){
        return cy.get('input[id="registration-consent-3"]')
    }

    get buttonSaveRegistration(){
        return cy.get('input[type="submit"]')
    }

    get body(){
        return cy.get('body')
    }

    getRandomInt(min, max){      
        return Math.floor(Math.random() * (max - min + 1)) + min;    
    }
    
    getRandomInts(min, max, maxLength){
        let arr=[];
        let x ;
        for (let i = 0; i < max; i++) {
            x = Math.floor( Math.random() * max) + min;
            if(arr.includes(x) == true){
                i=i-1;
            }else{
                if(x>max==false){
                    arr.push(x);
                }
            }
        }
        return arr.slice(0, maxLength);
    }

    runBaseUrl(){
        cy.visit(this.baseUrl)
    }

    setInputUsername(login){
        this.inputUsername.type(login)
    }

    setInputPassword(password){
        this.inputPassword.type(password)
    }

    setRandomCountry(){
        this.selectOptionCountry.then($el => {
            this.selectCountry.select(this.getRandomInt(1, $el.length - 1))
        })
    }

    setRandomHobby(){
        this.selectHobbyOption.then($el => {
            this.selectHobby.select(this.getRandomInts(0, $el.length, this.getRandomInt(1, $el.length)))
        })
    }

    uploadImage(path = "../fixtures/waclaw.jpg"){
        this.inputFile.attachFile(path)
    }

    setInputTextarea(text = 'TEST'){
        let i = 0
        while(i < this.getRandomInt(1,10)){
            this.inputTextarea.type(text + ' ')
            i++
        }
    }

    setCheckbox1(){
        this.checkbox1.click()
    }

    setCheckbox2(){
        this.checkbox2.click()
    }

    setCheckbox3(){
        this.checkbox3.click()
    }

    clickButtonSaveRegistration(){
        this.buttonSaveRegistration.click()
    }

    checkCorrectRegistration(login){
        this.body.should('contain', 'Account created for: ' + login)
    }
} 

export default new RegistrationClass();