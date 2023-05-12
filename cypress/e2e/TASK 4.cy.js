import ApiClass from "../support/POM/api_Class"

describe('Test API', () => {
 it('GET PUT POST DELETE', function() {

  ApiClass.getRequest('http://localhost:3000/api/customers')
  ApiClass.putRequestAndTest('http://localhost:3000/api/customers/1', 'Jan Testowy')
  ApiClass.getRequestAndTest('http://localhost:3000/api/customers/1', 'Jan Testowy')
  ApiClass.postRequestAndTest('http://localhost:3000/api/customers','Test')
  ApiClass.putRequestAndTest('http://localhost:3000/api/customers/1', 'Test Testowski')
  ApiClass.deleteRequest('http://localhost:3000/api/customers/1', 'Test Testowski')

  })
  
})