class ApiClass{
    get baseUrl(){
        return 'http://localhost:3000'
    }

    runBaseUrl(){
        cy.visit(this.baseUrl)
    }

    putRequestAndTest(url, name){
        cy.request("PUT", url, {name: name}).then(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.contains('Zaktualizowano klienta')
          })
    }

    getRequest(url){
        cy.request("GET", url).then(res => {
            expect(res.status).to.eq(200)
          })
    }

    getRequestAndTest(url, name_){
        cy.request("GET", url, {name: name_}).then(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('name', name_)
          })
    }

    postRequestAndTest(url, name){
        cy.request("POST", url, {name: name}).then(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.contains('Dodano klienta')
          })   
    }

    deleteRequest(url, name){
        cy.request("DELETE", url, {name: name}).then(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.contains('Usunięto klienta')
          })
    }

}

export default new ApiClass();