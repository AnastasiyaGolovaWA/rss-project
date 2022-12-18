describe('Просмотр rss-лент', () => { 
  it('на главной странице должен отображаться заголовок', () => { 
    cy.visit('/viewRss' );  
    cy.get('.tittle').should('have.text', 'Добавленные rss-ленты');

  }); 
  it('создание новой rss-ленты', () => { 
    cy.get('.new-btn').click(); 
    cy.get('.form-control > :nth-child(1)').click();
    cy.get('#url').type('www.example.com').should('have.value', 'www.example.com');
    cy.get('.btn-success').click();
  }); 
  it('удаление rss-ленты', () => { 
    cy.get(':nth-child(5) > :nth-child(6) > .btn-class').click(); 
  }); 
});
