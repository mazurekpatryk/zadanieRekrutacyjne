import NewPageClass from "../support/POM/newPageClass"

describe('Test zmiany domeny', () => {
 it('walidacja studentow w samorzadzie', function() {
    NewPageClass.runBaseUrl()
    NewPageClass.goToNewWebsite()
    NewPageClass.checkStudentsSelfGovernmentInNewWebiste()
  })
  
})