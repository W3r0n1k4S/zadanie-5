describe("Zadanie 2", () => {
    it("Wpisz email user888", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.login("testowyqa@qa.team", "QA!automation-1");
       cy.get("#open-navigation-menu-mobile").click();
cy.get(':nth-child(8) > .next-bve2vl').scrollIntoView().should("be.visible");
cy.get(':nth-child(9) > .next-bve2vl').click();

    });
});