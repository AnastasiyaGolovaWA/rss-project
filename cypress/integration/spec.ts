describe('О сервисе', () => { 
  it('на главной странице должен отображаться заголовок', () => { 
    cy.visit('/' );  
    cy.get('.tittle').should('have.text', 'О сервисе');

  }); 
});

describe('Просмотр rss-лент', () => { 
  it('на главной странице должен отображаться заголовок', () => { 
    cy.visit('/viewRss' );  
    cy.get('.tittle').should('have.text', 'Добавленные rss-ленты');

  }); 
  it('получить название заголовков таблицы', () => {  
    cy.get('thead > tr > :nth-child(1)').should('have.text', 'Текущая позиция');
    cy.get('thead > tr > :nth-child(2)').should('have.text', 'Url');
    cy.get('thead > tr > :nth-child(3)').should('have.text', 'Дата добавления');
    cy.get('thead > tr > :nth-child(4)').should('have.text', 'Дата обновления');
    cy.get('thead > tr > :nth-child(5)').should('have.text', 'Вкл/Выкл ленту');
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

describe('Просмотреть новости', () => { 
  it('на главной странице должен отображаться заголовок', () => { 
    cy.visit('/viewNews' );  
    cy.get('.tittle').should('have.text', 'Новости');

  }); 
  it('получить название заголовков таблицы', () => {  
    cy.get('thead > tr > :nth-child(1)').should('have.text', 'Заголовок');
    cy.get('thead > tr > :nth-child(2)').should('have.text', 'Ссылка');
    cy.get('thead > tr > :nth-child(3)').should('have.text', 'Описание');
    cy.get('thead > tr > :nth-child(4)').should('have.text', 'Дата публикации');
  }); 
});

describe('Полнотекстовый поиск', () => { 
  it('на главной странице должен отображаться заголовок', () => { 
    cy.visit('/viewElastic' );  
    cy.get('.tittle').should('have.text', 'Полнотекстовый поиск');

  }); 
  it('получить название заголовков таблицы', () => {  
    cy.get('thead > tr > :nth-child(1)').should('have.text', 'Заголовок');
    cy.get('thead > tr > :nth-child(2)').should('have.text', 'Ссылка');
    cy.get('thead > tr > :nth-child(3)').should('have.text', 'Описание');
    cy.get('thead > tr > :nth-child(4)').should('have.text', 'Дата публикации');
  }); 
  it('поиск по заголовку', () => {  
    cy.get('#searchByTittle').type('Ученые').should('have.value', 'Ученые');
    cy.get(':nth-child(1) > .new-btn').click();
    cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', 'Ученые отправили эмбриональные клетки мышей на МКС, чтобы оценить риски долгосрочных полетов в космос');
    cy.get('#searchByTittle').clear();
    cy.get('.new-btn-update').click();
  }); 
  it('поиск по описанию', () => {  
    cy.get('#searchByTittleOrDescription').type('вид').should('have.value', 'вид');
    cy.get('.search-desc > .new-btn').click();
    cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', 'В фантастике неоднократно появлялись вымышленные виды, которые ради собственного выживания ассимилировали чужие гены и заставляли их работать себе на пользу. Теперь на совершенно не выдуманной планете Земля ученые обнаружили, что один из видов микроорганизмов вобрал в себя ДНК от множества других видов и готов помочь человечеству справиться с глобальным потеплением.');
    cy.get('#searchByTittleOrDescription').clear();
  }); 
});

