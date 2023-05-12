class LoginClass{
    get baseUrl(){
        return 'http://localhost:3000'
    }

    get inputLogin(){
        return cy.get('input[id="username"]')
    }

    get inputPassword(){
        return cy.get('input[id="password"]')
    }

    get buttonLogin(){
        cy.get('input[type="submit"]')
    }

    get body(){
        return cy.get('body')
    }

    runBaseUrl(){
        cy.visit(this.baseUrl)
    }

    setLogin(login){
        this.inputLogin.type(login)
    }

    setPassword(password){
        this.inputPassword.type(password)
    }

    clickButtonLogin(){
        cy.get('input[type="submit"]').click()
    }

    checkCorrectLogin(login){
        this.body.should('contain', 'Welcome back, ' + login + '!')
    }

    checkIncorrectLogin(){
        this.body.should('contain', 'Incorrect Username and/or Password!')
    }
}

export default new LoginClass();