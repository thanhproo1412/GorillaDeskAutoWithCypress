export default class LoginPage {

  //Basic Auth
  getInputUsername() {
    return cy.get('input[placeholder="Username or Email"]');
  }

  getInputPassword() {
    return cy.get('input[placeholder="Password"]');
  }

  getLoginBtn() {
    return cy.contains('div', 'Log In');
  }


}