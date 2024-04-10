describe("homepage-tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/home");
  });

  it("displays the homepage and the navbar buttons", () => {
    cy.get("[cy-data=play-btn]").should("exist");
    cy.get("[cy-data=login-btn]").should("exist");
    cy.get("[cy-data=register-btn]").should("exist");

    cy.get("[cy-data=siteLogo]").should("exist");
  });
  it("should display two unique cards", () => {
    cy.get("[cy-data=card-container]").each(($container, index) => {
      cy.wrap($container).should("contain", index === 0 ? "Easy" : "Hard");
    });
  });
  it("should display the about section", () => {
    cy.get("[cy-data=about-section]").should("exist");
  });
  it("should have a css class of hover:scale-105", () => {
    cy.get("[cy-data=card-container-single]").should(
      "have.class",
      "hover:scale-105"
    );
  });
});
