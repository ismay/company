describe("home", () => {
  it("renders as expected", () => {
    cy.visit("/");

    cy.percySnapshot("home page renders as expected");
  });
});
