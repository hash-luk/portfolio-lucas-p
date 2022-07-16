describe("Tests on my home page", () => {
    it("visit my home", () => {
        cy.visit("http://localhost:3000");
    })

    it("click on about and be redirected", () => {
        cy.get("#about").click();
        cy.url().should("be.equal", "http://localhost:3000/#aboutme");
    })

    it("click on tech stack and be redirected", () => {
        cy.get("#tech-stack").click();
        cy.url().should("be.equal", "http://localhost:3000/#techstack");
    })

    it("click on projects and be redirected", () => {
        cy.get("#projects-link").click();
        cy.url().should("be.equal", "http://localhost:3000/#projects");
    })

    it("click on contact and be redirected", () => {
        cy.get("#contact-link").click();
        cy.url().should("be.equal", "http://localhost:3000/#contact");
    })
})