describe("Testing if back to top icon is showing in the right way" , () => {
    it("visit my home" ,() => {
        cy.visit("http://localhost:3000");
    })

    it("verify if button is not visible",() => {
        cy.get("#back-to-top").should("not.be.visible");
    })

    it("verify if button is visible", () => {
        cy.scrollTo(0,300)
        cy.get("#back-to-top").should("be.visible");
    })
})