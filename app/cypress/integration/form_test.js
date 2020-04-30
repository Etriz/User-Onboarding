describe("test form", () => {
  it("test inputs", function () {
    cy.visit("http://localhost:3000");
    cy.get("#name").type("test").should("have.value", "test");
    cy.get("#email").type("email@email.com").should("have.value", "email@email.com");
    cy.get("#password").type("password").should("have.value", "password");
    cy.get("#terms").check().should("be.checked");
    cy.get("button").click();
  });
});
