import LoginClass from "../support/POM/loginClass"

describe('Test logowania', () => {
  beforeEach(function() {
    cy.fixture("data").then(data => {
      this.daneApi = data;
    })
  })

  it('poprawny login i haslo', function() {
    LoginClass.runBaseUrl()
    LoginClass.setLogin(this.daneApi.login)
    LoginClass.setPassword(this.daneApi.password)
    LoginClass.clickButtonLogin()
    LoginClass.checkCorrectLogin(this.daneApi.login)
  })

  it('poprawny login i niepoprawne haslo', function() {
    let incorrectPassword = 'test'

    LoginClass.runBaseUrl()
    LoginClass.setLogin(this.daneApi.login)
    LoginClass.setPassword(incorrectPassword)
    LoginClass.clickButtonLogin()
    LoginClass.checkIncorrectLogin()
  })

  it('niepoprawne login i poprawny haslo', function() {
    let incorrectLogin = 'test'

    LoginClass.runBaseUrl()
    LoginClass.setLogin(incorrectLogin)
    LoginClass.setPassword(this.daneApi.password)
    LoginClass.clickButtonLogin()
    LoginClass.checkIncorrectLogin()
  })

  it('niepoprawne login i niepoprawne haslo', function() {
    let incorrectLogin = 'test'
    let incorrectPassword = 'test'

    LoginClass.runBaseUrl()
    LoginClass.setLogin(incorrectLogin)
    LoginClass.setPassword(incorrectPassword)
    LoginClass.clickButtonLogin()
    LoginClass.checkIncorrectLogin()
  })

  
})