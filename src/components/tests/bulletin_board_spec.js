describe('Жарнамалар Тақтасы', () => {
    it('adds and deletes a bulletin', () => {
        cy.visit('/');

        cy.get('input[placeholder="Title"]').type('New Bulletin');
        cy.get('textarea[placeholder="Content"]').type('Bulletin content');

        cy.contains('Қосу').click();
    });
});
