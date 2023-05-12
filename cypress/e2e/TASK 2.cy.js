import RegistrationClass from "../support/POM/registrationClass"

describe('Test rejestracja', () => {
  function testData(){
    return{
      eMail: "test@test.pl",
      password: "test",
    }
  }    
  
  it('poprawna rejestracja', function() {
    let data = testData()

    RegistrationClass.runBaseUrl()
    RegistrationClass.setInputUsername(data['eMail'])
    RegistrationClass.setInputPassword(data['password'])
    RegistrationClass.setRandomCountry()
    RegistrationClass.setRandomHobby()
    RegistrationClass.uploadImage()

    RegistrationClass.setInputTextarea()
    RegistrationClass.setCheckbox1()
    RegistrationClass.setCheckbox2()
    RegistrationClass.setCheckbox3()

    RegistrationClass.clickButtonSaveRegistration()

    RegistrationClass.checkCorrectRegistration(data['eMail'])
  })
  
})