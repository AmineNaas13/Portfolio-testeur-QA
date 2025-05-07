describe('Display test', () => {
    let projects = [];
    let skills = [];
    before(() => {
        cy.readFile('data/portfolio.json').then((dataProjects) => {
            projects = dataProjects;
        })
        cy.readFile('data/skills.json').then((dataSkills) => {
            skills = dataSkills;

        })
    })

    beforeEach(() => {
        cy.visit("http://localhost:5500/")
    });

    it('should display the correct number of project cards from portfolio.json', () => {
        cy.get('#portfolio .card.portfolioContent').should('have.length', projects.length)

    });

    it('should display the correct number of skills from skills.json', () => {
        cy.get('#skills .card.skillsText').should('have.length', skills.length)
    });
})