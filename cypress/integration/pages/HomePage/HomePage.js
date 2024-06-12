export default class HomePage {


  //Basic Auth btn
  getLoginBtn() {
    return cy.get('div[id="content"] a:contains("Basic Auth")');
  }

  // AB Testing btn
  getABTestingBtn() {
    return cy.get('div[id="content"] a:contains("A/B Testing")');
  }

  // Add/Remove Elements btn
  getAddRemoveElementsBtn() {
    return cy.get('div[id="content"] a:contains("Add/Remove Elements")');
  }

  //WYSIWYG Editor btn
  getWYSIWYGEditorBtn() {
    return cy.get('div[id="content"] a:contains("WYSIWYG Editor")');
  }

}