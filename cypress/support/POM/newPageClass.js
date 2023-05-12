class NewPageClass{
    get baseUrl(){
        return 'http://localhost:3000/new-page'
    }

    get aLink(){
        return cy.get('a[href="https://www.wskz.pl"]')
    }

    get newURL(){
        return cy.get('@newUrl')
    }
    

    runBaseUrl(){
        cy.visit(this.baseUrl)
    }

    goToNewWebsite(){
        this.aLink.invoke('attr', 'href')
        .then(href => {
          cy.visit(href);
          cy.wrap(href).as("newUrl")
        })
    }

    checkStudentsSelfGovernmentInNewWebiste(){
        this.newURL.then( $el => {
            cy.origin($el, () => {
        
              //cy.wait(10000)
              cy.get('a[id="hs-eu-confirmation-button"]').click()
        
              cy.wait(10000)
              cy.get('p[id="comp-ils2cgqy2label"]').invoke('show')
              .click();
        
              cy.wait(5000)
              cy.get('p[id="comp-ils2cgqymoreContainer11label"]').click()
        
              cy.get('div [id="comp-kz42x7wk__item1"]', {timeout:50000}).should('contain','Tomasz Michalik')
              cy.get('div [id="comp-kz42x7wp__item1"]', {timeout:50000}).should('contain','student II roku')
        
              cy.get('div [id="comp-kz42x7wh1__item-kf51ysxt"]', {timeout:50000}).should('contain','Dawid Małecki')
              cy.get('div [id="comp-kz42x7wh1__item-kf51ysxt"]', {timeout:50000}).should('contain','student III roku')
          
              cy.get('div [id="comp-kz42x7wh1__item-kf51yt5v"]', {timeout:50000}).should('contain','Paweł Barowicz')
              cy.get('div [id="comp-kz42x7wh1__item-kf51yt5v"]', {timeout:50000}).should('contain','student II roku')
          
        
            })
      
          })
    }
  
} 

export default new NewPageClass();