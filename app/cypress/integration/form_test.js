describe("test form", () => {
  it("test inputs", () => {
    cy.visit("http://localhost:3000");
    cy.get("#name").type("test").should("have.value", "test");
    cy.get("#email").type("email@email.com").should("have.value", "email@email.com");
    cy.get("#password").type("password").should("have.value", "password");
    cy.get("#terms").check().should("be.checked");
    cy.get("button").click();
  });
  it("test for non-duplicate email", () => {
    cy.visit("http://localhost:3000");
    cy.get("#name").type("test").should("have.value", "test");
    cy.get("#email").type("waffle@syrup.com").should("have.value", "waffle@syrup.com");
    cy.get("#password").type("password").should("have.value", "password");
    cy.get("#terms").check().should("be.checked");
    cy.get("button").click();
  });
});
